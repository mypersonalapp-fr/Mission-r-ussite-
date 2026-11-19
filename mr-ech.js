/* L'échelle des nombres : cours + 60 exercices en 5 niveaux (l'enfant touche le bon nombre) */
(function(){
var $=function(i){return document.getElementById(i)},wait=function(ms){return new Promise(function(r){setTimeout(r,ms)})};
var N=10;
/* niveaux : base, unit = valeur d'un barreau */
var LV=[
 {n:1,t:'De 10 en 10',sub:'0 → 100',base:0,unit:10,st:[10]},
 {n:2,t:'De 20 en 20',sub:'0 → 200',base:0,unit:20,st:[20]},
 {n:3,t:'Les paliers de 100 à 200',sub:'+ 10, 20, 30, 50',base:100,unit:10,st:[10,20,30,50]},
 {n:4,t:'De 50 en 50',sub:'0 → 500',base:0,unit:50,st:[50]},
 {n:5,t:'Les centaines',sub:'0 → 1000, − 50',base:0,unit:100,st:[100,200,300]}];
/* k: go = je touche, d = de combien ?, p = palier (je monte jusqu'à… puis…) ; a = départ, t = arrivée, [m = montée du palier] */
var Q={
1:[['go',0,30],['go',0,50],['go',20,60],['go',70,40],['go',100,70],['go',50,80],['d',30,20,[10,20,50]],['d',10,60,[40,50,60]],['d',80,50,[20,30,40]],['go',90,30],['go',40,90],['p',0,100,-30,[60,70,80]]],
2:[['go',0,60],['go',0,100],['go',40,120],['go',160,80],['go',200,140],['d',60,100,[20,40,60]],['d',140,80,[40,60,80]],['go',100,160],['go',180,100],['d',20,200,[160,180,200]],['p',0,200,-40,[140,160,180]],['p',0,120,40,[140,160,180]]],
3:[['go',150,100],['go',100,130],['go',120,170],['go',200,150],['go',170,110],['d',100,170,[60,70,80]],['d',200,130,[50,60,70]],['p',0,200,-50,[140,150,160]],['p',0,150,-30,[110,120,130]],['p',0,200,-20,[160,170,180]],['p',0,100,50,[140,150,160]],['go',110,160]],
4:[['go',0,150],['go',250,100],['go',100,350],['go',500,200],['go',150,400],['d',50,300,[200,250,300]],['d',400,150,[150,250,300]],['go',300,50],['p',0,500,-50,[400,450,550]],['p',0,300,-100,[150,200,250]],['p',0,200,50,[200,250,300]],['go',450,250]],
5:[['go',0,300],['go',700,400],['go',500,900],['go',1000,600],['go',200,800],['d',300,800,[400,500,600]],['d',900,400,[300,400,500]],['p',0,1000,-50,[850,950,1050]],['p',0,1000,-100,[800,900,1000]],['p',0,500,-50,[400,450,550]],['p',0,800,-200,[400,500,600]],['p',0,600,50,[550,650,700]]]};
function say(q,lv){var a=q[1],t=q[2],x;
 if(q[0]==='go'){var d=Math.abs(t-a),up=t>a;return 'Je suis à <b>'+a+'</b>. Je '+(up?'monte':'descends')+' de <b>'+d+'</b>. J\'arrive où ?'}
 if(q[0]==='d'){return 'Je suis à <b>'+a+'</b>. Je '+(t>a?'monte':'descends')+' à <b>'+t+'</b>. De combien ?'}
 return 'Je monte jusqu\'à <b>'+t+'</b>. Puis je '+(q[3]<0?'descends':'monte')+' de <b>'+Math.abs(q[3])+'</b>. Je suis à combien ?'}
function css(){return '<style id="echcss">'+
'#ech{position:fixed;inset:0;z-index:99999;display:flex;justify-content:center;background:#dfe5fb;font-family:Nunito,system-ui,sans-serif;color:#1b2347}'+
'#ech *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}#ech button{font-family:inherit;cursor:pointer}'+
'#echp{position:relative;width:min(100vw,430px);height:100dvh;background:#f2f5ff;overflow:hidden;display:grid;grid-template-rows:auto auto 1fr auto;grid-template-areas:"hdr" "pane" "scene" "dock"}'+
'#echh{grid-area:hdr;display:flex;gap:6px;justify-content:center;align-items:center;padding:6px 8px}'+
'#echh button{border:2px solid #d9dff5;border-radius:12px;background:#fff;font:900 .82rem inherit;padding:6px 10px;color:#1b2347}#echh button.on{background:#2459e6;color:#fff;border-color:#1a3fa8}#echh .x{border-color:#e03a3a;color:#e03a3a}'+
'#echs{grid-area:scene;position:relative;container-type:size;overflow:hidden;background:linear-gradient(#bfe3ff 0%,#e9f6ff 64%,#bfe99d 64%,#8fd16a 100%);perspective:700px;border-radius:16px;margin:0 6px}'+
'#ech .ladder{position:absolute;inset:0;transform-style:preserve-3d;transform:rotateX(5deg) rotateY(-12deg);transform-origin:50% 100%}'+
'#ech .rail{position:absolute;top:5cqh;bottom:10cqh;width:4cqw;min-width:8px;border-radius:9px;background:linear-gradient(90deg,#8a5a00,#f3c24a 35%,#fff0b0 50%,#d99a14 70%,#8a5a00);box-shadow:1.5cqw 1cqh 0 #0002,0 0 0 2px #7a4e00}#ech .rail.l{left:20cqw}#ech .rail.r{left:60cqw}'+
'#ech .rung{position:absolute;left:22cqw;width:41cqw;height:3.2cqh;min-height:6px;border-radius:8px;background:linear-gradient(#fff0b0,#e0a21c 55%,#8a5a00);box-shadow:0 1cqh 0 #0003,0 0 0 2px #7a4e00}'+
'#ech .tag{position:absolute;left:68cqw;width:28cqw;text-align:center;font:800 min(3.3cqh,5cqw) "Baloo 2","Trebuchet MS",sans-serif;background:linear-gradient(#fff,#e8eeff);border:2px solid #7a4e00;border-radius:10px;box-shadow:0 3px 0 #0003,0 0 0 3px #2459e655;line-height:5.4cqh;height:5.6cqh;transition:.25s;cursor:pointer}'+
'#ech .tag.on{background:linear-gradient(#ffe27a,#ffb300);transform:scale(1.15)}#ech .tag.zero{background:linear-gradient(#d4f7c2,#7ed957)}'+
'#ech .floor{position:absolute;left:10cqw;width:60cqw;height:8cqh;border-radius:50%;background:radial-gradient(#7a4e00,#a8741e 60%,#c89440);bottom:3cqh;box-shadow:0 1cqh 0 #0003}'+
'#ech .kid{--s:min(19cqw,11cqh);position:absolute;left:calc(41cqw - var(--s)/2);width:var(--s);height:var(--s);font-size:var(--s);transition:bottom .42s cubic-bezier(.3,1.4,.5,1);z-index:5;filter:drop-shadow(.06em .07em 0 #0003)}'+
'#ech .kid.hop{animation:echhop .42s}@keyframes echhop{0%{transform:scale(1,.88)}45%{transform:translateY(-.4em) scale(.94,1.1)}100%{transform:none}}'+
'#ech .kid img{width:100%;height:100%;border-radius:50%;object-fit:cover;object-position:top;border:.05em solid #f3c24a;box-shadow:0 0 0 2px #7a4e00;background:#fff;display:block}'+
'#ech .kid i{position:absolute;width:.2em;height:.2em;border-radius:50%;background:#f0b98a;border:2px solid #7a4e00;top:.55em}#ech .kid .a{left:-.12em}#ech .kid .b{right:-.12em}#ech .kid .c,#ech .kid .d{top:auto;bottom:-.16em;width:.26em;height:.15em;border-radius:.1em;background:#b82a2a}#ech .kid .c{left:.18em}#ech .kid .d{right:.18em}'+
'#ech .bub{position:absolute;left:3cqw;font:800 1rem "Baloo 2","Trebuchet MS",sans-serif;color:#fff;border-radius:999px;padding:2px 10px;opacity:0;transition:opacity .3s;z-index:6;box-shadow:0 2px 0 #0003}'+
'#echn{grid-area:pane;padding:4px 12px 8px;min-height:0;overflow:hidden;display:flex;flex-direction:column;justify-content:center;gap:5px;text-align:center}'+
'#ech .say{display:flex;gap:8px;align-items:center;text-align:left}#ech .say img{width:66px;height:66px;border-radius:50%;object-fit:cover;object-position:top;border:3px solid #f3c24a;box-shadow:0 0 0 2px #7a4e00;flex:none;background:#fff}'+
'#ech .bq{background:#fff;border:3px solid #2459e6;border-radius:20px;box-shadow:0 4px 0 #2459e633;padding:12px 14px;font:800 1.5rem/1.22 inherit}#ech .bq b{color:#2459e6;font-size:1.75rem}'+
'#ech .nav{display:flex;gap:6px;justify-content:center;align-items:center}#ech .nav button{border:2px solid #d9dff5;background:#fff;border-radius:10px;font:900 1.4rem inherit;padding:4px 16px;color:#1b2347}#ech .nav span{font:800 1.6rem "Baloo 2","Trebuchet MS",sans-serif;min-width:140px}'+
'#ech .eq{display:flex;gap:5px;justify-content:center;min-height:34px;align-items:center}#ech .pill{border-radius:999px;color:#fff;font:800 1.5rem "Baloo 2","Trebuchet MS",sans-serif;padding:3px 16px;box-shadow:0 2px 0 #0003}#ech .pill.p{background:#2459e6}#ech .pill.m{background:#e03a3a}#ech .pill.n{background:#1b2347}'+
'#ech .sub{font:800 .95rem inherit;color:#5a6490;min-height:16px}'+
'#echd{grid-area:dock;display:flex;flex-direction:column;gap:8px;justify-content:center;align-items:center;padding:8px 12px 12px;background:#fff;border-radius:22px 22px 0 0;box-shadow:0 -4px 0 #d9dff5;min-height:86px}'+
'#ech .stp,#ech .ch2{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}#ech .stp button{border:2px solid #d9dff5;border-radius:10px;background:#fff;font:900 1rem inherit;padding:7px 12px}#ech .stp button.on{background:#ffb300;border-color:#c98a00}'+
'#ech .ch2 button{border:3px solid #d9dff5;border-radius:16px;background:#fff;font:900 1.6rem inherit;padding:10px 20px;min-width:92px;color:#1b2347}#ech .ch2 button.good{background:#3dbb5a;color:#fff}#ech .ch2 button.bad{background:#e03a3a;color:#fff}'+
'#ech .ins{display:inline-block;border-radius:999px;color:#fff;font:800 1.05rem "Baloo 2","Trebuchet MS",sans-serif;padding:2px 12px;box-shadow:0 2px 0 #0003}#ech .ins.u{background:#2459e6}#ech .ins.d{background:#e03a3a}'+
'#ech .go{border:0;border-radius:14px;background:#2459e6;color:#fff;font:900 1rem inherit;padding:11px 18px;box-shadow:0 3px 0 #1a3fa8}#ech .go.g{background:#fff;color:#1b2347;border:2px solid #d9dff5;box-shadow:0 3px 0 #0001}'+
'#ech .hint{font:800 .95rem inherit;color:#5a6490}'+
'#ech .menu{grid-area:pane / 1 / dock;overflow:auto;padding:8px 14px;display:flex;flex-direction:column;gap:9px}#ech .menu h2{margin:4px 0;font:800 1.5rem "Baloo 2",sans-serif;text-align:center}'+
'#ech .menu button.lv{display:flex;gap:10px;align-items:center;text-align:left;border:3px solid #d9dff5;background:#fff;border-radius:16px;padding:10px 12px;font:800 1.05rem inherit;color:#1b2347}#ech .menu button.lv b{display:block;font-size:1.15rem}#ech .menu button.lv small{color:#5a6490}#ech .menu button.lv .n{width:38px;height:38px;border-radius:50%;background:#2459e6;color:#fff;display:flex;align-items:center;justify-content:center;font:900 1.2rem inherit;flex:none}'+
'#ech .menu button.cr{border-color:#2459e6}'+
'</style>'}
var cfg,pos,busy,done,qi,lvl,sess=0,mode,P,hop,fails,score,ev;
var val=function(k){return cfg.base+k*cfg.unit},bot=function(k){return 'calc(12cqh + '+k+'*8cqh)'};
function prof(){var p=window.MRNIV&&MRNIV.prof&&MRNIV.prof();return {name:(p&&p.name)||(typeof save!=='undefined'&&save.name)||'Miguel',av:(p&&p.av)||'img/nv/rico.jpg'}}
function build(){var h='<div class="floor"></div><div class="rail l"></div><div class="rail r"></div>',k;
 for(k=1;k<=N;k++)h+='<div class="rung" style="bottom:'+bot(k)+'"></div>';
 for(k=0;k<=N;k++)h+='<div class="tag '+(k==0&&cfg.base==0?'zero':'')+'" id="et'+k+'" style="bottom:calc('+bot(k)+' - 1.4cqh)">'+val(k)+'</div>';
 h+='<div class="kid" id="ekid"><img src="'+P.av+'" alt=""><i class="a"></i><i class="b"></i><i class="c"></i><i class="d"></i></div><div class="bub" id="ebub"></div>';
 $('echl').innerHTML=h;mark()}
function mark(){for(var k=0;k<=N;k++){var t=$('et'+k);if(t){t.classList.toggle('on',k==pos);t.textContent=val(k)}}$('ekid').style.bottom='calc('+bot(pos)+' + 1.2cqh)'}
function bubble(txt,p){var b=$('ebub');if(!b)return;b.textContent=txt;b.style.background=p?'#2459e6':'#e03a3a';b.style.bottom='calc('+bot(pos)+' + 13cqh)';b.style.opacity=1;setTimeout(function(){b.style.opacity=0},650)}
async function go(to,h){h=h||1;to=Math.max(0,Math.min(N,to));if(to==pos)return;busy=true;var my=sess,dir=to>pos?1:-1;
 while(pos!=to&&my==sess){pos=Math.max(0,Math.min(N,pos+dir*Math.min(h,Math.abs(to-pos))));var kd=$('ekid');if(!kd)break;kd.classList.remove('hop');void kd.offsetWidth;kd.classList.add('hop');mark();bubble((dir>0?'+':'−')+(h*cfg.unit),dir>0);await wait(470)}
 busy=false}
function put(x){pos=x;var kd=$('ekid');if(kd){kd.style.bottom='calc('+bot(pos)+' + 1.2cqh)';kd.classList.remove('hop');void kd.offsetWidth;kd.classList.add('hop')}for(var k=0;k<=N;k++){var t=$('et'+k);if(t)t.classList.toggle('on',k==x)}}
function shell(){var o=$('ech');if(o)o.remove();var d=document.createElement('div');d.id='ech';d.innerHTML=css()+'<div id="echp"><div id="echh"></div><div id="echn"></div><div id="echs"><div class="ladder" id="echl"></div></div><div id="echd"></div></div>';document.body.appendChild(d)}
function quit(){sess++;var o=$('ech');if(o)o.remove();if(typeof mmode!=='undefined'){mmode='f';mtab='calc';maths()}}
/* ---------- menu ---------- */
function menu(){sess++;busy=false;P=prof();shell();var p=$('echp');
 var h='<div class="menu"><h2>🪜 L\'échelle des nombres</h2><button class="lv cr" id="ecr"><span class="n">📖</span><span><b>Le cours</b><small>Monter = ça grandit · descendre = ça rapetisse</small></span></button>';
 LV.forEach(function(l){var r=save['ech_'+l.n];h+='<button class="lv" data-l="'+l.n+'"><span class="n">'+l.n+'</span><span><b>'+l.t+'</b><small>'+l.sub+' · 12 exercices'+(r!=null?' · Record : '+r+'/12':'')+'</small></span></button>'});
 h+='<button class="lv" id="ex" style="justify-content:center;border-color:#e03a3a;color:#e03a3a">✕ Quitter</button></div>';
 p.innerHTML=h;p.style.display='block';
 $('ecr').onclick=learn;$('ex').onclick=quit;p.querySelectorAll('[data-l]').forEach(function(b){b.onclick=function(){play(+b.dataset.l)}})}
/* ---------- cours ---------- */
var STEPS=[10,20,30,40,50,100];
function learn(){sess++;busy=false;P=prof();shell();mode='learn';cfg={base:0,unit:cfg&&cfg.unit&&cfg.base==0&&STEPS.indexOf(cfg.unit)>=0?cfg.unit:10};pos=0;learnUI();build()}
function learnUI(){var i=STEPS.indexOf(cfg.unit);
 $('echh').innerHTML='<button class="x" id="eb">‹ Menu</button><button class="on">Cours</button>';$('eb').onclick=menu;
 $('echn').innerHTML='<div class="nav"><button id="pv">‹</button><span>'+cfg.unit+' en '+cfg.unit+'</span><button id="nx">›</button></div><div class="eq" id="eeq"></div><div class="sub" id="esub">1 barreau = '+cfg.unit+'</div><div class="sub">Je monte : ça grandit ⬆️ · Je descends : ça rapetisse ⬇️</div>';
 $('echd').innerHTML='<div class="hint">👆 Touche un nombre pour y monter ou y descendre</div><button class="go g" id="edemo">▶️ Voir l\'exemple</button><button class="go" id="eplay">🎮 Jouer aux exercices</button>';
 $('pv').onclick=function(){setUnit(STEPS[(i+STEPS.length-1)%STEPS.length])};$('nx').onclick=function(){setUnit(STEPS[(i+1)%STEPS.length])};
 $('edemo').onclick=demo;$('eplay').onclick=menu;
 $('echl').onclick=function(e){var t=e.target.closest('.tag');if(t&&!busy)mvL(+t.id.slice(2))}}
function setUnit(u){if(busy)return;cfg={base:0,unit:u};pos=0;learnUI();build()}
function eqL(f,t){if(f==t||!$('eeq'))return;var a=val(f),b=val(t),d=Math.abs(t-f)*cfg.unit;$('eeq').innerHTML='<span class="pill n">'+a+'</span><span class="pill '+(t>f?'p':'m')+'">'+(t>f?'+':'−')+' '+d+'</span><span class="pill n">= '+b+'</span>';$('esub').textContent=Math.abs(t-f)+' barreau'+(Math.abs(t-f)>1?'x':'')+' · 1 barreau = '+cfg.unit}
async function mvL(to){var f=pos;await go(to);eqL(f,pos)}
async function demo(){if(busy)return;var my=sess;if(pos)await go(0);var s=[1,0,2,0,2,1,3,1,0];for(var i=0;i<s.length;i++){if(my!=sess)return;var f=pos;await go(s[i]);eqL(f,pos);await wait(800)}}
/* ---------- exercices ---------- */
function play(n){sess++;busy=false;P=prof();shell();mode='quest';lvl=LV[n-1];qi=0;score=0;loadQ()}
function loadQ(){var L=lvl,qs=Q[L.n];if(qi>=qs.length)return fin();sess++;busy=false;done=false;fails=0;
 var q=qs[qi],isGo=q[0]==='go';cfg={base:L.base,unit:L.unit};pos=Math.round(((q[0]==='p'?L.base:q[1])-L.base)/L.unit);hop=1;
 $('echh').innerHTML='<button class="x" id="eb">✕</button><button class="on">'+L.t+' · '+(qi+1)+'/'+qs.length+'</button>';$('eb').onclick=menu;
 $('echn').innerHTML='<div class="say"><img src="'+P.av+'" alt=""><div class="bq" id="ebq"><b>'+P.name+' :</b> « '+say(q,L)+' »</div></div>';
 var st=isGo&&L.st.length>1&&Math.abs(q[2]-q[1])>=L.unit*2;
 $('echd').innerHTML=(isGo?'<div class="hint">👆 Touche le bon nombre sur l\'échelle</div>':'')+
  (st?'<div class="stp" id="estp">'+L.st.map(function(x,i){return '<button data-h="'+x/L.unit+'" class="'+(i==0?'on':'')+'">pas de '+x+'</button>'}).join('')+'</div>':'')+
  '<div class="ch2" id="ech2"></div><div id="eins"></div><button class="go g" id="enx">Question suivante ➜</button>';
 build();
 if($('estp'))$('estp').onclick=function(e){var b=e.target.closest('button');if(!b)return;hop=+b.dataset.h;[].forEach.call($('estp').children,function(c){c.classList.toggle('on',c==b)})};
 $('enx').onclick=function(){if(!busy){qi++;loadQ()}};
 $('echl').onclick=function(e){var t=e.target.closest('.tag');if(t)tap(+t.id.slice(2))};
 if(!isGo){var my=sess;(async function(){await wait(500);
   var tp=q[0]==='d'?(q[2]-L.base)/L.unit:(q[2]-L.base)/L.unit;await go(tp);if(my!=sess)return;
   var ans=q[0]==='d'?Math.abs(q[2]-q[1]):q[1]+q[3]-0;
   if(q[0]==='p')ans=q[2]+q[3];
   var ch=q[q[0]==='p'?4:3].slice();$('ech2').innerHTML=ch.map(function(x){return '<button data-v="'+x+'">'+x+'</button>'}).join('');
   $('ech2').onclick=function(e){var b=e.target.closest('button');if(!b||done)return;if(+b.dataset.v===ans){done=true;b.classList.add('good');if(!fails)score++;win(q,ans)}else{fails++;b.classList.add('bad')}}})()}}
async function tap(k){if(busy||done)return;var q=Q[lvl.n][qi];if(q[0]!=='go')return;await go(k,1);chk(q)}
function chk(q){if(busy||done)return;var now=val(pos);if(now===q[2]){done=true;if(!fails)score++;win(q,now)}else{fails++;$('ebq').innerHTML='<b>'+P.name+' :</b> « Je suis à <b>'+now+'</b>. Je dois '+(q[2]>now?'monter':'descendre')+' encore ! »'}}
function win(q,ans){var up,txt;
 if(q[0]==='p'){up=q[3]>0;txt='Bravo ! '+q[2]+' '+(up?'+':'−')+' '+Math.abs(q[3])+' = <b>'+ans+'</b>';var f=(ans-cfg.base)/cfg.unit;put(f)}
 else{up=q[2]>q[1];txt='Bravo ! '+q[1]+' '+(up?'+':'−')+' '+Math.abs(q[2]-q[1])+' = <b>'+q[2]+'</b>'}
 $('ebq').innerHTML='<b>'+P.name+' :</b> « '+txt+' »';
 $('eins').innerHTML='<div class="ins '+(up?'u':'d')+'">'+(up?'⬆️ Je monte : le nombre GRANDIT':'⬇️ Je descends : le nombre RAPETISSE')+'</div>'+(q[0]==='go'&&hop>1?'<div class="sub">Grand pas = j\'arrive plus vite ! 🚀</div>':'')+(q[0]==='p'&&Math.abs(q[3])%cfg.unit?'<div class="sub">'+Math.abs(q[3])+' = une demi-marche ✨</div>':'')}
function fin(){sess++;var n=lvl.n,tot=Q[n].length,r=save['ech_'+n];
 if(r==null||score>r){save['ech_'+n]=score;if(typeof persist==='function')persist()}
 $('echh').innerHTML='<button class="x" id="eb">‹ Menu</button>';$('eb').onclick=menu;
 $('echn').innerHTML='<div class="say"><img src="'+P.av+'" alt=""><div class="bq"><b>'+P.name+' :</b> « '+(score>=tot-1?'Champion de l\'échelle ! 🏆':score>=tot*0.6?'Bien joué ! 💪':'On recommence, tu vas y arriver ! 🪜')+' »</div></div><div class="eq"><span class="pill p">'+score+' / '+tot+' du premier coup</span></div>';
 $('echd').innerHTML='<button class="go" id="erp">🔁 Rejouer</button>'+(n<LV.length?'<button class="go g" id="eng">Niveau suivant ➜</button>':'')+'<button class="go g" id="emn">Menu</button>';
 $('erp').onclick=function(){play(n)};if($('eng'))$('eng').onclick=function(){play(n+1)};$('emn').onclick=menu;
 pos=0;build()}
window.echOpen=menu;
})();
