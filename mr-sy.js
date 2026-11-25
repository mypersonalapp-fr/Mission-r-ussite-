/* Anglais › Jeux › « Colle les syllabes » : 54 mots, blocs audio + prononciation en français, ordre aléatoire. */
(function(){
var RAW="🐱|kitten|kit:kit,ten:teun|kiteun\n🐰|rabbit|rab:rab,bit:bit|rabit\n🐶|puppy|pup:pop,py:pi|popi\n🐵|monkey|mon:meun,key:ki|meunki\n🐯|tiger|ti:taï,ger:gueur|taïgueur\n🐘|elephant|el:él,e:i,phant:feunt|élifeunt\n"
+"🍎|apple|ap:ap,ple:peul|apeul\n🍋|lemon|lem:lèm,on:eun|lèmeun\n🥕|carrot|car:ka,rot:reut|kareut\n🍊|orange|or:or,ange:inj|orinj\n🍌|banana|ba:beu,na:na,na:neu|beunaneu\n🍅|tomato|to:teu,ma:mé,to:tô|teumétô\n🥔|potato|po:peu,ta:téï,to:tô|peutéïtô\n"
+"🚕|taxi|tax:tak,i:si|taksi\n🛴|scooter|scoo:skou,ter:teur|skouteur\n✈️|airplane|air:èr,plane:plèïn|èrplèïn\n🚲|bicycle|bi:baï,cy:si,cle:keul|baïsikeul\n🚁|helicopter|hel:hèl,i:i,cop:kop,ter:teur|hèlikopteur\n"
+"✏️|pencil|pen:pèn,cil:seul|pènseul\n📏|ruler|ru:rou,ler:leur|rouleur\n🧑‍🏫|teacher|tea:ti,cher:tcheur|titcheur\n📓|notebook|note:nôt,book:bouk|nôtbouk\n🛝|playground|play:pléï,ground:graound|pléïgraound\n🎒|backpack|back:bak,pack:pak|bakpak\n"
+"🙋|hello|hel:hè,lo:lô|hèlô\n😔|sorry|sor:so,ry:ri|sori\n🤗|welcome|wel:wèl,come:keum|wèlkeum\n👋|goodbye|good:goud,bye:baï|goudbaï\n🧑‍🤝‍🧑|friendly|friend:frènd,ly:li|frèndli\n😊|thank you|thank:sènk,you:iou|sènk iou\n"
+"🎫|ticket|tick:tik,et:it|tikit\n🏨|hotel|ho:hô,tel:tèl|hôtèl\n🧳|suitcase|suit:sout,case:kéïs|soutkéïs\n🛂|passport|pass:pass,port:port|passport\n🌍|country|coun:keun,try:tri|keuntri\n🏖️|holiday|hol:ho,i:li,day:déï|holidéï\n"
+"🎉|party|par:par,ty:ti|parti\n🕯️|candle|can:kan,dle:deul|kandeul\n🎁|present|pres:prèz,ent:eunt|prèzeunt\n🎈|balloon|bal:beu,loon:loun|beuloun\n🎂|birthday|birth:beurth,day:déï|beurthdéï\n😲|surprise|sur:seur,prise:praïz|seupraïz\n"
+"👩|mother|moth:meuz,er:eur|meuzeur\n👨|father|fa:fa,ther:zeur|fazeur\n👧|sister|sis:sis,ter:teur|sisteur\n👦|brother|broth:breu,er:zeur|breuzeur\n👵|grandma|grand:grand,ma:ma|grandma\n👴|grandpa|grand:grand,pa:pa|grandpa\n👨‍👩‍👧‍👦|family|fam:fam,i:i,ly:li|famili\n"
+"⚽|football|foot:fout,ball:bol|foutbol\n🧩|puzzle|puz:peuz,zle:zeul|peuzeul\n🧸|teddy|ted:tèd,dy:di|tèdi\n🤖|robot|ro:rô,bot:bot|rôbot\n🏀|basketball|bas:bas,ket:kit,ball:bol|baskitbol";
var WORDS=RAW.split('\n').map(function(l){var p=l.split('|');return {e:p[0],w:p[1],s:p[2].split(',').map(function(x){return x.split(':')}),fr:p[3]}});
var CSS='#syu{--soft:#5b6491;--line:#d9dff5;--gn:#2459e6;--pro:#0e9a63;--pro-bg:#d9f5e8;--sun:#f5b400;--display:\'Baloo 2\',\'Trebuchet MS\',system-ui,sans-serif;--body:\'Nunito\',system-ui,sans-serif;background:#f2f5ff;color:#1b2347;font:18px/1.45 var(--body);padding:16px}'
+'#syu *{box-sizing:border-box}#syu #syp{max-width:430px;margin:0 auto}#syu button{font-family:inherit;cursor:pointer;color:inherit}'
+'#syu .top{display:flex;align-items:center;gap:12px;margin-bottom:14px}#syu .back{padding:10px 14px;border-radius:16px;border:2px solid var(--line);background:#fff;font:800 1rem var(--display)}'
+'#syu .cnt{margin-left:auto;font:800 .95rem var(--display);color:var(--soft)}'
+'#syu .card{background:#fff;border:2px solid var(--line);border-radius:22px;padding:18px;display:flex;flex-direction:column;gap:14px;align-items:center;text-align:center}'
+'#syu .row{display:flex;gap:10px;align-items:flex-end;width:100%;text-align:left}#syu .face{width:52px;height:52px;border-radius:50%;object-fit:cover;border:3px solid var(--sun);flex:none;background:#fff}'
+'#syu .bub{flex:1;min-width:0;background:#fff3d6;border:2px solid #f0b429;border-radius:20px 20px 20px 6px;padding:9px 13px;font-weight:800;font-size:.95rem;line-height:1.35;color:#5a3a0a}'
+'#syu .emo{font-size:4.2rem;line-height:1}'
+'#syu .slots,#syu .bank{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;width:100%}'
+'#syu .slot{min-width:74px;min-height:78px;border:3px dashed #b9c3e8;border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#f8f9ff;padding:6px 10px}'
+'#syu .slot.full{border:3px solid var(--pro);border-style:solid;background:var(--pro-bg);animation:sypop .35s}'
+'#syu .slot b,#syu .blk b{font:800 1.5rem/1.1 var(--display)}#syu .slot small,#syu .blk small{font-weight:800;color:var(--soft);font-size:.85rem}'
+'#syu .blk{min-width:74px;min-height:78px;border:3px solid var(--gn);border-radius:16px;background:#fff;box-shadow:0 4px 0 #b9c8f5;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:6px 10px}'
+'#syu .blk:active{transform:translateY(2px);box-shadow:none}#syu .blk.used{visibility:hidden}#syu .blk.no{animation:syshake .35s;border-color:#d4572a}'
+'#syu .word{font:800 2.2rem/1.1 var(--display);color:#0b6b43;display:none}#syu .word.show{display:block;animation:sypop .4s}'
+'#syu .fr{font-weight:800;color:var(--soft);min-height:1.4em}#syu .msg{font-weight:800;min-height:1.4em;color:#a3262c}'
+'#syu .go{align-self:center;padding:13px 22px;border-radius:16px;background:var(--gn);color:#fff;border:0;font:800 1.05rem var(--display);min-height:50px;display:none}'
+'#syu .ear{border:0;border-radius:14px;background:var(--sun);color:#4a3200;font:800 1rem var(--display);padding:9px 16px;min-height:44px}'
+'@keyframes sypop{0%{transform:scale(.6);opacity:.2}70%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}@keyframes syshake{25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}'
+'.sycf{position:fixed;top:-10px;width:9px;height:14px;z-index:100000;pointer-events:none;animation:sycf 1.6s ease-in forwards}@keyframes sycf{to{transform:translate(var(--dx),105vh) rotate(var(--rot));opacity:.9}}';
var A,order=[],oi=0,cur,pos,ok=0;
function shuf(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function say(t,r){try{if(window.enSay&&!r)return enSay(t);var u=new SpeechSynthesisUtterance(t);u.lang='en-GB';u.rate=r||.8;speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){}}
function face(){try{if(window.MRNIV&&MRNIV.prof){var p=MRNIV.prof();if(p&&p.av)return p.av}}catch(e){}return 'img/nv/rico.jpg'}
function confetti(){var c=['#f5b400','#2459e6','#0e9a63','#e0457b'];for(var j=0;j<30;j++){var e=document.createElement('i');e.className='sycf';e.style.left=Math.random()*100+'vw';e.style.background=c[j%4];e.style.setProperty('--dx',((Math.random()-.5)*160)+'px');e.style.setProperty('--rot',((Math.random()-.5)*900)+'deg');e.style.animationDelay=Math.random()*.3+'s';document.body.appendChild(e);setTimeout(function(x){x.remove()},2600,e)}}
function quit(){var o=document.getElementById('syu');if(o)o.remove();try{speechSynthesis.cancel()}catch(e){}try{if(typeof culture==='function')culture()}catch(e){}}
function load(){
 if(oi>=order.length){order=shuf(WORDS);oi=0}
 cur=order[oi];pos=0;
 var blocks=shuf(cur.s.map(function(x,i){return {t:x[0],p:x[1],i:i}}));
 A.innerHTML='<div class="top"><button class="back" id="syb">‹ Retour</button><span class="cnt">⭐ '+ok+' mot'+(ok>1?'s':'')+'</span></div>'
 +'<div class="card"><div class="row"><img class="face" src="'+face()+'" alt=""><div class="bub">Touche les blocs dans l\'ordre pour coller le mot !</div></div>'
 +'<div class="emo">'+cur.e+'</div>'
 +'<div class="slots" id="sl">'+cur.s.map(function(){return '<div class="slot"></div>'}).join('')+'</div>'
 +'<div class="word" id="wd">'+cur.w+'</div><div class="fr" id="fr"></div><div class="msg" id="ms"></div>'
 +'<div class="bank" id="bk">'+blocks.map(function(b,k){return '<button class="blk" data-k="'+k+'"><b>'+b.t+'</b><small>'+b.p+'</small></button>'}).join('')+'</div>'
 +'<button class="ear" id="ew">🔊 Écouter le mot</button><button class="go" id="nx">Mot suivant ›</button></div>';
 document.getElementById('syb').onclick=quit;
 document.getElementById('ew').onclick=function(){say(cur.w,.8)};
 document.getElementById('nx').onclick=function(){oi++;load()};
 var bt=document.querySelectorAll('#syu .blk');
 bt.forEach(function(b){b.onclick=function(){
  if(pos>=cur.s.length||b.classList.contains('used'))return;
  var bl=blocks[+b.dataset.k],want=cur.s[pos],ms=document.getElementById('ms');
  say(bl.t,.7);
  if(bl.t!==want[0]){b.classList.add('no');setTimeout(function(){b.classList.remove('no')},400);ms.textContent='Pas celui-là. Écoute et essaie un autre bloc !';return}
  b.classList.add('used');ms.textContent='';
  var s=document.getElementById('sl').children[pos];s.className='slot full';s.innerHTML='<b>'+want[0]+'</b><small>'+want[1]+'</small>';pos++;
  if(pos===cur.s.length){ok++;
   try{if(ok===10&&typeof save!=='undefined'){save['ang-sy']=1;if(typeof persist==='function')persist()}}catch(e){}
   setTimeout(function(){document.getElementById('wd').classList.add('show');document.getElementById('fr').textContent='Ça se dit : « '+cur.fr+' »';document.getElementById('ms').style.color='#0b6b43';document.getElementById('ms').textContent='⭐ Bravo !';
    document.getElementById('bk').style.display='none';document.getElementById('nx').style.display='inline-block';confetti();say(cur.w,.8)},350)}
 }});
 var o=document.getElementById('syu');if(o)o.scrollTop=0}
window.syOpen=function(){var o=document.getElementById('syu');if(o)o.remove();
 if(!document.getElementById('sycss')){var st=document.createElement('style');st.id='sycss';st.textContent=CSS;document.head.appendChild(st)}
 o=document.createElement('div');o.id='syu';o.innerHTML='<div id="syp"></div>';o.setAttribute('style','position:fixed;inset:0;z-index:99999;overflow-y:auto;-webkit-overflow-scrolling:touch');
 document.body.appendChild(o);A=document.getElementById('syp');order=shuf(WORDS);oi=0;ok=0;load()};
})();
