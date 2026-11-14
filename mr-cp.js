/* Mission réussite — cours CP (Français + Maths). Branché par MRNIV.boot() : window.MRCP_BUILD(M). */
(function(){
window.MRCP_BUILD=function(M){
if(M.some(function(m){return m.id==='cp-histoire'}))return;
var esc=window.esc||function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var cap=function(s){s=String(s);return /^[a-zàâäéèêëîïôöùûüç]/.test(s)?s.charAt(0).toUpperCase()+s.slice(1):s};
var seed=11;var rnd=function(){seed=(seed*16807)%2147483647;return seed/2147483647};
var shufS=function(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(rnd()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a};
/* teach (avec mini-question facultative) */
var T=function(title,say,html,chk){var s={t:'teach',title:title,say:say||title,html:html};if(chk){var o=shufS([chk[1]].concat(chk[2])).map(cap);s.chk={q:chk[0],o:o,a:o.indexOf(cap(chk[1]))}}return s};
/* choix : bonne réponse + mauvaises, ordre mélangé */
var C=function(q,good,bad,ok,ko,pic){var o=shufS([good].concat(bad)).map(cap);return {t:'choice',q:q,opts:o,ans:o.indexOf(cap(good)),ok:ok||'Oui, bravo !',ko:ko||'Regarde bien.',pic:pic||''}};
var CR=function(q,good,bad,ok,ko,pic){var o=shufS([good].concat(bad));return {t:'choice',q:q,opts:o,ans:o.indexOf(good),ok:ok||'Oui, bravo !',ko:ko||'Regarde bien.',pic:pic||''}};
var N=function(q,ans,hint,ok,vis,lead){return {t:'num',q:q,ans:ans,hint:hint||'',ok:ok||('Oui : '+ans+'.'),vis:vis||'',lead:lead||'Calcule'}};
var TM=function(q,tokens,ans,ok){return {t:'tapmany',q:q,tokens:tokens,ans:ans,ok:ok||'Bravo !'}};
var TP=function(q,tokens,ans,ok,ko){return {t:'tap',q:q,tokens:tokens,ans:ans,ok:ok||'Oui !',ko:ko||'Regarde encore.'}};
var B=function(q,words,ans,ok,ko,j){var s={t:'build',q:q,words:words,ans:ans,ok:ok||('Bravo : « '+ans+' »'),ko:ko||'Ce n\'est pas dans le bon ordre. Recommence.'};if(j!==undefined)s.j=j;return s};
var MA=function(q,pairs){return {t:'match',q:q,pairs:pairs.map(function(p){return {l:p[0],r:p[1]}})}};
var CATC=['g','v','p'];
var SO=function(q,cats,items){return {t:'sort',q:q,cats:cats.map(function(c,i){return {k:c[0],label:c[1],cls:CATC[i%3]}}),items:items.map(function(i){return {w:i[0],cat:i[1],hint:i[2]||'regarde bien le mot.'}})}};
var LS=function(w){return '<button class="speak" style="align-self:center;font-size:1.1rem" onclick="say(\''+String(w).replace(/'/g,"\\'")+'\')">🔊 Écouter</button>'};
var BIG=function(t){return '<p class="big" style="text-align:center">'+t+'</p>'};
var VC=function(w){return '<button class="vc" data-say="'+esc(w)+'" style="min-height:48px;display:inline-flex;margin:3px">'+esc(w)+'</button>'};
var gate=function(on){var n=document.getElementById('next');if(n)n.style.display=on?'':'none'};
var W=function(js,extra,title,html){var s={t:'teach',title:title||'À toi',say:'',html:(html||'')+'<div id="mrw"></div>',js:js};for(var k in (extra||{}))s[k]=extra[k];return s};
var mod=function(id,name,sub,badge,steps,fl){var m={id:id,name:name,sub:sub,cls:'pro',badge:badge,lv:'CP',cp:true,steps:steps};for(var k in (fl||{}))m[k]=fl[k];M.push(m);return m};
var FR=null,MT={mth:true};
var ok0=function(){return window.MRW=window.MRW||{}};
var MRW=ok0();
var pt=function(el,ev){var r=el.getBoundingClientRect(),t=ev.touches?ev.touches[0]:ev;return [(t.clientX-r.left)*(el.width/r.width),(t.clientY-r.top)*(el.height/r.height)]};

/* ---- widget : tambour des syllabes ---- */
MRW['cp-clap']=function(){var s=M[cur.m].steps[cur.i],box=document.getElementById('mrw');if(!box)return;gate(false);var k=0,n=0,msg='';
 var draw=function(){var w=s.words[k];box.innerHTML='<div style="text-align:center"><div class="big" style="font-size:2.3rem">'+esc(w[0])+'</div><button class="speak" id="cpsay" style="margin:6px auto">🔊 Écouter</button><p style="font-weight:800;margin:8px 0 4px">Tape le tambour : une fois pour chaque syllabe.</p><button id="cpdr" aria-label="tambour" style="font-size:3.6rem;border:4px solid var(--line);border-radius:50%;width:112px;height:112px;background:var(--sun)">🥁</button><div class="big" id="cpn" style="margin:4px 0">'+n+'</div><button class="go" id="cpok">Valider</button><p style="min-height:1.5em;font-weight:800;margin-top:6px">'+msg+'</p><p style="color:var(--soft);font-weight:700">Mot '+(k+1)+' sur '+s.words.length+'</p></div>';
  document.getElementById('cpsay').onclick=function(){say(w[0])};
  document.getElementById('cpdr').onclick=function(){n++;msg='';document.getElementById('cpn').textContent=n;var b=this;try{b.animate([{transform:'scale(1)'},{transform:'scale(.88)'},{transform:'scale(1)'}],{duration:140})}catch(e){}};
  document.getElementById('cpok').onclick=function(){if(n===w[1]){msg='Oui ! '+w[2];n=0;k++;if(k>=s.words.length){box.innerHTML='<p class="big" style="text-align:center">Bravo, tu as frappé tous les mots ! 🎉</p>';gate(true)}else{box.innerHTML='<p class="big" style="text-align:center">'+esc(msg)+'</p>';setTimeout(function(){msg='';draw()},1100)}}else{msg='Pas tout à fait. Écoute encore, puis tape pour chaque morceau.';n=0;draw()}};
 };draw()};

/* ---- widget : tracer du doigt (formes et lettres) ---- */
MRW['cp-trace']=function(){var s=M[cur.m].steps[cur.i],box=document.getElementById('mrw');if(!box)return;gate(false);
 var items=s.items,k=0,W0=320,H0=190;
 var font='"Playwrite FR Moderne","Comic Sans MS","Chalkboard SE",cursive';
 var model=function(ctx,it,lw,col){ctx.save();ctx.lineCap='round';ctx.lineJoin='round';ctx.lineWidth=lw;ctx.strokeStyle=col;ctx.fillStyle=col;
  if(it.p){it.p.forEach(function(P){ctx.beginPath();P.forEach(function(q,i){i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1])});ctx.stroke()})}
  else{ctx.font=(it.fs||130)+'px '+font;ctx.textAlign='center';ctx.textBaseline='alphabetic';ctx.fillText(it.l,W0/2,it.y||138)}ctx.restore()};
 var draw=function(){var it=items[k];box.innerHTML='<div style="text-align:center"><p style="font-weight:800;margin:0 0 6px">'+esc(it.q||('Repasse sur '+(it.p?'le tracé':'la lettre')+' avec ton doigt.'))+'</p><canvas id="trc" width="'+W0+'" height="'+H0+'" style="touch-action:none;width:100%;max-width:'+W0+'px;background:#fff;border:3px solid var(--line);border-radius:16px"></canvas><div class="row" style="justify-content:center;margin-top:8px"><button class="go" id="trok">Vérifier</button><button class="ghost" id="trcl">Effacer</button></div><p id="trm" style="min-height:1.5em;font-weight:800;margin-top:6px"></p><p style="color:var(--soft);font-weight:700">'+(k+1)+' sur '+items.length+'</p></div>';
  var cv=document.getElementById('trc'),cx=cv.getContext('2d'),pts=[],drawing=false,last=null;
  var base=function(){cx.clearRect(0,0,W0,H0);cx.save();cx.strokeStyle='#e4e9fb';cx.lineWidth=1;for(var y=30;y<H0;y+=40){cx.beginPath();cx.moveTo(0,y);cx.lineTo(W0,y);cx.stroke()}cx.restore();
   if(it.p){model(cx,it,18,'#d9e2ff');cx.save();cx.setLineDash([3,9]);model(cx,it,3,'#6b7bd0');cx.restore();if(it.p[0])dot(it.p[0][0])}
   else{model(cx,it,1,'#d9e2ff');cx.save();cx.globalAlpha=.55;model(cx,it,1,'#cfd8fb');cx.restore()}pts.forEach(function(q,i){if(q.b)return;cx.fillStyle='#e0393f';cx.beginPath();cx.arc(q.x,q.y,4,0,7);cx.fill()})};
  var dot=function(q){cx.save();cx.fillStyle='#0e9a63';cx.beginPath();cx.arc(q[0],q[1],8,0,7);cx.fill();cx.restore()};
  /* masque du modèle */
  var mk=document.createElement('canvas');mk.width=W0;mk.height=H0;var mc=mk.getContext('2d');model(mc,it,it.p?26:10,'#000');var md=null;var getMask=function(){if(!md)md=mc.getImageData(0,0,W0,H0).data;return md};
  var inMask=function(x,y){x=Math.round(x);y=Math.round(y);if(x<0||y<0||x>=W0||y>=H0)return false;return getMask()[(y*W0+x)*4+3]>40};
  var start=function(e){e.preventDefault();drawing=true;var p=pt(cv,e);last=p;pts.push({x:p[0],y:p[1],b:1});};
  var move=function(e){if(!drawing)return;e.preventDefault();var p=pt(cv,e);cx.strokeStyle='#e0393f';cx.lineWidth=6;cx.lineCap='round';cx.beginPath();cx.moveTo(last[0],last[1]);cx.lineTo(p[0],p[1]);cx.stroke();var dx=p[0]-last[0],dy=p[1]-last[1],n=Math.max(1,Math.ceil(Math.hypot(dx,dy)/3));for(var i=1;i<=n;i++)pts.push({x:last[0]+dx*i/n,y:last[1]+dy*i/n});last=p};
  var end=function(e){drawing=false};
  cv.addEventListener('pointerdown',start);cv.addEventListener('pointermove',move);window.addEventListener('pointerup',end);cv.addEventListener('pointerleave',end);
  document.getElementById('trcl').onclick=function(){pts=[];base();document.getElementById('trm').textContent=''};
  document.getElementById('trok').onclick=function(){var m=document.getElementById('trm');if(pts.length<12){m.textContent='Trace d\'abord avec ton doigt.';return}
   var md2=getMask();var tot=0,cov=0,STEP=5;var near=function(x,y,r){for(var i=0;i<pts.length;i+=2){var q=pts[i];if(Math.abs(q.x-x)<=r&&Math.abs(q.y-y)<=r&&(q.x-x)*(q.x-x)+(q.y-y)*(q.y-y)<=r*r)return true}return false};
   for(var y=0;y<H0;y+=STEP)for(var x=0;x<W0;x+=STEP){if(md2[(y*W0+x)*4+3]>40){var core=false;tot++;if(near(x,y,it.p?16:15))cov++}}
   var out=0,np=0;for(var i=0;i<pts.length;i+=2){np++;if(!inMask(pts[i].x,pts[i].y))out++}
   var c=tot?cov/tot:1,o=np?out/np:0;
   if(c>=.55&&o<=.45){m.textContent='Bravo, bien tracé ! ⭐';k++;setTimeout(function(){if(k>=items.length){box.innerHTML='<p class="big" style="text-align:center">Bien joué, tout est tracé ! 🎉</p>';gate(true)}else draw()},900)}
   else if(c<.55)m.textContent='Repasse sur tout le modèle, du début jusqu\'à la fin.';else m.textContent='Reste bien sur le modèle. Efface et réessaie.'};
  base()};draw()};

/* ---- widget : lecture minute (chrono + dernier mot lu) ---- */
MRW['cp-lecmin']=function(){var s=M[cur.m].steps[cur.i],box=document.getElementById('mrw');if(!box)return;gate(false);var words=s.text.split(/\s+/),t0=0,iv=null,phase='ready',t=60;
 var show=function(){var h='';if(phase==='ready')h='<p style="font-weight:800">Quand tu es prêt, touche « Je commence ». Lis tout bas, sans te presser, en regardant bien les lettres.</p><button class="go" id="lmgo">▶ Je commence</button>';
  else if(phase==='run')h='<p class="big" id="lmt" style="text-align:center">⏱ '+t+' s</p><p style="font-weight:700;color:var(--soft)">Touche « J\'ai fini » quand tu as lu le texte, ou quand le temps est écoulé.</p>';
  else h='<p style="font-weight:800">Touche le <b>dernier mot</b> que tu as lu.</p>';
  var txt='<div style="background:#fff;border:3px solid var(--line);border-radius:16px;padding:12px 14px;font:700 1.25rem/1.8 var(--display);'+(phase==='ready'?'filter:blur(7px);user-select:none':'')+'">'+words.map(function(w,i){return '<span data-w="'+i+'" style="'+(phase==='pick'?'cursor:pointer;border-bottom:2px dotted var(--line);':'')+'">'+esc(w)+'</span>'}).join(' ')+'</div>';
  box.innerHTML=h+txt+(phase==='run'?'<button class="go" id="lmend" style="margin-top:10px">J\'ai fini</button>':'')+'<div id="lmr"></div>';
  var g=document.getElementById('lmgo');if(g)g.onclick=function(){phase='run';t=60;t0=Date.now();show();iv=setInterval(function(){t=60-Math.floor((Date.now()-t0)/1000);var e=document.getElementById('lmt');if(e)e.textContent='⏱ '+Math.max(0,t)+' s';if(t<=0){clearInterval(iv);phase='pick';show()}},250)};
  var en=document.getElementById('lmend');if(en)en.onclick=function(){clearInterval(iv);s._el=Math.max(1,Math.min(60,Math.round((Date.now()-t0)/1000)));phase='pick';show()};
  box.querySelectorAll('[data-w]').forEach(function(x){if(phase==='pick')x.onclick=function(){var n=+x.dataset.w+1,el=s._el||60,wpm=Math.round(n*60/el);var rep=wpm>=50?'Au-dessus du repère de fin de CP (50 mots par minute) : bravo !':wpm>=30?'Tu es sur le bon chemin : le repère de fin de CP est de 30 mots par minute sans préparation.':'Ce n\'est pas une course. Relis le texte avec le micro 🔊, puis réessaie.';document.getElementById('lmr').innerHTML='<div class="fb ok mr-ok" style="margin-top:10px">Tu as lu <b>'+n+' mots</b> en <b>'+el+' s</b>, soit environ <b>'+wpm+' mots par minute</b>. '+rep+'</div><div class="row" style="margin-top:8px"><button class="ghost" id="lmre">↻ Réessayer</button><button class="speak" id="lmsay">🔊 Écouter le texte</button></div>';gate(true);document.getElementById('lmre').onclick=function(){phase='ready';show()};document.getElementById('lmsay').onclick=function(){say(s.text)};try{save.cplm=Math.max(save.cplm||0,wpm);persist()}catch(e){}}})};
 show()};
/* ---- widget : quiz interne (bilan) ---- */
MRW['cp-bilan']=function(){var s=M[cur.m].steps[cur.i],box=document.getElementById('mrw');if(!box)return;gate(false);
 if(window.MRNIV&&MRNIV.quiz)MRNIV.quiz(box,s.qs,{title:'Bilan CP',key:'cp',onEnd:function(){gate(true)}});};

/* =============== FRANÇAIS CP — LANGAGE ORAL =============== */
var STORY1='Ce matin, Lina arrive à l’école avec un sac rouge. Dans la cour, elle entend un petit bruit : miaou, miaou ! Elle regarde près du banc et aperçoit un chaton gris. Lina ne veut pas le laisser seul. Elle prévient la maîtresse. Ensemble, elles cherchent son propriétaire. Sur le collier du chaton, elles trouvent un petit numéro de téléphone. La maîtresse appelle et, quelques minutes plus tard, un monsieur vient récupérer son chat. Lina est contente. Avant de partir, le monsieur la remercie et dit : « Tu as eu le bon réflexe : tu as demandé l’aide d’un adulte. »';
mod('cp-histoire','J’écoute une histoire','Le sac rouge de Lina','🎧',[
 T('Le sac rouge de Lina',STORY1,'<p>Écoute bien l’histoire, puis regarde-la en lisant.</p><p>'+STORY1.split('. ').join('.</p><p>')+'</p>'),
 C('Comment s’appelle la petite fille ?','Lina',['Mina','Léa'],'Oui, elle s’appelle Lina.','Relis le début de l’histoire.'),
 C('De quelle couleur est son sac ?','Rouge',['Bleu','Vert'],'Oui : un sac rouge.','Pense au début : « un sac… ».'),
 C('Quel animal entend-elle ?','Un chaton',['Un chien','Un oiseau'],'Oui : « miaou, miaou ! », c’est un chaton.','Quel animal fait « miaou » ?'),
 C('Où trouve-t-elle le chaton ?','Près du banc',['Dans son sac','Sur le toit'],'Oui : près du banc.','Elle regarde près d’un meuble de la cour.'),
 C('À qui Lina demande-t-elle de l’aide ?','À la maîtresse',['À un enfant','À un chat'],'Oui : elle prévient la maîtresse.','Qui est dans l’école et peut aider ?'),
 C('Comment le monsieur retrouve-t-il son chat ?','Grâce au numéro de téléphone du collier',['Il le voit dans la cour','Il l’appelle par son nom'],'Oui : la maîtresse appelle le numéro du collier.','Il y avait un petit numéro sur le collier.'),
 C('Que fait le monsieur avant de partir ?','Il remercie Lina',['Il donne un jouet','Il court dans la cour'],'Oui : il la remercie.','Que dit-il à Lina avant de partir ?'),
 C('Pourquoi Lina a-t-elle eu le bon réflexe ?','Elle a demandé l’aide d’un adulte',['Elle a emporté le chaton chez elle','Elle n’a pas fait attention au chaton'],'Oui : demander de l’aide à un adulte, c’est le bon réflexe.','Le monsieur le dit à la fin de l’histoire.'),
 T('Je raconte dans l’ordre','D’abord, Ensuite, Puis, Enfin.','<p class="big">D’abord… Ensuite… Puis… Enfin…</p><p>Ces petits mots aident à raconter dans le bon ordre.</p><p>Exemple : « D’abord, Lina arrive à l’école. Ensuite, elle entend un chaton. »</p>',['Quel petit mot commence une histoire ?','D’abord',['Enfin','Puis']]),
 B('Remets l’histoire dans l’ordre.',['Enfin, le propriétaire vient chercher son chat.','D’abord, Lina arrive à l’école.','Puis elle demande de l’aide à la maîtresse.','Ensuite, elle entend un chaton.'],'D’abord, Lina arrive à l’école. Ensuite, elle entend un chaton. Puis elle demande de l’aide à la maîtresse. Enfin, le propriétaire vient chercher son chat.','Bravo, l’histoire est dans le bon ordre !'),
 B('Raconte en trois phrases : au début, ensuite, à la fin.',['À la fin, le monsieur remercie Lina.','Au début, Lina entend un chaton.','Ensuite, la maîtresse appelle le numéro.'],'Au début, Lina entend un chaton. Ensuite, la maîtresse appelle le numéro. À la fin, le monsieur remercie Lina.')
]);

mod('cp-phrases','Je parle en phrases complètes','Une phrase claire, pas un seul mot','💬',[
 T('Une phrase complète','Une phrase complète donne une information claire. Elle commence par une majuscule et se termine par un point.','<p class="big">Une phrase complète donne une information claire.</p><p>Question : Que voit Lina ?</p><p>Trop court : <b>« Un chaton. »</b></p><p>Phrase complète : <b>« Lina voit un chaton gris près du banc. »</b></p>',['Quelle réponse est une phrase complète ?','Lina voit un chaton gris.',['Un chaton.','Chaton gris.']]),
 C('Que voit Lina ? Choisis la phrase complète.','Lina voit un chaton gris près du banc.',['Un chaton.','Chaton gris banc.'],'Oui, c’est une phrase complète.','Une phrase complète dit qui fait quoi.'),
 C('Qui vient chercher l’animal ?','Un monsieur vient chercher le chaton.',['Un monsieur.','Vient chercher.'],'Oui, la réponse est complète.','Choisis la réponse qui dit tout.'),
 C('Que fait Lina quand elle entend le chaton ?','Lina regarde près du banc.',['Près du banc.','Regarde.'],'Oui, tu réponds avec une vraie phrase.','Une phrase a quelqu’un qui fait quelque chose.'),
 C('Comment le propriétaire sait-il que le chaton est à lui ?','Il reconnaît son chaton.',['Son chaton.','Reconnaît.'],'Oui, c’est une phrase complète.','Cherche la réponse avec « il » et un verbe.'),
 C('Je décris une image. Quelle description est la plus complète ?','Je vois une petite fille dans la cour. Elle porte un sac rouge.',['Une fille.','Cour sac rouge.'],'Oui, il y a plusieurs phrases claires.','Une bonne description a plusieurs phrases.','<div class="pic">👧🎒🐱</div>'),
 B('Remets les mots dans l’ordre pour faire une phrase.',['près du banc','Un chaton','est','gris'],'Un chaton gris est près du banc','Bravo : « Un chaton gris est près du banc ».'),
 C('Ajoute un détail : « J’aime les chiens ». Quelle phrase est meilleure ?','J’aime les chiens parce qu’ils sont joueurs.',['J’aime les chiens.','Les chiens joueurs.'],'Oui : « parce que » ajoute un détail.','Cherche la phrase qui explique pourquoi.'),
 C('Comment demander poliment un crayon ?','Peux-tu me donner ton crayon, s’il te plaît ?',['Donne ton crayon !','Ton crayon.'],'Oui, c’est poli.','Pense au petit mot magique.'),
 C('Quelle phrase répond à : « Quel animal aimerais-tu avoir ? Pourquoi ? »','J’aimerais avoir un chat parce qu’il est doux.',['Un chat.','Parce que.'],'Oui, tu réponds à toute la question.','Il faut dire quel animal et pourquoi.'),
 C('Quelle phrase dit où se passe l’histoire ?','L’histoire se passe dans la cour de l’école.',['Dans la cour.','L’école cour.'],'Oui, c’est une phrase complète.','Cherche la phrase complète.')
]);

mod('cp-syl','Je frappe les syllabes','Des mots qu’on découpe','🥁',[
 T('Les syllabes','Les syllabes sont les morceaux que l’on entend quand on dit un mot. Chaton : cha, ton. Deux syllabes.','<p class="big">cha <b>/</b> ton</p><p>Les syllabes sont les <b>morceaux</b> qu’on entend dans un mot.</p><p>Chaton → <b>2</b> syllabes. Lina → Li / na → <b>2</b> syllabes.</p>',['Combien de syllabes dans « chaton » ?','2',['1','3']]),
 W('cp-clap',{words:[['Lina',2,'Li-na : 2 syllabes.'],['chaton',2,'cha-ton : 2 syllabes.'],['école',2,'é-cole : 2 syllabes.'],['téléphone',3,'té-lé-phone : 3 syllabes.'],['propriétaire',5,'pro-pri-é-tai-re : 5 syllabes.'],['papillon',3,'pa-pi-llon : 3 syllabes.'],['sac',1,'sac : 1 syllabe.']]},'Je frappe les syllabes'),
 C('Dis « chaton » sans « ton ». Quel morceau reste ?','cha',['ton','chat'],'Oui : cha.','Enlève la fin « ton ».',LS('chaton')),
 C('Dis « Lina » sans « Li ». Quel morceau reste ?','na',['Li','Lina'],'Oui : na.','Enlève le début « Li ».',LS('Lina')),
 C('Dis « mouton » sans « mou ». Quel morceau reste ?','ton',['mou','mouton'],'Oui : ton.','Enlève le début « mou ».',LS('mouton')),
 MA('Relie les syllabes au mot qu’elles forment.',[['cha + peau','chapeau'],['mou + ton','mouton'],['pa + pi + llon','papillon'],['to + ma + te','tomate']]),
 C('Combien de syllabes dans « vélo » ?','2',['1','3'],'Oui : vé-lo.','Frappe dans tes mains : vé-lo.',LS('vélo')),
 C('Combien de syllabes dans « banane » ?','3',['2','4'],'Oui : ba-na-ne.','Frappe dans tes mains : ba-na-ne.',LS('banane'))
]);

mod('cp-sons','Je joue avec les sons','Début, milieu, fin des mots','👂',[
 T('Les sons','Un son, c’est ce qu’on entend dans un mot. On peut écouter le début, le milieu ou la fin.','<p class="big">Un <b>son</b>, c’est ce qu’on <b>entend</b>.</p><p>On écoute le <b>début</b>, le <b>milieu</b> ou la <b>fin</b> d’un mot.</p>'+VC('chaton')+VC('chemin')+VC('chaussure'),['Un son, c’est ce qu’on…','Entend',['Voit','Touche']]),
 C('Quel mot commence par le son « ch » ?','chaton',['banc','Lina'],'Oui : cha-ton.','Écoute le début des mots.',LS('chaton')),
 C('Quel mot commence par le son « ch » ?','chaussure',['école','sac'],'Oui : chaussure.','Écoute le début des mots.',LS('chaussure')),
 C('Quel mot commence par le son « ch » ?','chemin',['vélo','table'],'Oui : chemin.','Écoute le début des mots.',LS('chemin')),
 TM('Touche les mots où tu entends le son « a ».',['sac','chaton','école','lapin','tapis','lune'],[0,1,3,4],'Oui : sac, chaton, lapin et tapis.'),
 C('Change le premier son : chat → rat. Quel mot fais-tu avec « sac » en changeant « s » par « l » ?','lac',['sac','mac'],'Oui : lac.','Remplace le premier son par « l ».',LS('lac')),
 C('Change le premier son : « pot » devient… avec « l ».','lot',['pot','mot'],'Oui : lot.','Remplace « p » par « l ».',LS('lot')),
 C('Le son mystère est « m ». Quel mot commence par « m » ?','maison',['table','lune'],'Oui : maison.','Écoute le début.',LS('maison')),
 C('Le son mystère est « l ». Quel mot commence par « l » ?','lapin',['moto','sac'],'Oui : lapin.','Écoute le début.',LS('lapin')),
 C('Le son mystère est « s ». Quel mot commence par « s » ?','sac',['chat','lune'],'Oui : sac.','Écoute le début.',LS('sac')),
 C('Le son mystère est « p ». Quel mot commence par « p » ?','pomme',['banane','lune'],'Oui : pomme.','Écoute le début.',LS('pomme'))
]);

/* =============== FRANÇAIS CP — LECTURE =============== */
var SYL=function(a){return a.map(VC).join('')};
mod('cp-assemble','J’assemble les syllabes','Des lettres aux syllabes','🧩',[
 T('Je lis une syllabe','Je regarde les lettres, je fais les sons, j’assemble. m plus a, ma.','<p class="big">m + a → <b>ma</b></p><p>Je lis chaque son, puis je les rassemble.</p><p>Touche une syllabe pour l’écouter :</p>'+SYL(['ba','bi','bo','bu','la','li','lo','lu','ma','mi','mo','mu','ra','ri','ro','ru']),['m + a, ça fait…','ma',['mi','mo']]),
 C('l + i → ?','li',['la','lu'],'Oui : li.','Lis le son l, puis le son i.'),
 C('b + o → ?','bo',['bu','ba'],'Oui : bo.','Lis le son b, puis le son o.'),
 C('r + u → ?','ru',['ri','ro'],'Oui : ru.','Lis le son r, puis le son u.'),
 C('Quelle syllabe entends-tu ?','mi',['mo','ma'],'Oui : mi.','Écoute bien la voyelle.',LS('mi')),
 C('Quelle syllabe entends-tu ?','lu',['la','li'],'Oui : lu.','Écoute bien la voyelle.',LS('lu')),
 T('Deux consonnes avant la voyelle','Dans pla, je lis p, l, a ensemble.','<p class="big">p-l-a → <b>pla</b></p><p>Dans un groupe comme <b>pla</b>, je lis les deux consonnes avec la voyelle.</p>'+SYL(['pla','pli','plo','tra','tri','tro','bra','bri','bro','cra','cri','cro']),['Dans « pla », je lis…','p-l-a ensemble',['p puis a','l puis a']]),
 TP('Touche la syllabe « tri ».',['tra','tri','tro','bri'],1,'Oui : tri.','Regarde les trois lettres.'),
 TP('Touche la syllabe « bro ».',['bra','bri','bro','cro'],2,'Oui : bro.','Regarde les trois lettres.'),
 B('Assemble les syllabes pour lire le mot.',['ma','ri','na'],'marina','Bravo : « marina » !','Mets les syllabes dans l’ordre où on les lit.',''),
 B('Assemble les syllabes pour lire le mot.',['pa','pi','er'],'papier','Bravo : « papier » !','Mets les syllabes dans l’ordre où on les lit.',''),
 B('Assemble les syllabes pour lire le mot.',['pla','ne'],'plane','Bravo : « plane » !','Mets les syllabes dans l’ordre où on les lit.',''),
 B('Assemble les syllabes pour lire le mot.',['ta','pis'],'tapis','Bravo : « tapis » !','Mets les syllabes dans l’ordre où on les lit.','')
]);

mod('cp-dechiffre','Je déchiffre les mots','Lire un mot jusqu’au bout','🔎',[
 T('Ma méthode en 3 étapes','1. Je regarde toutes les lettres. 2. Je lis les sons ou les syllabes. 3. Je rassemble et je relis le mot entier.','<p class="big">1. Je regarde les lettres.<br>2. Je lis les syllabes.<br>3. Je relis le mot entier.</p><p>Exemple : <b>mo – to → moto</b>. Je ne m’arrête pas après la première syllabe.</p>'+VC('moto'),['Je lis le mot…','Jusqu’au bout',['À moitié','Au hasard']]),
 MA('Niveau 1 : lis les mots et relie-les à l’image.',[['moto','🏍️'],['vélo','🚲'],['tomate','🍅'],['salade','🥗']]),
 MA('Niveau 1 : lis les mots et relie-les à l’image.',[['pirate','🏴‍☠️'],['malade','🤒'],['lavabo','🚰'],['moto','🏍️']]),
 MA('Niveau 2 : deux consonnes. Lis et relie.',[['plume','🪶'],['train','🚆'],['plage','🏖️'],['crabe','🦀']]),
 MA('Niveau 2 : deux consonnes. Lis et relie.',[['bras','💪'],['arbre','🌳'],['drôle','🤡'],['tapis','🧶']]),
 MA('Niveau 3 : des sons plus difficiles. Lis et relie.',[['chat','🐱'],['lapin','🐰'],['poisson','🐟'],['maison','🏠']]),
 MA('Niveau 3 : des sons plus difficiles. Lis et relie.',[['agneau','🐑'],['chemin','🛤️'],['matin','🌅'],['trois','3️⃣']]),
 C('Quel mot lis-tu ?','salade',['malade','lavabo'],'Oui : sa-la-de.','Lis les trois syllabes.','<p class="big" style="text-align:center">sa – la – de</p>'),
 C('Lis le mot. Qu’est-ce que c’est ?','Un animal',['Un fruit','Un meuble'],'Oui : « lapin » est un animal.','Lis le mot en entier.','<p class="big" style="text-align:center">lapin</p>'),
 C('Lis le mot. Qu’est-ce que c’est ?','Un fruit',['Un animal','Un vêtement'],'Oui : « poire » est un fruit.','Lis le mot en entier.','<p class="big" style="text-align:center">poire</p>'),
 TP('Touche le mot « crabe ».',['arbre','crabe','plage','bras'],1,'Oui : crabe.','Regarde bien toutes les lettres.'),
 TP('Touche le mot « train ».',['trois','train','plage','plume'],1,'Oui : train.','Regarde bien toutes les lettres.')
]);

mod('cp-freq','Les mots fréquents','le, la, un, une, est, et, dans…','🏷️',[
 T('Les petits mots','Certains petits mots reviennent très souvent. Je les reconnais vite.','<p>Ces petits mots reviennent <b>souvent</b>. Je les reconnais sans les épeler.</p>'+SYL(['le','la','un','une','est','et','dans','sur','avec','il','elle']),['« le » est un…','Petit mot',['Verbe','Animal']]),
 T('Attention : et et est','« et » relie deux mots. « est » dit où ou comment on est.','<p class="big"><b>et</b> relie : Lina <b>et</b> Sami</p><p class="big"><b>est</b> dit où est quelqu’un : le chat <b>est</b> sur le tapis</p><p>Je regarde les lettres et je relis la phrase.</p>'),
 C('___ chat est sur le tapis.','Le',['La','Une'],'Oui : le chat.','Chat est un nom masculin.'),
 C('Lina ___ Sami jouent dans la cour.','et',['est','dans'],'Oui : Lina et Sami.','Il faut relier deux prénoms.'),
 C('Le lapin est ___ la cabane.','dans',['sur','avec'],'Oui : dans la cabane.','Où est le lapin ?'),
 C('Il joue ___ une balle.','avec',['dans','est'],'Oui : avec une balle.','Il joue avec quoi ?'),
 C('Le vélo ___ dans le garage.','est',['et','un'],'Oui : le vélo est dans le garage.','Dit où est le vélo.'),
 C('Il y a ___ pomme et ___ poire.','une',['un','le'],'Oui : une pomme et une poire.','Pomme et poire sont féminins.'),
 B('Remets les mots dans l’ordre.',['sur','tapis','le','Le','chat','est'],'Le chat est sur le tapis','Bravo !'),
 TM('Touche tous les mots « et ».',['Lina','et','Sami','jouent','et','rient'],[1,4],'Oui : il y a deux « et ».')
]);

var PH=function(t){return '<p class="big" style="text-align:center">'+t+'</p>'};
mod('cp-lirephr','Je lis des phrases','Majuscule et ponctuation','📃',[
 T('Une phrase','Une phrase commence par une majuscule. À la fin, je m’arrête au point, au point d’interrogation ou d’exclamation.','<p class="big">Le chat dort<b>.</b> &nbsp; Où est-il<b>?</b> &nbsp; Bravo<b>!</b></p><p>Une phrase commence par une <b>majuscule</b>. À la fin, je m’arrête au <b>point</b>, au <b>point d’interrogation</b> ou au <b>point d’exclamation</b>.</p>',['Une phrase commence par…','Une majuscule',['Un point','Une virgule']]),
 C('Où est le chat ?','Sur le tapis',['Dans le sac','Près du moulin'],'Oui : le chat est sur le tapis.','Relis la phrase.',PH('Le chat est sur le tapis.')),
 C('Que pose Lina ?','Son sac',['Son livre','Sa pomme'],'Oui : son sac.','Relis la phrase.',PH('Lina pose son sac dans la classe.')),
 C('Que possède le pirate ?','Une carte et un bateau',['Un chat','Un vélo'],'Oui : une carte et un bateau.','Relis la phrase.',PH('Le pirate a une carte et un bateau.')),
 C('Où passe le train ?','Près du moulin',['Sur le tapis','Dans la classe'],'Oui : près du moulin.','Relis la phrase.',PH('Le petit train passe près du moulin.')),
 C('Quel animal marche sur le sable ?','Le crabe',['Le lapin','Le chat'],'Oui : le crabe.','Relis la phrase.',PH('Le crabe marche sur le sable !')),
 TP('Touche le signe qui montre une question.',['Où est le lapin','?','Le chat dort','.'],1,'Oui : le point d’interrogation montre une question.','Quel signe pose une question ?'),
 C('Quel signe à la fin de : « Où est le lapin … » ?','?',['.','!'],'Oui : c’est une question.','Cette phrase pose une question.'),
 C('Quel signe à la fin de : « Le crabe marche sur le sable … » ?','!',['?','.'],'Oui : il y a de la surprise, on peut mettre !.','Choisis un signe de fin.')
]);

var TXT5='Lina pose son sac sur le banc. Dans le sac, il y a un livre, une pomme et un petit lapin en tissu. Lina prend le livre et le lit avec Sami. Puis elle range la pomme dans son sac.';
mod('cp-texte','Je lis un petit texte','Le sac de Lina','📘',[
 T('Le sac de Lina',TXT5,'<p>Lis le texte doucement. Puis relis-le sans te presser.</p><p>'+TXT5.split('. ').join('.</p><p>')+'</p>'),
 C('Où Lina pose-t-elle son sac ?','Sur le banc',['Sur la table','Dans la cour'],'Oui : sur le banc.','Relis la première phrase.'),
 C('Que trouve-t-on dans le sac ?','Un livre, une pomme et un lapin en tissu',['Un chat et un livre','Une pomme et un crayon'],'Oui : un livre, une pomme et un petit lapin en tissu.','Relis la deuxième phrase.'),
 C('Avec qui Lina lit-elle ?','Avec Sami',['Avec la maîtresse','Seule'],'Oui : avec Sami.','Relis la troisième phrase.'),
 C('Que range-t-elle dans son sac à la fin ?','La pomme',['Le livre','Le lapin'],'Oui : la pomme.','Relis la dernière phrase.'),
 B('Remets l’histoire dans l’ordre.',['Elle range la pomme dans son sac.','Lina pose son sac.','Elle lit avec Sami.'],'Lina pose son sac. Elle lit avec Sami. Elle range la pomme dans son sac.','Bravo, c’est le bon ordre !')
]);

var TXTM='Sami a un vélo bleu. Il roule près du parc avec Lina. Ils voient un petit chien sous un arbre. Le chien court vers son maître. Sami et Lina reprennent leur chemin.';
mod('cp-lecmin','Lecture minute','Lire sans se presser','⏱️',[
 T('Lire avec fluidité','Lire avec fluidité, ce n’est pas lire le plus vite possible. C’est lire juste, sans trop d’arrêts.','<p class="big">Bien lire, ce n’est pas aller le plus vite.</p><p>Je lis <b>juste</b>, sans trop m’arrêter, en respectant les <b>points</b>.</p><p>Repères de fin de CP : <b>30 mots</b> par minute sans préparation, <b>50 mots</b> après préparation.</p>'),
 W('cp-lecmin',{text:TXTM},'Ma lecture minute'),
 T('Je me prépare','Avant de relire, je relis une fois avec la voix, puis je lis plus facilement.','<p>Écoute le texte avec la voix. Puis relis-le tout bas.</p><p>'+TXTM+'</p>'),
 W('cp-lecmin',{text:TXTM},'Deuxième essai')
]);

var TXT7='Après l’école, Inès va au parc avec son frère. Elle pose une nappe près d’un arbre. Dans le sac, il y a deux poires, un gâteau et une bouteille d’eau. Un petit chien s’approche. Inès demande à son frère de tenir le sac pendant qu’elle appelle la propriétaire du chien. La dame arrive et remercie les enfants.';
mod('cp-comprend','Je comprends ce que je lis','Le goûter dans le parc','🤔',[
 T('Le goûter dans le parc',TXT7,'<p>Lis le texte, puis réponds aux questions.</p><p>'+TXT7.split('. ').join('.</p><p>')+'</p>'),
 C('Avec qui Inès va-t-elle au parc ?','Avec son frère',['Avec sa maman','Avec son chien'],'Oui : avec son frère.','Relis la première phrase.'),
 C('Où pose-t-elle la nappe ?','Près d’un arbre',['Sur le banc','Dans la cour'],'Oui : près d’un arbre.','Relis la deuxième phrase.'),
 C('Que contient le sac ?','Deux poires, un gâteau et une bouteille d’eau',['Un livre et un ballon','Une pomme et du jus'],'Oui : deux poires, un gâteau et une bouteille d’eau.','Relis la troisième phrase.'),
 C('Quel animal s’approche ?','Un petit chien',['Un chat','Un lapin'],'Oui : un petit chien.','Relis la phrase qui suit le sac.'),
 C('Que fait Inès ?','Elle appelle la propriétaire du chien',['Elle court','Elle mange le gâteau'],'Oui : elle appelle la propriétaire.','Relis l’avant-dernière phrase.'),
 C('Qui remercie les enfants ?','La dame',['Le frère','Le chien'],'Oui : la dame, la propriétaire.','Relis la dernière phrase.'),
 B('Remets les actions dans l’ordre.',['La propriétaire arrive.','Inès va au parc avec son frère.','Un chien s’approche.','Inès appelle la propriétaire.'],'Inès va au parc avec son frère. Un chien s’approche. Inès appelle la propriétaire. La propriétaire arrive.'),
 T('Mon défi','Le matin, Adam met ses bottes. Il prend son manteau et sort dans le jardin. Près du portail, il voit un escargot. Adam le regarde sans le toucher. Puis il rentre aider sa maman à préparer le repas.','<p>Lis ce passage, puis réponds.</p><p>Le matin, Adam met ses bottes. Il prend son manteau et sort dans le jardin. Près du portail, il voit un escargot. Adam le regarde sans le toucher. Puis il rentre aider sa maman à préparer le repas.</p>'),
 C('Que met Adam le matin ?','Ses bottes',['Son bonnet','Ses gants'],'Oui : ses bottes.','Relis la première phrase.'),
 C('Où voit-il l’escargot ?','Près du portail',['Dans la cuisine','Sur le toit'],'Oui : près du portail.','Relis la troisième phrase.'),
 C('Que fait-il après l’avoir regardé ?','Il rentre aider sa maman',['Il le touche','Il joue'],'Oui : il rentre aider sa maman.','Relis la fin.')
]);

/* =============== FRANÇAIS CP — ÉCRITURE =============== */
var HP=function(){var P=[];for(var i=0;i<5;i++){var x=30+i*58;P.push([[x,120],[x,80],[x+10,62],[x+22,60],[x+34,66],[x+44,80],[x+44,120]])}return P};
mod('cp-main','Je prépare ma main','S’installer et s’échauffer','🖐️',[
 T('Avant d’écrire, je m’installe','Les pieds au sol, le dos droit, la feuille un peu penchée, le crayon entre le pouce et l’index.','<p class="big">🦶 Pieds au sol<br>🧍 Dos droit<br>📄 Feuille un peu penchée<br>✏️ Crayon entre le pouce et l’index</p><p>Je tiens mon crayon <b>sans serrer</b>.</p>',['Je tiens mon crayon…','Sans serrer',['Très fort','Du bout des doigts en l’air']]),
 W('cp-trace',{items:[
  {q:'Les petits ponts : repasse sur les ponts.',p:[[[26,130],[26,80],[40,60],[60,58],[78,72],[86,100],[88,130]],[[110,130],[112,80],[126,60],[146,58],[164,72],[172,100],[174,130]],[[196,130],[198,80],[212,60],[232,58],[250,72],[258,100],[260,130]]]},
  {q:'Les boucles : repasse sur les boucles.',p:[[[40,150],[70,100],[96,50],[86,30],[70,40],[70,90],[96,140],[126,150],[156,100],[182,50],[172,30],[156,40],[156,90],[182,140],[212,150]]]},
  {q:'Les vagues : repasse sur la vague.',p:[[[20,100],[50,60],[80,100],[110,140],[140,100],[170,60],[200,100],[230,140],[260,100],[290,70]]]},
  {q:'Les ronds : tourne dans le bon sens, contre les aiguilles d’une montre.',p:[[[160,40],[124,50],[104,90],[116,134],[160,150],[204,134],[216,90],[196,50],[160,40]]]},
  {q:'Les traits droits : repasse de haut en bas.',p:[[[60,30],[60,160]],[[120,30],[120,160]],[[180,30],[180,160]],[[240,30],[240,160]]]}
 ]},'Je m’échauffe du bout du doigt'),
 C('Ma liste de vérification : mes lettres sont…','posées sur la ligne et de même taille',['Toutes de tailles différentes','Au-dessus de la ligne'],'Oui : sur la ligne et de même taille.','Les lettres doivent être régulières.')
]);

var FAM=[
 ['Les lettres rondes','c, o, a, d, g, q',['c','o','a','d','g','q']],
 ['Les lettres avec des ponts','i, u, t, p, n, m',['i','u','t','p','n','m']],
 ['Les lettres avec des boucles','e, l, b, h, k, f',['e','l','b','h','k','f']],
 ['Les lettres qui descendent','j, y, g, z',['j','y','g','z']]];
mod('cp-lettres','Je forme les lettres','Rondes, ponts, boucles','✏️',(function(){var S=[T('Les lettres cursives','En cursive, je relie souvent les lettres d’un même mot. Je les forme dans le bon sens.','<p class="big">ami · lune · vélo · école</p><p>Je m’entraîne par <b>familles</b> : lettres rondes, ponts, boucles, lettres qui descendent.</p>',['Pour chaque lettre, je…','Regarde le modèle puis je trace',['Écris vite','Gomme tout']])];
 FAM.forEach(function(f){S.push(T(f[0],f[0]+' : '+f[1],'<p class="big">'+f[1]+'</p><p>1. Je regarde le modèle.<br>2. Je trace la lettre dans l’air.<br>3. Je trace avec mon doigt.</p>'));S.push(W('cp-trace',{items:f[2].map(function(l){return {l:l,q:'Trace la lettre « '+l+' » : repasse sur le modèle.',fs:150,y:140}})},'Je trace '+f[0].toLowerCase()))});
 S.push(MA('Relie chaque mot à son dessin.',[['ami','🧑‍🤝‍🧑'],['lune','🌙'],['vélo','🚲'],['tomate','🍅']]));
 return S})());

mod('cp-copie','Je copie','Lettres, mots, phrases','📋',[
 T('Ma méthode de copie','1. Je regarde le modèle. 2. Je lis. 3. Je repère majuscules, espaces et points. 4. Je copie un petit morceau. 5. Je relis.','<p class="big">1. Je regarde<br>2. Je lis<br>3. Je repère majuscule, espaces, point<br>4. Je copie un petit morceau<br>5. Je relis</p>',['Avant de copier, je…','Regarde et je lis le modèle',['Écris sans regarder','Gomme']]),
 C('Quelle copie est bonne ? Modèle : « la lune ».','la lune',['lalune','la lunne'],'Oui, c’est la même chose que le modèle.','Compare lettre par lettre.','<p class="big" style="text-align:center">la lune</p>'),
 C('Quelle copie est bonne ? Modèle : « une tomate ».','une tomate',['un tomate','une tomatte'],'Oui, c’est bien copié.','Compare mot par mot.','<p class="big" style="text-align:center">une tomate</p>'),
 B('Copie le groupe de mots : « le petit pirate ».',['pirate','le','petit'],'le petit pirate','Bravo, bien copié !'),
 B('Copie la phrase : « Le chat dort sur le tapis. »',['dort','le','Le','chat','tapis.','sur'],'Le chat dort sur le tapis.','Bravo, copie réussie !'),
 B('Copie la phrase : « Lina pose son sac dans la classe. »',['son','sac','Lina','dans','classe.','la','pose'],'Lina pose son sac dans la classe.','Bravo, copie réussie !'),
 B('Copie la phrase : « Le petit vélo roule près du parc. »',['petit','près','vélo','Le','roule','parc.','du'],'Le petit vélo roule près du parc.','Bravo, copie réussie !'),
 {t:'teach',title:'Je copie avec le clavier',say:'',html:'<div id="mrw"></div>',js:'w-copy',model:'Le chat dort sur le tapis.',groups:['Le chat','dort','sur le tapis.'],inv:['sur','le']},
 C('Après ma copie, je vérifie. Que dois-je regarder ?','Tous les mots, les espaces, la majuscule et le point',['Seulement le dessin','Rien du tout'],'Oui, je vérifie tout.','Compare avec le modèle.')
]);

mod('cp-phr-ecr','J’écris une phrase','Qui ? Que fait-il ? Où ?','🧱',[
 T('Une phrase qui a du sens','Une phrase raconte quelque chose. Elle commence par une majuscule et finit par un point.','<p class="big">Qui ? <b>Lina</b><br>Que fait-il ? <b>lit un livre</b><br>Où ? <b>dans sa chambre</b></p><p>Lina lit un livre dans sa chambre.</p>',['Une phrase finit par…','Un point',['Une majuscule','Un dessin']]),
 B('Construis la phrase : qui, que fait-il, où ?',['dans sa chambre','Lina','lit un livre'],'Lina lit un livre dans sa chambre','Bravo : « Lina lit un livre dans sa chambre. »'),
 B('Construis la phrase : qui, que fait-il, où ?',['sur le tapis','dort','Le chat'],'Le chat dort sur le tapis','Bravo : « Le chat dort sur le tapis. »'),
 B('Construis la phrase : qui, que fait-il, où ?',['dans le parc','roule à vélo','Sami'],'Sami roule à vélo dans le parc','Bravo : « Sami roule à vélo dans le parc. »'),
 B('Remets les mots dans l’ordre.',['au ballon','Sami','joue'],'Sami joue au ballon','Bravo : « Sami joue au ballon. »'),
 B('Remets les mots dans l’ordre.',['sur le banc','le chat','dort'],'le chat dort sur le banc','Bravo : « Le chat dort sur le banc. »'),
 B('Remets les mots dans l’ordre.',['une pomme','mange','Lina'],'Lina mange une pomme','Bravo : « Lina mange une pomme. »'),
 CR('Quelle phrase est bien écrite ?','Le chat dort sur le tapis.',['le chat dort sur le tapis','Le chat dort sur le tapis'],'Oui : majuscule au début et point à la fin.','Cherche la majuscule et le point.'),
 C('Quelle phrase a du sens ?','Sami mange une pomme.',['Pomme Sami le.','Mange pomme dort.'],'Oui, elle a du sens.','Une phrase dit qui fait quoi.')
]);

var SC=[['👦🍎🐴','Un garçon donne une pomme à un cheval.',['Un cheval mange un garçon.','Une pomme dort.']],
 ['👧🌸','La petite fille plante une fleur.',['La petite fille mange une fleur.','Une fleur lit un livre.']],
 ['🐱🛋️','Le chat dort sur le canapé.',['Le chat roule à vélo.','Le canapé mange.']],
 ['👩‍🍳🥧','La cuisinière prépare une tarte.',['La tarte lit un livre.','La cuisinière dort dans la tarte.']],
 ['🐶🦴','Le chien mange un os.',['Le chien lit un os.','L’os mange le chien.']],
 ['🚴‍♂️🌳','Un garçon fait du vélo près d’un arbre.',['Un arbre fait du vélo.','Le garçon dort dans l’arbre.']]];
mod('cp-legende','Je légende une image','Une courte phrase sous l’image','🖼️',[
 T('Une légende','Une légende est une courte phrase qui explique ce que l’on voit sur une image.','<p class="big">Qui ? Que fait-il ? À qui ? Où ?</p><div class="pic">👦🍎🐴</div><p>Le garçon donne une pomme au cheval.</p>',['Une légende explique…','Ce que l’on voit sur l’image',['Une histoire de 10 lignes','Un calcul']]),
 ].concat(SC.map(function(s){return C('Quelle est la bonne légende ?',s[1],s[2],'Oui, la légende correspond à l’image.','Regarde bien l’image : qui ? que fait-il ?','<div class="pic">'+s[0]+'</div>')})));

mod('cp-ecrit','J’écris une ou deux phrases','Le goûter, mon animal, la carte de Rico','✍️',[
 T('Je dis, puis j’écris','Pour écrire, je peux d’abord dire ma phrase à voix haute, puis l’écrire.','<p class="big">Je dis ma phrase à voix haute.<br>Puis je l’écris.</p>'),
 B('Le goûter : écris une phrase avec Lina, pomme, mange, table.',['une pomme','Lina','mange','à table'],'Lina mange une pomme à table','Bravo : « Lina mange une pomme à table. »'),
 B('Mon animal préféré : écris la première phrase.',['est','le chat','Mon animal préféré'],'Mon animal préféré est le chat','Bravo !'),
 B('Écris la deuxième phrase.',['gris','Il','est'],'Il est gris','Bravo : « Il est gris. »'),
 B('Écris la troisième phrase.',['dormir','aime','Il'],'Il aime dormir','Bravo : « Il aime dormir. »'),
 B('Le goûter : écris la première phrase.',['mangent','Les amis','un gâteau'],'Les amis mangent un gâteau','Bravo : « Les amis mangent un gâteau. »'),
 B('Le goûter : écris la deuxième phrase.',['boivent','Ils','du jus'],'Ils boivent du jus','Bravo : « Ils boivent du jus. »'),
 T('La carte de Rico','Écris une petite carte à Rico pour lui raconter une activité que tu aimes.','<p class="big">Bonjour Rico,<br>J’aime…<br>Je fais cette activité…</p><p>Je vais écrire ma carte phrase par phrase.</p><div class="pic">💌</div>'),
 B('Carte de Rico : commence la carte.',['Rico,','Bonjour'],'Bonjour Rico,','Bravo : « Bonjour Rico, »'),
 B('Carte de Rico : écris ce que tu aimes.',['faire du vélo','J’aime'],'J’aime faire du vélo','Bravo : « J’aime faire du vélo. »'),
 B('Carte de Rico : dis où et avec qui.',['dans le parc','Je roule','avec ma famille'],'Je roule dans le parc avec ma famille','Bravo : « Je roule dans le parc avec ma famille. »')
]);

mod('cp-relire','Je relis et je corrige','Chercher et réparer','✅',[
 T('Ma liste de vérification','Je relis lentement. Je regarde la ligne, les espaces, la majuscule, le point et le sens.','<p class="big">✔ J’ai écrit sur la ligne<br>✔ Mes lettres se lisent<br>✔ Il y a des espaces<br>✔ Majuscule au début<br>✔ Point à la fin<br>✔ La phrase a du sens</p>',['Pour corriger, je…','Reprends seulement ce qui gêne',['Gomme toute la phrase','Ne relis pas']]),
 CR('Quelle phrase est bien écrite ?','Lina lit un livre.',['lina lit un livre.','Lina lit un livre'],'Oui, majuscule et point.','Majuscule au début, point à la fin.'),
 CR('Quelle phrase est bien écrite ?','Le chat boit du lait.',['Le chatboit du lait.','Le chat boit du lait'],'Oui, bien séparée et bien terminée.','Regarde les espaces et le point.'),
 TP('Touche le mot qui est mal écrit.',['Sami','joue','au','balon'],3,'Oui : « ballon » s’écrit avec deux l.','Relis chaque mot lentement.'),
 TP('Touche le mot qui est mal écrit.',['Lina','mange','une','pome'],3,'Oui : « pomme » s’écrit avec deux m.','Relis chaque mot lentement.'),
 C('Il manque quelque chose à : « le chat dort sur le tapis »','La majuscule et le point',['Rien','Un dessin'],'Oui : « Le chat dort sur le tapis. »','Regarde le début et la fin.'),
]);

/* =============== FRANÇAIS CP — VOCABULAIRE ET LANGUE =============== */
mod('cp-classe','Les mots de la classe','À quoi ça sert ?','🎒',[
 T('Les mots de la classe','Un cahier, une règle, une gomme, une trousse, un cartable.','<p class="big">🎒 un cartable · 📒 un cahier · 📏 une règle · 🧽 une gomme · 👝 une trousse</p>'+VC('un cahier')+VC('une règle')+VC('une gomme')+VC('une trousse')+VC('un cartable')),
 MA('Relie chaque mot à son utilité.',[['un cahier','écrire ou coller'],['une règle','tracer un trait droit'],['une gomme','effacer un trait de crayon'],['une trousse','ranger ses crayons'],['un cartable','transporter ses affaires']]),
 C('Je sers à couper du papier. Je suis…','des ciseaux',['une gomme','une règle'],'Oui : des ciseaux.','Qui coupe le papier ?'),
 C('On écrit avec moi sur le tableau. Je suis…','une craie',['une gomme','un cahier'],'Oui : une craie.','Qu’utilise-t-on sur le tableau ?'),
 C('Je protège les affaires de l’élève et je vais sur son dos. Je suis…','un cartable',['une trousse','une règle'],'Oui : un cartable.','Il se porte sur le dos.'),
 C('Je sers à colorier. Je suis…','un crayon de couleur',['une gomme','un cartable'],'Oui : un crayon de couleur.','Qui sert à colorier ?'),
 SO('Dans quelle famille va ce mot ?',[['ecole','À l’école'],['manger','À manger']],[['crayon','ecole'],['pomme','manger'],['cahier','ecole'],['banane','manger'],['règle','ecole'],['poire','manger']])
]);

mod('cp-contraire','Contraires et familles de mots','Petit ↔ grand, jardin → jardinier','↔️',[
 T('Les contraires','Deux mots sont contraires quand ils veulent dire le contraire.','<p class="big">grand ↔ petit<br>chaud ↔ froid<br>ouvrir ↔ fermer</p>',['« grand » est le contraire de…','Petit',['Gros','Haut']]),
 MA('Relie les contraires.',[['grand','petit'],['chaud','froid'],['ouvrir','fermer'],['monter','descendre'],['propre','sale'],['vite','lentement']]),
 C('Le sac est lourd. Il n’est pas…','léger',['grand','froid'],'Oui : le contraire de lourd est léger.','Quel est le contraire de lourd ?'),
 C('La soupe est chaude. La glace est…','froide',['grande','lourde'],'Oui : froide.','Quel est le contraire de chaud ?'),
 C('La porte est ouverte. Elle n’est pas…','fermée',['propre','lente'],'Oui : fermée.','Quel est le contraire d’ouverte ?'),
 T('Les mots de la même famille','Des mots de la même famille se ressemblent et ont un lien de sens. Jardin, jardinier, jardiner.','<p class="big">jardin · <b>jardin</b>ier · <b>jardin</b>er</p><p>Ils se ressemblent et ils ont un lien de sens.</p>'),
 C('Quel mot est de la famille de « chant » ?','chanter',['chaussette','chat'],'Oui : chant, chanter, chanson.','Cherche le mot qui commence comme « chant » et qui parle de chanter.'),
 C('Quel mot est de la famille de « lait » ?','laitier',['lapin','lampe'],'Oui : laitier.','Cherche le mot qui parle du lait.'),
 C('Quel mot est de la famille de « dent » ?','dentiste',['danse','dimanche'],'Oui : dentiste.','Cherche le mot qui parle des dents.'),
 C('Complète : fleur → une …','fleuriste',['fleuve','flèche'],'Oui : fleur, fleuriste.','Quel mot ressemble à « fleur » ?'),
 C('Complète : jouer → un …','joueur',['jouet','jus'],'Oui : jouer, joueur.','Quel mot parle de celui qui joue ?')
]);

mod('cp-consignes','Je comprends les consignes','Entoure, relie, coche, barre…','📝',[
 T('Les verbes des consignes','Avant de commencer, je repère le verbe d’action de la consigne.','<p><b>Entoure</b> : un cercle autour de la réponse.<br><b>Relie</b> : un trait entre deux éléments.<br><b>Colorie</b> : remplis avec une couleur.<br><b>Coche</b> : une croix dans la case.<br><b>Complète</b> : ajoute ce qui manque.<br><b>Barre</b> : un trait sur ce qu’on retire.<br><b>Classe</b> : range dans des catégories.</p>',['Avant de commencer, je repère…','Le verbe d’action',['Le dessin','Le titre seulement']]),
 MA('Relie chaque verbe de consigne à ce qu’il faut faire.',[['Entoure','un cercle autour'],['Relie','un trait entre deux'],['Coche','une croix dans la case'],['Barre','un trait sur le mot'],['Colorie','remplis de couleur']]),
 TP('Entoure le mot qui désigne un animal.',['table','lapin','fenêtre'],1,'Oui : « lapin » est un animal.','Quel mot est un animal ?'),
 C('Coche le mot qui désigne un fruit.','poire',['ballon','chaise'],'Oui : « poire » est un fruit.','Quel mot se mange ?'),
 TP('Barre l’intrus : crayon, cahier, cartable, tigre.',['crayon','cahier','cartable','tigre'],3,'Oui : « tigre » n’est pas un objet d’école.','Quel mot n’est pas un objet d’école ?'),
 C('Complète : le contraire de petit, c’est…','grand',['lent','froid'],'Oui : grand.','Quel mot est le contraire de petit ?'),
 C('Consigne : « Relie chaque animal à son petit. » Que faut-il faire ?','Tracer un trait entre chaque animal et son petit',['Colorier les animaux','Barrer les petits'],'Oui : je trace un trait entre chaque animal et son petit.','Que veut dire « relier » ?'),
 C('Consigne : « Colorie les ballons rouges. » Que fais-tu ?','Je mets de la couleur rouge sur des ballons',['Je barre les ballons','Je compte les ballons'],'Oui : je colorie en rouge.','Que veut dire « colorier » ?')
]);

mod('cp-gram','Phrase, nom, verbe','Les premières notions de grammaire','🏷️',[
 T('La phrase','Une phrase raconte quelque chose. Elle commence par une majuscule et se termine par un point.','<p class="big">Le chat dort<b>.</b></p>'),
 C('Laquelle est une phrase complète ?','Le petit chien court.',['Le petit chien','Court petit'],'Oui, elle dit ce que fait le chien.','Une phrase dit ce que l’on fait.'),
 T('Le nom','Le nom désigne une personne, un animal, un lieu ou une chose.','<p>Dans : « La <b>fille</b> regarde le <b>cheval</b>. »</p><p><b>fille</b> : une personne. <b>cheval</b> : un animal.</p>'),
 TM('Touche les noms : Milo mange une pomme dans la cuisine.',['Milo','mange','une','pomme','dans','la','cuisine'],[0,3,6],'Oui : Milo, pomme et cuisine.'),
 T('Le verbe','Le verbe indique souvent ce que fait une personne ou un animal.','<p>Dans : « Le lapin <b>saute</b>. », le verbe est <b>saute</b>.</p>'),
 TP('Touche le verbe : Lina lit un livre.',['Lina','lit','un','livre'],1,'Oui : lit.','Que fait Lina ?'),
 TP('Touche le verbe : Le bébé dort.',['Le','bébé','dort'],2,'Oui : dort.','Que fait le bébé ?'),
 TP('Touche le verbe : Les enfants jouent dans la cour.',['Les','enfants','jouent','dans','la','cour'],2,'Oui : jouent.','Que font les enfants ?')
]);

mod('cp-nombre','Singulier, pluriel, masculin, féminin','Un seul ou plusieurs ?','👫',[
 T('Singulier et pluriel','Au singulier, il y en a un seul. Au pluriel, il y en a plusieurs.','<p class="big">un chat → <b>des</b> chats</p><p>Singulier : un seul. Pluriel : plusieurs.</p>',['Le pluriel, c’est…','Plusieurs',['Un seul','Aucun']]),
 SO('Singulier ou pluriel ?',[['s','Singulier'],['p','Pluriel']],[['une pomme','s'],['des crayons','p'],['le chien','s'],['les cahiers','p'],['un chat','s'],['des chats','p']]),
 T('Masculin et féminin','On met « un » ou « le » devant un nom masculin, « une » ou « la » devant un nom féminin.','<p class="big">le garçon · un chat<br>la fille · une tortue</p>'),
 SO('Masculin ou féminin ?',[['m','Masculin'],['f','Féminin']],[['garçon','m'],['fille','f'],['chat','m'],['tortue','f'],['soleil','m'],['lune','f']]),
 C('Quel mot est au pluriel ?','des chats',['un chat','le chat'],'Oui : « des chats » est au pluriel.','Quel groupe parle de plusieurs chats ?'),
 C('On dit… ?','une tortue',['un tortue','le tortue'],'Oui : une tortue.','Tortue est un nom féminin.')
]);

var AL='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
mod('cp-alpha','L’alphabet','Les lettres dans l’ordre','🔤',[
 T('L’alphabet','Les lettres ont un nom et un ordre. Cet ordre permet de ranger les mots dans un dictionnaire.','<p>Touche une lettre pour l’écouter :</p><div style="display:flex;flex-wrap:wrap;gap:4px">'+AL.map(function(l){return '<button class="vc" data-say="'+l+'" style="min-height:44px;min-width:46px;justify-content:center;padding:6px">'+l+'</button>'}).join('')+'</div>',['L’alphabet a…','26 lettres',['10 lettres','20 lettres']]),
 C('A – B – … – D. Quelle lettre manque ?','C',['E','F'],'Oui : C.','Après B, c’est…'),
 C('G – H – … – J. Quelle lettre manque ?','I',['K','F'],'Oui : I.','Après H, c’est…'),
 C('M – … – O – P. Quelle lettre manque ?','N',['L','Q'],'Oui : N.','Entre M et O…'),
 C('W – X – … – Z. Quelle lettre manque ?','Y',['V','A'],'Oui : Y.','Après X, c’est…'),
 T('Ranger dans l’ordre alphabétique','Je regarde la première lettre. Si c’est la même, je regarde la lettre suivante.','<p class="big">banane · école · lapin · pomme</p><p>Si deux mots commencent par la même lettre, je regarde la <b>lettre suivante</b>.</p>'),
 B('Range les mots dans l’ordre alphabétique.',['pomme','école','banane','lapin'],'banane école lapin pomme','Oui : B, E, L, P.'),
 B('Range les mots dans l’ordre alphabétique.',['moto','maison','malade'],'maison malade moto','Oui : « ma… », puis « mo… ».'),
 B('Range les mots dans l’ordre alphabétique.',['tapis','chat','vélo','lune'],'chat lune tapis vélo','Oui : C, L, T, V.')
]);

mod('cp-maj','Majuscules et minuscules','Les grandes et les petites lettres','🔠',[
 T('Deux sortes de lettres','Chaque lettre existe en majuscule, la grande, et en minuscule, la petite.','<p class="big">A a · B b · D d · G g · R r</p><p>La <b>majuscule</b> est la grande lettre.<br>La <b>minuscule</b> est la petite lettre.</p>',['La grande lettre, c’est…','La majuscule',['La minuscule','Le point']]),
 MA('Relie chaque majuscule à sa minuscule.',[['A','a'],['D','d'],['R','r']]),
 SO('Majuscule ou minuscule ?',[['maj','Majuscule'],['min','Minuscule']],[['F','maj'],['h','min'],['Q','maj'],['a','min'],['M','maj'],['t','min'],['B','maj'],['e','min']]),
 T('Une majuscule au début de la phrase','Une phrase commence toujours par une majuscule et finit par un point.','<p class="big"><b>L</b>e chat dort.</p><p>La première lettre est grande. À la fin, il y a un point.</p>',['Une phrase commence par…','Une majuscule',['Un point','Une minuscule']]),
 CR('Quelle phrase commence bien ?','Rico joue au ballon.',['rico joue au ballon.','rICO joue au ballon.'],'Oui : la majuscule au début.','Regarde la première lettre.'),
 CR('Quelle phrase est bien écrite ?','Lina lit un livre.',['lina lit un livre.','Lina lit un livre'],'Oui : majuscule au début et point à la fin.','Cherche la majuscule et le point.'),
 T('Une majuscule aux prénoms et aux noms de lieux','Les prénoms et les noms de villes prennent une majuscule.','<p class="big">Lina · Sami · Paris · Lyon</p><p>Un prénom, un nom de ville : <b>majuscule</b>.</p>',['Mon prénom commence par…','Une majuscule',['Une minuscule','Un point']]),
 CR('Quel prénom est bien écrit ?','Sami',['sami','sAmi'],'Oui : Sami.','Un prénom commence par une majuscule.'),
 CR('Quel nom de ville est bien écrit ?','Lyon',['lyon','lYon'],'Oui : Lyon.','Une ville prend une majuscule.'),
 CR('Dans « Inès a un chat. », quelle lettre est une majuscule ?','I',['n','c'],'Oui : le I de Inès.','C’est la première lettre de la phrase.'),
 CR('Dans « Le Chat dort. », quelle est l’erreur ?','« Chat » n’a pas besoin de majuscule',['« Le » doit être en minuscule','Il n’y a pas d’erreur'],'Oui : « chat » s’écrit avec une minuscule.','Un nom ordinaire s’écrit avec une minuscule.'),
 B('Remets les mots dans l’ordre.',['livre.','Lina','un','lit'],'Lina lit un livre.','Oui : « Lina lit un livre. »'),
 B('Remets les mots dans l’ordre.',['dort.','Le','sur','tapis','chat','le'],'Le chat dort sur le tapis.','Oui : « Le chat dort sur le tapis. »')
]);

/* =============== MATHS CP =============== */
var DZ=function(d,u){var h='<div style="background:var(--card);border:2px solid var(--line);border-radius:16px;padding:8px 12px;margin:6px 0;text-align:center">';for(var i=0;i<d;i++)h+='<span style="display:inline-block;border:2px solid #2459e6;background:#dbe7ff;border-radius:10px;padding:2px 6px;margin:3px;font-weight:800">1 dizaine<br><span style="font-size:.9rem">🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵</span></span>';if(u){h+='<span style="display:inline-block;margin:3px;font-size:1.3rem">'+new Array(u+1).join('🔴')+'</span>'}return h+'</div>'};
var DOTS=function(n,e){return '<div style="font-size:1.5rem;line-height:1.3;text-align:center">'+new Array(n+1).join(e||'🔴')+'</div>'};
var PA=function(a,b,op){var x=String(a),y=String(b),w=Math.max(x.length,y.length),pd=function(t,n){while(t.length<n)t=' '+t;return t};return '<pre style="display:inline-block;margin:6px auto;font:800 2.2rem/1.15 \'Courier New\',monospace;text-align:right;background:#fff;border:2px solid var(--line);border-radius:14px;padding:8px 18px">  '+pd(x,w)+'\n'+(op||'+')+' '+pd(y,w)+'\n'+new Array(w+3).join('─')+'</pre>'};
var ri=function(a,b){return a+Math.floor(rnd()*(b-a+1))};
var pick=function(a,n){return shufS(a).slice(0,n)};

mod('cp-n20','Les nombres jusqu’à 20','Compter, lire et construire pas à pas','🌱',(function(){
 var ROWS=function(n,e){e=e||'🔴';var h='<div style="text-align:center;font-size:1.5rem;line-height:1.35;margin:6px 0">';h+=new Array(Math.min(n,10)+1).join(e);if(n>10)h+='<br>'+new Array(n-10+1).join(e);return h+'</div>'};
 var S=[T('Je compte jusqu’à 10','Un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.','<p class="big">1 · 2 · 3 · 4 · 5 · 6 · 7 · 8 · 9 · 10</p>'+ROWS(10),['Après 9, il y a…','10',['8','11']]),
  T('De 11 à 16','Après dix, je continue : onze, douze, treize, quatorze, quinze, seize. Treize, c’est dix et trois.','<p class="big">11 onze · 12 douze · 13 treize<br>14 quatorze · 15 quinze · 16 seize</p>'+ROWS(13),['Treize, c’est dix et…','3',['1','13']]),
  T('De 17 à 20','Dix-sept, dix-huit, dix-neuf, vingt. Dix-sept, c’est dix et sept.','<p class="big">17 dix-sept · 18 dix-huit<br>19 dix-neuf · 20 vingt</p>'+ROWS(17),['Après 19, il y a…','20',['18','21']])];
 [12,15,17,14,19,16,20,13].forEach(function(n){S.push(N('Combien y a-t-il de ronds ?',n,'Dix sur la première ligne, puis compte les autres.','Oui : '+n+'.',ROWS(n),'Je compte'))});
 [['11 – 12 – ? – 14',13],['15 – 16 – ? – 18',17],['16 – ? – 18 – 19',17],['? – 12 – 13 – 14',11],['17 – 18 – 19 – ?',20],['13 – 14 – ? – 16',15]].forEach(function(q){S.push(N('Quel nombre manque ? '+q[0],q[1],'On compte de 1 en 1.','Oui : '+q[1]+'.','','Je complète la suite'))});
 S.push(N('Quel nombre vient juste après 15 ?',16,'Après 15, on dit seize.','Oui : 16.','','Avant, après'));
 S.push(N('Quel nombre vient juste avant 20 ?',19,'Juste avant vingt.','Oui : 19.','','Avant, après'));
 S.push(N('Quel nombre vient juste avant 13 ?',12,'Juste avant treize.','Oui : 12.','','Avant, après'));
 S.push(N('Compte à rebours : 20 – 19 – ? – 17',18,'On recule de 1 en 1.','Oui : 18.','','Compte à rebours'));
 S.push(N('Dix et sept : quel nombre ?',17,'10 + 7.','Oui : 17.','','Quel nombre ?'));
 S.push(N('Dix et quatre : quel nombre ?',14,'10 + 4.','Oui : 14.','','Quel nombre ?'));
 S.push(N('Une dizaine et 9 unités : quel nombre ?',19,'10 + 9.','Oui : 19.','','Quel nombre ?'));
 S.push(C('Quel nombre s’écrit « seize » ?','16',['6','60'],'Oui : 16.','Seize, c’est dix et six.'));
 S.push(C('Quel nombre s’écrit « quatorze » ?','14',['4','40'],'Oui : 14.','Quatorze, c’est dix et quatre.'));
 S.push(C('Quel nombre est le plus grand ?','18',['13','15'],'Oui : 18.','Compare les unités après la dizaine.'));
 S.push(B('Range du plus petit au plus grand.',['17','12','19','14'],'12 14 17 19','Oui : 12 – 14 – 17 – 19.','Le plus petit en premier.'));
 S.push(B('Range du plus grand au plus petit.',['11','18','15','20'],'20 18 15 11','Oui : 20 – 18 – 15 – 11.','Le plus grand en premier.'));
 return S})(),MT);

mod('cp-diz','Les dizaines et les unités','Construire et décomposer un nombre','🔟',(function(){
 var S=[T('Une dizaine, c’est 10 unités','Une dizaine, c’est un groupe de dix unités. Vingt-quatre, c’est deux dizaines et quatre unités.','<p class="big">1 dizaine = 10 unités</p>'+DZ(2,4)+'<p>24 = 2 dizaines et 4 unités = <b>20 + 4</b></p>',['1 dizaine, c’est…','10 unités',['5 unités','100 unités']]),
  T('D’autres exemples','50 c’est 5 dizaines et 0 unité. 73 c’est 7 dizaines et 3 unités.','<p>50 = 5 dizaines et 0 unité.</p><p>73 = 7 dizaines et 3 unités = <b>70 + 3</b>.</p>'+DZ(7,3))];
 [[36,3,6],[52,5,2],[80,8,0],[47,4,7],[91,9,1],[68,6,8],[34,3,4],[75,7,5]].forEach(function(x){S.push(N('Combien de dizaines dans '+x[0]+' ?',x[1],x[0]+', c’est '+x[1]+' dizaines et '+x[2]+' unités.','Oui : '+x[1]+' dizaines.',DZ(x[1],x[2]),'Dizaines'));S.push(N('Combien d’unités dans '+x[0]+' ?',x[2],x[0]+', c’est '+x[1]+' dizaines et '+x[2]+' unités.','Oui : '+x[2]+' unités.',DZ(x[1],x[2]),'Unités'))});
 [[2,4,24],[5,0,50],[7,3,73],[4,7,47],[6,1,61],[9,9,99]].forEach(function(x){S.push(N(x[0]+' dizaines et '+x[1]+' unité'+(x[1]>1?'s':'')+' : quel nombre ?',x[2],x[0]+' dizaines = '+x[0]*10+', puis j’ajoute '+x[1]+'.','Oui : '+x[0]*10+' + '+x[1]+' = '+x[2]+'.',DZ(x[0],x[1]),'Quel nombre ?'))});
 [[36,6],[52,50],[80,0],[47,7],[93,90]].forEach(function(x,i){S.push(N(i%2?x[0]+' = '+Math.floor(x[0]/10)*10+' + ?':x[0]+' = ? + '+x[0]%10,i%2?x[0]%10:Math.floor(x[0]/10)*10,x[0]+' = '+Math.floor(x[0]/10)*10+' + '+x[0]%10+'.','Oui !','', 'Décomposer'))});
 S.push(N('Je suis entre 60 et 70. J’ai 3 unités. Quel est mon nombre ?',63,'60 + 3.','Oui : 63.','','Nombre mystère'));
 S.push(N('Je viens juste avant 90. Quel est mon nombre ?',89,'Quel nombre est juste avant 90 ?','Oui : 89.','','Nombre mystère'));
 S.push(N('Je viens juste après 58. Quel est mon nombre ?',59,'Quel nombre est juste après 58 ?','Oui : 59.','','Nombre mystère'));
 S.push(N('100 = ? dizaines',10,'10 dizaines, c’est 100.','Oui : 100 = 10 dizaines.','','Dizaines'));
 return S})(),MT);

mod('cp-compter','Compter jusqu’à 100','De 1 en 1, 2 en 2, 5 en 5, 10 en 10','🔢',(function(){
 var S=[T('Je compte et je repère','Les nombres augmentent quand j’avance sur la droite numérique. Quarante, quarante et un, quarante-deux…','<p class="big">40 → 41 → 42 → … → 49 → 50</p><p>Entre deux dizaines, je compte les unités.</p>',['Après 49, il y a…','50',['39','40']]),
  T('Compter de 2 en 2, de 5 en 5, de 10 en 10','Je peux compter de 2 en 2, de 5 en 5 ou de 10 en 10.','<p class="big">2 – 4 – 6 – 8 – 10<br>5 – 10 – 15 – 20<br>10 – 20 – 30 – 40</p>')];
 var Q=[['27 – 28 – ? – 30 – 31',29,'de 1 en 1'],['47 – 48 – ? – 50',49,'de 1 en 1'],['32 – 34 – ? – 38',36,'de 2 en 2'],['12 – 14 – ? – 18 – 20',16,'de 2 en 2'],['45 – 50 – ? – 60',55,'de 5 en 5'],['35 – 40 – ? – 50 – 55',45,'de 5 en 5'],['20 – 30 – ? – 50',40,'de 10 en 10'],['40 – 50 – ? – 70 – 80',60,'de 10 en 10'],['66 – 67 – ? – 69',68,'de 1 en 1'],['84 – 86 – ? – 90',88,'de 2 en 2'],['70 – 75 – ? – 85',80,'de 5 en 5'],['10 – 20 – 30 – ? – 50',40,'de 10 en 10']];
 Q.forEach(function(q){S.push(N('Quel nombre manque ? '+q[0],q[1],'On compte '+q[2]+'.','Oui : '+q[1]+'.','','Je complète la suite'))});
 S.push(N('Quel nombre vient juste après 69 ?',70,'Après 69, on change de dizaine.','Oui : 70.','','Avant, après'));
 S.push(N('Quel nombre vient juste avant 80 ?',79,'Juste avant 80.','Oui : 79.','','Avant, après'));
 S.push(N('Quel nombre vient juste après 99 ?',100,'Après 99, on arrive à cent.','Oui : 100.','','Avant, après'));
 return S})(),MT);

mod('cp-compar','Comparer et ranger','Plus petit, plus grand, égal','⚖️',(function(){
 var S=[T('Je compare les nombres','Je compare d’abord les dizaines. Si elles sont identiques, je compare les unités.','<p class="big">28 &lt; 32</p><p>Je regarde d’abord les <b>dizaines</b> : 2 dizaines contre 3 dizaines.</p><p>Si elles sont pareilles, je regarde les <b>unités</b>.</p>',['Je compare d’abord…','Les dizaines',['Les unités','Rien']]),
  T('Les signes','Le signe plus petit, plus grand, égal.','<p class="big">&lt; plus petit · &gt; plus grand · = égal</p><p>La « bouche » s’ouvre vers le <b>plus grand</b>.</p>')];
 [[28,32,'<'],[45,41,'>'],[67,67,'='],[80,79,'>'],[53,35,'>'],[19,21,'<'],[74,74,'='],[60,59,'>'],[38,83,'<']].forEach(function(x){S.push(C(x[0]+' … '+x[1]+' : quel signe ?',x[2],['<','>','='].filter(function(s){return s!==x[2]}),'Oui : '+x[0]+' '+x[2]+' '+x[1]+'.','Compare d’abord les dizaines.'))});
 [[54,19,42,36],[72,27,62,36,29],[81,18,48,84,14],[90,9,59,95]].forEach(function(a){var r=a.slice().sort(function(x,y){return x-y});S.push(B('Range du plus petit au plus grand.',a.map(String),r.join(' '),'Oui : '+r.join(' – ')+'.','Le plus petit en premier.'))});
 [[67,71,58],[39,93,49]].forEach(function(a){var r=a.slice().sort(function(x,y){return y-x});S.push(B('Range du plus grand au plus petit.',a.map(String),r.join(' '),'Oui : '+r.join(' – ')+'.','Le plus grand en premier.'))});
 return S})(),MT);

mod('cp-c10','Les compléments à 10','Quel nombre faut-il ajouter pour faire 10 ?','🤝',(function(){
 var S=[T('Un complément à 10','Un complément à 10, c’est le nombre qu’il faut ajouter pour obtenir 10.','<p>J’ai 6 jetons. Combien m’en manque-t-il pour avoir 10 ?</p>'+DOTS(6,'🔴')+DOTS(4,'⚪')+'<p class="big">6 + 4 = 10</p>',['6 + ? = 10','4',['3','5']]),
  T('Les paires qui font 10','0 et 10, 1 et 9, 2 et 8, 3 et 7, 4 et 6, 5 et 5.','<p class="big">1 + 9 · 2 + 8 · 3 + 7<br>4 + 6 · 5 + 5</p><p>Les deux nombres d’une paire font toujours <b>10</b>.</p>')];
 [[3,7],[4,6],[7,3],[1,9],[8,2],[6,4],[9,1],[2,8],[5,5],[0,10],[10,0]].forEach(function(x){S.push(N('Le partenaire de '+x[0]+' pour faire 10 ?',x[1],x[0]+' + ? = 10','Oui : '+x[0]+' + '+x[1]+' = 10.',DOTS(x[0],'🔴'),'Partenaire de 10'))});
 [[1,9,'a'],[3,7,'a'],[5,5,'a'],[7,3,'a'],[9,1,'a'],[6,4,'b'],[2,8,'b'],[8,2,'b']].forEach(function(x){S.push(N(x[2]==='a'?x[0]+' + ? = 10':'? + '+x[0]+' = 10',x[1],'Cherche le nombre qui complète pour faire 10.','Oui : '+x[1]+'.','','Je complète'))});
 [[4,6],[6,4],[2,8],[7,3]].forEach(function(x){S.push(N('10, c’est '+x[0]+' et combien ?',x[1],x[0]+' + ? = 10','Oui : 10, c’est '+x[0]+' et '+x[1]+'.','','Sans jetons'))});
 S.push(MA('Relie chaque nombre à son partenaire de 10.',[['1','9'],['3','7'],['4','6'],['5','5'],['8','2']]));
 S.push(MA('Relie chaque nombre à son partenaire de 10.',[['2','8'],['6','4'],['7','3'],['9','1'],['0','10']]));
 return S})(),MT);

mod('cp-dec10','Décomposer jusqu’à 10','Plusieurs façons de fabriquer un nombre','✂️',(function(){
 var S=[T('Décomposer un nombre','Décomposer un nombre, c’est le séparer en deux parties.','<p class="big">7 = 5 + 2<br>7 = 6 + 1<br>7 = 4 + 3</p><p>L’ordre peut changer, le total reste le même : 3 + 5 = 8 et 5 + 3 = 8.</p>',['7 = 5 + ?','2',['1','3']]),
  T('Toutes les façons de faire 8','0 + 8, 1 + 7, 2 + 6, 3 + 5, 4 + 4 et dans l’autre sens.','<p class="big">0+8 · 1+7 · 2+6<br>3+5 · 4+4<br>5+3 · 6+2 · 7+1 · 8+0</p>')];
 [[6,0],[6,1],[6,2],[6,3],[6,4],[5,2],[8,3],[8,5],[9,4],[9,6],[7,3],[7,6],[10,4],[10,7],[4,1],[8,6]].forEach(function(x){S.push(N(x[0]+' = '+x[1]+' + ?',x[0]-x[1],x[0]+' − '+x[1]+' = ?','Oui : '+x[0]+' = '+x[1]+' + '+(x[0]-x[1])+'.',DOTS(x[0],'🔵'),'Je décompose '+x[0]))});
 S.push(C('Quelle décomposition de 9 est juste ?','4 + 5',['4 + 4','6 + 4'],'Oui : 4 + 5 = 9.','Additionne les deux nombres.'));
 S.push(C('Quelle décomposition de 7 est juste ?','3 + 4',['3 + 3','5 + 4'],'Oui : 3 + 4 = 7.','Additionne les deux nombres.'));
 S.push(TM('Touche toutes les façons de faire 8.',['5 + 3','4 + 4','6 + 3','7 + 1','2 + 5'],[0,1,3],'Oui : 5+3, 4+4 et 7+1 font 8.'));
 return S})(),MT);

mod('cp-dec20','Décomposer jusqu’à 20','13 = 10 + 3, mais aussi 8 + 5','🧮',(function(){
 var S=[T('Je pars de 10','Pour décomposer jusqu’à 20, je peux partir de 10. Treize, c’est dix plus trois.','<p class="big">13 = 10 + 3</p><p>Je peux aussi faire 13 autrement :</p><p>13 = 8 + 5 · 13 = 9 + 4 · 13 = 7 + 6</p>',['13 = 10 + ?','3',['2','4']])];
 [[12,10],[12,9],[12,8],[12,6],[15,10],[15,8],[15,7],[15,9],[14,10],[14,9],[17,10],[17,8],[16,10],[16,7],[18,10],[18,9],[19,10],[20,10],[20,12],[20,15],[20,18],[20,16]].forEach(function(x){S.push(N(x[0]+' = '+x[1]+' + ?',x[0]-x[1],x[0]+' − '+x[1]+' = ?','Oui : '+x[0]+' = '+x[1]+' + '+(x[0]-x[1])+'.','','Je décompose '+x[0]))});
 S.push(TM('Touche toutes les façons de faire 15.',['10 + 5','8 + 7','9 + 5','7 + 8','6 + 8'],[0,1,3],'Oui : 10+5, 8+7 et 7+8 font 15.'));
 return S})(),MT);

mod('cp-mag','Le magasin de Rico','Combien manque-t-il ?','🛒',(function(){
 var S=[T('Rico fait ses achats','Rico achète un objet. Il a déjà une partie de la somme. Combien lui manque-t-il ?','<div class="pic">🛍️🐸</div><p class="big">Un objet coûte 10 €. Rico a 2 €. Il lui manque 8 €.</p><p>2 + ? = 10</p>')];
 [2,5,7,9,4,6,3,8].forEach(function(a){S.push(N('Un objet coûte 10 €. Rico a '+a+' €. Combien lui manque-t-il ?',10-a,a+' + ? = 10','Oui : il manque '+(10-a)+' €.','<div class="pic">🛒</div>','Le magasin'))});
 [10,12,15,18,14,16,19].forEach(function(a){S.push(N('Un jouet coûte 20 €. Rico a '+a+' €. Combien lui manque-t-il ?',20-a,a+' + ? = 20','Oui : il manque '+(20-a)+' €.','<div class="pic">🧸</div>','Le jouet'))});
 return S})(),MT);

mod('cp-sens','Ajouter ou enlever ?','Le sens de l’addition et de la soustraction','➕',(function(){
 var S=[T('L’addition','J’additionne quand je réunis ou quand j’ajoute une quantité.','<p>J’ai 4 billes. On m’en donne 3.</p>'+DOTS(4,'🔵')+DOTS(3,'🟢')+'<p class="big">4 + 3 = 7</p>',['J’additionne quand je…','Réunis ou j’ajoute',['Enlève','Partage']]),
  T('La soustraction','Je soustrais quand j’enlève une quantité ou quand je cherche ce qui reste.','<p>J’ai 9 billes. J’en donne 2. Il m’en reste ?</p><p class="big">9 − 2 = 7</p>',['Je soustrais quand j’…','Enlève ou je cherche ce qui reste',['Ajoute','Réunis']])];
 [['Lina a 5 cartes. Sami lui en donne 4. Combien Lina a-t-elle de cartes maintenant ?','5 + 4','5 − 4',9],['Adam a 8 cubes. Il en range 3. Combien lui en reste-t-il ?','8 − 3','8 + 3',5],['Il y a 6 enfants dans la cour et 2 arrivent. Combien y a-t-il d’enfants ?','6 + 2','6 − 2',8]].forEach(function(p){S.push(C(p[0]+' Quel calcul ?',p[1],[p[2]],'Oui : '+p[1]+'.','Ajoute-t-on ou enlève-t-on ?'));S.push(N(p[0],p[3],'Fais le calcul '+p[1]+'.','Oui : '+p[1]+' = '+p[3]+'.','','Je calcule'))});
 [['5 + 3',8],['9 − 4',5],['7 + 6',13],['14 − 2',12],['8 + 8',16],['15 − 5',10],['6 + 9',15],['12 − 3',9]].forEach(function(x){S.push(N('Complète : '+x[0]+' = ?',x[1],'Calcule doucement.','Oui : '+x[0]+' = '+x[1]+'.','','Je calcule'))});
 return S})(),MT);

mod('cp-addp','L’addition posée','Les unités sous les unités','📝',(function(){
 var S=[T('J’aligne unités et dizaines','Les unités vont sous les unités. Les dizaines vont sous les dizaines.','<p>23 + 14</p>'+PA(23,14)+'<p>Unités : 3 + 4 = 7. Dizaines : 2 + 1 = 3. Donc <b>23 + 14 = 37</b>.</p>',['Les unités vont…','Sous les unités',['Sous les dizaines','N’importe où']])];
 [[23,14],[32,16],[41,27],[25,34],[43,25],[52,16],[31,47],[60,28],[14,35],[72,16],[53,24],[41,38]].forEach(function(x){S.push(N('Pose et calcule : '+x[0]+' + '+x[1],x[0]+x[1],'Unités : '+x[0]%10+' + '+x[1]%10+'. Dizaines : '+Math.floor(x[0]/10)+' + '+Math.floor(x[1]/10)+'.','Oui : '+x[0]+' + '+x[1]+' = '+(x[0]+x[1])+'.',PA(x[0],x[1]),'Addition posée'))});
 [[24,13,'Noé a 24 cartes. Il en reçoit 13. Combien en a-t-il maintenant ?'],[31,25,'Il y a 31 billes rouges et 25 billes bleues. Combien de billes ?']].forEach(function(x){S.push(N(x[2],x[0]+x[1],x[0]+' + '+x[1],'Oui : '+(x[0]+x[1])+'.','','Problème'))});
 S.push(N('Lina a 38 perles. Elle en utilise 12. Combien lui en reste-t-il ?',26,'38 − 12 = ?','Oui : 38 − 12 = 26.','','Problème'));
 return S})(),MT);

mod('cp-addr','Addition avec retenue','Quand les unités dépassent 10 (pour aller plus loin)','🔁',(function(){
 var S=[T('Je reporte une dizaine','Dans 28 plus 17, les unités font 15. J’écris 5 et je retiens 1 dizaine.','<p>28 + 17</p>'+PA(28,17)+'<p>8 + 7 = 15 : j’écris <b>5</b> et je <b>reporte 1 dizaine</b>. Puis 2 + 1 + 1 = 4 dizaines. <b>28 + 17 = 45</b>.</p>',['Quand les unités font 15, j’écris…','5 et je reporte 1',['15','1 et je reporte 5']]),
  T('Je vérifie','Le résultat doit être plus grand que chaque nombre de départ.','<p>28 + 17 = 45 : 45 est plus grand que 28 et plus grand que 17.</p>')];
 [[28,17],[36,28],[48,16],[57,25],[19,23],[35,46],[27,15],[49,18],[38,24],[66,17]].forEach(function(x){S.push(N('Pose et calcule : '+x[0]+' + '+x[1],x[0]+x[1],'Unités : '+x[0]%10+' + '+x[1]%10+'. Pense à la retenue.','Oui : '+x[0]+' + '+x[1]+' = '+(x[0]+x[1])+'.',PA(x[0],x[1]),'Avec retenue'))});
 return S})(),MT);

mod('cp-mult','Des groupes égaux','Additionner plusieurs fois la même quantité','✖️',(function(){
 var S=[T('Plusieurs groupes égaux','Trois assiettes avec deux biscuits dans chaque assiette : deux plus deux plus deux, six.','<p>3 assiettes, 2 biscuits dans chaque assiette :</p><p class="big">🍪🍪 &nbsp; 🍪🍪 &nbsp; 🍪🍪</p><p class="big">2 + 2 + 2 = 6</p><p>3 groupes de 2 font 6.</p>',['3 groupes de 2 font…','6',['5','8']])];
 [['4 sacs contiennent chacun 2 pommes. Combien de pommes en tout ?',8,'2 + 2 + 2 + 2','🍎'],['3 boîtes contiennent chacune 5 crayons. Combien de crayons ?',15,'5 + 5 + 5','✏️'],['2 assiettes de 4 biscuits : combien de biscuits ?',8,'4 + 4','🍪'],['5 paquets de 2 cartes : combien de cartes ?',10,'2 + 2 + 2 + 2 + 2','🃏'],['3 rangées de 3 fleurs : combien de fleurs ?',9,'3 + 3 + 3','🌷'],['2 mains de 5 doigts : combien de doigts ?',10,'5 + 5','✋'],['4 paniers de 3 fruits : combien de fruits ?',12,'3 + 3 + 3 + 3','🍓'],['3 vélos ont chacun 2 roues. Combien de roues ?',6,'2 + 2 + 2','🚲']].forEach(function(x){S.push(N(x[0],x[1],'Écris l’addition : '+x[2]+'.','Oui : '+x[2]+' = '+x[1]+'.','<div class="pic">'+x[3]+'</div>','Groupes égaux'))});
 return S})(),MT);

/* ---- Problèmes ---- */
mod('cp-pb1','Problèmes : ajouter ou enlever','« Ils arrivent » ou « il en reste » ?','🧩',(function(){
 var S=[T('Ajout ou retrait ?','Je cherche si la quantité augmente ou diminue.','<p><b>On en ajoute</b>, <b>ils arrivent</b> : souvent une addition ➕</p><p><b>On en enlève</b>, <b>ils partent</b>, <b>il en reste</b> : souvent une soustraction ➖</p>',['« Ils arrivent », c’est souvent…','Une addition',['Une soustraction','Une division']])];
 [['Il y a 7 oiseaux dans un arbre. 3 autres arrivent. Combien y en a-t-il ?',10,'7 + 3','🐦'],['Noé a 12 autocollants. Il en donne 4. Combien lui en reste-t-il ?',8,'12 − 4','⭐'],['Il y a 9 enfants dans la cour. 5 enfants arrivent. Combien y a-t-il d’enfants ?',14,'9 + 5','🧒'],['Sami a 15 billes. Il en perd 6. Combien lui en reste-t-il ?',9,'15 − 6','🔵'],['Dans un bus, il y a 8 personnes. 4 personnes montent. Combien y en a-t-il ?',12,'8 + 4','🚌'],['Lina a 18 perles. Elle en utilise 10. Combien lui en reste-t-il ?',8,'18 − 10','📿'],['Dans un panier, il y a 6 pommes. On en ajoute 7. Combien y en a-t-il ?',13,'6 + 7','🍎'],['Il y avait 16 gâteaux. Les enfants en mangent 9. Combien en reste-t-il ?',7,'16 − 9','🧁']].forEach(function(p){S.push(C(p[0]+' Quelle opération ?',p[2],[p[2].indexOf('+')>0?p[2].replace('+','−'):p[2].replace('−','+')],'Oui : '+p[2]+'.','Ajoute-t-on ou enlève-t-on ?','<div class="pic">'+p[3]+'</div>'));S.push(N(p[0],p[1],p[2]+' = ?','Oui : '+p[2]+' = '+p[1]+'.','<div class="pic">'+p[3]+'</div>','Problème'))});
 return S})(),MT);

mod('cp-pb2','Problèmes : comparer','Combien de plus ?','⚖️',(function(){
 var S=[T('Comparer deux quantités','Je cherche l’écart entre deux quantités : je soustrais.','<p>Mia a 8 autocollants et Léo en a 5.</p><p>Combien Mia en a-t-elle de plus ?</p><p class="big">8 − 5 = 3</p><p>L’écart, c’est ce qui sépare les deux quantités.</p>',['Pour trouver l’écart, je…','Soustrais',['Additionne','Partage']])];
 [['Zoé a 9 billes. Tom en a 6. Combien Zoé en a-t-elle de plus ?',3,'9 − 6'],['Un panier contient 13 pommes et un autre 8. Combien le premier en contient-il de plus ?',5,'13 − 8'],['Léa a 12 cartes. Hugo en a 7. Combien Léa en a-t-elle de plus ?',5,'12 − 7'],['Une règle mesure 20 cm et un crayon 12 cm. Combien la règle mesure-t-elle de plus ?',8,'20 − 12'],['Dans une classe, il y a 15 filles et 11 garçons. Combien y a-t-il de filles en plus ?',4,'15 − 11'],['Alice a 17 jetons. Bob en a 9. Combien Alice en a-t-elle de plus ?',8,'17 − 9']].forEach(function(p){S.push(N(p[0],p[1],p[2]+' = ?','Oui : '+p[2]+' = '+p[1]+'.','','Écart'))});
 return S})(),MT);

mod('cp-pb3','Problèmes : groupes et partages','Tours de 3, partage équitable','🍪',(function(){
 var S=[T('Faire des groupes','Je rassemble les objets par paquets égaux. Combien de paquets ?','<p>12 cubes, des tours de 3 cubes :</p><p class="big">🧱🧱🧱 · 🧱🧱🧱 · 🧱🧱🧱 · 🧱🧱🧱</p><p>On peut construire <b>4 tours</b>.</p>'),
  T('Partager équitablement','Je distribue la même quantité à chacun, un objet après l’autre.','<p>8 biscuits entre 2 enfants :</p><p class="big">🍪🍪🍪🍪 &nbsp; 🍪🍪🍪🍪</p><p>Chacun reçoit <b>4</b> biscuits.</p>',['Partager équitablement, c’est donner…','La même quantité à chacun',['Plus à un','Rien']])];
 [['Il y a 12 cubes. On fait des tours de 3 cubes. Combien de tours ?',4,'🧱'],['On range 10 crayons par groupes de 2. Combien de groupes ?',5,'✏️'],['Il y a 15 billes. On les range par sacs de 5. Combien de sacs ?',3,'🔵'],['Il y a 8 pommes. On les range par paniers de 4. Combien de paniers ?',2,'🍎'],['On partage 8 biscuits entre 2 enfants, équitablement. Combien chacun reçoit-il ?',4,'🍪'],['On partage 12 jetons entre 3 enfants. Combien chacun reçoit-il ?',4,'⚪'],['On partage 10 bonbons entre 2 amis. Combien chacun reçoit-il ?',5,'🍬'],['On partage 9 cartes entre 3 enfants. Combien chacun reçoit-il ?',3,'🃏']].forEach(function(p){S.push(N(p[0],p[1],'Dessine les paquets ou les parts, puis compte.','Oui : '+p[1]+'.','<div class="pic">'+p[2]+'</div>','Problème'))});
 return S})(),MT);

/* ---- Mesures et durées ---- */
var RULER=function(n){var s='<svg viewBox="0 0 330 90" style="width:100%;max-width:340px"><rect x="10" y="40" width="310" height="34" rx="4" fill="#ffe08a" stroke="#c9a227" stroke-width="2"/>';for(var i=0;i<=15;i++){var x=18+i*19;s+='<line x1="'+x+'" y1="40" x2="'+x+'" y2="'+(i%5?54:60)+'" stroke="#6b5200" stroke-width="2"/><text x="'+x+'" y="72" font-size="11" font-weight="800" text-anchor="middle" fill="#6b5200">'+i+'</text>'}s+='<rect x="18" y="12" width="'+(n*19)+'" height="18" rx="4" fill="#e0393f"/><polygon points="'+(18+n*19)+',12 '+(18+n*19+14)+',21 '+(18+n*19)+',30" fill="#f2b3a6"/></svg>';return s};
mod('cp-long','Mesurer des longueurs','La règle graduée et les centimètres','📏',(function(){
 var S=[T('Je mesure avec la règle','Je place le début de l’objet sur le zéro, je lis où il se termine, j’écris la mesure en centimètres.','<p>1. Début sur le <b>0</b><br>2. Je regarde où il <b>finit</b><br>3. J’écris la mesure avec <b>cm</b></p>'+RULER(9)+'<p>Ce crayon mesure <b>9 cm</b>.</p>',['Je place le début de l’objet sur…','Le 0',['Le 5','Le 10']])];
 [4,7,9,12,6,11].forEach(function(n){S.push(N('Combien mesure cette bande rouge, en cm ?',n,'Lis le nombre où la bande se termine.','Oui : '+n+' cm.',RULER(n),'Je mesure'))});
 S.push(C('Une règle mesure 20 cm et un crayon 12 cm. Quel objet est le plus long ?','La règle',['Le crayon','Ils sont pareils'],'Oui : 20 cm est plus grand que 12 cm.','Compare 20 et 12.'));
 S.push(N('Un ruban mesure 15 cm. Un autre mesure 9 cm. Quelle est la différence, en cm ?',6,'15 − 9','Oui : 15 − 9 = 6 cm.','','Différence'));
 S.push(N('Une ficelle mesure 18 cm. Une autre mesure 11 cm. Quelle est la différence, en cm ?',7,'18 − 11','Oui : 7 cm.','','Différence'));
 S.push(N('Un crayon mesure 14 cm. Une règle mesure 20 cm. Quelle est la différence, en cm ?',6,'20 − 14','Oui : 6 cm.','','Différence'));
 return S})(),MT);

mod('cp-masse','Masses et contenances','Plus lourd, plus léger, plus plein','⚖️',[
 T('Comparer des masses','Je peux comparer deux objets en les soupesant ou avec une balance : plus lourd, plus léger, aussi lourd.','<p class="big">🪶 plus léger<br>🧱 plus lourd<br>⚖️ aussi lourd</p>',['Une plume est…','Plus légère qu’un livre',['Plus lourde qu’un livre','Aussi lourde']]),
 C('Un sac de pommes est plus lourd qu’une pomme seule. Le sac est…','plus lourd',['plus léger','aussi lourd'],'Oui : plus lourd que la pomme.','Qui pèse le plus ?'),
 C('Une plume est … qu’un livre.','plus légère',['plus lourde','aussi lourde'],'Oui : une plume est légère.','Une plume est très légère.'),
 C('Un gros sac de riz est … qu’un petit sachet vide.','plus lourd',['plus léger','aussi lourd'],'Oui : plus lourd.','Compare les deux.'),
 C('Sur une balance, les deux sacs sont à la même hauteur. Ils pèsent…','autant',['plus lourd','plus léger'],'Oui : ils pèsent autant.','La balance est en équilibre.'),
 T('Comparer des contenances','La contenance, c’est la quantité de liquide qu’un récipient peut contenir : plus plein, moins plein, autant.','<p class="big">🥛 plein · 🥛 à moitié plein</p>'),
 C('Un verre est plein et un autre est à moitié plein. Lequel contient le plus d’eau ?','Le verre plein',['Le verre à moitié plein','Ils en contiennent autant'],'Oui : le verre plein.','Regarde le niveau d’eau.'),
 C('Deux bouteilles identiques sont remplies jusqu’au même niveau. Elles contiennent…','autant de liquide',['plus de liquide','moins de liquide'],'Oui : autant.','Même niveau, même quantité.'),
 C('Deux bouteilles identiques : l’une est pleine, l’autre à moitié pleine. Laquelle contient le plus ?','La pleine',['La demi-pleine','Pareil'],'Oui : la bouteille pleine.','Regarde le niveau.')
],MT);

mod('cp-cal','Jours, mois et calendrier','Lundi, mardi… janvier, février…','📅',[
 T('Les jours de la semaine','Une semaine compte 7 jours : lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.','<p class="big">lundi · mardi · mercredi · jeudi · vendredi · samedi · dimanche</p><p>Une semaine = <b>7 jours</b>.</p>'),
 B('Remets les jours de la semaine dans l’ordre.',['jeudi','lundi','samedi','mardi','dimanche','mercredi','vendredi'],'lundi mardi mercredi jeudi vendredi samedi dimanche','Bravo, les 7 jours sont dans l’ordre !'),
 C('Quel jour vient après mercredi ?','Jeudi',['Mardi','Vendredi'],'Oui : jeudi.','Mercredi, puis…'),
 C('Quel jour vient avant lundi ?','Dimanche',['Mardi','Samedi'],'Oui : dimanche.','Avant lundi, c’est la fin de la semaine d’avant.'),
 C('Quel jour vient après vendredi ?','Samedi',['Jeudi','Lundi'],'Oui : samedi.','Vendredi, puis…'),
 C('Quel jour vient avant mercredi ?','Mardi',['Jeudi','Lundi'],'Oui : mardi.','Avant mercredi.'),
 N('Combien de jours y a-t-il dans une semaine ?',7,'Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.','Oui : 7 jours.','','Calendrier'),
 T('Les mois de l’année','Les mois se suivent dans l’ordre : janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre.','<p class="big">janvier · février · mars · avril · mai · juin · juillet · août · septembre · octobre · novembre · décembre</p>'),
 B('Remets les 4 premiers mois dans l’ordre.',['mars','janvier','avril','février'],'janvier février mars avril','Oui : janvier, février, mars, avril.'),
 C('Quel mois vient après avril ?','Mai',['Mars','Juin'],'Oui : mai.','Avril, puis…'),
 C('Quel mois vient avant septembre ?','Août',['Octobre','Juillet'],'Oui : août.','Avant septembre.'),
 C('Quel mois vient après mars ?','Avril',['Février','Mai'],'Oui : avril.','Mars, puis…')
],MT);

var CK=function(h,m){return '<div style="display:flex;justify-content:center"><svg class="ck" data-h="'+h+'" data-m="'+m+'" viewBox="0 0 10 10" style="width:0;height:0"></svg></div>'};
mod('cp-heure','L’heure pile et la demie','Petite aiguille, grande aiguille','🕐',[
 T('Lire l’heure','La petite aiguille indique l’heure. Quand la grande est sur le 12, c’est l’heure pile. Sur le 6, c’est et demie.','<p>La <b>petite aiguille</b> montre l’heure.</p><p>Grande aiguille sur le <b>12</b> : heure <b>pile</b>.</p><p>Grande aiguille sur le <b>6</b> : <b>et demie</b>.</p>'+CK(4,0)+'<p class="big">4 h</p>'+CK(4,30)+'<p class="big">4 h 30</p>',['Grande aiguille sur le 12 : c’est…','L’heure pile',['Et demie','Midi seulement']]),
 C('Quelle heure est-il ?','3 h',['3 h 30','6 h'],'Oui : 3 h pile.','La grande aiguille est sur le 12.',CK(3,0)),
 C('Quelle heure est-il ?','8 h 30',['8 h','6 h 30'],'Oui : 8 h 30.','La grande aiguille est sur le 6.',CK(8,30)),
 C('Quelle heure est-il ?','5 h',['5 h 30','12 h'],'Oui : 5 h pile.','La grande aiguille est sur le 12.',CK(5,0)),
 C('Quelle heure est-il ?','10 h 30',['10 h','6 h 10'],'Oui : 10 h 30.','La grande aiguille est sur le 6.',CK(10,30)),
 N('Il est 7 h. Une heure passe. Quelle heure est-il ? (en h)',8,'7 h + 1 h','Oui : 8 h.','','Les durées'),
 C('Il est 9 h. Une demi-heure passe. Quelle heure est-il ?','9 h 30',['10 h','9 h'],'Oui : 9 h 30.','Une demi-heure, c’est la moitié d’une heure.'),
 N('Le dessin animé commence à 14 h et finit à 15 h. Combien de temps dure-t-il ? (en h)',1,'15 − 14','Oui : 1 heure.','','Les durées'),
 N('Il est 6 h. Une heure passe. Quelle heure est-il ? (en h)',7,'6 + 1','Oui : 7 h.','','Les durées'),
 C('Il est 10 h 30. Une demi-heure passe. Quelle heure est-il ?','11 h',['10 h','11 h 30'],'Oui : 11 h.','10 h 30 + une demi-heure.'),
 N('Le jeu commence à 15 h et se termine à 16 h. Il dure… (en h)',1,'16 − 15','Oui : 1 heure.','','Les durées'),
 C('Il est 8 h. Une demi-heure passe. Quelle heure est-il ?','8 h 30',['9 h','7 h 30'],'Oui : 8 h 30.','Une demi-heure.')
],MT);

/* ---- Géométrie ---- */
mod('cp-fig','Les figures planes','Triangle, carré, rectangle, cercle','🔷',[
 T('Je reconnais les figures','Le triangle a 3 côtés. Le carré a 4 côtés de même longueur. Le rectangle a 4 côtés, les côtés opposés sont de même longueur. Le cercle est rond.','<p class="big">🔺 triangle : 3 côtés<br>🟦 carré : 4 côtés égaux<br>▭ rectangle : 4 côtés<br>⚪ cercle : rond</p>',['Quelle figure a 3 côtés ?','Le triangle',['Le carré','Le cercle']]),
 C('Quelle figure a 3 côtés ?','Le triangle',['Le carré','Le cercle'],'Oui : le triangle.','Tri = trois.'),
 C('Quelle figure est ronde ?','Le cercle',['Le carré','Le triangle'],'Oui : le cercle.','Elle n’a pas de côté droit.'),
 N('Combien de côtés possède un carré ?',4,'Compte les côtés.','Oui : 4 côtés.','<div class="pic">🟦</div>','Le carré'),
 C('Le carré et le rectangle ont-ils le même nombre de côtés ?','Oui, 4 côtés chacun',['Non, le carré en a 3','Non, le rectangle en a 6'],'Oui : ils ont tous les deux 4 côtés.','Compte les côtés de chaque figure.'),
 C('Vrai ou faux : un cercle a 4 côtés.','Faux',['Vrai'],'Oui : un cercle n’a pas de côté droit.','Un cercle est rond.'),
 C('Vrai ou faux : un carré a 4 côtés de même longueur.','Vrai',['Faux'],'Oui : les 4 côtés d’un carré sont égaux.','Pense aux 4 côtés du carré.'),
 C('Vrai ou faux : un triangle a 3 côtés.','Vrai',['Faux'],'Oui : tri = 3.','Compte les côtés.')
],MT);

mod('cp-sol','Les solides','Cube, pavé, boule, cylindre, cône','🧊',[
 T('Je reconnais les solides','Le cube ressemble à un dé. Le pavé à une boîte à chaussures. La boule à un ballon. Le cylindre à une boîte de conserve. Le cône à un cornet.','<p class="big">🎲 cube · 📦 pavé<br>⚽ boule · 🥫 cylindre<br>🍦 cône</p>'),
 MA('Associe chaque objet au bon solide.',[['🎲 un dé','le cube'],['⚽ un ballon','la boule'],['🥫 une boîte de conserve','le cylindre'],['📦 une boîte à chaussures','le pavé']]),
 C('Un cornet de glace ressemble à…','un cône',['un cube','une boule'],'Oui : un cône.','Pense au cornet.'),
 C('Vrai ou faux : un dé ressemble à un cube.','Vrai',['Faux'],'Oui : un dé est un cube.','Regarde les faces carrées.'),
 C('Vrai ou faux : une boîte de conserve ressemble à un cylindre.','Vrai',['Faux'],'Oui : c’est un cylindre.','Elle est ronde et haute.'),
 C('Quel solide ressemble à un ballon ?','La boule',['Le cube','Le cône'],'Oui : la boule.','Il roule dans tous les sens.')
],MT);

var GRID='<table style="margin:8px auto;border-collapse:collapse;font:800 1.6rem var(--display);text-align:center"><tr><td></td><td style="padding:6px 14px;color:var(--soft)">A</td><td style="padding:6px 14px;color:var(--soft)">B</td><td style="padding:6px 14px;color:var(--soft)">C</td></tr><tr><td style="color:var(--soft)">1</td><td style="border:2px solid var(--line);padding:6px 14px">⚪</td><td style="border:2px solid var(--line);padding:6px 14px">⭐</td><td style="border:2px solid var(--line);padding:6px 14px">🟦</td></tr><tr><td style="color:var(--soft)">2</td><td style="border:2px solid var(--line);padding:6px 14px">❤️</td><td style="border:2px solid var(--line);padding:6px 14px">🔺</td><td style="border:2px solid var(--line);padding:6px 14px">⚪</td></tr></table>';
var ROW3=function(a){return '<p class="big" style="text-align:center;font-size:2.2rem;letter-spacing:.3em">'+a.join(' ')+'</p>'};
var COL3=function(a){return '<p class="big" style="text-align:center;font-size:2rem;line-height:1.3">'+a.join('<br>')+'</p>'};
mod('cp-rep','Je me repère','Droite, gauche, devant, derrière','🧭',[
 T('Gauche et droite','Je lis de gauche à droite. Le premier est à gauche, le dernier est à droite.','<p class="big">🍎 ⚽ 🐱</p><p>🍎 est à <b>gauche</b>.<br>🐱 est à <b>droite</b>.<br>⚽ est <b>entre</b> les deux.</p>',['Dans « 🍎 ⚽ 🐱 », la pomme est à…','Gauche',['Droite','Entre les deux']]),
 C('Qui est tout à droite ?','Le chat',['La pomme','Le ballon'],'Oui : le chat est à droite.','Le dernier, quand on lit.',ROW3(['🍎','⚽','🐱'])),
 C('Qui est tout à gauche ?','La pomme',['Le chat','Le ballon'],'Oui : la pomme est à gauche.','Le premier, quand on lit.',ROW3(['🍎','⚽','🐱'])),
 C('Qui est entre la voiture et la fleur ?','Le chien',['Le soleil','La maison'],'Oui : le chien.','Cherche au milieu.',ROW3(['🚗','🐶','🌸'])),
 C('Qui est à droite du chien ?','La fleur',['La voiture','Le chien'],'Oui : la fleur.','Va vers la droite.',ROW3(['🚗','🐶','🌸'])),
 C('Qui est à gauche de la fleur ?','Le chien',['Le soleil','La fleur'],'Oui : le chien est juste à gauche.','Va vers la gauche.',ROW3(['🚗','🐶','🌸'])),
 T('Devant et derrière','Quand ils avancent vers la droite, le premier de la file est devant et le dernier est derrière.','<p class="big">🚲 🚌 🚗 →</p><p>Ils avancent vers la <b>droite</b>.<br>🚗 est <b>devant</b>.<br>🚲 est <b>derrière</b>.</p>',['Celui qui est en tête est…','Devant',['Derrière','Au-dessus']]),
 C('Les véhicules avancent vers la droite. Lequel est devant ?','La voiture',['Le vélo','Le bus'],'Oui : la voiture est devant.','Le plus avancé vers la droite.',ROW3(['🚲','🚌','🚗','→'])),
 C('Les véhicules avancent vers la droite. Lequel est derrière ?','Le vélo',['La voiture','Le bus'],'Oui : le vélo est derrière.','Le dernier de la file.',ROW3(['🚲','🚌','🚗','→'])),
 C('Les animaux avancent vers la droite. Qui est entre le lapin et la tortue ?','Le chat',['Le chien','La souris'],'Oui : le chat est au milieu.','Cherche au milieu.',ROW3(['🐰','🐱','🐢','→'])),
 T('Au-dessus et au-dessous','Ce qui est en haut est au-dessus. Ce qui est en bas est au-dessous.','<p class="big">☁️<br>🏠<br>🐶</p><p>Le nuage est <b>au-dessus</b> de la maison.<br>Le chien est <b>au-dessous</b> de la maison.</p>',['Le nuage est…','Au-dessus de la maison',['Au-dessous de la maison','À droite de la maison']]),
 C('Qu’est-ce qui est au-dessus de la maison ?','Le nuage',['Le chien','L’arbre'],'Oui : le nuage.','Regarde en haut.',COL3(['☁️','🏠','🐶'])),
 C('Qu’est-ce qui est au-dessous de la maison ?','Le chien',['Le nuage','Le soleil'],'Oui : le chien.','Regarde en bas.',COL3(['☁️','🏠','🐶'])),
 C('Quel animal est tout en haut ?','L’oiseau',['Le poisson','Le chat'],'Oui : l’oiseau.','Le plus haut.',COL3(['🐦','🐱','🐟'])),
 T('Je me repère sur le quadrillage','Sur le quadrillage, je peux dire ce qui est à droite, à gauche, au-dessus ou au-dessous.','<p>Dans ce quadrillage, ⭐ est <b>à droite</b> de ⚪ et <b>au-dessus</b> de 🔺.</p>'+GRID,['Dans ce quadrillage, ⭐ est à droite de…','⚪',['🟦','❤️']]),
 C('Quelle figure est à droite de l’étoile ?','Le carré',['Le rond','Le triangle'],'Oui : le carré bleu.','Va d’une case vers la droite.',GRID),
 C('Quelle figure est à gauche du triangle ?','Le cœur',['Le carré','L’étoile'],'Oui : le cœur.','Va d’une case vers la gauche.',GRID),
 C('Quelle figure est au-dessous de l’étoile ?','Le triangle',['Le cœur','Le carré'],'Oui : le triangle.','Descends d’une case.',GRID),
 C('Quelle figure est au-dessus du cœur ?','Le rond',['Le triangle','L’étoile'],'Oui : le rond.','Monte d’une case.',GRID),
 C('Le pion part de A1. Il va deux cases vers la droite. Où arrive-t-il ?','En C1',['En A2','En B2'],'Oui : A1 → B1 → C1.','Avance de deux cases vers la droite.',GRID),
 C('Le pion part de C1. Il descend d’une case, puis il va d’une case vers la gauche. Où arrive-t-il ?','En B2',['En A1','En B1'],'Oui : C1 → C2 → B2.','Suis le chemin case par case.',GRID)
],MT);

mod('cp-quad','Le quadrillage et le tracé','Colonne, ligne, règle','📍',[
 T('Je me repère sur un quadrillage','Je donne la colonne, la lettre, puis la ligne, le chiffre. B1, c’est la colonne B, la ligne 1.','<p>Dans <b>B1</b> : la colonne <b>B</b>, la ligne <b>1</b>.</p>'+GRID,['B1, c’est la colonne B et…','La ligne 1',['La ligne 2','La colonne A']]),
 C('Quelle figure est en B1 ?','L’étoile',['Le cœur','Le triangle'],'Oui : B1, c’est l’étoile.','Colonne B, ligne 1.',GRID),
 C('Où se trouve le triangle ?','En B2',['En A1','En C1'],'Oui : le triangle est en B2.','Cherche sa colonne et sa ligne.',GRID),
 C('Quelle figure est en C1 ?','Le carré',['Le rond','Le cœur'],'Oui : C1, c’est le carré.','Colonne C, ligne 1.',GRID),
 C('Où se trouve le cœur ?','En A2',['En B1','En C2'],'Oui : A2.','Cherche le cœur.',GRID),
 C('Quelle figure est en A1 ?','Le rond',['L’étoile','Le triangle'],'Oui : A1, c’est le rond.','Colonne A, ligne 1.',GRID),
 C('Le pion part de B2. Il avance d’une case vers la droite, monte d’une case, puis va d’une case vers la gauche. Où arrive-t-il ?','En B1',['En C2','En A1'],'Oui : B2 → C2 → C1 → B1.','Suis le chemin case par case.',GRID),
 W('cp-trace',{items:[
  {q:'Relie les deux points avec ton doigt, comme à la règle.',p:[[[40,100],[280,100]]]},
  {q:'Trace un carré.',p:[[[100,40],[220,40],[220,160],[100,160],[100,40]]]},
  {q:'Trace un triangle.',p:[[[160,30],[250,160],[70,160],[160,30]]]},
  {q:'Trace un cercle.',p:[[[160,30],[212,48],[238,95],[212,142],[160,160],[108,142],[82,95],[108,48],[160,30]]]}
 ]},'Je trace des figures')
],MT);

/* ---- Doubles et moitiés ---- */
var DBL=function(n){return '<div style="text-align:center;font-size:1.3rem;line-height:1.3;margin:6px 0">'+new Array(n+1).join('🟣')+' <b>+</b> '+new Array(n+1).join('🟣')+'</div>'};
var HLF=function(n){var h=n/2;return '<div style="text-align:center;font-size:1.3rem;line-height:1.3;margin:6px 0">'+new Array(n+1).join('🔵')+'<br><b>↓ 2 parts égales</b><br>'+new Array(h+1).join('🔵')+' | '+new Array(h+1).join('🔵')+'</div>'};
mod('cp-dbl','Doubles et moitiés','Deux fois pareil, deux parts égales','🪞',(function(){
 var S=[T('Le double','Le double d’un nombre, c’est ce nombre pris deux fois. Le double de 3, c’est 3 plus 3, donc 6.','<p class="big">Le double de 3 = 3 + 3 = <b>6</b></p>'+DBL(3),['Le double de 4, c’est…','8',['6','4']]),
  T('La moitié','La moitié d’un nombre, c’est ce nombre partagé en deux parts égales. La moitié de 8, c’est 4, car 4 plus 4 font 8.','<p class="big">La moitié de 8 = <b>4</b></p>'+HLF(8),['La moitié de 6, c’est…','3',['2','12']])];
 [2,5,4,3,6,10,7,8,9].forEach(function(n){S.push(N('Quel est le double de '+n+' ?',n*2,n+' + '+n+'.','Oui : '+n+' + '+n+' = '+n*2+'.',n<=6?DBL(n):'','Le double'))});
 [4,6,10,8,12,14,16,20].forEach(function(n){S.push(N('Quelle est la moitié de '+n+' ?',n/2,'Quel nombre ajouté à lui-même fait '+n+' ?','Oui : '+n/2+' + '+n/2+' = '+n+'.',n<=10?HLF(n):'','La moitié'))});
 S.push(N('Lina a 7 billes. Sami en a le double. Combien Sami a-t-il de billes ?',14,'Le double de 7 : 7 + 7.','Oui : 14 billes.','','Problème'));
 S.push(N('Rico partage 12 bonbons en deux parts égales. Combien de bonbons chacun reçoit-il ?',6,'La moitié de 12.','Oui : 6 bonbons.','','Problème'));
 S.push(N('Un paquet contient 5 gâteaux. Il y en a 2 pareils. Combien de gâteaux en tout ?',10,'Le double de 5.','Oui : 10 gâteaux.','','Problème'));
 S.push(C('Le double de 4 est 8. Quelle est donc la moitié de 8 ?','4',['2','16'],'Oui : double et moitié vont ensemble.','La moitié défait le double.'));
 S.push(C('Quelle égalité donne un double ?','6 + 6',['6 + 5','6 + 7'],'Oui : deux fois le même nombre.','Cherche deux nombres pareils.'));
 S.push(MA('Relie chaque nombre à son double.',[['2','4'],['5','10'],['8','16']]));
 return S})(),MT);

/* ---- La monnaie ---- */
var COIN=function(v){var c=v>=1&&v<=2;return '<span style="display:inline-flex;align-items:center;justify-content:center;width:46px;height:46px;border-radius:50%;background:'+(v===1?'#f2c94c':'#d9d9df')+';border:3px solid '+(v===1?'#c79a1c':'#9a9aa8')+';font:800 1rem var(--display);margin:3px">'+v+' €</span>'};
var BILL=function(v){var col={5:'#a9b8a1',10:'#e8a0a0',20:'#a0b8e8'}[v]||'#ccc';return '<span style="display:inline-flex;align-items:center;justify-content:center;width:72px;height:42px;border-radius:6px;background:'+col+';border:2px solid #666;font:800 1rem var(--display);margin:3px">'+v+' €</span>'};
var MON=function(a){return '<div style="text-align:center;margin:6px 0">'+a.map(function(v){return v>=5?BILL(v):COIN(v)}).join('')+'</div>'};
mod('cp-eur','La monnaie','Pièces, billets, payer et rendre','💶',(function(){
 var S=[T('Pièces et billets','En France, on paie avec des euros. Il y a des pièces de 1 euro et 2 euros, et des billets de 5, 10 et 20 euros.',''+MON([1,2,5,10,20]),['Un billet de 10 €, c’est…','10 euros',['1 euro','100 euros']]),
  T('Compter son argent','Pour savoir combien j’ai, j’additionne les pièces et les billets. Je commence par les plus grands.','<p class="big">5 + 2 + 1 = <b>8 €</b></p>'+MON([5,2,1]),['5 € + 2 € + 1 €, ça fait…','8 euros',['7 euros','9 euros']])];
 [[[2,2,1],5],[[5,1,1],7],[[10,2],12],[[5,5,2],12],[[10,5,1],16],[[20,2,1],23]].forEach(function(x){S.push(N('Combien d’argent y a-t-il ?',x[1],'J’additionne : '+x[0].join(' + ')+'.','Oui : '+x[1]+' €.',MON(x[0]),'Je compte'))});
 S.push(C('Je veux payer 8 €. Quelle somme est la bonne ?','5 € + 2 € + 1 €',['5 € + 2 €','2 € + 2 € + 2 €'],'Oui : 5 + 2 + 1 = 8.','Additionne chaque proposition.'));
 S.push(C('Je veux payer 12 €. Quelle somme est la bonne ?','10 € + 2 €',['5 € + 5 €','10 € + 1 €'],'Oui : 10 + 2 = 12.','Additionne chaque proposition.'));
 S.push(C('Je veux payer 7 €. Quelle somme est la bonne ?','5 € + 2 €',['5 € + 1 €','2 € + 2 €'],'Oui : 5 + 2 = 7.','Additionne chaque proposition.'));
 S.push(T('Rendre la monnaie','Quand je donne plus que le prix, le vendeur me rend la différence. Je donne 10 € pour un objet à 7 €. On me rend 3 €.','<p class="big">10 € − 7 € = <b>3 €</b></p>'+MON([10]),['Je donne 10 € pour un objet à 7 €. On me rend…','3 €',['17 €','7 €']]));
 [['Un pain coûte 2 €. Je donne 5 €.',3],['Un gâteau coûte 6 €. Je donne 10 €.',4],['Un jouet coûte 8 €. Je donne 10 €.',2],['Une glace coûte 3 €. Je donne 5 €.',2],['Un livre coûte 12 €. Je donne 20 €.',8]].forEach(function(q){S.push(N(q[0]+' Combien me rend-on ?',q[1],'Je soustrais le prix de ce que je donne.','Oui : on me rend '+q[1]+' €.','','Je rends la monnaie'))});
 S.push(N('Rico achète un ballon à 5 € et un livre à 4 €. Combien paie-t-il en tout ?',9,'5 + 4.','Oui : 9 €.','','Problème'));
 S.push(N('Lina a 10 €. Elle achète un jouet à 6 €. Combien lui reste-t-il ?',4,'10 − 6.','Oui : 4 €.','','Problème'));
 S.push(T('Les centimes','Un euro, c’est aussi 100 centimes. Une pièce de 50 centimes, c’est la moitié d’un euro.','<p class="big">1 € = 100 centimes<br>50 c + 50 c = 1 €</p>',['Deux pièces de 50 centimes font…','1 euro',['2 euros','50 euros']]));
 S.push(C('Combien de pièces de 50 centimes faut-il pour faire 1 € ?','2',['1','5'],'Oui : 50 + 50 = 100 centimes.','50 centimes + 50 centimes.'));
 return S})(),MT);

/* ---- Lire un tableau ou un graphique ---- */
var TBL=function(head,rows){return '<table style="margin:8px auto;border-collapse:collapse;font:800 1.3rem var(--display);text-align:center"><tr>'+head.map(function(h){return '<td style="border:2px solid var(--line);padding:6px 14px;background:#eef2ff">'+h+'</td>'}).join('')+'</tr><tr>'+rows.map(function(r){return '<td style="border:2px solid var(--line);padding:6px 14px">'+r+'</td>'}).join('')+'</tr></table>'};
var PIC=function(rows){return '<table style="margin:8px auto;border-collapse:collapse;font-size:1.3rem;text-align:left">'+rows.map(function(r){return '<tr><td style="padding:4px 10px;font:800 1rem var(--display)">'+r[0]+'</td><td style="padding:4px 10px;letter-spacing:.1em">'+new Array(r[1]+1).join(r[2])+'</td></tr>'}).join('')+'</table>'};
var T1=TBL(['🐶','🐱','🐰'],[3,5,2]);
var P1=PIC([['Pommes',4,'🍎'],['Bananes',2,'🍌'],['Fraises',3,'🍓']]);
mod('cp-tab','Lire un tableau ou un graphique','Trouver une information, comparer','📊',[
 T('Lire un tableau','Un tableau range des informations. Je cherche l’image, puis je lis le nombre en dessous.','<p>Combien d’animaux de chaque sorte ?</p>'+T1+'<p>Il y a <b>5</b> chats.</p>',['Dans ce tableau, combien de chiens ?','3',['5','2']]),
 N('Combien y a-t-il de lapins ?',2,'Cherche 🐰 dans le tableau.','Oui : 2 lapins.',T1,'Je lis le tableau'),
 N('Combien y a-t-il de chats ?',5,'Cherche 🐱 dans le tableau.','Oui : 5 chats.',T1,'Je lis le tableau'),
 N('Combien d’animaux en tout ?',10,'J’additionne : 3 + 5 + 2.','Oui : 10 animaux.',T1,'J’additionne'),
 N('Combien de chats de plus que de chiens ?',2,'5 − 3.','Oui : 2 de plus.',T1,'Je compare'),
 T('Lire un graphique en images','Ici, chaque image représente un enfant. Je compte les images de chaque ligne.','<p>Le fruit préféré des enfants :</p>'+P1+'<p>1 image = 1 enfant.</p>',['Combien d’enfants préfèrent les bananes ?','2',['4','3']]),
 N('Combien d’enfants préfèrent les pommes ?',4,'Compte les 🍎.','Oui : 4 enfants.',P1,'Je compte les images'),
 N('Combien d’enfants préfèrent les fraises ?',3,'Compte les 🍓.','Oui : 3 enfants.',P1,'Je compte les images'),
 C('Quel fruit est le plus aimé ?','Les pommes',['Les bananes','Les fraises'],'Oui : la ligne la plus longue.','Cherche la plus longue ligne.',P1),
 C('Quel fruit est le moins aimé ?','Les bananes',['Les pommes','Les fraises'],'Oui : la ligne la plus courte.','Cherche la plus courte ligne.',P1),
 N('Combien d’enfants ont répondu en tout ?',9,'4 + 2 + 3.','Oui : 9 enfants.',P1,'J’additionne'),
 T('Le tableau de la météo','Je regarde chaque jour et je compte les ☀️ et les 🌧️.','<p>La météo de la semaine :</p>'+PIC([['Lundi',1,'☀️'],['Mardi',1,'🌧️'],['Mercredi',1,'☀️'],['Jeudi',1,'☀️'],['Vendredi',1,'🌧️']]),['Combien de jours de pluie ?','2',['3','5']]),
 N('Combien y a-t-il de jours de soleil ?',3,'Compte les ☀️ : lundi, mercredi, jeudi.','Oui : 3 jours.',PIC([['Lundi',1,'☀️'],['Mardi',1,'🌧️'],['Mercredi',1,'☀️'],['Jeudi',1,'☀️'],['Vendredi',1,'🌧️']]),'Je compte'),
 N('Dans la classe, il y a 5 filles et 7 garçons. Combien d’élèves en tout ?',12,'5 + 7.','Oui : 12 élèves.',TBL(['Filles','Garçons'],[5,7]),'Je lis et j’additionne'),
 C('Dans ce tableau, qui est le plus nombreux ?','Les garçons',['Les filles','Autant'],'Oui : 7 est plus grand que 5.','Compare 5 et 7.',TBL(['Filles','Garçons'],[5,7]))
],MT);

/* ---- Bilan CP (20 points) ---- */
var BIL=[
 {d:'Oral',k:'Compter les syllabes',q:'Combien de syllabes dans « banane » ?',o:['2','3','4'],a:1,h:'ba-na-ne.',say:'banane'},
 {d:'Oral',k:'Repérer un son',q:'Quel mot commence par le son « ch » ?',o:['chaton','banc','Lina'],a:0,h:'Écoute le début.',say:'chaton'},
 {d:'Lecture',k:'Assembler des syllabes',q:'Je lis : pla + ne. Quel mot ?',o:['plane','pelle','plume'],a:0,h:'Assemble les deux syllabes.'},
 {d:'Lecture',k:'Déchiffrer un mot',q:'Quel mot est écrit ? « sa – la – de »',o:['salade','malade','lavabo'],a:0,h:'Lis les trois syllabes.'},
 {d:'Lecture',k:'Mots fréquents',q:'Le lapin est ___ la cabane.',o:['dans','et','est'],a:0,h:'Où est le lapin ?'},
 {d:'Lecture',k:'Comprendre une phrase',q:'« Le pirate a une carte et un bateau. » Que possède le pirate ?',o:['Une carte et un bateau','Un chat','Un vélo'],a:0,h:'Relis la phrase.'},
 {d:'Écriture',k:'Majuscule et point',q:'Quelle phrase est bien écrite ?',o:['Le chat dort sur le tapis.','le chat dort sur le tapis','Le chat dort sur le tapis'],a:0,h:'Majuscule et point.'},
 {d:'Écriture',k:'Phrase qui a du sens',q:'Quelle phrase a du sens ?',o:['Sami mange une pomme.','Pomme Sami le.','Mange dort pomme.'],a:0,h:'Qui fait quoi ?'},
 {d:'Langue',k:'Contraires',q:'Le contraire de « grand » ?',o:['petit','gros','haut'],a:0,h:'Un mot qui veut dire l’inverse.'},
 {d:'Langue',k:'Reconnaître le verbe',q:'Quel est le verbe ? « Lina lit un livre. »',o:['lit','Lina','livre'],a:0,h:'Que fait Lina ?'},
 {d:'Langue',k:'Singulier et pluriel',q:'Quel groupe est au pluriel ?',o:['des chats','le chat','un chat'],a:0,h:'Plusieurs chats.'},
 {d:'Nombres',k:'Dizaines et unités',q:'4 dizaines et 7 unités : quel nombre ?',n:47,h:'40 + 7.'},
 {d:'Nombres',k:'Comparer',q:'45 … 41 : quel signe ?',o:['>','<','='],a:0,h:'Compare les unités : 5 et 1.'},
 {d:'Nombres',k:'Avant, après',q:'Quel nombre vient juste après 58 ?',n:59,h:'58, puis…'},
 {d:'Calcul',k:'Compléments à 10',q:'6 + ? = 10',n:4,h:'6 + 4.'},
 {d:'Calcul',k:'Addition',q:'7 + 6 = ?',n:13,h:'7 + 3 = 10, puis + 3.'},
 {d:'Calcul',k:'Addition posée',q:'23 + 14 = ?',n:37,h:'Unités 3+4, dizaines 2+1.'},
 {d:'Problèmes',k:'Retrait',q:'Noé a 12 autocollants. Il en donne 4. Combien lui en reste-t-il ?',n:8,h:'12 − 4.'},
 {d:'Mesures',k:'Lire l’heure',q:'Il est 9 h. Une demi-heure passe. Quelle heure est-il ?',o:['9 h 30','10 h','9 h'],a:0,h:'Une demi-heure.'},
 {d:'Géométrie',k:'Figures planes',q:'Quelle figure a 3 côtés ?',o:['Le triangle','Le carré','Le cercle'],a:0,h:'Tri = 3.'}];
window.MRCP_BILAN=BIL;
mod('cp-bilan','Bilan du CP','20 questions, 1 point chacune','🏁',[
 T('Mon bilan','Ce bilan repère ce que je sais bien et ce que je dois retravailler. Il n’y a pas de piège.','<p class="big">20 questions, 1 point chacune.</p><p>Il montre ce que tu sais bien et ce que tu dois encore travailler.</p>'),
 W('cp-bilan',{qs:BIL},'Bilan du CP')
],{bilan:true});

/* ------- fin ------- */
};})();
