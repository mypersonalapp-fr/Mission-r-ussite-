/* Mission réussite — « Surpasse-toi » : records personnels, défi d’école, explique à Rico, erreur du jour, carte du parent.
   Autonome : lit le profil dans localStorage 'mr-prof', enregistre dans 'mr-sp-<profil>'. Ouvert par la barre du bas (MRSP.open). */
(function(){
'use strict';
var D=document,$=function(i){return D.getElementById(i)};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var prof=function(){try{var o=JSON.parse(localStorage.getItem('mr-prof')||'null');var p=o&&o.list&&o.list.find(function(x){return x.id===o.cur});if(p)return p}catch(e){}return {id:'p1',lvl:'CE1',name:'Miguel'}};
var tier=function(){var l=prof().lvl;return l==='CP'?0:l==='CE1'?1:2};
var KEY=function(){return 'mr-sp-'+prof().id};
var load=function(){var d={};try{d=JSON.parse(localStorage.getItem(KEY())||'{}')}catch(e){}
 d.rec=d.rec||{calc:0,plus:0};d.runs=d.runs||[];d.st=d.st||{n:0,best:0,last:''};d.def=d.def||{wk:'',cur:0,days:{}};d.err=d.err||[];d.log=d.log||{rb:[],ef:[],ex:[],pl:[]};return d};
var S=load();
var put=function(){try{localStorage.setItem(KEY(),JSON.stringify(S))}catch(e){}};
var pad=function(n){return n<10?'0'+n:''+n};
var dstr=function(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())};
var today=function(){return dstr(new Date())};
var monday=function(d){var x=new Date(d.getFullYear(),d.getMonth(),d.getDate());x.setDate(x.getDate()-((x.getDay()+6)%7));return x};
var wkKey=function(){return dstr(monday(new Date()))};
var JOURS=['lundi','mardi','mercredi','jeudi','vendredi'],JL=['L','M','M','J','V'];
var MOIS=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
var inWeek=function(ts){return ts>=monday(new Date()).getTime()};
var wk=function(a){return a.filter(inWeek).length};

/* ---- série de jours ---- */
var touch=function(){var t=today();if(S.st.last===t)return;var y=new Date();y.setDate(y.getDate()-1);S.st.n=S.st.last===dstr(y)?S.st.n+1:1;S.st.last=t;S.st.best=Math.max(S.st.best,S.st.n);put()};
var streak=function(){var t=today(),y=new Date();y.setDate(y.getDate()-1);return (S.st.last===t||S.st.last===dstr(y))?S.st.n:0};

/* ---- défis d’école ---- */
var DEFIS=[
 {t:'Lève la main une fois en classe',s:'Même si tu n’es pas sûr de ta réponse. Oser, c’est déjà gagner.',e:'🙋',r:'Avant d’y aller : respire, et dis-toi « je peux ».'},
 {t:'Lis à voix haute devant la classe',s:'Lis lentement, assez fort, et regarde ton public.',e:'📣',r:'Entraîne-toi une fois à la maison, devant moi !'},
 {t:'Aide un camarade',s:'Explique-lui calmement, sans faire à sa place.',e:'🤝',r:'Aider, c’est aussi apprendre : tu retiens mieux.'},
 {t:'Finis ta fiche sans te laisser distraire',s:'Pose ton regard sur ta feuille jusqu’à la dernière ligne.',e:'🎯',r:'Une chose à la fois. Tu en es capable.'}];
var defWeek=function(){if(S.def.wk!==wkKey()){S.def={wk:wkKey(),cur:S.def.cur||0,days:{}};put()}return S.def};
var dayStatus=function(i){var d=defWeek(),m=monday(new Date());m.setDate(m.getDate()+i);return d.days[dstr(m)]||''};

/* ---- calcul rapide ---- */
var ri=function(a,b){return a+Math.floor(Math.random()*(b-a+1))};
var gen=function(t){var k=ri(0,2),a,b;
 if(t===0){if(k===0){a=ri(2,12);b=ri(2,Math.min(9,20-a));return {q:a+' + '+b,a:a+b}}
  if(k===1){a=ri(8,20);b=ri(1,Math.min(9,a));return {q:a+' − '+b,a:a-b}}
  a=ri(2,10);return {q:a+' + '+a,a:a*2}}
 if(t===1){if(k===0){a=ri(11,90);b=ri(2,9);if(a+b>100)b=100-a;return {q:a+' + '+b,a:a+b}}
  if(k===1){a=ri(20,99);b=ri(2,19);return {q:a+' − '+b,a:a-b}}
  a=[2,3,4,5,10][ri(0,4)];b=ri(2,10);return {q:a+' × '+b,a:a*b}}
 if(k===0){a=ri(120,899);b=ri(11,99);return {q:a+' + '+b,a:a+b}}
 if(k===1){a=ri(120,990);b=ri(11,99);return {q:a+' − '+b,a:a-b}}
 a=[6,7,8,9][ri(0,3)];b=ri(3,9);return {q:a+' × '+b,a:a*b}};
var G=null,tick=null;
var recOf=function(plus){return plus?S.rec.plus:S.rec.calc};
var PLUS_AT=10;
var plusOpen=function(){return S.rec.calc>=PLUS_AT};

/* ---- explique à Rico ---- */
var NOTIONS=[
 ['le double',['Le double, c’est le nombre pris deux fois.','Le double, c’est le nombre partagé en deux.','Le double, c’est toujours 10.']],
 ['la moitié',['La moitié, c’est le nombre partagé en deux parts égales.','La moitié, c’est le nombre pris deux fois.','La moitié, c’est un nombre plus grand.']],
 ['la majuscule',['On met une majuscule au début de la phrase et aux noms propres.','On met une majuscule à tous les mots.','On met une majuscule à la fin de la phrase.']],
 ['le verbe',['Le verbe dit ce que fait quelqu’un.','Le verbe est le mot qui nomme un objet.','Le verbe est toujours le premier mot.']],
 ['le point',['Le point se met à la fin d’une phrase.','Le point se met au début d’une phrase.','Le point se met entre chaque mot.']],
 ['le pluriel',['Au pluriel, il y en a plusieurs.','Au pluriel, il y en a un seul.','Au pluriel, on ajoute toujours un accent.']],
 ['la dizaine',['Une dizaine, c’est un paquet de 10.','Une dizaine, c’est un paquet de 100.','Une dizaine, c’est un seul objet.']],
 ['passer par 10',['Pour 8 + 5, je fais 8 + 2 = 10, puis 10 + 3 = 13.','Pour 8 + 5, je fais 8 + 8, puis 5.','Pour 8 + 5, je fais 8 − 5.']],
 ['la soustraction',['Soustraire, c’est enlever.','Soustraire, c’est ajouter.','Soustraire, c’est partager.']]];
var EX=null;
var exNew=function(){var s=0,t=today();for(var i=0;i<t.length;i++)s=(s*31+t.charCodeAt(i))%9973;var ids=[];var k=s%NOTIONS.length;for(var j=0;j<3;j++)ids.push((k+j*3)%NOTIONS.length);
 EX={ids:ids,i:0,done:0,wrong:null,said:false,ord:null}};
var exOrder=function(n){var o=[0,1,2],r=(n+S.log.ex.length)%3;return o.slice(r).concat(o.slice(0,r))};

/* ---- style ---- */
var css='#mrsp{position:fixed;inset:0;z-index:9700;background:#f2f5ff;overflow:auto;font-family:var(--body,Nunito,system-ui,sans-serif);color:#1b2347;-webkit-tap-highlight-color:transparent}'+
'#mrsp *{box-sizing:border-box}#mrsp .w{max-width:520px;margin:0 auto;padding:14px 16px 28px;display:flex;flex-direction:column;gap:12px;min-height:100%}'+
'#mrsp .d{font-family:var(--display,"Baloo 2",sans-serif);font-weight:800}'+
'#mrsp button{font-family:var(--display,"Baloo 2",sans-serif);cursor:pointer;color:#1b2347}'+
'#mrsp .back{align-self:flex-start;min-height:44px;padding:0 16px;border-radius:14px;background:#fff;border:2px solid #d9dff5;font-weight:700;font-size:15px}'+
'#mrsp h1{margin:0;font:800 26px/1.1 var(--display,"Baloo 2",sans-serif)}#mrsp p{margin:0;line-height:1.35;font-weight:700}'+
'#mrsp .soft{color:#4a5380;font-size:15px}'+
'#mrsp .c{background:#fff;border:2px solid #d9dff5;border-radius:22px;padding:16px;display:flex;flex-direction:column;gap:10px}'+
'#mrsp .tile{text-align:left;display:flex;gap:12px;align-items:center;border-radius:22px;padding:14px;min-height:84px;width:100%;border:2px solid}'+
'#mrsp .tile .ic{font-size:34px;width:48px;text-align:center;flex:none}#mrsp .tile .tx{display:flex;flex-direction:column;gap:2px;flex:1}'+
'#mrsp .tile .t1{font:800 20px var(--display,"Baloo 2",sans-serif)}#mrsp .tile .t2{font:700 14px/1.3 var(--body,Nunito,sans-serif);color:#4a5380}'+
'#mrsp .spc{display:inline-block;padding:3px 10px;border-radius:99px;font:800 13px var(--display,"Baloo 2",sans-serif);white-space:nowrap}'+
'#mrsp .grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}'+
'#mrsp .sm{background:#fff;border:2px solid #d9dff5;border-radius:18px;min-height:92px;padding:8px 6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-weight:700;font-size:14px;line-height:1.15;text-align:center;position:relative}'+
'#mrsp .sm span{font-size:28px}#mrsp .sm i{position:absolute;top:6px;right:8px;background:#e0393f;color:#fff;border-radius:99px;font:800 12px var(--display,sans-serif);padding:1px 7px;font-style:normal}'+
'#mrsp .pri{min-height:52px;border-radius:16px;background:#2459e6;color:#fff;border:none;font-weight:800;font-size:18px;padding:0 18px}#mrsp .pri.g{background:#0a7a4e}#mrsp .pri:disabled{background:#b9c4ee}'+
'#mrsp .sec{min-height:52px;border-radius:16px;background:#fff;border:2px solid #d9dff5;font-weight:800;font-size:18px;padding:0 18px}'+
'#mrsp .rico{display:flex;gap:10px;align-items:flex-end}#mrsp .rico b{width:48px;height:48px;border-radius:50%;background:#2459e6;color:#fff;font:800 24px var(--display,sans-serif);display:flex;align-items:center;justify-content:center;flex:none}'+
'#mrsp .rico div{background:#fff;border:2px solid #d9dff5;border-radius:18px 18px 18px 4px;padding:10px 14px;font:700 16px/1.25 var(--display,"Baloo 2",sans-serif)}'+
'#mrsp .key{min-height:56px;border-radius:16px;background:#fff;border:2px solid #d9dff5;font-weight:800;font-size:24px}#mrsp .key.ok{background:#2459e6;color:#fff;border-color:#2459e6;font-size:20px}'+
'#mrsp .bar{display:flex;gap:4px}#mrsp .bar span{flex:1;height:14px;border-radius:8px;background:#d9dff5}#mrsp .bar span.on{background:#2459e6}#mrsp .bar span.rc{outline:3px solid #f5b400;outline-offset:1px}'+
'#mrsp .row{display:flex;align-items:center;gap:10px}#mrsp .rb{flex:1;height:22px;border-radius:10px;background:#d9dff5;position:relative;overflow:hidden}#mrsp .rb i{position:absolute;left:0;top:0;bottom:0;border-radius:10px}'+
'#mrsp .opt{text-align:left;min-height:58px;background:#fff;border:2px solid #d9dff5;border-radius:18px;padding:8px 14px;font-weight:700;font-size:17px;line-height:1.2}'+
'#mrsp .day{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font:700 13px var(--display,sans-serif);color:#4a5380}#mrsp .day u{width:34px;height:34px;border-radius:50%;border:2px solid #d9dff5;background:#fff;color:#fff;display:flex;align-items:center;justify-content:center;font:800 15px var(--display,sans-serif);text-decoration:none}'+
'#mrsp .toast{position:fixed;left:50%;bottom:30px;transform:translateX(-50%);background:#1b2347;color:#fff;font-weight:800;padding:10px 18px;border-radius:16px;font-size:.9rem;max-width:88%;text-align:center;z-index:5}'+
'@keyframes spf{to{transform:translateY(105vh) rotate(540deg);opacity:.9}}#mrsp .cf{position:fixed;top:-14px;width:10px;height:10px;border-radius:3px;animation:spf 2.2s ease-in forwards;pointer-events:none;z-index:4}';
var styled=false;
var ensure=function(){if(styled)return;var s=D.createElement('style');s.textContent=css;D.head.appendChild(s);styled=true};

var root=null,view='hub',toast='';
var show=function(){ensure();if(!root){root=D.createElement('div');root.id='mrsp';D.body.appendChild(root)}root.style.display='block'};
var close=function(){if(tick){clearInterval(tick);tick=null}G=null;if(root)root.style.display='none';try{S=load()}catch(e){}};
var say=function(t){toast=t;draw();setTimeout(function(){toast='';var e=root&&root.querySelector('.toast');if(e)e.remove()},2200)};
var back=function(l){return '<button class="back" data-go="hub">'+(l||'‹ Retour')+'</button>'};
var rico=function(t){return '<div class="rico"><b role="img" aria-label="Rico">R</b><div>'+t+'</div></div>'};
var chip=function(t,bg,fg){return '<span class="spc" style="background:'+bg+';color:'+fg+'">'+t+'</span>'};
var tile=function(go,ic,t1,t2,bg,bd,ch){return '<button class="tile" data-go="'+go+'" style="background:'+bg+';border-color:'+bd+'"><span class="ic" aria-hidden="true">'+ic+'</span><span class="tx"><span class="t1">'+t1+'</span><span class="t2">'+t2+'</span></span>'+(ch||'')+'</button>'};
var confetti=function(){var cs=['#f5b400','#2459e6','#0a7a4e','#e0393f'];for(var i=0;i<46;i++){var e=D.createElement('span');e.className='cf';e.style.left=Math.random()*100+'vw';e.style.background=cs[i%4];e.style.animationDelay=(Math.random()*.6)+'s';e.style.animationDuration=(1.6+Math.random()*1.4)+'s';root.appendChild(e);(function(x){setTimeout(function(){x.remove()},3600)})(e)}};

/* ---- écrans ---- */
var vHub=function(){var dd=defWeek(),df=DEFIS[dd.cur%DEFIS.length],ts=dayStatus((new Date().getDay()+6)%7),dch=ts==='v'?chip('Validé ✓','#0a7a4e','#fff'):ts==='p'?chip('En attente','#fff','#1b2347'):chip('À faire','#fff','#1b2347');
 var pl=plusOpen(),nxt=tier()===0?'CE1':'CE2',n=S.err.length,st=streak();
 return '<div class="w">'+back('‹ Retour')+'<h1>Surpasse-toi</h1><p class="soft">Ton seul adversaire, c’est toi d’hier.</p>'+rico('Aujourd’hui, on bat un record ?')+
 tile('calc','⚡','Bats ton record','Calcul rapide · record : '+S.rec.calc,'#dfe8ff','#2459e6',chip(S.rec.calc?'À battre':'À jouer','#2459e6','#fff'))+
 tile('def','🏫','Défi à l’école','Cette semaine : '+df.t.charAt(0).toLowerCase()+df.t.slice(1),'#fff3cc','#f5b400',dch)+
 (pl?tile('plus','🚀','Mission Plus','Calcul du niveau '+nxt+' · record : '+S.rec.plus,'#d9f5e8','#0a7a4e',chip('Débloquée','#0a7a4e','#fff'))
    :tile('lock','🔒','Mission Plus','Bats '+PLUS_AT+' au calcul rapide pour la débloquer','#eef0f8','#d9dff5',chip(S.rec.calc+' / '+PLUS_AT,'#fff','#4a5380')))+
 '<div class="grid3"><button class="sm" data-go="ex"><span aria-hidden="true">🗣️</span>Explique à Rico</button><button class="sm" data-go="err"><span aria-hidden="true">🌱</span>Mon erreur du jour'+(n?'<i>'+n+'</i>':'')+'</button><button class="sm" data-go="gate"><span aria-hidden="true">📈</span>Ma carte de progrès</button></div>'+
 '<div class="c" style="flex-direction:row;align-items:center;margin-top:auto;padding:10px 14px"><span aria-hidden="true" style="font-size:26px">🔥</span><span class="d" style="font-size:16px">'+(st?st+' jour'+(st>1?'s':'')+' d’affilée':'Commence ta série aujourd’hui')+'</span><span style="margin-left:auto;font-weight:700;font-size:14px;color:#4a5380">record : '+S.st.best+'</span></div></div>'};

var vGame=function(){var rec=recOf(G.plus),N=Math.max(rec,10),bar='';for(var i=0;i<N;i++)bar+='<span id="gb'+i+'" class="'+(i===rec-1?'rc':'')+'"></span>';
 return '<div class="w"><button class="back" data-go="hub">‹ Quitter</button>'+
 '<div class="c" style="gap:12px"><div class="row" style="justify-content:space-between">'+chip(rec?'Record à battre : '+rec:'Premier essai !','#fff3cc','#1b2347')+'<span id="gser">'+chip('Série 0','#d9f5e8','#0a7a4e')+'</span></div><div class="bar">'+bar+'</div><p id="gmsg" class="soft" style="font-size:14px">0 bonne réponse</p></div>'+
 '<div class="c" style="gap:12px"><p id="gq" class="d" style="font-size:54px;text-align:center;line-height:1;color:#1b2347"></p><div id="gin" class="d" style="font-size:44px;text-align:center;color:#2459e6;min-height:56px;border-bottom:3px solid #d9dff5"></div>'+
 '<div class="grid3">'+[1,2,3,4,5,6,7,8,9].map(function(k){return '<button class="key" data-k="'+k+'">'+k+'</button>'}).join('')+'<button class="key" data-k="x" style="font-size:18px">Effacer</button><button class="key" data-k="0">0</button><button class="key ok" data-k="ok">Valider</button></div></div>'+
 '<div id="grico">'+rico('Prêt ? Réponds vite et juste !')+'</div><div class="d" id="gt" style="text-align:center;font-size:18px;color:#4a5380">⏱ 1:00</div></div>'};

var gUpdate=function(){var q=$('gq'),i=$('gin');if(!q)return;q.textContent=G.cur.q+' = ?';i.textContent=G.input;
 var rec=recOf(G.plus);for(var k=0;$('gb'+k);k++)$('gb'+k).className=(k<G.score?'on':'')+(k===rec-1?' rc':'');
 $('gser').innerHTML=chip('Série '+G.series,'#d9f5e8','#0a7a4e');$('gmsg').textContent=G.score+' bonne'+(G.score>1?'s':'')+' réponse'+(G.score>1?'s':'')+(rec&&G.score<rec?' · plus que '+(rec-G.score+1)+' pour battre ton record':'')+(rec&&G.score>=rec?' · record égalé, continue !':'');
 var m=Math.floor(G.left/60),s=G.left%60;$('gt').textContent='⏱ '+m+':'+pad(s)};
var gRico=function(t){var e=$('grico');if(e)e.innerHTML=rico(t)};
var startGame=function(plus){G={plus:plus,t:plus?Math.min(2,tier()+1):tier(),left:60,score:0,series:0,input:'',errs:[],fb:false};G.cur=gen(G.t);view='game';draw();gUpdate();if(tick)clearInterval(tick);
 tick=setInterval(function(){if(!G)return;G.left--;if(G.left<=0){gUpdate();endGame()}else gUpdate()},1000)};
var gKey=function(k){if(!G||G.fb)return;if(k==='x'){G.input=G.input.slice(0,-1)}else if(k==='ok'){if(G.input==='')return;var ok=parseInt(G.input,10)===G.cur.a;
  if(ok){G.score++;G.series++;gRico(G.series>=3?'Série de '+G.series+' ! Continue !':'Bien joué !');G.input='';G.cur=gen(G.t);gUpdate()}
  else{G.series=0;G.errs.push({q:G.cur.q,a:G.cur.a,g:G.input});G.fb=true;$('gin').style.color='#c92f35';gRico('C’était '+G.cur.a+'. On continue !');setTimeout(function(){if(!G)return;G.fb=false;G.input='';G.cur=gen(G.t);$('gin').style.color='';gUpdate()},900)}return}
 else if(G.input.length<4){G.input+=k}gUpdate()};
var endGame=function(){if(tick){clearInterval(tick);tick=null}var g=G;G=null;touch();
 var prevRun=null;for(var i=S.runs.length-1;i>=0;i--){if((S.runs[i].k==='p')===g.plus){prevRun=S.runs[i];break}}
 var prev=recOf(g.plus),nw=g.score>prev&&g.score>0;
 if(nw){if(g.plus)S.rec.plus=g.score;else S.rec.calc=g.score;S.log.rb.push(Date.now())}
 S.runs.push({t:Date.now(),s:g.score,k:g.plus?'p':'c'});if(S.runs.length>60)S.runs=S.runs.slice(-60);
 if(g.plus&&g.score>=5)S.log.pl.push(Date.now());
 g.errs.forEach(function(e){if(!S.err.some(function(x){return x.q===e.q}))S.err.push(e)});if(S.err.length>30)S.err=S.err.slice(-30);
 put();LAST={s:g.score,prev:prev,nw:nw,last:prevRun?prevRun.s:null,plus:g.plus,errs:g.errs.length};view='res';draw();if(nw)confetti()};
var LAST=null;
var barRow=function(l,v,mx,col){return '<div class="row"><span class="d" style="width:92px;font-size:15px;font-weight:700">'+l+'</span><span class="rb"><i style="width:'+Math.round(100*v/Math.max(mx,1))+'%;background:'+col+'"></i></span><span class="d" style="width:30px;text-align:right;font-size:18px">'+v+'</span></div>'};
var vRes=function(){var r=LAST,mx=Math.max(r.s,r.prev,r.last||0,1);
 return '<div class="w"><button class="back" data-go="hub">‹ Accueil</button><div style="text-align:center;padding-top:14px">'+(r.nw?chip('NOUVEAU RECORD','#fff3cc','#1b2347'):chip('Partie terminée','#dfe8ff','#1b2347'))+'<div class="d" style="font-size:92px;line-height:1;color:#2459e6">'+r.s+'</div><div class="d" style="font-size:22px">bonne'+(r.s>1?'s':'')+' réponse'+(r.s>1?'s':'')+'</div>'+
 '<p class="soft" style="margin-top:6px;font-size:16px">'+(r.nw?(r.prev?'Tu as battu ton record de '+(r.s-r.prev)+'. Bravo !':'Premier record posé. Maintenant, bats-le !'):'Ton record : '+r.prev+'. Plus que '+(r.prev-r.s+1)+' pour le battre !')+'</p></div>'+
 '<div class="c" style="gap:12px">'+(r.last!=null?barRow('La fois d’avant',r.last,mx,'#9aa6d6'):'')+barRow('Ton record',r.prev,mx,'#6b79c4')+barRow('Aujourd’hui',r.s,mx,'#0a7a4e')+'</div>'+
 rico(r.nw?'Tu te dépasses toi-même. C’est ça, la vraie victoire !':'Chaque partie te rend plus fort. On rejoue ?')+
 '<div style="margin-top:auto;display:flex;flex-direction:column;gap:10px"><button class="pri" data-go="'+(r.plus?'plus':'calc')+'">Rejouer pour aller plus loin</button>'+(r.errs?'<button class="sec" data-go="err">Transformer mes '+r.errs+' erreur'+(r.errs>1?'s':'')+' 🌱</button>':'')+'<button class="sec" data-go="hub">Retour à Surpasse-toi</button></div></div>'};

var ER=null;
var vErr=function(){if(!S.err.length)return '<div class="w">'+back()+'<h1>Mon erreur du jour</h1>'+rico('Aucune erreur à transformer aujourd’hui. Bravo !')+'<p class="soft">Une erreur n’est pas une défaite : c’est ce qui te fait grandir. Quand tu te trompes au calcul rapide, elle arrive ici.</p></div>';
 var e=S.err[0];ER=ER||{in:'',ok:false};
 return '<div class="w">'+back()+'<h1>Mon erreur du jour</h1><p class="soft">Il te reste '+S.err.length+' erreur'+(S.err.length>1?'s':'')+' à transformer.</p>'+rico('Tu avais répondu <span style="color:#d4572a">'+esc(e.g)+'</span>. Refais-le calmement !')+
 '<div class="c" style="gap:12px"><p class="d" style="font-size:54px;text-align:center;line-height:1">'+esc(e.q)+' = ?</p><div id="ein" class="d" style="font-size:44px;text-align:center;color:'+(ER.ok?'#0a7a4e':'#2459e6')+';min-height:56px;border-bottom:3px solid #d9dff5">'+(ER.ok?esc(e.a)+' ✓':ER.in)+'</div>'+
 (ER.ok?'<button class="pri g" data-ek="next">Erreur transformée ! Suivante ›</button>':'<div class="grid3">'+[1,2,3,4,5,6,7,8,9].map(function(k){return '<button class="key" data-ek="'+k+'">'+k+'</button>'}).join('')+'<button class="key" data-ek="x" style="font-size:18px">Effacer</button><button class="key" data-ek="0">0</button><button class="key ok" data-ek="ok">Valider</button></div>')+'</div></div>'};
var eKey=function(k){if(!S.err.length)return;var e=S.err[0];if(k==='next'){S.err.shift();S.log.ef.push(Date.now());touch();put();ER=null;draw();return}
 if(k==='x')ER.in=ER.in.slice(0,-1);else if(k==='ok'){if(ER.in==='')return;if(parseInt(ER.in,10)===e.a){ER.ok=true;confetti()}else{ER.in='';say('Presque ! Réfléchis encore.')}}else if(ER.in.length<4)ER.in+=k;draw()};

var vEx=function(){if(!EX)exNew();if(EX.i>=3){return '<div class="w">'+back()+'<h1>Explique à Rico</h1>'+rico('Merci ! Grâce à toi, j’ai tout compris.')+'<div class="c"><p class="d" style="font-size:20px">Tu as expliqué 3 notions aujourd’hui 🎉</p><p class="soft">Expliquer à quelqu’un, c’est la meilleure façon de retenir.</p></div><button class="pri" data-go="hub">Retour à Surpasse-toi</button></div>'}
 var nid=EX.ids[EX.i],N=NOTIONS[nid],ord=exOrder(nid),op=ord.map(function(k){return '<button class="opt" data-eo="'+k+'">'+esc(N[1][k])+'</button>'}).join('');
 return '<div class="w">'+back()+'<h1>Explique à Rico</h1><div class="bar" style="margin:0 0 2px">'+[0,1,2].map(function(i){return '<span class="'+(i<EX.i?'on':'')+'"></span>'}).join('')+'</div>'+
 rico('Je n’ai pas compris '+N[0]+'. Tu peux m’expliquer ?')+
 '<div class="c"><p class="d" style="font-size:17px">Choisis la meilleure explication</p>'+op+'</div>'+
 (EX.wrong?rico('Hmm… je ne suis pas sûr. Essaie encore !'):'')+
 '<p class="d soft" style="text-align:center;font-size:15px">ou</p><button class="sec" data-eo="voice" style="border:2px dashed #2459e6;color:#2459e6;min-height:64px">🎤 Je l’ai dit à voix haute</button></div>'};
var eoPick=function(k){if(k==='voice'||parseInt(k,10)===0){EX.wrong=false;EX.i++;S.log.ex.push(Date.now());touch();put();draw();if(EX.i>=3)confetti();else say('Rico a compris !');return}EX.wrong=true;draw()};

var vDef=function(){var dd=defWeek(),df=DEFIS[dd.cur%DEFIS.length],ti=(new Date().getDay()+6)%7,ts=ti<5?dayStatus(ti):'';
 var days=JL.map(function(l,i){var s=dayStatus(i),bg=s==='v'?'#0a7a4e':s==='p'?'#f5b400':'#fff',bd=s==='v'?'#0a7a4e':s==='p'?'#f5b400':'#d9dff5';return '<span class="day">'+l+'<u style="background:'+bg+';border-color:'+bd+';color:'+(s==='p'?'#1b2347':'#fff')+'">'+(s==='v'?'✓':s==='p'?'…':'')+'</u></span>'}).join('');
 var alt=DEFIS.map(function(x,i){return i===dd.cur%DEFIS.length?'':'<button class="opt" style="min-height:48px;font-size:15px" data-dc="'+i+'">'+x.t+'</button>'}).join('');
 return '<div class="w">'+back()+'<h1>Défi de la semaine</h1>'+
 '<div class="c" style="background:#fff3cc;border-color:#f5b400"><div class="row"><span aria-hidden="true" style="font-size:40px">'+df.e+'</span><p class="d" style="font-size:24px;line-height:1.1">'+df.t+'</p></div><p style="font-size:15px">'+df.s+'</p></div>'+
 '<div class="c" style="gap:8px"><p class="d" style="font-size:16px">Ta semaine</p><div class="row" style="align-items:flex-start">'+days+'</div><p class="soft" style="font-size:13px">Jaune : en attente de ton parent · Vert : validé</p></div>'+rico(df.r)+
 '<div class="c" style="gap:8px"><p class="d" style="font-size:16px">Changer de défi</p>'+alt+'</div>'+
 '<div style="margin-top:auto;display:flex;flex-direction:column;gap:6px"><button class="pri g" data-dd="1"'+(ti>4||ts?' disabled':'')+'>'+(ti>4?'Pas de classe aujourd’hui':ts==='v'?'Défi validé aujourd’hui ✓':ts==='p'?'Bien noté, ton parent confirme ce soir':'J’ai réussi aujourd’hui !')+'</button><p class="soft" style="font-size:13px;text-align:center">Ton parent confirme ce soir.</p></div></div>'};

var GATE=null;
var vGate=function(){if(!GATE)GATE={a:ri(11,19),b:ri(6,9),in:''};
 return '<div class="w">'+back()+'<h1>Espace du parent</h1><p class="soft">Une question d’adulte pour entrer :</p><div class="c" style="gap:12px"><p class="d" style="font-size:46px;text-align:center;line-height:1">'+GATE.a+' × '+GATE.b+' = ?</p><input id="gin2" inputmode="numeric" autocomplete="off" style="font:800 32px var(--display,sans-serif);text-align:center;border:2px solid #d9dff5;border-radius:14px;min-height:56px;width:100%"><button class="pri" data-gate="1">Entrer</button></div></div>'};
var vPar=function(){var m=monday(new Date()),e=new Date(m);e.setDate(e.getDate()+6);var nm=prof().name||'l’enfant',dd=defWeek(),df=DEFIS[dd.cur%DEFIS.length];
 var pend=[];for(var i=0;i<5;i++){if(dayStatus(i)==='p')pend.push(i)}
 var vd=0,tot=0;for(var j=0;j<5;j++){var s=dayStatus(j);if(s==='v')vd++;if(s==='v'||s==='p'||s==='x')tot++}
 var row=function(ic,t,v,sub){return '<div class="c" style="flex-direction:row;align-items:center;gap:12px;padding:10px 14px"><span aria-hidden="true" style="font-size:28px;width:40px;text-align:center">'+ic+'</span><span style="flex:1"><span class="d" style="display:block;font-size:16px">'+t+'</span><span style="display:block;font-weight:700;font-size:13px;color:#4a5380">'+sub+'</span></span><span class="d" style="font-size:26px;color:#2459e6">'+v+'</span></div>'};
 var runs=S.runs.filter(function(r){return r.k==='c'}).slice(-7),mx=Math.max.apply(null,runs.map(function(r){return r.s}).concat([1])),
  sp=runs.map(function(r){return '<span style="flex:1;height:'+Math.max(6,Math.round(58*r.s/mx))+'px;border-radius:6px 6px 0 0;background:#2459e6"></span>'}).join('');
 var fel=wk(S.log.rb)?'son record de calcul':wk(S.log.ef)?'ses erreurs transformées':vd?'son défi d’école':wk(S.log.ex)?'ses explications à Rico':'son effort';
 return '<div class="w">'+back('‹ Retour')+'<h1>Semaine de '+esc(nm)+'</h1><p class="soft" style="font-size:13px">Du lundi '+m.getDate()+' au dimanche '+e.getDate()+' '+MOIS[e.getMonth()]+'.</p>'+
 row('⚡','Records battus',wk(S.log.rb),'Calcul rapide')+row('🏫','Défis d’école validés',vd+'/'+Math.max(tot,vd),esc(df.t))+row('🌱','Erreurs transformées',wk(S.log.ef),'Refaites puis réussies')+row('🗣️','Explications à Rico',wk(S.log.ex),'Notions expliquées')+row('🚀','Missions Plus',wk(S.log.pl),'Calcul niveau supérieur')+
 (runs.length?'<div class="c" style="gap:8px;padding:12px"><div class="row" style="justify-content:space-between"><span class="d" style="font-size:16px">Calcul rapide : dernières parties</span><span class="d" style="font-size:16px;color:#0a7a4e">record '+S.rec.calc+'</span></div><div class="row" style="align-items:flex-end;height:64px;gap:6px">'+sp+'</div></div>':'')+
 (pend.length?'<div class="c" style="background:#fff3cc;border-color:#f5b400;gap:8px;padding:12px"><p class="d" style="font-size:16px">Défi à valider</p>'+pend.map(function(i){return '<p style="font-size:15px">'+JOURS[i].charAt(0).toUpperCase()+JOURS[i].slice(1)+' : « '+esc(df.t)+' »</p><div class="row"><button class="pri g" style="flex:1;min-height:48px;font-size:16px" data-pv="v'+i+'">Oui, réussi</button><button class="sec" style="flex:1;min-height:48px;font-size:16px" data-pv="x'+i+'">Pas encore</button></div>'}).join('')+'</div>':'')+
 '<p class="d" style="text-align:center;font-size:15px;margin-top:auto">À féliciter ce soir : '+fel+'</p><p class="soft" style="font-size:12px;text-align:center">Données enregistrées sur cet appareil.</p></div>'};

var VIEWS={hub:vHub,game:vGame,res:vRes,err:vErr,ex:vEx,def:vDef,gate:vGate,par:vPar,
 lock:function(){return vHub()}};
var draw=function(){var f=VIEWS[view]||vHub,sc=root.scrollTop;root.innerHTML=f()+(toast?'<div class="toast">'+toast+'</div>':'');bind();root.scrollTop=sc;
 if(view==='game'&&G)gUpdate()};
var go=function(v){if(v==='calc'){startGame(false);return}if(v==='plus'){startGame(true);return}if(v==='lock'){say('Bats '+PLUS_AT+' au calcul rapide pour débloquer la Mission Plus.');return}
 if(tick){clearInterval(tick);tick=null}G=null;if(v==='hub'){S=load()}if(v==='ex'&&view!=='ex'){EX=null}if(v==='err'){ER=null}if(v==='gate'){GATE=null}view=v;draw()};
var bind=function(){root.querySelectorAll('[data-go]').forEach(function(e){e.onclick=function(){var v=e.dataset.go;if(v==='hub'&&view==='hub'){close();return}go(v)}});
 root.querySelectorAll('[data-k]').forEach(function(e){e.onclick=function(){gKey(e.dataset.k)}});
 root.querySelectorAll('[data-ek]').forEach(function(e){e.onclick=function(){eKey(e.dataset.ek)}});
 root.querySelectorAll('[data-eo]').forEach(function(e){e.onclick=function(){eoPick(e.dataset.eo)}});
 root.querySelectorAll('[data-dc]').forEach(function(e){e.onclick=function(){defWeek().cur=parseInt(e.dataset.dc,10);put();draw()}});
 root.querySelectorAll('[data-dd]').forEach(function(e){e.onclick=function(){var ti=(new Date().getDay()+6)%7;if(ti>4)return;var d=defWeek();d.days[today()]='p';put();touch();draw();say('Bien joué ! Ton parent confirme ce soir.')}});
 root.querySelectorAll('[data-gate]').forEach(function(e){e.onclick=function(){var v=parseInt(($('gin2')||{}).value,10);if(v===GATE.a*GATE.b){GATE=null;view='par';draw()}else say('Ce n’est pas ça. Cet espace est pour les parents.')}});
 root.querySelectorAll('[data-pv]').forEach(function(e){e.onclick=function(){var s=e.dataset.pv,i=parseInt(s.slice(1),10),m=monday(new Date());m.setDate(m.getDate()+i);defWeek().days[dstr(m)]=s.charAt(0);put();draw()}})};
D.addEventListener('keydown',function(ev){if(!root||root.style.display!=='block'||view!=='game'||!G)return;if(/^[0-9]$/.test(ev.key))gKey(ev.key);else if(ev.key==='Enter')gKey('ok');else if(ev.key==='Backspace')gKey('x')});

window.MRSP={open:function(){S=load();show();view='hub';draw()},parent:function(skip){S=load();show();view=skip?'par':'gate';GATE=null;draw()},close:close,
 _dbg:function(){return {G:G,S:S,view:view}}};
})();
