/* Leçons de fractions expliquées par Rico : plusieurs écrans, un dessin + une bulle à chaque fois.
   Étape {t:'teach',rico:[{v:'<html>',say:'texte'},...]} (gérée par mrTeach ci-dessous). */
(function(){
var BL='#6aa9e0',DK='#2a3358',GO='#f0b429';
function nm(){var p=window.MRNIV&&MRNIV.prof&&MRNIV.prof();return (p&&p.name)||(typeof save!=='undefined'&&save.name)||'Miguel'}
/* dessins */
function pie(n,k,o){o=o||{};var sz=o.sz||120,s='<svg viewBox="0 0 120 120" width="'+sz+'" height="'+sz+'" aria-hidden="true">';
 if(n===1){s+='<circle cx="60" cy="60" r="54" fill="'+(k?BL:'#fff')+'" stroke="'+DK+'" stroke-width="3"/>'}
 else for(var i=0;i<n;i++){var a0=-Math.PI/2+i*2*Math.PI/n,a1=a0+2*Math.PI/n,x0=60+54*Math.cos(a0),y0=60+54*Math.sin(a0),x1=60+54*Math.cos(a1),y1=60+54*Math.sin(a1);
  s+='<path d="M60 60 L'+x0.toFixed(1)+' '+y0.toFixed(1)+' A54 54 0 0 1 '+x1.toFixed(1)+' '+y1.toFixed(1)+' Z" fill="'+(i<k?BL:'#fff')+'" stroke="'+DK+'" stroke-width="3" stroke-linejoin="round"/>';
  if(o.num){var am=(a0+a1)/2;s+='<text x="'+(60+33*Math.cos(am)).toFixed(1)+'" y="'+(66+33*Math.sin(am)).toFixed(1)+'" text-anchor="middle" font-size="20" font-weight="800" fill="'+DK+'" font-family="Baloo 2,sans-serif">'+(i+1)+'</text>'}}
 return s+'</svg>'}
function pieBad(){return '<svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true"><circle cx="60" cy="60" r="54" fill="#fff" stroke="'+DK+'" stroke-width="3"/><path d="M60 60 L60 6 A54 54 0 0 1 100 98 Z" fill="'+BL+'" stroke="'+DK+'" stroke-width="3" stroke-linejoin="round"/><line x1="60" y1="60" x2="12" y2="86" stroke="'+DK+'" stroke-width="3"/></svg>'}
function bar(n,k,o){o=o||{};var w=o.w||260,c=w/n,s='<svg viewBox="0 0 '+w+' 44" width="'+w+'" style="max-width:100%;height:auto" aria-hidden="true">';
 for(var i=0;i<n;i++)s+='<rect x="'+(i*c+2)+'" y="2" width="'+(c-0)+'" height="40" fill="'+(i<k?BL:'#fff')+'" stroke="'+DK+'" stroke-width="3"/>';
 return s+'</svg>'}
function barBad(){return '<svg viewBox="0 0 260 44" width="260" style="max-width:100%;height:auto" aria-hidden="true"><rect x="2" y="2" width="258" height="40" fill="#fff" stroke="'+DK+'" stroke-width="3"/><line x1="40" y1="2" x2="40" y2="42" stroke="'+DK+'" stroke-width="3"/><line x1="70" y1="2" x2="70" y2="42" stroke="'+DK+'" stroke-width="3"/><line x1="200" y1="2" x2="200" y2="42" stroke="'+DK+'" stroke-width="3"/></svg>'}
function frac(a,b,hl){var ring=function(c){return hl===c?';background:#fff3d6;box-shadow:0 0 0 4px '+GO+';border-radius:8px;padding:0 8px':''};
 return '<span style="display:inline-flex;flex-direction:column;align-items:center;font:800 2.6rem/1 var(--display)"><span style="color:#0e9a63'+ring('top')+'">'+a+'</span><i style="display:block;width:100%;height:5px;background:#1b2347;border-radius:3px;margin:5px 0"></i><span style="color:#2459e6'+ring('bot')+'">'+b+'</span></span>'}
function sym(t){return '<span style="font:800 2.2rem var(--display);color:'+DK+'">'+t+'</span>'}
function cap(t){return '<div style="font:800 .95rem var(--display);color:#5b6485;text-align:center;margin-top:2px">'+t+'</div>'}
function col(a){return '<div style="display:flex;flex-direction:column;align-items:center">'+a.join('')+'</div>'}
function line(n,hl,all){var s='<svg viewBox="0 0 300 78" width="300" style="max-width:100%;height:auto" aria-hidden="true"><line x1="20" y1="28" x2="280" y2="28" stroke="'+DK+'" stroke-width="4" stroke-linecap="round"/>';
 for(var i=0;i<=n;i++){var x=20+260*i/n,lab=i===0?'0':i===n?'1':(all?i+'/'+n:(i===hl?i+'/'+n:'')),on=i===hl;
  s+='<line x1="'+x+'" y1="18" x2="'+x+'" y2="38" stroke="'+DK+'" stroke-width="3"/>';
  if(on)s+='<circle cx="'+x+'" cy="28" r="9" fill="#e0393f" stroke="#fff" stroke-width="3"/>';
  if(lab)s+='<text x="'+x+'" y="62" text-anchor="middle" font-size="'+(n>=8?13:17)+'" font-weight="800" fill="'+(on?'#e0393f':DK)+'" font-family="Baloo 2,sans-serif">'+lab+'</text>'}
 return s+'</svg>'}
function groups(total,g,hl){var per=total/g,s='<svg viewBox="0 0 300 '+(g>2?90:70)+'" width="300" style="max-width:100%;height:auto" aria-hidden="true">',cols=g>2?2:g;
 for(var j=0;j<g;j++){var gx=g>2?(j%2)*150+8:j*150+8,gy=g>2?Math.floor(j/2)*44+2:2,on=hl&&j===0;
  s+='<rect x="'+gx+'" y="'+gy+'" width="136" height="'+(g>2?40:64)+'" rx="12" fill="'+(on?'#d6e8fb':'#f4f6ff')+'" stroke="'+(on?BL:'#c9d0ea')+'" stroke-width="3"/>';
  for(var i=0;i<per;i++){var cx=gx+16+(i%6)*20,cy=gy+(g>2?20:20+Math.floor(i/6)*22);s+='<circle cx="'+cx+'" cy="'+cy+'" r="8" fill="'+(on?BL:'#f08a24')+'"/>'}}
 return s+'</svg>'}
function three(){var a=[1,2,4];return ''}

/* contenu des leçons */
var L={
'fh-sert':{title:'À quoi servent les fractions ?',sc:[
 {v:pie(1,0),say:'Salut {n} ! Moi, c\'est Rico. J\'ai une pizza et mes amis ont faim. Il faut la partager !'},
 {v:col([pie(2,1),cap('1 part sur 2')])+frac(1,2),say:'On est 2 : je coupe la pizza en 2 parts égales. Chacun a 1 part sur 2. On dit : la moitié.'},
 {v:col([pie(4,1),cap('1 part sur 4')])+frac(1,4),say:'Maintenant on est 4 : je coupe en 4 parts égales. Chacun a 1 part sur 4.'},
 {v:col([bar(2,1,{w:240}),cap('30 minutes · 30 minutes')])+frac(1,2),say:'Les fractions servent aussi pour l\'heure. Une heure, c\'est 60 minutes. Une demi-heure, c\'est la moitié : 30 minutes.'}]},
'fh-eg':{title:'Des parts égales',sc:[
 {v:col([pie(4,1,{num:1}),cap('4 parts égales ✓')]),say:'Pour partager juste, les parts doivent être égales : toutes de la même taille. Ici, tout le monde a la même chose.'},
 {v:col([pieBad(),cap('parts inégales ✗')])+col([barBad(),cap('parts inégales ✗')]),say:'Regarde : ici, une part est énorme et les autres sont toutes petites. Ce n\'est pas juste ! Ce ne sont pas des parts égales.'},
 {v:col([pie(4,0,{num:1}),cap('1, 2, 3, 4')])+frac('?',4,'bot'),say:'Je compte les parts égales : 1, 2, 3, 4. Il y en a 4. Ce nombre se met en bas de la fraction.'},
 {v:col([pie(8,0,{num:1}),cap('8 parts égales')])+frac('?',8,'bot'),say:'Et ici ? Je compte : 8 parts égales. Je retiens : le nombre du bas, c\'est le nombre de parts égales.'}]},
'fh-lire':{title:'Lire une fraction',sc:[
 {v:col([pie(2,1),cap('1 part sur 2')])+frac(1,2),say:'1 part sur 2, ça se lit : un demi.'},
 {v:col([pie(3,1),cap('1 part sur 3')])+frac(1,3),say:'1 part sur 3, ça se lit : un tiers.'},
 {v:col([pie(4,1),cap('1 part sur 4')])+frac(1,4),say:'1 part sur 4, ça se lit : un quart.'},
 {v:col([pie(4,3),cap('3 parts sur 4')])+frac(3,4),say:'Pour plusieurs parts, je dis le nombre du haut, puis le nom du partage. 3 parts sur 4 : trois quarts.'},
 {v:col([pie(8,5),cap('5 parts sur 8')])+frac(5,8),say:'Pour les autres, le bas se termine par « ième » : cinquième, sixième, huitième. 5 parts sur 8 : cinq huitièmes.'}]},
'fh-nd':{title:'Le haut et le bas',sc:[
 {v:col([pie(8,3),cap('8 parts égales en tout')])+frac(3,8,'bot'),say:'Le nombre du bas dit en combien de parts égales on a coupé le tout. Ici : 8 parts en tout.'},
 {v:col([pie(8,3),cap('3 parts coloriées')])+frac(3,8,'top'),say:'Le nombre du haut dit combien de parts je prends. Ici : 3 parts coloriées.'},
 {v:frac('numérateur','dénominateur').replace(/font:800 2\.6rem/,'font:800 1.5rem'),say:'Le nombre du haut s\'appelle le numérateur. Le nombre du bas s\'appelle le dénominateur. Haut : numérateur. Bas : dénominateur.'}]},
'fh-col':{title:'Colorier une fraction',sc:[
 {v:col([bar(8,0),cap('8 cases')])+frac(3,8,'bot'),say:'Je veux colorier 3/8. Le bas dit combien de cases il y a en tout : 8. Je prends une bande de 8 cases égales.'},
 {v:col([bar(8,3),cap('3 cases coloriées')])+frac(3,8,'top'),say:'Le haut dit combien de cases je colorie : 3. Je colorie 3 cases.'},
 {v:col([bar(8,3),cap('3 coloriées sur 8')])+frac(3,8),say:'Je vérifie : 8 cases en tout, 3 sont coloriées. J\'ai colorié 3/8.'}]},
'fh-cpt':{title:'Écrire la fraction',sc:[
 {v:col([pie(6,4,{num:1}),cap('Je compte les parts coloriées')])+frac(4,'?','top'),say:'Pour écrire la fraction, je compte d\'abord les parts coloriées. J\'en vois 4. Je l\'écris en haut.'},
 {v:col([pie(6,4),cap('6 parts en tout')])+frac(4,6,'bot'),say:'Ensuite je compte toutes les parts, coloriées ou non : il y en a 6. Je l\'écris en bas.'},
 {v:col([pie(6,4),cap('4 parts sur 6')])+frac(4,6),say:'J\'ai écrit la fraction : 4/6. Je la lis : quatre sixièmes.'}]},
'fh-cmp':{title:'Comparer des fractions',sc:[
 {v:col([bar(8,3,{w:220}),cap('3/8')])+sym('&lt;')+col([bar(8,5,{w:220}),cap('5/8')]),say:'Même nombre en bas : les parts sont de la même taille. Alors je regarde le haut. 5 parts, c\'est plus que 3 parts. Donc 3/8 est plus petit que 5/8.'},
 {v:col([bar(2,1,{w:220}),cap('1/2')])+sym('&gt;')+col([bar(6,1,{w:220}),cap('1/6')]),say:'Quand le haut est 1, je regarde le bas. Plus on coupe en beaucoup de parts, plus chaque part est petite. Donc 1/2 est plus grand que 1/6.'}]},
'fr-3':{title:'Comparer des fractions',n:2,sc:[
 {v:pie(1,0)+pie(1,0),say:'Pour comparer deux fractions, il faut d\'abord que ce soit le même tout. Voilà deux pizzas identiques.'},
 {v:col([pie(2,1),cap('1/2')])+col([pie(4,1),cap('1/4')]),say:'La première est coupée en 2 parts. La deuxième est coupée en 4 parts. Je prends 1 part de chaque.'},
 {v:col([pie(2,1),cap('1/2')])+sym('&gt;')+col([pie(4,1),cap('1/4')]),say:'Une moitié de pizza est plus grande qu\'un quart de la même pizza. Donc un demi est plus grand qu\'un quart.'},
 {v:col([pie(2,1,{sz:90}),cap('1/2')])+sym('&gt;')+col([pie(4,1,{sz:90}),cap('1/4')])+sym('&gt;')+col([pie(8,1,{sz:90}),cap('1/8')]),say:'Plus on partage en beaucoup de parts, plus chaque part est petite. Du plus grand au plus petit : un demi, un quart, un huitième.'},
 {v:col([pie(2,1,{sz:70}),cap('petite pizza')])+sym('?')+col([pie(4,1,{sz:130}),cap('grande pizza')]),say:'Attention ! Si les pizzas ne sont pas de la même taille, je ne peux pas comparer. Il faut toujours le même tout.'}]},
'fr-4':{title:'Les fractions sur une bande',n:1,sc:[
 {v:col([bar(1,0),cap('1 bande = 1 tout')]),say:'Une bande, c\'est un tout bien droit. Je peux la partager en parts égales.'},
 {v:col([bar(2,0),cap('2 parts égales')]),say:'Pour la partager en 2 : je trouve le milieu et je trace un trait. J\'obtiens 2 parts égales.'},
 {v:col([bar(4,0),cap('4 parts égales')]),say:'Pour la partager en 4 : je coupe chaque moitié en 2. J\'obtiens 4 parts égales.'},
 {v:col([bar(8,0),cap('8 parts égales')]),say:'Pour la partager en 8 : je coupe encore chaque part en 2. J\'obtiens 8 parts égales.'},
 {v:col([bar(4,1),cap('1 part sur 4')])+frac(1,4),say:'Maintenant je peux colorier une fraction. Je colorie 1 part sur 4 : c\'est 1/4.'}]},
'fr-5':{title:'Sur une droite graduée',n:1,sc:[
 {v:line(1,-1),say:'Sur une droite graduée, 0 est le début et 1 est le tout. C\'est comme une bande, mais sur une ligne.'},
 {v:line(2,1),say:'Pour placer un demi, je partage la droite entre 0 et 1 en 2 parties égales. Le point du milieu, c\'est 1/2.'},
 {v:line(4,-1,true),say:'Si je partage en 4 parties égales, je trouve : un quart, deux quarts, trois quarts, puis 4 quarts, c\'est 1.'},
 {v:col([line(4,2,true),cap('2/4 = 1/2')]),say:'Regarde : deux quarts est exactement au même endroit que un demi ! 2/4 = 1/2.'},
 {v:col([line(8,4),cap('4/8 = 1/2')]),say:'Et sur une droite en 8 parties, le 4e repère est aussi au milieu. 4/8 = 1/2.'}]},
'fr-6':{title:'Une fraction d\'une collection',n:1,sc:[
 {v:col([groups(8,1,false),cap('8 bonbons')]),say:'Une fraction peut aussi partager des objets. Voilà 8 bonbons.'},
 {v:col([groups(8,2,false),cap('2 groupes égaux')]),say:'Pour trouver la moitié, je fais 2 groupes égaux.'},
 {v:col([groups(8,2,true),cap('La moitié de 8, c\'est 4')]),say:'Il y a 4 bonbons dans chaque groupe. La moitié de 8, c\'est 4.'},
 {v:col([groups(12,4,true),cap('Le quart de 12, c\'est 3')]),say:'Pour le quart de 12 fraises, je fais 4 groupes égaux. Il y a 3 fraises dans un groupe. Le quart de 12, c\'est 3.'}]}
};
/* n = nombre d'écrans d'explication à remplacer au début de la leçon */
var N={'fh-sert':3,'fh-eg':2,'fh-lire':4,'fh-nd':3,'fh-col':1,'fh-cpt':1,'fh-cmp':2,'fr-3':2,'fr-4':1,'fr-5':1,'fr-6':1};
window.MRRICO={L:L,apply:function(M){Object.keys(L).forEach(function(id){var m=M.find(function(x){return x.id===id});if(!m||m._rico)return;
  var k=N[id],i=0;while(i<k&&m.steps[i]&&m.steps[i].t==='teach')i++;
  if(i<k)return;m._rico=1;m.steps.splice(0,k,{t:'teach',title:L[id].title,rico:L[id].sc,say:L[id].sc.map(function(c){return c.say}).join(' ')})})}};

/* écran Rico */
var old=window.mrTeach;
window.mrTeach=function(s){
  if(!s.rico)return old?old(s):undefined;
  var sc=s.rico,i=Math.min(st.sc||0,sc.length-1),c=sc[i],last=i===sc.length-1,n=nm();
  var txt=c.say.replace(/\{n\}/g,n);
  var dots=sc.map(function(_,k){return '<i style="flex:1;height:8px;border-radius:4px;background:'+(k<=i?GO:'#dde2f5')+'"></i>'}).join('');
  app.innerHTML=head()+'<div class="card"><span class="lead">Rico t\'explique</span><h2>'+s.title+'</h2>'
   +'<div style="display:flex;gap:5px;margin:6px 0 4px">'+dots+'</div>'
   +'<div style="display:flex;justify-content:center;align-items:center;gap:16px;flex-wrap:wrap;min-height:170px;margin:8px 0">'+c.v+'</div>'
   +'<div style="display:flex;gap:10px;align-items:flex-end"><img src="img/nv/rico.jpg" alt="Rico" style="width:56px;height:56px;border-radius:50%;object-fit:cover;border:3px solid '+GO+';flex:none">'
   +'<div style="position:relative;background:#fff3d6;border:2px solid '+GO+';border-radius:18px 18px 18px 6px;padding:10px 14px;font:700 1.05rem/1.4 var(--body);color:#5a3a0a">'+txt+'</div></div>'
   +'<div style="display:flex;gap:8px;margin:12px 0 4px">'+(i>0?'<button class="ghost" id="rbk">‹ Retour</button>':'')+'<button class="speak" id="say">🔊 Écouter</button></div>'
   +(last?nextBtn():'<button class="go" id="rnx">Suivant ›</button>')+'</div>';
  document.getElementById('say').onclick=function(){say(txt.replace(/<[^>]+>/g,''))};
  var bk=document.getElementById('rbk');if(bk)bk.onclick=function(){try{speechSynthesis.cancel()}catch(e){}st.sc=i-1;step()};
  var nx=document.getElementById('rnx');if(nx)nx.onclick=function(){try{speechSynthesis.cancel()}catch(e){}st.sc=i+1;step()};
};
})();
