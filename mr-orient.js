/* Je me repère dans l'espace (avec Rico) : cours en 3 écrans + 26 exercices (devant/derrière/gauche/droite, noms de cases, chemins) */
(function(){
var $=function(i){return document.getElementById(i)};
var COLS=['A','B','C','D'],T=null,P={name:'Miguel'},st={};
function prof(){var p=window.MRNIV&&MRNIV.prof&&MRNIV.prof();return {name:(p&&p.name)||(typeof save!=='undefined'&&save.name)||'Miguel'}}
var cn=function(c,r){return COLS[c]+(r+1)};
var RICO='img/nv/rico.jpg';
function css(){return '<style id="oricss">'+
'#ori{position:fixed;inset:0;z-index:99999;display:flex;justify-content:center;background:#dfe5fb;font:18px/1.45 Nunito,system-ui,sans-serif;color:#1b2347}'+
'#ori *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}#ori button{font-family:inherit;cursor:pointer;color:inherit}'+
'#orp{width:min(100vw,430px);height:100dvh;background:#f2f5ff;overflow-y:auto;padding:14px 14px 40px}'+
'#ori h2{font:800 1.5rem/1.1 "Baloo 2",system-ui,sans-serif;margin:0}'+
'#ori .top{display:flex;align-items:center;gap:12px;margin-bottom:12px}#ori .back{padding:10px 14px;border-radius:16px;border:2px solid #d9dff5;background:#fff;font:800 1rem "Baloo 2",sans-serif}'+
'#ori .bars{flex:1;display:flex;gap:6px}#ori .bars i{flex:1;height:10px;border-radius:6px;background:#dbe0f4}#ori .bars i.on{background:#f5b400}'+
'#ori .bar1{flex:1;height:10px;border-radius:6px;background:#dbe0f4;overflow:hidden}#ori .bar1 i{display:block;height:100%;background:#f5b400;border-radius:6px}'+
'#ori .card{background:#fff;border:2px solid #d9dff5;border-radius:22px;padding:18px;display:flex;flex-direction:column;gap:14px}'+
'#ori .lead{color:#5b6491;font-weight:800;font-size:.9rem;text-transform:uppercase;letter-spacing:.06em}'+
'#ori .row{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;gap:10px;align-items:flex-end}#ori .bub{flex:1 1 auto!important;min-width:0;width:auto!important}#ori .face{width:62px;height:62px;border-radius:50%;object-fit:cover;border:3px solid #f5b400;flex:none;background:#fff}'+
'#ori .bub{background:#fff3d6;border:2px solid #f0b429;border-radius:20px 20px 20px 6px;padding:10px 14px;font-weight:800;font-size:1.02rem;line-height:1.4;color:#5a3a0a}'+
'#ori .go{padding:14px 22px;border-radius:16px;background:#2459e6;color:#fff;border:0;font:800 1.1rem "Baloo 2",sans-serif;min-height:52px;align-self:flex-start}'+
'#ori .ghost{padding:12px 16px;border-radius:14px;border:2px solid #d9dff5;background:#fff;font:800 1rem "Baloo 2",sans-serif;min-height:48px}'+
'#ori .btns{display:flex;gap:10px;flex-wrap:wrap;align-items:center}'+
'#ori .menu{display:flex;flex-direction:column;gap:12px}#ori .lv{display:flex;gap:12px;align-items:center;text-align:left;padding:14px;border-radius:18px;border:2px solid #d9dff5;background:#fff}#ori .lv .n{font-size:1.9rem}#ori .lv b{display:block;font:800 1.15rem "Baloo 2",sans-serif}#ori .lv small{color:#5b6491;font-weight:700}'+
'#ori .stage{position:relative;margin:0 auto}'+
'#ori .scene0{width:300px;height:290px;background:linear-gradient(#c9ecff,#e6f8ff 40%,#bfe8a8 41%,#8fd08a);border-radius:22px;overflow:hidden}'+
'#ori .scene0 .me{position:absolute;left:115px;top:108px;width:70px;height:70px;border-radius:50%;border:4px solid #f5b400;object-fit:cover;background:#fff}'+
'#ori .pal{flex-direction:column;text-align:center;position:absolute;border:3px solid #fff;background:#ffffffd9;border-radius:16px;padding:4px 12px;font:800 1rem/1.1 "Baloo 2",sans-serif;box-shadow:0 3px 0 #0002;display:flex;align-items:center}#ori .pal.on{background:#f5b400}#ori .pal b{font-size:1.7rem;line-height:1}'+
'#ori .grid{display:grid;grid-template-columns:repeat(4,64px);grid-template-rows:repeat(4,64px);gap:4px;padding:4px;background:#6bb36a;border-radius:18px;border:3px solid #4d9a54}'+
'#ori .cell{border-radius:10px;background:#d9f5e8;border:0;display:flex;align-items:center;justify-content:center;font-size:1.7rem;padding:0}#ori .cell.alt{background:#c4ecd8}#ori .cell.hit{background:#f5b400;box-shadow:inset 0 0 0 3px #fff}#ori .cell.bad{background:#ffd0c4}'+
'#ori .lab{font:800 1rem "Baloo 2",sans-serif;color:#5b6491;text-align:center}'+
'#ori .wrap{display:grid;grid-template-columns:22px auto;gap:4px;justify-content:center;align-items:center}'+
'#ori .cols{display:grid;grid-template-columns:repeat(4,64px);gap:4px;padding:0 4px}#ori .rows{display:grid;grid-template-rows:repeat(4,64px);gap:4px;padding:4px 0}'+
'#ori .tok{position:absolute;width:54px;height:54px;transition:left .35s ease,top .35s ease;pointer-events:none;z-index:3}#ori .tok img{width:100%;height:100%;border-radius:50%;border:3px solid #f5b400;object-fit:cover;background:#fff}'+
'#ori .tok.hop{animation:orhop .35s}@keyframes orhop{50%{transform:translateY(-14px) scale(1.08)}}'+
'#ori .chips{display:flex;gap:6px;flex-wrap:wrap;min-height:46px;padding:8px;border:2px dashed #d9dff5;border-radius:14px;background:#f8f9ff}'+
'#ori .chip{width:38px;height:38px;border-radius:10px;background:#dfe8ff;border:2px solid #b9c9f5;display:grid;place-items:center;font:800 1.3rem "Baloo 2",sans-serif;color:#2459e6}#ori .chip.run{background:#f5b400;color:#5a3a0a;border-color:#fff}'+
'#ori .arr{width:64px;height:56px;border-radius:16px;border:2px solid #d9dff5;background:#fff;font:800 1.5rem "Baloo 2",sans-serif;box-shadow:0 3px 0 #d9dff5}#ori .arr:active{transform:translateY(2px);box-shadow:none}'+
'#ori .pad{display:grid;grid-template-columns:repeat(4,64px);gap:8px;justify-content:center}'+
'#ori .opts{display:grid;grid-template-columns:1fr 1fr;gap:10px}#ori .opt{padding:14px 10px;border-radius:16px;border:2px solid #d9dff5;background:#f2f5ff;font:800 1.15rem "Baloo 2",sans-serif;min-height:54px}#ori .opt.good{background:#d9f5e8;border-color:#0e9a63;color:#0b6b43}#ori .opt.bad{background:#ffe9df;border-color:#d4572a;color:#a63e17}'+
'#ori .fbk{font-weight:800;border-radius:14px;padding:10px 14px}#ori .fbk.ok{background:#d9f5e8;color:#0b6b43;border:2px solid #0e9a63}#ori .fbk.ko{background:#ffe9df;color:#a63e17;border:2px solid #d4572a}'+
'#ori .win{display:flex;gap:6px;justify-content:center}#ori .star{font-size:2.2rem;animation:orpop .5s both}@keyframes orpop{0%{transform:scale(0)}70%{transform:scale(1.3)}100%{transform:scale(1)}}'+
'#ori .dirs{margin:0 auto}'+
'</style>'}
function shell(){var o=$('ori');if(o)o.remove();var d=document.createElement('div');d.id='ori';d.innerHTML=css()+'<div id="orp"></div>';document.body.appendChild(d)}
function quit(){clearInterval(T);var o=$('ori');if(o)o.remove();if(typeof mmode!=='undefined'){mmode='f';mtab='geo';maths()}}
var say=function(t){return '<div class="row"><img class="face" src="'+RICO+'" alt="Rico"><div class="bub" id="osay">'+t+'</div></div>'};
var setSay=function(t){var e=$('osay');if(e)e.innerHTML=t};
var body=function(h){$('orp').innerHTML=h};
function bars(i,n){var b='';for(var k=0;k<n;k++)b+='<i class="'+(k<=i?'on':'')+'"></i>';return b}
/* grille */
function gridHTML(items,rico){var h='<div class="wrap"><div></div><div class="cols">'+COLS.map(function(c){return '<div class="lab">'+c+'</div>'}).join('')+'</div><div class="rows">'+[4,3,2,1].map(function(r){return '<div class="lab" style="display:grid;place-items:center">'+r+'</div>'}).join('')+'</div><div class="stage"><div class="grid">';
 for(var r=3;r>=0;r--)for(var c=0;c<4;c++)h+='<button class="cell '+((r+c)%2?'alt':'')+'" data-c="'+c+'" data-r="'+r+'">'+((items&&items[c+','+r])||'')+'</button>';
 return h+'</div>'+(rico?'<div class="tok" id="otk"><img src="'+RICO+'" alt="Rico"></div>':'')+'</div></div>'}
function tokAt(c,r){var t=$('otk');if(!t)return;t.style.left=(7+c*68)+'px';t.style.top=(7+(3-r)*68)+'px'}
function hop(){var t=$('otk');if(!t)return;t.classList.remove('hop');void t.offsetWidth;t.classList.add('hop')}

/* ---------- menu ---------- */
function menu(){clearInterval(T);P=prof();shell();var b=(typeof save!=='undefined'&&save.ori_best);
 body('<div class="top"><button class="back" id="oq">‹ Maths</button></div><div class="menu"><h2>🧭 Je me repère dans l\'espace</h2>'+say('Salut '+P.name+' ! Avec moi, tu vas apprendre à te repérer : devant, derrière, gauche, droite, et lire une carte.')
 +'<button class="lv" id="ocr"><span class="n">📖</span><span><b>Le cours avec Rico</b><small>3 écrans, avec des jeux</small></span></button>'
 +'<button class="lv" id="oex"><span class="n">🎯</span><span><b>Les exercices</b><small>'+EX.length+' défis'+(b!=null?' · Record : '+b+' / '+EX.length:'')+'</small></span></button></div>');
 $('oq').onclick=quit;$('ocr').onclick=function(){course(0)};$('oex').onclick=function(){play()}}

/* ---------- cours ---------- */
function course(i){clearInterval(T);var S=3,nav=function(last){return '<div class="btns">'+(i>0?'<button class="ghost" id="obk">‹ Retour</button>':'')+'<button class="go" id="onx">'+(last?'Aux exercices ›':'Suivant ›')+'</button></div>'};
 var head='<div class="top"><button class="back" id="oq">‹ Menu</button><div class="bars">'+bars(i,S)+'</div></div>';
 if(i===0){var it=[['🌴','devant','top:12px;left:112px','Le palmier 🌴 est <u>devant</u> moi : je le vois en face !'],['🐍','derrière','bottom:12px;left:108px','Le serpent 🐍 est <u>derrière</u> moi : dans mon dos. Chut !'],['🦜','gauche','top:100px;left:6px','Le perroquet 🦜 est à ma <u>gauche</u>. Ma main gauche est de ce côté !'],['🐒','droite','top:100px;right:6px','Le singe 🐒 est à ma <u>droite</u>. Ma main droite est de ce côté !']];
  body(head+'<div class="card"><span class="lead">Rico t\'explique</span><h2>Devant, derrière, gauche, droite</h2><div class="stage scene0"><img class="me" src="'+RICO+'" alt="">'+it.map(function(x,k){return '<button class="pal" data-k="'+k+'" style="'+x[2]+'"><b>'+x[0]+'</b>'+x[1]+'</button>'}).join('')+'</div>'+say('Salut '+P.name+' ! Moi, c\'est Rico. Touche chaque ami pour savoir où il se trouve par rapport à moi.')+nav()+'</div>');
  document.querySelectorAll('#ori .pal').forEach(function(p){p.onclick=function(){p.classList.add('on');setSay(it[+p.dataset.k][3])}})}
 else if(i===1){body(head+'<div class="card"><span class="lead">Rico t\'explique</span><h2>Je lis une case</h2>'+gridHTML({'3,3':'🧰','2,1':'🌴'},true)+say('Sur ma carte, chaque case a un nom : une <b>lettre</b> et un <b>chiffre</b>. Je suis en <b>B3</b>. Touche une case pour lire son nom !')+nav()+'</div>');tokAt(1,2);
  document.querySelectorAll('#ori .cell').forEach(function(b){b.onclick=function(){document.querySelectorAll('#ori .cell').forEach(function(x){x.classList.remove('hit')});b.classList.add('hit');var c=+b.dataset.c,r=+b.dataset.r;setSay('Cette case s\'appelle <b>'+cn(c,r)+'</b> : colonne '+COLS[c]+', ligne '+(r+1)+'.'+(c===3&&r===3?' Le coffre au trésor 🧰 est là !':''))}})}
 else{body(head+'<div class="card"><span class="lead">Rico t\'explique</span><h2>Je suis un chemin</h2>'+gridHTML({'2,2':'🧰'},true)+'<div class="chips" id="och"><div class="chip">↑</div><div class="chip">↑</div><div class="chip">→</div><div class="chip">→</div></div>'+say('Un chemin, c\'est une suite de flèches. Je pars de A1 et je veux le coffre en C3. Regarde-moi sauter !')+'<div class="btns"><button class="ghost" id="opl">▶ Regarde Rico</button></div>'+nav(true)+'</div>');tokAt(0,0);
  $('opl').onclick=function(){clearInterval(T);var p=[[0,1],[0,2],[1,2],[2,2]],k=0,ch=document.querySelectorAll('#och .chip');tokAt(0,0);ch.forEach(function(c){c.classList.remove('run')});setSay('Je pars de A1…');
   T=setInterval(function(){if(k>0)ch[k-1].classList.remove('run');if(k>=p.length){clearInterval(T);setSay('J\'ai trouvé le coffre en <b>C3</b> ! 2 fois vers le haut, 2 fois vers la droite. 🎉');return}ch[k].classList.add('run');tokAt(p[k][0],p[k][1]);hop();k++},650)}}
 $('oq').onclick=menu;var b=$('obk');if(b)b.onclick=function(){course(i-1)};$('onx').onclick=function(){if(i<S-1)course(i+1);else play()}}

/* ---------- exercices ---------- */
var V={up:[0,1],down:[0,-1],left:[-1,0],right:[1,0]},LEFT={up:[-1,0],down:[1,0],left:[0,-1],right:[0,1]},FN={up:'vers le haut',down:'vers le bas',left:'vers la gauche',right:'vers la droite'};
var AR={up:'↑',down:'↓',left:'←',right:'→'};
function dirAns(f,o){var v=V[f],l=LEFT[f];if(o[0]===v[0]&&o[1]===v[1])return 'devant';if(o[0]===-v[0]&&o[1]===-v[1])return 'derrière';if(o[0]===l[0]&&o[1]===l[1])return 'gauche';return 'droite'}
var D=function(f,o,e){return {k:'dir',f:f,o:o,e:e}},TP=function(c,r){return {k:'tap',c:c,r:r}},NM=function(c,r,w){return {k:'name',c:c,r:r,w:w}},PA=function(s,c,p,m){return {k:'path',s:s,c:c,p:p,m:m}};
var EX=[D('up',[0,1],'🌴'),D('up',[-1,0],'🦜'),D('up',[1,0],'🐒'),D('up',[0,-1],'🐍'),
 TP(1,2),TP(3,0),TP(0,3),
 NM(2,1,0),NM(3,3,1),
 PA([0,0],[2,0],[],'A1 → C1'),PA([0,0],[0,2],[],''),
 D('up',[1,0],'🐢'),D('up',[0,1],'🦋'),
 TP(2,1),TP(3,3),TP(0,0),
 NM(0,2,0),NM(1,0,1),
 PA([0,0],[2,2],[[1,1]],''),PA([3,3],[0,3],[[2,3]],''),
 D('right',[1,0],'🐸'),D('right',[0,1],'🐝'),D('down',[1,0],'🦜'),D('down',[-1,0],'🐒'),
 PA([0,3],[3,0],[[1,2],[2,1]],''),PA([0,0],[3,3],[[1,0],[1,1],[1,2]],'')];
var ix=0,score=0,tried=0,over;
function play(){clearInterval(T);ix=0;score=0;q()}
function q(){clearInterval(T);var e=EX[ix],n=EX.length;tried=0;st={q:[],busy:false,pos:e.s?e.s.slice():[0,0]};
 var head='<div class="top"><button class="back" id="oq">‹ Menu</button><div class="bar1"><i style="width:'+Math.round(ix/n*100)+'%"></i></div></div>';
 var lead='<span class="lead">Exercice '+(ix+1)+' / '+n+'</span>';
 var nextBtn=function(){$('ofb').innerHTML+='<div class="btns" style="margin-top:12px"><button class="go" id="onq">'+(ix<n-1?'Suivant ›':'Voir mon résultat ›')+'</button></div>';$('onq').onclick=function(){ix++;if(ix<n)q();else fin()}};
 var good=function(msg){if(tried===0)score++;$('ofb').innerHTML='<div class="fbk ok">'+msg+'</div>';nextBtn()};
 var bad=function(msg){tried++;$('ofb').innerHTML='<div class="fbk ko">'+msg+'</div>'};
 if(e.k==='dir'){var ans=dirAns(e.f,e.o),cx=130+e.o[0]*88,cy=130-e.o[1]*88,ar=V[e.f],ex=130+ar[0]*58,ey=130-ar[1]*58;
  var sv='<svg viewBox="0 0 260 260" width="260" class="dirs" style="display:block;background:linear-gradient(#bfe8a8,#8fd08a);border-radius:22px"><line x1="130" y1="130" x2="'+ex+'" y2="'+ey+'" stroke="#2459e6" stroke-width="7" stroke-linecap="round"/><circle cx="'+ex+'" cy="'+ey+'" r="11" fill="#2459e6"/><text x="'+cx+'" y="'+(cy+14)+'" text-anchor="middle" font-size="42">'+e.e+'</text><defs><clipPath id="orc"><circle cx="130" cy="130" r="28"/></clipPath></defs><image href="'+RICO+'" x="102" y="102" width="56" height="56" clip-path="url(#orc)" preserveAspectRatio="xMidYMid slice"/><circle cx="130" cy="130" r="30" fill="none" stroke="#f5b400" stroke-width="4"/></svg>';
  body(head+'<div class="card">'+lead+'<h2>Où est l\'ami ?</h2>'+sv+say('Je regarde <b>'+FN[e.f]+'</b> (la flèche bleue). Où est '+e.e+' par rapport à moi ?')+'<div class="opts">'+['devant','derrière','gauche','droite'].map(function(w){return '<button class="opt" data-w="'+w+'">'+w+'</button>'}).join('')+'</div><div id="ofb"></div></div>');
  document.querySelectorAll('#ori .opt').forEach(function(b){b.onclick=function(){if(b.classList.contains('good'))return;if(b.dataset.w===ans){b.classList.add('good');document.querySelectorAll('#ori .opt').forEach(function(x){x.disabled=true});good('Oui ! '+e.e+' est <b>'+ans+'</b>.'+(e.f==='down'||e.f==='left'?' Mets-toi à ma place : ça change quand je tourne !':''))}else{b.classList.add('bad');bad(e.f==='down'||e.f==='left'?'Pas encore. Tourne-toi comme moi : je regarde '+FN[e.f]+', donc ma gauche et ma droite changent de côté.':'Pas encore. Suis la flèche : devant, c\'est là où je regarde.')}}})}
 else if(e.k==='tap'){var nm=cn(e.c,e.r);body(head+'<div class="card">'+lead+'<h2>Touche la bonne case</h2>'+gridHTML({},false)+say('Touche la case <b>'+nm+'</b>. Cherche la colonne <b>'+COLS[e.c]+'</b>, puis la ligne <b>'+(e.r+1)+'</b>.')+'<div id="ofb"></div></div>');
  document.querySelectorAll('#ori .cell').forEach(function(b){b.onclick=function(){if(st.done)return;var c=+b.dataset.c,r=+b.dataset.r;document.querySelectorAll('#ori .cell').forEach(function(x){x.classList.remove('bad')});
   if(c===e.c&&r===e.r){st.done=1;b.classList.add('hit');good('Bravo ! C\'est bien la case '+nm+'.')}else{b.classList.add('bad');bad('Ça, c\'est la case '+cn(c,r)+'. Cherche la colonne '+COLS[e.c]+' et la ligne '+(e.r+1)+'.')}}})}
 else if(e.k==='name'){var nm2=cn(e.c,e.r),who=e.w?'le coffre 🧰':'Rico',items={};if(e.w)items[e.c+','+e.r]='🧰';
  var op=[nm2,cn((e.c+1)%4,e.r),cn(e.c,(e.r+1)%4),cn(e.r,e.c)].filter(function(v,k,a){return a.indexOf(v)===k});while(op.length<3)op.push(cn((e.c+2)%4,(e.r+2)%4));op=op.slice(0,3);op.sort(function(a,b){return a<b?-1:1});
  body(head+'<div class="card">'+lead+'<h2>Quel est le nom de la case ?</h2>'+gridHTML(items,!e.w)+say(e.w?'Où est le coffre au trésor ? Lis la lettre en haut, puis le chiffre à gauche.':'Dans quelle case est-ce que je suis ? Lis la lettre en haut, puis le chiffre à gauche.')+'<div class="opts" style="grid-template-columns:repeat(3,1fr)">'+op.map(function(w){return '<button class="opt" data-w="'+w+'">'+w+'</button>'}).join('')+'</div><div id="ofb"></div></div>');
  if(!e.w)tokAt(e.c,e.r);
  document.querySelectorAll('#ori .opt').forEach(function(b){b.onclick=function(){if(b.classList.contains('good'))return;if(b.dataset.w===nm2){b.classList.add('good');document.querySelectorAll('#ori .opt').forEach(function(x){x.disabled=true});good('Oui ! '+who+' '+(e.w?'est':'suis')+' en <b>'+nm2+'</b> : colonne '+COLS[e.c]+', ligne '+(e.r+1)+'.')}else{b.classList.add('bad');bad('Pas encore. D\'abord la lettre de la colonne, ensuite le chiffre de la ligne.')}}})}
 else{var it={};it[e.c[0]+','+e.c[1]]='🧰';e.p.forEach(function(p){it[p[0]+','+p[1]]='🌴'});var pal={};e.p.forEach(function(p){pal[p[0]+','+p[1]]=1});
  body(head+'<div class="card">'+lead+'<h2>Guide Rico jusqu\'au coffre</h2>'+gridHTML(it,true)+'<div class="chips" id="och"></div><div class="pad"><button class="arr" data-d="left">←</button><button class="arr" data-d="up">↑</button><button class="arr" data-d="down">↓</button><button class="arr" data-d="right">→</button></div><div id="ofb"></div>'+say('Je pars de <b>'+cn(e.s[0],e.s[1])+'</b>. Le coffre est en <b>'+cn(e.c[0],e.c[1])+'</b>.'+(e.p.length?' Attention aux palmiers 🌴 !':'')+' Fais mon chemin avec les flèches, puis touche GO.')+'<div class="btns"><button class="ghost" id="oclr">Effacer</button><button class="go" id="ogo">GO !</button></div></div>');
  tokAt(e.s[0],e.s[1]);var draw=function(){$('och').innerHTML=st.q.map(function(d){return '<div class="chip">'+AR[d]+'</div>'}).join('')};
  document.querySelectorAll('#ori .arr').forEach(function(b){b.onclick=function(){if(st.busy||st.done||st.q.length>=12)return;st.q.push(b.dataset.d);draw();$('ofb').innerHTML=''}});
  $('oclr').onclick=function(){if(st.busy||st.done)return;st.q=[];draw();st.pos=e.s.slice();tokAt(e.s[0],e.s[1]);$('ofb').innerHTML=''};
  $('ogo').onclick=function(){if(st.busy||st.done||!st.q.length)return;st.busy=true;st.pos=e.s.slice();tokAt(e.s[0],e.s[1]);var k=0,ch=document.querySelectorAll('#och .chip');
   T=setInterval(function(){if(k>0)ch[k-1].classList.remove('run');
    if(k>=st.q.length){clearInterval(T);st.busy=false;if(st.pos[0]===e.c[0]&&st.pos[1]===e.c[1]){st.done=1;$('ofb').innerHTML='<div class="fbk ok">Bravo '+P.name+' ! Rico a trouvé le coffre en '+cn(e.c[0],e.c[1])+'.</div><div class="win"><span class="star">⭐</span><span class="star" style="animation-delay:.15s">⭐</span><span class="star" style="animation-delay:.3s">⭐</span></div>';if(tried===0)score++;nextBtn()}else bad('Pas encore : Rico est en '+cn(st.pos[0],st.pos[1])+'. Le coffre est en '+cn(e.c[0],e.c[1])+'. Efface et essaie un autre chemin.');return}
    var d=V[st.q[k]],x=st.pos[0]+d[0],y=st.pos[1]+d[1];ch[k].classList.add('run');
    if(x<0||x>3||y<0||y>3){clearInterval(T);st.busy=false;bad('Aïe, Rico serait sorti de la carte ! Efface et recommence.');return}
    if(pal[x+','+y]){clearInterval(T);st.busy=false;bad('Boum, un palmier 🌴 en '+cn(x,y)+' ! Contourne-le : efface et recommence.');return}
    st.pos=[x,y];tokAt(x,y);hop();k++},520)}}
 $('oq').onclick=menu}
function fin(){clearInterval(T);var n=EX.length,b=save.ori_best;
 if(b==null||score>b){save.ori_best=score}
 if(score>=Math.ceil(n*0.7))save['es-ori']=1;if(typeof persist==='function')persist();
 var msg=score>=n-3?'Champion de la carte ! 🏆':score>=n*0.7?'Bien joué ! 💪':'On recommence, tu vas y arriver ! 🧭';
 body('<div class="top"><button class="back" id="oq">‹ Menu</button></div><div class="card"><span class="lead">Résultat</span><h2>'+score+' / '+n+'</h2>'+say('<b>'+P.name+' :</b> '+msg+(score>=Math.ceil(n*0.7)?'<br>Mission réussie ⭐':'<br>Il faut '+Math.ceil(n*0.7)+' bonnes réponses du premier coup pour la réussir.'))+'<div class="btns"><button class="go" id="orp2">🔁 Rejouer</button><button class="ghost" id="omn">Menu</button></div></div>');
 $('oq').onclick=menu;$('omn').onclick=menu;$('orp2').onclick=play}
window.oriOpen=menu;window.oriEX=EX;
})();
