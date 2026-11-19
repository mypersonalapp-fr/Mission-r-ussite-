/* Quelques mots en anglais : couleurs, nombres 1-100 (audio, lecture, écriture) + fiche coloriage */
(function(){
var U=['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
var TN={20:'twenty',30:'thirty',40:'forty',50:'fifty',60:'sixty',70:'seventy',80:'eighty',90:'ninety'};
function nw(n){if(n===100)return'one hundred';if(n<20)return U[n];var t=TN[Math.floor(n/10)*10];return n%10?t+'-'+U[n%10]:t}
window.enSay=function(t){try{var u=new SpeechSynthesisUtterance(t);u.lang='en-GB';u.rate=.8;speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){}};
var COL=[['red','rouge','#e53935'],['pink','rose','#ff8fb1'],['brown','marron','#8d5a2b'],['blue','bleu','#2a6df4'],['green','vert','#3dbb5a'],['yellow','jaune','#ffd43b'],['orange','orange','#ff9f1c'],['black','noir','#222'],['white','blanc','#fff'],['purple','violet','#8e44ad'],['grey','gris','#9aa0a6']];
function numItems(a){return a.map(function(n){return{c:'n'+n,n:nw(n),r:'',num:n}})}
function rng(a,b,s){var r=[];for(var i=a;i<=b;i+=s||1)r.push(i);return r}
var comp=[];rng(21,99).forEach(function(n){if(n%10)comp.push(n)});
var SETS={
 col:{t:'Les couleurs',ic:'🎨',items:COL.map(function(c){return{c:'c'+c[0],n:c[0],r:c[1],col:c[2]}}),sub:'red, blue, green…'},
 n10:{t:'Les nombres de 1 à 10',ic:'🔢',items:numItems(rng(1,10)),sub:'one, two, three…'},
 n20:{t:'Les nombres de 11 à 20',ic:'🔢',items:numItems(rng(11,20)),sub:'eleven, twelve…'},
 dz:{t:'Les dizaines : 20 à 100',ic:'🔟',items:numItems(rng(20,100,10)),sub:'twenty, thirty… one hundred'},
 cp:{t:'Les nombres de 21 à 99',ic:'💯',items:numItems(comp),sub:'twenty-one, thirty-five…',ex:[21,32,43,54,65,76,87,98]}
};
var MODES=[['✈️','Le calque','Je recopie le mot en suivant les lettres grises'],['🧠','Flash mémoire','Je regarde le mot 3 secondes, puis je l\'écris'],['🛂','Mon passeport','Je lis, je choisis le bon mot, puis je l\'écris'],['👂','J\'écoute et j\'écris','J\'entends le mot, je trouve l\'image, puis j\'écris']];
function swatch(c,sz){return '<span style="display:inline-block;width:'+sz+'px;height:'+sz+'px;border-radius:50%;background:'+c+';border:3px solid #1b2347;box-shadow:0 3px 0 #0002"></span>'}
function mini(o,small){if(o.col)return swatch(o.col,small?26:46);return '<b style="font:900 '+(small?'.95':'1.6')+'rem var(--display);color:#1b2347">'+o.num+'</b>'}
function pic(o,hid){if(hid)return '<div style="font-size:3rem;margin:8px 0">🔊</div>';
 var vis=o.col?swatch(o.col,84):'<span style="font:900 3.6rem var(--display);color:#2459e6">'+o.num+'</span>';
 return '<div style="margin:8px 0">'+vis+'</div><div class="row" style="justify-content:center">'+(o.r?'<span class="chip" style="font-size:.9rem;min-height:0;padding:3px 12px">'+o.r+'</span>':'')+'<button class="speak" data-en="'+o.n+'" style="margin:0 6px">🔊</button></div>'}
function setFGX(id){var S=SETS[id];FGX={key:'fe_'+id+'_',modes:MODES,
 pool:function(){return S.items},all:function(){return S.items},
 get:function(c){return S.items.find(function(x){return x.c===c})},
 mini:function(o,sm){return mini(o,sm)},pic:pic,
 menu:function(){enOpen(id)},learn:function(){enLearn(id)}}}
window.enTiles=function(){return '<p class="lead" style="margin:10px 0 6px;grid-column:1/-1">🎮 Je lis, j\'écoute, j\'écris</p>'+
 Object.keys(SETS).map(function(k){var S=SETS[k];return '<button class="tile" data-ens="'+k+'"><span class="badge b-det">'+S.ic+'</span><span><b>'+S.t+'</b><small>'+S.sub+'</small></span></button>'}).join('')+
 '<button class="tile" data-ens="color"><span class="badge b-det">🖍️</span><span><b>Colorie en respectant les couleurs</b><small>Fiche : 1 red, 2 pink…</small></span></button>'};
function up(){CG.ka=2;culture()}
window.enLearn=function(id){var S=SETS[id];FGX=null;
 var items=S.ex?numItems(S.ex):S.items;
 app.innerHTML=cTop(S.t,'Anglais')+'<div class="card" style="text-align:center"><p class="lead">Je touche pour écouter 🔊, je lis, puis je recopie.</p>'+(S.ex?'<p>Dizaine + unité, avec un <b>tiret</b> : <b>twenty-one</b> (20 + 1).</p>':'')+
 '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px">'+items.map(function(o){var it=S.items.find(function(x){return x.c===o.c})||o;
  return '<button class="opt" data-en="'+it.n+'" style="display:flex;align-items:center;gap:10px;justify-content:center;padding:10px">'+mini(it,0)+'<span><b style="font-size:1.1rem">'+it.n+'</b>'+(it.r?'<br><small>'+it.r+'</small>':'')+'</span></button>'}).join('')+'</div>'+
 '<button class="go" id="enplay" style="margin-top:12px">🎮 Jouer</button></div>';
 bindTabs();document.getElementById('back').onclick=up;document.getElementById('enplay').onclick=function(){enOpen(id)}};
window.enOpen=function(id){
 if(id==='color')return enColor();
 var S=SETS[id];setFGX(id);fg=null;
 app.innerHTML=cTop(S.t,'Anglais')+'<div class="card"><button class="tile" id="enlearn"><span class="badge b-det">📖</span><span><b>Je découvre</b><small>J\'écoute et je lis</small></span></button>'+
 '<div class="fgmd">'+MODES.map(function(m,i){var r=save['fe_'+id+'_'+i];return '<button data-fm="'+i+'"><span class="em">'+m[0]+'</span><span><b>'+m[1]+'</b><small>'+m[2]+(r!=null?' · Record : '+r+'/10':'')+'</small></span></button>'}).join('')+'</div></div>';
 bindTabs();document.getElementById('back').onclick=up;
 document.getElementById('enlearn').onclick=function(){enLearn(id)};
 app.querySelectorAll('[data-fm]').forEach(function(b){b.onclick=function(){setFGX(id);fgStart(+b.dataset.fm)}})};
/* Fiche coloriage : mes propres dessins, même consigne */
var Z=[
 [4,'M20 44c-14 0-18-22 0-24 2-16 28-20 34-6 10-8 30 0 24 14 16 2 14 18 0 18z',50,38],
 [4,'M178 84c-12 0-16-20 0-22 2-14 26-18 32-4 10-8 28 0 22 12 15 2 13 16 0 16z',208,76],
 [6,'M246 30a22 22 0 1 0 44 0a22 22 0 1 0-44 0z',268,35],
 [5,'M6 214c30-10 60 6 90 0s60 8 90 0 60 8 108 0v34H6z',150,236],
 [3,'M44 220l-4-70c0-8 30-8 28 0l8 70z',52,200],
 [5,'M12 130c-8-22 14-46 38-42 14-14 44-6 44 14 20 6 18 36-4 38-10 12-44 12-52 2-12 2-24-2-26-12z',52,112],
 [2,'M118 124h72l8 90h-88z',136,160],
 [3,'M143 214v-40a13 13 0 0 1 26 0v40z',156,204],
 [6,'M104 124c4-40 36-62 52-62s48 22 52 62z',156,88],
 [1,'M140 122c-6-16 8-20 16-8 8-12 22-8 16 8z',156,119],
 [1,'M222 150a12 9 0 1 0-24-2a12 9 0 1 0 24 2z',210,152],
 [1,'M226 150a12 9 0 1 0 24-2a12 9 0 1 0-24 2z',238,152]
];
var PAL=[[1,'red','#e53935'],[2,'pink','#ff8fb1'],[3,'brown','#8d5a2b'],[4,'blue','#2a6df4'],[5,'green','#3dbb5a'],[6,'yellow','#ffd43b']];
window.enColor=function(){FGX=null;var sel=null,done={};
 function draw(){
  var okc=Object.keys(done).length;
  app.innerHTML=cTop('Colorie en respectant les couleurs','Anglais')+'<div class="card" style="text-align:center"><p class="lead">Je choisis un nombre-couleur, puis je touche les zones qui portent ce numéro.</p>'+
  '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:6px 0">'+PAL.map(function(p){return '<button class="opt '+(sel===p[0]?'good':'')+'" data-p="'+p[0]+'" style="display:flex;align-items:center;gap:8px;justify-content:center;padding:8px"><b>'+p[0]+'. '+p[1]+'</b><span style="display:inline-block;width:22px;height:22px;border-radius:50%;border:3px solid #1b2347;background:'+(sel===p[0]?p[2]:'#fff')+'"></span></button>'}).join('')+'</div>'+
  '<svg viewBox="0 0 300 260" style="width:100%;max-width:340px;background:#f7fbff;border-radius:14px;border:2px solid #d9dff5">'+Z.map(function(z,i){return '<path data-z="'+i+'" d="'+z[1]+'" fill="'+(done[i]?PAL[z[0]-1][2]:'#fff')+'" stroke="#1b2347" stroke-width="2.2" stroke-linejoin="round"/>'}).join('')+
  Z.map(function(z,i){return done[i]?'':'<text x="'+z[2]+'" y="'+z[3]+'" text-anchor="middle" font-size="15" font-weight="900" fill="#1b2347" pointer-events="none">'+z[0]+'</text>'}).join('')+'</svg>'+
  '<div class="big" id="enfb" style="min-height:26px;font-weight:800;margin-top:6px">'+(okc===Z.length?'🎉 Bravo ! Tout est colorié.':'')+'</div>'+
  (okc===Z.length?'<button class="go" id="enrs">Recommencer</button>':'')+'</div>';
  bindTabs();document.getElementById('back').onclick=up;
  app.querySelectorAll('[data-p]').forEach(function(b){b.onclick=function(){sel=+b.dataset.p;enSay(PAL[sel-1][1]);draw()}});
  app.querySelectorAll('[data-z]').forEach(function(p){p.onclick=function(){var i=+p.dataset.z,n=Z[i][0],fb=document.getElementById('enfb');
   if(sel==null){fb.textContent='Choisis d\'abord une couleur en haut 👆';return}
   if(sel===n){done[i]=1;enSay(PAL[n-1][1]);draw();if(Object.keys(done).length===Z.length){save.en_col=1;persist()}}
   else{fb.innerHTML='Ici c\'est le <b>'+n+'</b> : <b>'+PAL[n-1][1]+'</b> !';enSay(PAL[n-1][1])}}});
  var rs=document.getElementById('enrs');if(rs)rs.onclick=function(){done={};sel=null;draw()}}
 draw()};
})();
