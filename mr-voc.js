/* Vocabulaire de l'école : 8 thèmes (consignes, exercice, logique, méthodes, volcan, séisme, train, avion).
   Fiches avec démo animée, astuce, quiz « À toi de jouer ! ». Données dans mr-voc-data.js. */
(function(){
var RULES='.vcw{margin:0;background:#f2f5ff;color:#1b2347;font:18px/1.45 var(--body);padding:16px}\n'
+'.vcw #vcp{max-width:430px;margin:0 auto}\n'
+'.vcw *{box-sizing:border-box}\n'
+'.vcw button{font-family:inherit;cursor:pointer;color:inherit}\n'
+'.vcw h1{font:800 1.7rem/1.1 var(--display);margin:6px 0 4px}.vcw h2{font:800 1.6rem/1.1 var(--display);margin:0}\n'
+'.top{display:flex;align-items:center;gap:12px;margin-bottom:14px}\n'
+'.back{padding:10px 14px;border-radius:16px;border:2px solid var(--line);background:#fff;font:800 1rem var(--display)}\n'
+'.bars{flex:1;display:flex;gap:3px}.bars i{flex:1;height:8px;border-radius:5px;background:#dbe0f4}.bars i.on{background:var(--sun)}\n'
+'.card{background:#fff;border:2px solid var(--line);border-radius:22px;padding:18px;display:flex;flex-direction:column;gap:14px}\n'
+'.lead{color:var(--soft);font-weight:800;font-size:.85rem;text-transform:uppercase;letter-spacing:.06em}\n'
+'.row{display:flex;gap:10px;align-items:flex-end}\n'
+'.face{width:58px;height:58px;border-radius:50%;object-fit:cover;border:3px solid var(--sun);flex:none;background:#fff}\n'
+'.bub{flex:1;min-width:0;background:#fff3d6;border:2px solid #f0b429;border-radius:20px 20px 20px 6px;padding:10px 14px;font-weight:800;font-size:1rem;line-height:1.4;color:#5a3a0a}\n'
+'.go{padding:13px 20px;border-radius:16px;background:var(--gn);color:#fff;border:0;font:800 1.05rem var(--display);min-height:50px}\n'
+'.ghost{padding:12px 16px;border-radius:14px;border:2px solid var(--line);background:#fff;font:800 1rem var(--display);min-height:48px}\n'
+'.btns{display:flex;gap:10px;flex-wrap:wrap;align-items:center}\n'
+'.cats{display:grid;gap:12px;margin-top:14px}\n'
+'.cubes{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px}\n'
+'.cube{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;aspect-ratio:1/1;border:2px solid var(--line);background:#fff;border-radius:22px;padding:10px;text-align:center;box-shadow:0 5px 0 var(--line)}\n'
+'.cube:active{transform:translateY(3px);box-shadow:none}\n'
+'.cube .ce{font-size:2.8rem;line-height:1}.cube b,.cube small{display:block}.cube b{font:800 1.05rem/1.15 var(--display)}.cube small{font-weight:700;color:var(--soft);font-size:.8rem;line-height:1.25}\n'
+'.cube.wide{grid-column:1/-1;aspect-ratio:auto;flex-direction:row;padding:14px;gap:12px}\n'
+'.cat{display:flex;gap:14px;align-items:center;text-align:left;border:2px solid var(--line);background:#fff;border-radius:20px;padding:14px;box-shadow:0 4px 0 var(--line)}\n'
+'.cat:active{transform:translateY(2px);box-shadow:none}\n'
+'.cat .ic{font-size:2.2rem;width:58px;height:58px;border-radius:16px;display:grid;place-items:center;flex:none}\n'
+'.cat b{display:block;font:800 1.2rem/1.15 var(--display)}.cat small{font-weight:700;color:var(--soft);font-size:.85rem;line-height:1.3;display:block}\n'
+'.grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n'
+'.fit{border:2px solid var(--line);background:#fff;border-radius:16px;padding:10px 8px;text-align:center;aspect-ratio:1/1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font:800 1rem/1.15 var(--display);box-shadow:0 3px 0 var(--line)}\n'
+'.fit span{display:block;font-size:1.7rem}\n'
+'.w{font:800 2rem/1 var(--display);display:flex;gap:10px;align-items:center}\n'
+'.w em{font-style:normal;font-size:2.2rem}\n'
+'.blk{border-radius:16px;padding:10px 14px;font-weight:700;line-height:1.4}\n'
+'.blk b.t{display:block;font:800 .8rem var(--display);text-transform:uppercase;letter-spacing:.05em;margin-bottom:2px}\n'
+'.mean{background:var(--gn-bg);color:#1a3fa8}\n'
+'.cah{background:#fffdf0;border:2px solid #f0e3a6;background-image:repeating-linear-gradient(#fffdf0 0 27px,#e8ecff 27px 28px);font-family:\'Comic Sans MS\',\'Baloo 2\',cursive;font-weight:700;color:#233}\n'
+'.tip{background:var(--pro-bg);color:#0b6b43}.stp{background:#fff3d6;color:#5a3a0a}.stp ol{margin:4px 0 0;padding-left:22px}.stp li{margin:2px 0}\n'
+'.demo{border:2px dashed #c9d0ea;border-radius:18px;padding:12px;background:#f8f9ff;display:flex;flex-direction:column;gap:10px;align-items:center;min-height:110px;justify-content:center;text-align:center}\n'
+'.dv{font:800 1.25rem/1.6 var(--display);min-height:64px;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:6px 14px}\n'
+'.play{border:0;border-radius:14px;background:var(--sun);color:#4a3200;font:800 1rem var(--display);padding:10px 18px;min-height:44px}\n'
+'.ec{display:inline-block;padding:0 12px;border:3px solid #e0457b;border-radius:50%;animation:vcpop .5s}\n'
+'.eu{background:linear-gradient(#2459e6,#2459e6) no-repeat 0 100%/0 4px;animation:vcgr .6s forwards;padding-bottom:4px}\n'
+'.eb{position:relative;display:inline-block}.eb::after{content:"";position:absolute;left:-4px;top:55%;height:4px;background:#d4572a;border-radius:3px;animation:vcgw .5s forwards;width:0}\n'
+'.ek{display:inline-block;animation:vcpop .5s}\n'
+'.fl{display:inline-block;min-width:70px;border-bottom:3px solid #2459e6;color:#0e9a63;animation:vcpop .5s}\n'
+'.pp{animation:vcpop .5s}.hl{background:#fff1a8;border-radius:8px;padding:0 6px}.hn{background:#d9f5e8;color:#0b6b43;border-radius:8px;padding:0 6px}.hq{background:#ffe0ec;border-radius:8px;padding:0 6px;animation:vcpop .5s}\n'
+'.gr{display:grid;gap:4px;margin:0 auto}.gr span{width:54px;height:40px;border:2px solid #b9c3e8;border-radius:8px;display:grid;place-items:center;background:#fff;font:800 1.1rem var(--display)}\n'
+'.gr span.on{background:#ffe9a8;border-color:#f0b429;animation:vcpop .5s}.gr span.on2{background:#d9f5e8;border-color:#0e9a63;animation:vcpop .5s}\n'
+'.hi,.hi *{fill:#ffd23f!important;stroke:#e0457b!important;stroke-width:3!important;animation:vchip .9s infinite alternate}\n'
+'.pic{width:100%;border-radius:16px;border:2px solid var(--line);display:block}\n'
+'.sect{font:800 .9rem var(--display);color:var(--soft);text-transform:uppercase;letter-spacing:.06em;margin:18px 0 -4px}\n'
+'.draw{stroke-dasharray:140;stroke-dashoffset:140;animation:vcdr .7s forwards}\n'
+'.q{font:800 1.2rem/1.35 var(--display)}\n'
+'.opt{display:block;width:100%;text-align:left;border:2px solid var(--line);background:#fff;border-radius:16px;padding:13px 14px;font:700 1rem/1.35 var(--body);margin-top:9px;min-height:50px}\n'
+'.opt.ok{background:var(--pro-bg);border-color:var(--pro);color:#0b6b43}.opt.no{background:#ffe9df;border-color:#d4572a;animation:vcsh .3s}\n'
+'.fb{font-weight:800;color:#0b6b43;background:var(--pro-bg);border-radius:14px;padding:10px 14px}\n';
var KEYS='@keyframes vchip{to{opacity:.55}}@keyframes vcpop{0%{transform:scale(.4);opacity:0}70%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}'
+'@keyframes vcgr{to{background-size:100% 4px}}@keyframes vcgw{to{width:calc(100% + 8px)}}@keyframes vcdr{to{stroke-dashoffset:0}}@keyframes vcsh{25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}'
+'@keyframes vccf{to{transform:translate(var(--dx),105vh) rotate(var(--rot));opacity:.9}}'
+'.vccf{position:fixed;top:-10px;width:9px;height:14px;z-index:100000;pointer-events:none;animation:vccf 1.6s ease-in forwards}';
var VARS='#vcu{--bg:#f2f5ff;--ink:#1b2347;--soft:#5b6491;--line:#d9dff5;--gn:#2459e6;--gn-bg:#dfe8ff;--pro:#0e9a63;--pro-bg:#d9f5e8;--sun:#f5b400;--display:\'Baloo 2\',\'Trebuchet MS\',system-ui,sans-serif;--body:\'Nunito\',system-ui,sans-serif}\n';
function scope(css){return css.replace(/([^{}]+)\{([^{}]*)\}/g,function(m,sel,body){return sel.split(',').map(function(s){s=s.trim();return s.indexOf('.vcw')===0?'#vcu'+s.slice(4):'#vcu '+s}).join(',')+'{'+body+'}'})}
var CSS=VARS+scope(RULES)+'\n'+KEYS;

var D=window.MRVD,CATS=['conS','exoS','logS','metS','volS','seiS','traS','aviS'];
if(window.MRVD_X){Object.keys(MRVD_X).forEach(function(k){D[k]=MRVD_X[k];CATS.push(k)})}
var GR=[['🏫','L\'école',['conS','exoS','logS','metS']],['🌋','La Terre et le ciel',['volS','seiS','metoS','espS']],['🚆','Les transports',['traS','aviS','bateS']],['🌿','Dehors',['ruS','natS']],['🫀','Corps et histoire',['corpS','dinoS','chaS']],['🗣️','Mots et expressions',['expS','regS']]];
var A,HS=[],CURF=null,CURK='',BK=0;
function faceSrc(){try{if(window.MRNIV&&MRNIV.prof){var p=MRNIV.prof();if(p&&p.av)return p.av}}catch(e){}return 'img/nv/rico.jpg'}
function say(t){return '<div class="row"><img class="face" src="'+faceSrc()+'" alt=""><div class="bub">'+t+'</div></div>'}
function confetti(){var c=['#f5b400','#2459e6','#0e9a63','#e0457b'];for(var j=0;j<34;j++){var e=document.createElement('i');e.className='vccf';e.style.left=Math.random()*100+'vw';e.style.background=c[j%4];e.style.setProperty('--dx',((Math.random()-.5)*160)+'px');e.style.setProperty('--rot',((Math.random()-.5)*900)+'deg');e.style.animationDelay=Math.random()*.3+'s';document.body.appendChild(e);setTimeout(function(x){x.remove()},2600,e)}}
function nav(k,f){if(k===CURK){CURF=f;return}if(!BK&&CURF)HS.push(CURF);BK=0;CURK=k;CURF=f}
function back(){var p=HS.pop();if(p){BK=1;p()}else quit()}
function quit(){var o=document.getElementById('vcu');if(o)o.remove();try{if(typeof vocab==='function')vocab()}catch(e){}}
function topb(n,on){var b='';for(var i=0;i<n;i++)b+='<i class="'+(i<=on?'on':'')+'"></i>';return '<div class="top"><button class="back" id="bk">‹ Retour</button><div class="bars">'+b+'</div></div>'}
function done(k){try{var d=JSON.parse(localStorage.getItem('mr-voc-done')||'{}');d[k]=1;localStorage.setItem('mr-voc-done',JSON.stringify(d))}catch(e){}}
window.vocDone=function(k){try{return !!JSON.parse(localStorage.getItem('mr-voc-done')||'{}')[k]}catch(e){return false}};
/* Mots des jeux : tous les mots marqués g:1, sans l'article. Retourne [{e,w,a,theme}] */
window.vocGameWords=function(){var out=[],seen={};CATS.forEach(function(k){D[k].fiches.forEach(function(f){if(!f.g)return;var m=/^(Les |Le |La |L')(.+)$/.exec(f.w);if(!m)return;var w=m[2];if(/[\s]/.test(w))return;if(seen[w.toLowerCase()])return;seen[w.toLowerCase()]=1;out.push({e:f.e,w:w,a:m[1].trim().toLowerCase(),theme:D[k].t,k:k})})});return out};
window.vocGroups=function(){return GR.map(function(g,i){var ks=g[2].filter(function(k){return D[k]}),n=0;ks.forEach(function(k){n+=D[k].fiches.length});return {i:i,e:g[0],t:g[1],ks:ks,n:n}}).filter(function(g){return g.ks.length})};
window.vocBank=function(){var o=[];CATS.forEach(function(k){D[k].quiz.forEach(function(q){o.push([q.q,q.o,q.a])})});return o};
window.vocCats=function(){return CATS.map(function(k){return {k:k,t:D[k].t,e:D[k].e,sub:D[k].sub,n:D[k].fiches.length}})};

function SVGplane(h){function c(id){return h===id?' class="hi"':''}return '<svg viewBox="0 0 300 120" width="290" height="116"><path'+c('queue')+' d="M52 52 L66 52 L40 14 L26 14 Z" fill="#c9d3f5" stroke="#5b6491" stroke-width="2"/><rect'+c('soute')+' x="95" y="66" width="72" height="10" rx="3" fill="#e8ecff" stroke="#5b6491" stroke-width="2" stroke-dasharray="4 3"/><rect'+c('fus')+' x="40" y="44" width="215" height="30" rx="15" fill="#f4f6ff" stroke="#5b6491" stroke-width="2" style="fill-opacity:'+(h==='fus'?.5:.55)+'"/><path'+c('cock')+' d="M228 49 h16 q8 0 10 8 h-26z" fill="#9ec3ff" stroke="#5b6491" stroke-width="2"/><g'+c('hub')+'>'+[80,98,116,134,152,170,188,206].map(function(x){return '<circle cx="'+x+'" cy="56" r="4" fill="#9ec3ff" stroke="#5b6491" stroke-width="1.5"/>'}).join('')+'</g><path'+c('aile')+' d="M140 60 L180 60 L120 104 L98 104 Z" fill="#c9d3f5" stroke="#5b6491" stroke-width="2"/><ellipse'+c('reac')+' cx="146" cy="92" rx="16" ry="8" fill="#d4d9e8" stroke="#5b6491" stroke-width="2"/><g'+c('train')+'><line x1="214" y1="74" x2="214" y2="90" stroke="#5b6491" stroke-width="3"/><circle cx="214" cy="96" r="7" fill="#444" stroke="#222" stroke-width="2"/><line x1="70" y1="74" x2="70" y2="90" stroke="#5b6491" stroke-width="3"/><circle cx="70" cy="96" r="7" fill="#444" stroke="#222" stroke-width="2"/></g></svg>'}
function SVGtrain(h){function c(id){return h===id?' class="hi"':''}return '<svg viewBox="0 0 300 130" width="290" height="126"><line'+c('cat')+' x1="0" y1="18" x2="300" y2="18" stroke="#444" stroke-width="3"/><g'+c('pant')+'><polyline points="86,60 100,32 114,60" fill="none" stroke="#222" stroke-width="3"/><line x1="92" y1="19" x2="108" y2="19" stroke="#222" stroke-width="4"/><line x1="100" y1="32" x2="100" y2="20" stroke="#222" stroke-width="3"/></g><rect'+c('loco')+' x="50" y="60" width="96" height="40" rx="9" fill="#f5b400" stroke="#8a6a00" stroke-width="2"/><rect'+c('cab')+' x="118" y="66" width="22" height="16" rx="4" fill="#9ec3ff" stroke="#5b6491" stroke-width="2"/><rect'+c('wagon')+' x="152" y="62" width="120" height="38" rx="7" fill="#dfe8ff" stroke="#5b6491" stroke-width="2"/>'+[162,188,214,240].map(function(x){return '<rect x="'+x+'" y="70" width="18" height="12" rx="3" fill="#9ec3ff"/>'}).join('')+'<g'+c('rail')+'><line x1="0" y1="114" x2="300" y2="114" stroke="#555" stroke-width="4"/>'+[10,50,90,130,170,210,250,290].map(function(x){return '<line x1="'+x+'" y1="112" x2="'+x+'" y2="124" stroke="#8a6a3a" stroke-width="5"/>'}).join('')+'</g>'+[70,125,175,250].map(function(x){return '<circle cx="'+x+'" cy="106" r="7" fill="#333"/>'}).join('')+'</svg>'}
var SV={plane:SVGplane,train:SVGtrain};
var RELIE0='<svg viewBox="0 0 240 100" width="240" height="100"><text x="22" y="32" font-size="28">🐱</text><text x="22" y="86" font-size="28">🐶</text><text x="160" y="32" font-size="22" font-family="sans-serif" font-weight="800">chat</text><text x="160" y="86" font-size="22" font-family="sans-serif" font-weight="800">chien</text>';
var RELIE1=RELIE0+'<path class="draw" d="M58 24 L155 24" stroke="#e0457b" stroke-width="4" stroke-linecap="round"/><path class="draw" d="M58 78 L155 78" stroke="#e0457b" stroke-width="4" stroke-linecap="round" style="animation-delay:.5s"/></svg>';
RELIE0+='</svg>';

function cube(e,t,sm,bg,at,cl){return '<button class="cube'+(cl?' '+cl:'')+'" '+at+(bg?' style="background:'+bg+'"':'')+'><span class="ce">'+e+'</span><span><b>'+t+'</b><small>'+sm+'</small></span></button>'}
function home(){nav('home',home);var ok=CATS.filter(function(k){return D[k]});
 A.innerHTML=topb(0,0)+'<h1>Vocabulaire de l\'école</h1>'+say('Choisis un <b>sujet</b> !')+'<div class="cubes">'+GR.map(function(g,gi){var ks=g[2].filter(function(k){return D[k]}),n=0;ks.forEach(function(k){n+=D[k].fiches.length});return ks.length?cube(g[0],g[1],ks.length+' thème'+(ks.length>1?'s':'')+' · '+n+' fiches','','data-g="'+gi+'"'):''}).join('')+(window.MRVD_NOTE?cube('🎮','Mots des jeux',vocGameWords().length+' mots illustrés','','data-jeux="1"','wide'):'')+'</div>';
 A.querySelectorAll('[data-g]').forEach(function(b){b.onclick=function(){glist(+b.dataset.g)}});
 var jb=A.querySelector('[data-jeux]');if(jb)jb.onclick=function(){jeux()};scrollTop0()}
function glist(gi){var g=GR[gi];nav('g'+gi,function(){glist(gi)});
 A.innerHTML=topb(0,0)+'<h1>'+g[0]+' '+g[1]+'</h1><div class="cubes">'+g[2].filter(function(k){return D[k]}).map(function(k){var c=D[k];return cube(c.e,c.t,c.fiches.length+' fiches · 1 quiz',c.bg,'data-k="'+k+'"')}).join('')+'</div>';
 A.querySelectorAll('[data-k]').forEach(function(b){b.onclick=function(){list(b.dataset.k)}});scrollTop0()}
function jeux(){nav('jeux',jeux);A.innerHTML=topb(0,0)+MRVD_NOTE();scrollTop0()}
function list(k){var c=D[k];nav('l'+k,function(){list(k)});A.innerHTML=topb(0,0)+'<div class="card"><span class="lead">Vocabulaire</span><h2>'+c.e+' '+c.t+'</h2>'+say(c.say)+'<div class="grid">'+c.fiches.map(function(f,i){return '<button class="fit" data-i="'+i+'"><span>'+f.e+'</span>'+f.w+'</button>'}).join('')+'</div><button class="go" id="vq" style="background:#0e9a63">🎯 À toi de jouer !</button></div>';
 A.querySelectorAll('.fit').forEach(function(b){b.onclick=function(){fiche(k,+b.dataset.i)}});document.getElementById('vq').onclick=function(){quiz(k,0)};scrollTop0()}
function scrollTop0(){var o=document.getElementById('vcu');if(o)o.scrollTop=0}
function fiche(k,i){var c=D[k],f=c.fiches[i];nav('f'+k+i,function(){fiche(k,i)});
 var demo='',a=f.a,b=f.b;if(f.fn){a=SV[f.fn]('');b=SV[f.fn](f.hl)+'<div class="pp" style="font-size:.95rem;margin-top:2px">'+f.w+'</div>'}
 if(f.svg)demo='<div class="demo"><div class="dv" id="dv">'+RELIE0+'</div><button class="play" id="pl">▶ Regarde</button></div>';
 else if(a)demo='<div class="demo"><div class="dv" id="dv">'+a+'</div><button class="play" id="pl">▶ Regarde</button></div>';
 A.innerHTML=topb(c.fiches.length,i)+'<div class="card"><span class="lead">'+c.t+' · '+(i+1)+' / '+c.fiches.length+'</span><div class="w"><em>'+f.e+'</em>'+f.w+'</div>'+
 '<div class="blk mean"><b class="t">'+(c.sayl||'Ça veut dire')+'</b>'+f.say+'</div>'+(f.img?'<img class="pic" src="img/phen/'+f.img+'" alt="">':'')+
 (f.steps?'<div class="blk stp"><b class="t">Comment faire</b><ol>'+f.steps.map(function(s){return '<li>'+s+'</li>'}).join('')+'</ol></div>':'')+
 '<div class="blk cah"><b class="t" style="font-family:var(--display);color:#8a7a2a">'+(c.exl||'Dans un exercice')+'</b>'+f.ex+'</div>'+demo+
 '<div class="blk tip"><b class="t">💡 Astuce</b>'+f.tip+'</div>'+
 '<div class="btns">'+(i>0?'<button class="ghost" id="pv">‹</button>':'')+'<button class="ghost" id="ls">Toutes les fiches</button>'+(i<c.fiches.length-1?'<button class="go" id="nx">›</button>':'<button class="go" id="nx" style="background:#0e9a63">🎯 Quiz</button>')+'</div></div>';
 var pl=document.getElementById('pl');if(pl)pl.onclick=function(){var d=document.getElementById('dv');d.innerHTML=f.svg?RELIE1:b;pl.textContent='↺ Encore';pl.onclick=function(){fiche(k,i)}};
 document.getElementById('ls').onclick=function(){list(k)};if(i>0)document.getElementById('pv').onclick=function(){fiche(k,i-1)};
 document.getElementById('nx').onclick=function(){if(i<c.fiches.length-1)fiche(k,i+1);else quiz(k,0)};scrollTop0()}
function quiz(k,n){var c=D[k],q=c.quiz[n];nav('q'+k+n,function(){quiz(k,n)});
 var idx=q.o.map(function(x,j){return j});idx.sort(function(){return Math.random()-.5});
 A.innerHTML=topb(c.quiz.length,n)+'<div class="card"><span class="lead">À toi ! · '+(n+1)+' / '+c.quiz.length+'</span><div class="q">'+q.q+'</div><div id="os">'+idx.map(function(j){return '<button class="opt" data-j="'+j+'">'+q.o[j]+'</button>'}).join('')+'</div><div id="fb"></div></div>';
 A.querySelectorAll('.opt').forEach(function(b){b.onclick=function(){if(+b.dataset.j===q.a){b.classList.add('ok');confetti();A.querySelectorAll('.opt').forEach(function(o){o.disabled=true});document.getElementById('fb').innerHTML='<div class="fb">✅ Bravo ! '+q.ex+'</div><button class="go" id="nx" style="margin-top:12px">'+(n<c.quiz.length-1?'Suivant ›':'Terminer')+'</button>';document.getElementById('nx').onclick=function(){if(n<c.quiz.length-1)quiz(k,n+1);else fin(k)}}else{b.classList.add('no');b.disabled=true;document.getElementById('fb').innerHTML='<div class="fb" style="background:#ffe9df;color:#a3262c">Pas tout à fait… essaie encore !</div>'}}});scrollTop0()}
function fin(k){var c=D[k];nav('fin'+k,function(){fin(k)});done(k);confetti();A.innerHTML=topb(0,0)+'<div class="card"><span class="lead">Bravo !</span><h2>🏆 '+c.t+'</h2>'+say('Tu connais maintenant ces mots ! Tu peux relire les fiches quand tu veux.')+'<div class="btns"><button class="go" id="va">📖 Revoir les fiches</button><button class="ghost" id="vb">Autres thèmes</button></div></div>';document.getElementById('va').onclick=function(){list(k)};document.getElementById('vb').onclick=home;scrollTop0()}

/* ouverture : vocOpen() = les 8 thèmes ; vocOpen('volS') = directement la liste d'un thème */
window.vocOpen=function(k){var o=document.getElementById('vcu');if(o)o.remove();
 if(!document.getElementById('vcucss')){var st=document.createElement('style');st.id='vcucss';st.textContent=CSS;document.head.appendChild(st)}
 o=document.createElement('div');o.id='vcu';o.className='vcw';o.innerHTML='<div id="vcp"></div>';o.setAttribute('style','position:fixed;inset:0;z-index:99999;overflow-y:auto;-webkit-overflow-scrolling:touch');
 o.addEventListener('click',function(ev){var b=ev.target.closest&&ev.target.closest('.back');if(b)back()});
 document.body.appendChild(o);HS=[];CURF=null;CURK='';BK=0;A=document.getElementById('vcp');
 if(/^g\d+$/.test(k||''))glist(+k.slice(1));else if(k&&D[k])list(k);else home()};
})();
