/* Problèmes autour des fractions : 6 missions, 68 problèmes variés (moitié, quart, tiers, parts, argent/heure, comparer, 2 étapes) */
(function(){
var bub=function(t){return '<div style="display:flex;gap:10px;align-items:flex-start;margin:8px 0;text-align:left"><div style="width:46px;height:46px;border-radius:50%;background:#ffe7a8;display:grid;place-items:center;font-size:28px;flex:none">🧒</div><div style="background:var(--card);border:2px solid var(--line);border-radius:6px 18px 18px 18px;padding:10px 14px;font-weight:700;line-height:1.35;color:var(--ink)">'+t+'</div></div>'};
var row=function(e,n){var s='';for(var i=0;i<n;i++)s+=e;return '<div style="background:var(--card);border:2px solid var(--line);border-radius:16px;padding:6px 12px;margin:6px 0;font-size:1.5rem;line-height:1.45;word-break:break-all">'+s+'</div>'};
var vis=function(t,e,n){return bub(t)+(e?row(e,n):'')};
function mk(id,name,sub,badge,intro,list){
 var N=list.length,steps=[{t:'teach',title:intro[0],say:intro[1],html:intro[2]}];
 list.forEach(function(p,i){var lead='Problème '+(i+1)+'/'+N;
  if(p.fr){steps.push({t:'fr',k:'tap',q:p.q,food:p.food,n:p.n,target:p.target,fr:p.fr,showfr:!!p.showfr,ok:p.ok,ko:p.ko||'Compte bien : le chiffre du haut dit combien de parts on touche.'});return}
  if(p.opts){var o=p.opts.slice(),a=o[0];var pos=i%o.length;o.splice(0,1);o.splice(pos,0,a);
   steps.push({t:'choice',q:p.q,opts:o,ans:pos,ok:p.ok,ko:p.ko||'Relis le problème et essaie de dessiner.',pic:vis(p.s,p.e,p.n)});return}
  steps.push({t:'num',q:p.q,ans:p.ans,hint:p.hint,ok:p.ok,vis:vis(p.s,p.e,p.n),why:p.why||'',lead:lead})})
 return {id:id,name:name,sub:sub,cls:'pro',badge:badge,mth:true,steps:steps}}
var H='🧒 ';
/* ---- 1. La moitié ---- */
var A=mk('fp-1','Problèmes : la moitié','Je partage en 2 parts égales','🍬',
['La moitié d\'une quantité','Pour trouver la moitié, je partage en deux groupes égaux.',bub('Pour trouver <b>la moitié</b>, je fais <b>2 groupes égaux</b>.')+bub('La moitié de 8 ? <b>4 + 4 = 8</b>, donc c\'est <b>4</b>.')+row('🍬',4)+row('🍬',4)],[
{s:'J\'ai 8 billes. J\'en donne la moitié à Tom.',e:'🔴',n:8,q:'Combien de billes je donne ?',ans:4,hint:'Je fais 2 groupes égaux avec 8.',ok:'Oui : la moitié de 8, c\'est 4 (4 + 4 = 8).'},
{s:'Dans ma classe, il y a 10 enfants. La moitié sont des filles.',e:'🧒',n:10,q:'Combien y a-t-il de filles ?',ans:5,hint:'5 + 5 = 10.',ok:'Oui : la moitié de 10, c\'est 5.'},
{s:'Un paquet contient 12 cartes. Léa en prend la moitié.',e:'🃏',n:12,q:'Combien de cartes prend Léa ?',ans:6,hint:'6 + 6 = 12.',ok:'Oui : la moitié de 12, c\'est 6.'},
{s:'Papa a 14 fraises. Il en mange la moitié.',e:'🍓',n:14,q:'Combien de fraises mange-t-il ?',opts:['7','12','28'],ok:'Oui : 7 + 7 = 14.'},
{s:'Je dois 20 €. Maman me donne la moitié.',e:'',n:0,q:'Combien Maman me donne-t-elle ?',ans:10,hint:'10 + 10 = 20.',ok:'Oui : la moitié de 20 €, c\'est 10 €.'},
{s:'Pour une recette, il faut 6 œufs. Je fais une demi-recette.',e:'🥚',n:6,q:'Combien d\'œufs me faut-il ?',ans:3,hint:'Je prends la moitié de 6.',ok:'Oui : la moitié de 6, c\'est 3 œufs.'},
{s:'Nina a 16 bonbons. Elle en donne la moitié à sa sœur.',e:'🍬',n:16,q:'Combien de bonbons Nina garde-t-elle ?',ans:8,hint:'Si je donne la moitié, il me reste l\'autre moitié.',ok:'Oui : elle garde aussi la moitié : 8 bonbons.'},
{s:'Un fil de 18 cm est coupé en 2 morceaux égaux.',e:'',n:0,q:'Combien mesure chaque morceau (en cm) ?',ans:9,hint:'9 + 9 = 18.',ok:'Oui : 18 cm coupés en 2, chaque morceau mesure 9 cm.'},
{s:'J\'ai 6 pommes. J\'en donne la moitié. Combien il m\'en reste ?',e:'🍎',n:6,q:'Combien de pommes me reste-t-il ?',opts:['3','6','12'],ok:'Oui : j\'en donne 3, il m\'en reste 3.'},
{s:'Tom a 10 billes. Nina en a la moitié.',e:'🔵',n:10,q:'Combien Nina a-t-elle de billes ?',ans:5,hint:'La moitié de 10.',ok:'Oui : Nina a 5 billes.'},
{s:'Il y a 30 cartes. Je prends la moitié.',e:'',n:0,q:'Combien de cartes je prends ?',ans:15,hint:'15 + 15 = 30.',ok:'Oui : la moitié de 30, c\'est 15.'},
{s:'La moitié de mes bonbons, c\'est 5 bonbons.',e:'🍬',n:5,q:'Combien ai-je de bonbons en tout ?',opts:['10','5','2'],ok:'Oui : le tout, c\'est le double de la moitié : 5 + 5 = 10.',ko:'Si 5 est la moitié, il y a 2 moitiés : 5 + 5.'}]);
/* ---- 2. Le quart et le tiers ---- */
var B=mk('fp-2','Problèmes : le quart et le tiers','Je partage en 4 ou en 3','🍫',
['Le quart et le tiers','Le quart : 4 groupes égaux. Le tiers : 3 groupes égaux.',bub('Le <b>quart</b> : je fais <b>4 groupes égaux</b>.')+bub('Le <b>tiers</b> : je fais <b>3 groupes égaux</b>.')+bub('Le quart de 8 ? <b>2 + 2 + 2 + 2 = 8</b>. C\'est <b>2</b>.')],[
{s:'J\'ai 12 fraises. J\'en donne le quart.',e:'🍓',n:12,q:'Combien de fraises je donne ?',ans:3,hint:'4 groupes égaux : 3 + 3 + 3 + 3 = 12.',ok:'Oui : le quart de 12, c\'est 3.'},
{s:'Maman a fait 8 cookies. On mange le quart des cookies.',e:'🍪',n:8,q:'Combien de cookies mange-t-on ?',ans:2,hint:'2 + 2 + 2 + 2 = 8.',ok:'Oui : le quart de 8, c\'est 2.'},
{s:'Zoé a 16 billes. Elle en perd le quart.',e:'🟣',n:16,q:'Combien de billes perd-elle ?',ans:4,hint:'4 groupes égaux.',ok:'Oui : le quart de 16, c\'est 4.'},
{s:'Je partage 9 bonbons entre 3 amis. Chacun a le tiers.',e:'🍬',n:9,q:'Combien de bonbons a chaque ami ?',ans:3,hint:'3 groupes égaux : 3 + 3 + 3.',ok:'Oui : le tiers de 9, c\'est 3.'},
{s:'Papa range 12 crayons dans 3 boîtes. Il en met le tiers dans chaque boîte.',e:'✏️',n:12,q:'Combien de crayons par boîte ?',ans:4,hint:'4 + 4 + 4 = 12.',ok:'Oui : le tiers de 12, c\'est 4.'},
{s:'Dans mon album, il y a 20 images. Le quart sont des images de dinosaures.',e:'🦖',n:20,q:'Combien y a-t-il d\'images de dinosaures ?',ans:5,hint:'5 + 5 + 5 + 5 = 20.',ok:'Oui : le quart de 20, c\'est 5.'},
{s:'Pour trouver le tiers de 15, je fais des groupes égaux.',e:'',n:0,q:'Combien de groupes égaux je fais ?',opts:['3','2','5'],ok:'Oui : le tiers, c\'est 3 groupes égaux (5 + 5 + 5 = 15).',ko:'Tiers = 3 parts égales.'},
{s:'Une classe a 24 élèves. Le quart va à la piscine.',e:'',n:0,q:'Combien d\'élèves vont à la piscine ?',ans:6,hint:'6 + 6 + 6 + 6 = 24.',ok:'Oui : le quart de 24, c\'est 6 élèves.'},
{s:'J\'ai 6 cerises. Je mange le tiers.',e:'🍒',n:6,q:'Combien de cerises je mange ?',ans:2,hint:'2 + 2 + 2 = 6.',ok:'Oui : le tiers de 6, c\'est 2.'},
{s:'4 amis partagent 12 bonbons en parts égales.',e:'🍬',n:12,q:'Combien de bonbons chacun reçoit-il ?',ans:3,hint:'Chacun a le quart.',ok:'Oui : le quart de 12, c\'est 3 bonbons.'},
{s:'Tom a le quart de 8 bonbons. Léa a la moitié de 8 bonbons.',e:'🍬',n:8,q:'Qui a le plus de bonbons ?',opts:['Léa','Tom','Pareil'],ok:'Oui : Léa a 4 bonbons, Tom en a 2.',ko:'Calcule : le quart de 8 et la moitié de 8.'},
{s:'Un ruban de 20 cm est coupé en 4 morceaux égaux.',e:'',n:0,q:'Combien mesure un morceau (en cm) ?',ans:5,hint:'5 + 5 + 5 + 5 = 20.',ok:'Oui : le quart de 20 cm, c\'est 5 cm.'}]);
/* ---- 3. Parts de pizza et de gâteau ---- */
var C=mk('fp-3','Problèmes : parts de gâteau','Les parts mangées, les parts qui restent','🍕',
['Les parts qui restent','Le tout, c\'est toutes les parts. Si je mange des parts, il en reste.',bub('Une pizza coupée en <b>4 parts</b> : le tout, c\'est <b>4/4</b>.')+bub('Si je mange <b>1 part</b>, il reste <b>3 parts</b> : <b>3/4</b>.')],[
{fr:[3,4],food:'pizza',n:4,target:3,q:'Rico mange 3/4 de la pizza. Touche les 3 parts mangées.',ok:'Oui : 3 parts sur 4 = 3/4.'},
{s:'Une pizza est coupée en 8 parts. Tom en mange 3.',e:'🍕',n:8,q:'Combien de parts reste-t-il ?',ans:5,hint:'8 − 3.',ok:'Oui : 8 − 3 = 5 parts.'},
{fr:[2,8],food:'chocolat',n:8,target:2,q:'Léa mange 2/8 de la tablette. Touche les 2 parts.',ok:'Oui : 2 parts sur 8 = 2/8.'},
{s:'Un gâteau est coupé en 6 parts égales. Maya en mange 1.',e:'🎂',n:6,q:'Quelle fraction du gâteau Maya a-t-elle mangée ?',opts:['1/6','1/2','6/1'],ok:'Oui : 1 part sur 6 = 1/6.',ko:'En bas : le nombre de parts du gâteau. En haut : les parts mangées.'},
{s:'Un gâteau a 8 parts. 3 amis mangent chacun 2 parts.',e:'🎂',n:8,q:'Combien de parts ont-ils mangées en tout ?',ans:6,hint:'2 + 2 + 2.',ok:'Oui : 2 + 2 + 2 = 6 parts.'},
{fr:[2,6],food:'tarte',n:6,target:2,q:'Papa prend 2/6 de la tarte. Touche les 2 parts.',ok:'Oui : 2 parts sur 6 = 2/6.'},
{s:'Il reste 3 parts d\'une pizza coupée en 4 parts.',e:'🍕',n:3,q:'Quelle fraction de la pizza reste-t-il ?',opts:['3/4','1/4','4/3'],ok:'Oui : 3 parts sur 4 = 3/4.',ko:'Le bas de la fraction = toutes les parts de la pizza (4).'},
{s:'Une tarte est coupée en 6 parts. On en a mangé 4.',e:'🥧',n:6,q:'Combien de parts reste-t-il ?',ans:2,hint:'6 − 4.',ok:'Oui : 6 − 4 = 2 parts.'},
{fr:[1,2],food:'galette',n:2,target:1,q:'Je partage la galette avec mon frère. Touche ma part : 1/2.',ok:'Oui : 1 part sur 2 = la moitié.'},
{s:'Sam mange 1/4 d\'une pizza. Eli mange 1/4 de la même pizza.',e:'🍕',n:4,q:'Quelle fraction ont-ils mangée à eux deux ?',opts:['2/4','1/4','4/4'],ok:'Oui : 1 part + 1 part = 2 parts sur 4 = 2/4.',ko:'Ajoute leurs parts : 1 + 1.'},
{s:'Une barre de chocolat a 10 carrés. Je mange 4 carrés, puis 3 carrés.',e:'🍫',n:10,q:'Combien de carrés reste-t-il ?',ans:3,hint:'10 − 4 − 3.',ok:'Oui : 4 + 3 = 7 mangés, 10 − 7 = 3 carrés.'},
{s:'Une pizza a 4 parts. Marc en mange 1 et Zoé en mange 2.',e:'🍕',n:4,q:'Combien de parts reste-t-il ?',opts:['1 part','2 parts','3 parts'],ok:'Oui : 4 − 1 − 2 = 1 part.',ko:'Compte les parts mangées : 1 + 2 = 3.'}]);
/* ---- 4. Argent, heure, mesures ---- */
var D=mk('fp-4','Problèmes : argent, heure et mesures','La moitié et le quart dans la vie','⏰',
['Dans la vie de tous les jours','On utilise les fractions pour l\'argent, l\'heure et les mesures.',bub('<b>Une demi-heure</b> = la moitié d\'une heure = <b>30 minutes</b>.')+bub('<b>Un quart d\'heure</b> = <b>15 minutes</b>.')+bub('<b>Une demi-heure</b>, c\'est <b>2 fois 15 minutes</b>.')],[
{s:'Papa paie la moitié d\'un livre qui coûte 12 €.',e:'',n:0,q:'Combien Papa paie-t-il (en €) ?',ans:6,hint:'6 + 6 = 12.',ok:'Oui : la moitié de 12 €, c\'est 6 €.'},
{s:'Une séance dure 1 heure. Le film dure la moitié de l\'heure.',e:'',n:0,q:'Combien de minutes dure le film ?',ans:30,hint:'1 heure = 60 minutes. La moitié de 60.',ok:'Oui : la moitié de 60 min, c\'est 30 min.'},
{s:'Je regarde un dessin animé pendant un quart d\'heure.',e:'',n:0,q:'Un quart d\'heure, c\'est combien de minutes ?',opts:['15','25','45'],ok:'Oui : un quart d\'heure = 15 minutes (60 ÷ 4).',ko:'1 heure = 60 minutes. Le quart de 60.'},
{s:'Le goûter commence à 4 h et dure une demi-heure.',e:'',n:0,q:'À quelle heure finit-il ?',opts:['4 h 30','5 h 30','4 h 15'],ok:'Oui : 4 h + 30 minutes = 4 h 30.',ko:'Une demi-heure = 30 minutes.'},
{s:'Lila a 20 €. Elle dépense la moitié.',e:'',n:0,q:'Combien lui reste-t-il (en €) ?',ans:10,hint:'La moitié de 20.',ok:'Oui : elle dépense 10 €, il lui reste 10 €.'},
{s:'Un ruban de 40 cm est coupé en 2 parts égales.',e:'',n:0,q:'Combien mesure chaque morceau (en cm) ?',ans:20,hint:'20 + 20 = 40.',ok:'Oui : la moitié de 40 cm, c\'est 20 cm.'},
{s:'Une bouteille contient 2 litres. On boit la moitié.',e:'🥤',n:2,q:'Combien de litres a-t-on bu ?',ans:1,hint:'La moitié de 2.',ok:'Oui : la moitié de 2 L, c\'est 1 L.'},
{s:'Je lis pendant une demi-heure, puis encore un quart d\'heure.',e:'',n:0,q:'Combien de temps ai-je lu ?',opts:['45 min','35 min','60 min'],ok:'Oui : 30 + 15 = 45 minutes.',ko:'Demi-heure = 30 min. Quart d\'heure = 15 min.'},
{s:'La récréation dure 15 minutes.',e:'',n:0,q:'15 minutes, c\'est quelle fraction d\'une heure ?',opts:['1/4','1/2','1/3'],ok:'Oui : 15 min = 1/4 d\'heure (4 × 15 = 60).',ko:'Combien de fois 15 minutes dans 1 heure ?'},
{s:'Une glace coûte 8 €. Noa paie la moitié et Mia paie le reste.',e:'',n:0,q:'Combien Mia paie-t-elle (en €) ?',ans:4,hint:'Elles paient chacune la moitié.',ok:'Oui : 4 € chacune.'},
{s:'Un sac contient 10 kg de pommes de terre. On en utilise la moitié.',e:'',n:0,q:'Combien de kg reste-t-il ?',ans:5,hint:'La moitié de 10.',ok:'Oui : on en utilise 5 kg, il reste 5 kg.'},
{s:'Il y a 60 minutes dans 1 heure.',e:'',n:0,q:'Combien de demi-heures y a-t-il dans 1 heure ?',opts:['2','3','4'],ok:'Oui : 30 + 30 = 60. Il y a 2 demi-heures.',ko:'Combien de fois 30 dans 60 ?'}]);
/* ---- 5. Je compare ---- */
var E=mk('fp-5','Problèmes : qui a le plus ?','Je compare des parts et des quantités','⚖️',
['Comparer des parts','Pour comparer, je regarde le tout et la taille des parts.',bub('Plus il y a de parts, <b>plus les parts sont petites</b> : 1/4 est plus petit que 1/2.')+bub('Attention : on compare des parts <b>du même tout</b> !')],[
{s:'Léa mange 1/2 de la pizza. Tom mange 1/4 de la même pizza.',e:'',n:0,q:'Qui mange le plus ?',opts:['Léa','Tom','Pareil'],ok:'Oui : une moitié est plus grande qu\'un quart.',ko:'Quelle part est la plus grande : 1/2 ou 1/4 ?'},
{s:'Je compare trois parts de gâteau.',e:'',n:0,q:'Quelle part est la plus petite ?',opts:['1/8','1/2','1/4'],ok:'Oui : plus le bas est grand, plus la part est petite : 1/8.',ko:'Le bas de la fraction dit en combien de parts on coupe.'},
{s:'Je compare un tiers et un sixième du même gâteau.',e:'',n:0,q:'Quelle part est la plus grande ?',opts:['1/3','1/6','Pareil'],ok:'Oui : 1/3 (coupé en 3) est plus grand que 1/6 (coupé en 6).'},
{s:'Ben a la moitié d\'un petit gâteau. Zoé a la moitié d\'un gâteau deux fois plus grand.',e:'',n:0,q:'Qui a le plus de gâteau ?',opts:['Zoé','Ben','Pareil'],ok:'Oui : c\'est la moitié, mais le gâteau de Zoé est plus grand !',ko:'Une moitié d\'un grand gâteau est plus grande qu\'une moitié d\'un petit gâteau.'},
{s:'Je compare la moitié de 10 bonbons et le quart de 12 bonbons.',e:'',n:0,q:'Quelle quantité est la plus grande ?',opts:['La moitié de 10','Le quart de 12','Pareil'],ok:'Oui : la moitié de 10 = 5, le quart de 12 = 3.',ko:'Calcule les deux : 10 ÷ 2 et 12 ÷ 4.'},
{s:'Une pizza est coupée en 4. Sam prend 2/4. Eli prend 1/2 de la même pizza.',e:'',n:0,q:'Qui a le plus de pizza ?',opts:['Pareil','Sam','Eli'],ok:'Oui : 2/4 = 1/2. C\'est la même quantité.',ko:'Coupe une pizza en 4 : 2 parts sur 4, c\'est la moitié.'},
{s:'Je compare 3/4 et 1/4 d\'une même tarte.',e:'',n:0,q:'Quelle part est la plus grande ?',opts:['3/4','1/4','Pareil'],ok:'Oui : 3 parts valent plus que 1 part (même tout).'},
{s:'Je compare la moitié de 8 bonbons et le tiers de 9 bonbons.',e:'',n:0,q:'Quelle quantité est la plus grande ?',opts:['La moitié de 8','Le tiers de 9','Pareil'],ok:'Oui : la moitié de 8 = 4, le tiers de 9 = 3.'},
{s:'Alex mange 2/8 d\'une tablette. Ina mange 3/8 de la même tablette.',e:'',n:0,q:'Qui mange le plus ?',opts:['Ina','Alex','Pareil'],ok:'Oui : 3 parts, c\'est plus que 2 parts (même tablette).'},
{s:'Je dois trouver l\'égalité qui est vraie.',e:'',n:0,q:'Quelle égalité est vraie ?',opts:['1/2 = 2/4','1/4 = 2/4','1/2 = 1/4'],ok:'Oui : 2 parts sur 4, c\'est la moitié.',ko:'Dessine une pizza coupée en 4 : combien de parts font la moitié ?'}]);
/* ---- 6. Deux étapes ---- */
var F=mk('fp-6','Problèmes à 2 étapes avec des fractions','Je cherche la moitié (ou le quart), puis je calcule','🪜',
['Deux étapes','1) je cherche la moitié ou le quart. 2) je réponds à la question.',bub('<b>Étape 1</b> : je cherche la moitié (ou le quart).')+bub('<b>Étape 2</b> : j\'ajoute ou j\'enlève pour répondre.')],[
{s:'J\'ai 12 billes. Je donne la moitié à Tom, puis je perds 2 billes.',e:'🔴',n:12,q:'Combien de billes me reste-t-il ?',ans:4,hint:'Étape 1 : moitié de 12. Étape 2 : j\'enlève 2.',ok:'Oui : 12 ÷ 2 = 6, puis 6 − 2 = 4.'},
{s:'J\'ai 16 cartes. Tom en a le quart. Léa en a 5 de plus que Tom.',e:'🃏',n:16,q:'Combien de cartes Léa a-t-elle ?',ans:9,hint:'Étape 1 : le quart de 16.',ok:'Oui : le quart de 16 = 4, puis 4 + 5 = 9.'},
{s:'Un gâteau a 8 parts. On en mange la moitié, puis 1 part de plus.',e:'🎂',n:8,q:'Combien de parts reste-t-il ?',ans:3,hint:'Étape 1 : la moitié de 8.',ok:'Oui : 8 ÷ 2 = 4 mangées, puis 1 de plus = 5. 8 − 5 = 3.'},
{s:'Papa a 20 €. Il paie la moitié pour un livre, puis 3 € pour un jus.',e:'',n:0,q:'Combien lui reste-t-il (en €) ?',ans:7,hint:'Étape 1 : la moitié de 20.',ok:'Oui : 10 € + 3 € = 13 € dépensés. 20 − 13 = 7 €.'},
{s:'Une classe a 24 élèves. Le quart va à la piscine.',e:'',n:0,q:'Combien d\'élèves ne vont pas à la piscine ?',ans:18,hint:'Étape 1 : le quart de 24.',ok:'Oui : le quart = 6 élèves. 24 − 6 = 18.'},
{s:'Maman a 10 œufs. Elle en utilise la moitié, puis elle en achète 6.',e:'🥚',n:10,q:'Combien d\'œufs a-t-elle maintenant ?',ans:11,hint:'Étape 1 : la moitié de 10.',ok:'Oui : 10 − 5 = 5, puis 5 + 6 = 11.'},
{s:'Un ruban mesure 30 cm. On coupe la moitié, puis encore 5 cm.',e:'',n:0,q:'Combien de cm reste-t-il ?',ans:10,hint:'Étape 1 : la moitié de 30.',ok:'Oui : 15 cm + 5 cm = 20 cm coupés. 30 − 20 = 10.'},
{s:'On partage 12 bonbons entre 3 enfants. Chacun en mange 1.',e:'🍬',n:12,q:'Combien de bonbons reste-t-il en tout ?',ans:9,hint:'Étape 1 : le tiers de 12 pour chacun. Étape 2 : 3 enfants mangent 1 bonbon chacun.',ok:'Oui : 12 − 3 = 9 bonbons.'},
{s:'Une pizza a 4 parts. Tom mange 1/4, Léa mange 2 parts.',e:'🍕',n:4,q:'Combien de parts reste-t-il ?',ans:1,hint:'1/4 de la pizza = 1 part.',ok:'Oui : 1 + 2 = 3 parts mangées. 4 − 3 = 1.'},
{s:'Un livre a 20 pages. J\'en ai lu la moitié hier et 4 pages aujourd\'hui.',e:'',n:0,q:'Combien de pages me reste-t-il à lire ?',ans:6,hint:'Étape 1 : la moitié de 20.',ok:'Oui : 10 + 4 = 14 pages lues. 20 − 14 = 6.'}]);
window.FRPB=[A,B,C,D,E,F];
})();
