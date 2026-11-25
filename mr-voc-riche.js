/* Vocabulaire riche : 6 nouveaux thèmes « à découvrir » (bateau, espace, météo, corps humain, dinosaures, château fort).
   g:1 = mot illustré par un émoji clair, utilisable dans les jeux (pendu, mots croisés, mots mêlés, loto, mémoire). */
window.MRVD_X={
bateS:{t:`Le bateau`,e:`⛵`,bg:`#dfe8ff`,sub:`Coque, voile, ancre, gouvernail, port, phare…`,say:`Les mots pour parler des bateaux, de la mer et du port !`,fiches:[
{w:`Le bateau`,e:`🚢`,g:1,say:`Un véhicule qui flotte et qui avance sur l'eau.`,ex:`Le bateau quitte le port.`,tip:`Il y a des bateaux à voile, à moteur ou à rames.`},
{w:`La coque`,e:`🛥️`,say:`Le corps du bateau : la partie qui flotte sur l'eau.`,ex:`La coque est en bois.`,tip:`Coque = le « ventre » du bateau.`},
{w:`La voile`,e:`⛵`,g:1,say:`Un grand morceau de tissu que le vent pousse pour faire avancer le bateau.`,ex:`Le vent gonfle la voile.`,a:`⛵`,b:`<span class="pp" style="display:inline-block;font-size:1rem">💨 le vent pousse la voile<br>→ le bateau avance !</span>`,tip:`Sans vent, un voilier n'avance pas.`},
{w:`Le mât`,e:`⬆️`,say:`Le grand poteau droit qui tient la voile.`,ex:`La voile est attachée au mât.`,tip:`Le mât est debout, au milieu du bateau.`},
{w:`L'ancre`,e:`⚓`,g:1,say:`Un lourd crochet de fer qu'on jette au fond de l'eau pour arrêter le bateau.`,ex:`Le capitaine jette l'ancre.`,a:`⚓`,b:`<span class="pp" style="display:inline-block;font-size:1rem">On jette l'ancre → le bateau s'arrête.</span>`,tip:`« Lever l'ancre », c'est repartir.`},
{w:`Le gouvernail`,e:`🛞`,say:`La grande pièce qui sert à diriger le bateau à gauche ou à droite.`,ex:`Le capitaine tourne le gouvernail.`,tip:`Gouvernail = il gouverne, il dirige.`},
{w:`L'hélice`,e:`🌀`,say:`Les pales qui tournent sous l'eau et poussent un bateau à moteur.`,ex:`L'hélice fait avancer le bateau.`,tip:`Comme l'hélice de l'avion, mais dans l'eau.`},
{w:`Le port`,e:`🏗️`,say:`Le lieu au bord de la mer où les bateaux s'arrêtent et repartent.`,ex:`Les bateaux sont amarrés dans le port.`,tip:`Le port est pour le bateau ce que la gare est pour le train.`},
{w:`Le phare`,e:`🔦`,say:`Une haute tour au bord de la mer qui envoie de la lumière pour guider les bateaux la nuit.`,ex:`Le phare éclaire la mer.`,tip:`Sa lumière tourne pour qu'on la voie de loin.`},
{w:`Le capitaine`,e:`🧑‍✈️`,say:`Le chef du bateau : c'est lui qui commande.`,ex:`Le capitaine donne les ordres.`,tip:`Le chef d'un bateau, c'est le capitaine.`},
{w:`L'équipage`,e:`👥`,say:`Toutes les personnes qui travaillent sur le bateau.`,ex:`L'équipage hisse la voile.`,tip:`Équipage = l'équipe du bateau.`},
{w:`Bâbord et tribord`,e:`↔️`,say:`Bâbord, c'est la gauche du bateau. Tribord, c'est la droite.`,ex:`L'île est à tribord.`,a:`⛵`,b:`<span class="pp" style="display:inline-block;font-size:1rem">⬅️ bâbord &nbsp; avant ⬆️ &nbsp; tribord ➡️</span>`,tip:`On les compte en regardant vers l'avant du bateau.`},
{w:`La cabine`,e:`🛏️`,say:`Une petite chambre dans le bateau.`,ex:`Je dors dans ma cabine.`,tip:`Sur un grand bateau, il y a beaucoup de cabines.`}
],quiz:[
{q:`La voile sert à…`,o:[`attraper le vent pour avancer`,`rester au fond de l'eau`,`éclairer la nuit`],a:0,ex:`Le vent pousse la voile et le bateau avance.`},
{q:`L'ancre sert à…`,o:[`arrêter le bateau`,`faire de la lumière`,`diriger le bateau`],a:0,ex:`On la jette au fond de l'eau.`},
{q:`Le phare…`,o:[`guide les bateaux avec sa lumière`,`pousse le bateau`,`est le ventre du bateau`],a:0,ex:`Sa lumière se voit de loin, même la nuit.`},
{q:`Le gouvernail sert à…`,o:[`diriger le bateau`,`arrêter le bateau`,`ranger les bagages`],a:0,ex:`Il tourne le bateau à gauche ou à droite.`},
{q:`Qui commande le bateau ?`,o:[`le capitaine`,`le contrôleur`,`le conducteur`],a:0,ex:`Le capitaine est le chef du bateau.`},
{q:`Bâbord, c'est…`,o:[`la gauche du bateau`,`la droite du bateau`,`l'arrière du bateau`],a:0,ex:`Bâbord = gauche. Tribord = droite.`}
]},
espS:{t:`La fusée et l'espace`,e:`🚀`,bg:`#e9defc`,sub:`Fusée, astronaute, planète, étoile, satellite, télescope…`,say:`Tous les mots pour voyager dans l'espace !`,fiches:[
{w:`La fusée`,e:`🚀`,g:1,say:`Un engin très puissant qui monte dans le ciel pour aller dans l'espace.`,ex:`La fusée décolle.`,a:`🚀`,b:`<span class="pp" style="display:inline-block;font-size:1.1rem">5… 4… 3… 2… 1… <b>décollage !</b> 🚀</span>`,tip:`Elle doit aller très vite pour quitter la Terre.`},
{w:`L'espace`,e:`🌌`,g:1,say:`Tout ce qui est au-dessus du ciel de la Terre : c'est immense, très froid, et il n'y a pas d'air.`,ex:`Les astronautes voyagent dans l'espace.`,tip:`Dans l'espace, on ne peut pas respirer sans combinaison.`},
{w:`L'astronaute`,e:`🧑‍🚀`,g:1,say:`Une personne qui voyage dans l'espace.`,ex:`L'astronaute flotte dans la station.`,tip:`Il porte une combinaison spéciale.`},
{w:`La planète`,e:`🪐`,g:1,say:`Un grand astre rond qui tourne autour du Soleil.`,ex:`La Terre est une planète.`,tip:`Il y a 8 planètes autour du Soleil.`},
{w:`Le Soleil`,e:`☀️`,g:1,say:`L'étoile qui éclaire et chauffe la Terre.`,ex:`La Terre tourne autour du Soleil.`,tip:`Le Soleil est une étoile, pas une planète !`},
{w:`La Lune`,e:`🌙`,g:1,say:`L'astre rond qui tourne autour de la Terre et qu'on voit dans le ciel la nuit.`,ex:`La Lune éclaire la nuit.`,tip:`La Lune ne brille pas toute seule : elle renvoie la lumière du Soleil.`},
{w:`L'étoile`,e:`⭐`,g:1,say:`Une énorme boule très chaude et très lointaine qui brille dans le ciel.`,ex:`Les étoiles brillent la nuit.`,tip:`Les étoiles semblent toutes petites parce qu'elles sont très loin.`},
{w:`La comète`,e:`☄️`,g:1,say:`Une boule de glace et de poussière qui traîne une longue queue brillante.`,ex:`La comète traverse le ciel.`,tip:`La queue de la comète est faite de poussière et de gaz.`},
{w:`Le satellite`,e:`🛰️`,g:1,say:`Un objet qui tourne autour de la Terre, dans l'espace.`,ex:`Un satellite prend des photos de la Terre.`,tip:`Les satellites servent aussi à la météo et au téléphone.`},
{w:`Le télescope`,e:`🔭`,g:1,say:`Un grand instrument pour regarder les étoiles de très loin.`,ex:`Je regarde la Lune avec un télescope.`,tip:`Télé = loin, scope = regarder.`},
{w:`L'orbite`,e:`🔄`,say:`Le chemin rond que suit un astre ou un satellite autour d'un autre.`,ex:`La Lune suit son orbite autour de la Terre.`,a:`🌍`,b:`<span class="pp" style="display:inline-block;font-size:1rem">🌍 ⟲ 🌙<br>la Lune tourne autour de la Terre</span>`,tip:`Orbiter = tourner autour.`},
{w:`La gravité`,e:`⬇️`,say:`La force qui attire tout vers le sol.`,ex:`Sur la Terre, la gravité nous garde au sol.`,a:`🍎`,b:`<span class="pp" style="display:inline-block;font-size:1rem">🍎 lâchée → elle tombe ⬇️<br>Dans l'espace : on flotte !</span>`,tip:`Dans la station spatiale, il n'y a presque pas de gravité : tout flotte.`},
{w:`Le compte à rebours`,e:`⏱️`,say:`On compte à l'envers avant le départ : 3, 2, 1… décollage !`,ex:`Le compte à rebours commence.`,tip:`À rebours = à l'envers.`}
],quiz:[
{q:`Le Soleil est…`,o:[`une étoile`,`une planète`,`un satellite`],a:0,ex:`Le Soleil est l'étoile qui éclaire et chauffe la Terre.`},
{q:`Un astronaute…`,o:[`voyage dans l'espace`,`conduit un train`,`pilote un bateau`],a:0,ex:`Il porte une combinaison spéciale.`},
{q:`Un télescope sert à…`,o:[`observer les étoiles de loin`,`prendre la température`,`écouter les sons`],a:0,ex:`Télé = loin, scope = regarder.`},
{q:`La Terre est…`,o:[`une planète`,`une étoile`,`une comète`],a:0,ex:`Elle tourne autour du Soleil.`},
{q:`Un satellite…`,o:[`tourne autour de la Terre`,`est une étoile filante`,`est une fusée qui décolle`],a:0,ex:`Il suit son orbite dans l'espace.`},
{q:`Compte à rebours : 3, 2, 1…`,o:[`décollage !`,`bonne nuit !`,`atterrissage !`],a:0,ex:`On compte à l'envers avant le départ.`}
]},
metoS:{t:`La météo`,e:`🌦️`,bg:`#fff3d6`,sub:`Nuage, pluie, neige, orage, arc-en-ciel, thermomètre…`,say:`Tous les mots pour décrire le temps qu'il fait !`,fiches:[
{w:`La météo`,e:`🌦️`,say:`Le temps qu'il fait aujourd'hui, ou qu'il fera demain.`,ex:`La météo annonce du soleil.`,tip:`On regarde la météo pour savoir comment s'habiller.`},
{w:`Le nuage`,e:`☁️`,g:1,say:`Plein de minuscules gouttes d'eau qui flottent dans le ciel.`,ex:`Un gros nuage cache le soleil.`,tip:`Quand les gouttes sont trop lourdes, elles tombent : c'est la pluie.`},
{w:`La pluie`,e:`🌧️`,g:1,say:`Des gouttes d'eau qui tombent des nuages.`,ex:`Il pleut sur la ville.`,tip:`Pluie → on sort le parapluie.`},
{w:`La neige`,e:`❄️`,g:1,say:`De petits flocons de glace blancs qui tombent quand il fait très froid.`,ex:`La neige couvre les toits.`,tip:`Chaque flocon est différent.`},
{w:`Le vent`,e:`💨`,g:1,say:`De l'air qui se déplace.`,ex:`Le vent fait bouger les arbres.`,tip:`On ne voit pas le vent, mais on voit ce qu'il bouge.`},
{w:`L'orage`,e:`⛈️`,g:1,say:`Un gros nuage sombre avec de la pluie, du vent, des éclairs et du tonnerre.`,ex:`Un orage éclate ce soir.`,tip:`Pendant un orage, on reste à l'abri.`},
{w:`L'éclair`,e:`⚡`,g:1,say:`Une grande lumière qui jaillit dans le ciel pendant l'orage.`,ex:`Un éclair traverse le ciel.`,tip:`On voit l'éclair d'abord, on entend le tonnerre après.`},
{w:`Le tonnerre`,e:`🔊`,say:`Le grand bruit qui suit l'éclair.`,ex:`Le tonnerre gronde.`,a:`⚡`,b:`<span class="pp" style="display:inline-block;font-size:1rem">⚡ éclair (lumière) → 🔊 tonnerre (bruit)</span>`,tip:`La lumière va plus vite que le bruit.`},
{w:`L'arc-en-ciel`,e:`🌈`,g:1,say:`Des bandes de couleurs dans le ciel, quand il y a du soleil et de la pluie en même temps.`,ex:`Un arc-en-ciel apparaît après la pluie.`,tip:`Il a 7 couleurs : rouge, orange, jaune, vert, bleu, indigo, violet.`},
{w:`Le brouillard`,e:`🌫️`,g:1,say:`Un nuage très bas, qui touche le sol : on voit mal.`,ex:`Le brouillard cache la route.`,tip:`Dans le brouillard, on roule doucement.`},
{w:`La grêle`,e:`🧊`,say:`Des grains de glace durs qui tombent du ciel.`,ex:`La grêle abîme les voitures.`,tip:`Grêle ≠ neige : la grêle est dure comme des petits cailloux de glace.`},
{w:`Le thermomètre`,e:`🌡️`,g:1,say:`L'instrument qui mesure la température : est-ce qu'il fait chaud ou froid ?`,ex:`Le thermomètre indique 25 degrés.`,tip:`On lit la température en degrés (°C).`},
{w:`Le parapluie`,e:`☂️`,g:1,say:`Ce qu'on ouvre au-dessus de sa tête pour ne pas être mouillé.`,ex:`Je prends mon parapluie.`,tip:`Un parapluie = contre la pluie.`},
{w:`Les prévisions`,e:`📅`,say:`Ce que dit la météo sur le temps de demain.`,ex:`Les prévisions annoncent de la pluie.`,tip:`Prévoir = savoir avant.`}
],quiz:[
{q:`Que voit-on d'abord pendant un orage ?`,o:[`l'éclair`,`le tonnerre`,`la neige`],a:0,ex:`La lumière va plus vite que le bruit.`},
{q:`Le thermomètre mesure…`,o:[`la température`,`le vent`,`la pluie`],a:0,ex:`On lit des degrés.`},
{q:`Le brouillard, c'est…`,o:[`un nuage qui touche le sol`,`de la neige`,`un éclair`],a:0,ex:`On voit mal dans le brouillard.`},
{q:`Un arc-en-ciel apparaît quand il y a…`,o:[`du soleil et de la pluie`,`de la neige et du vent`,`du brouillard`],a:0,ex:`La lumière du soleil traverse les gouttes de pluie.`},
{q:`La neige tombe quand il fait…`,o:[`très froid`,`très chaud`,`orageux`],a:0,ex:`La neige, ce sont des flocons de glace.`},
{q:`Les prévisions météo disent…`,o:[`le temps de demain`,`le temps d'hier`,`l'heure`],a:0,ex:`Prévoir = savoir avant.`}
]},
corpS:{t:`Le corps humain`,e:`🫀`,bg:`#ffe3e4`,sub:`Cœur, cerveau, poumons, os, muscles, les cinq sens…`,say:`Les mots pour comprendre comment fonctionne ton corps !`,fiches:[
{w:`Le cœur`,e:`❤️`,g:1,say:`Le muscle qui envoie le sang dans tout le corps.`,ex:`Mon cœur bat vite quand je cours.`,a:`😴`,b:`<span class="pp" style="display:inline-block;font-size:1rem">au repos : ❤️ ❤️ ❤️<br>quand je cours : ❤️❤️❤️❤️❤️❤️</span>`,tip:`Pose ta main sur ta poitrine : tu sens ton cœur battre.`},
{w:`Le cerveau`,e:`🧠`,g:1,say:`Le chef du corps, dans la tête : il pense, il se souvient et il commande tout.`,ex:`Mon cerveau apprend la leçon.`,tip:`Plus on apprend, plus le cerveau travaille !`},
{w:`Les poumons`,e:`🫁`,g:1,say:`Deux organes dans la poitrine qui nous font respirer.`,ex:`L'air entre dans mes poumons.`,tip:`On a deux poumons.`},
{w:`La respiration`,e:`🌬️`,say:`L'air entre par le nez, va dans les poumons, puis ressort.`,ex:`Je respire profondément.`,a:`👃`,b:`<span class="pp" style="display:inline-block;font-size:1rem">👃 l'air entre → 🫁 poumons → 💨 l'air sort</span>`,tip:`Inspirer = faire entrer l'air. Expirer = le faire sortir.`},
{w:`Les os`,e:`🦴`,g:1,say:`Les pièces dures qui sont à l'intérieur du corps.`,ex:`Mes os sont solides.`,tip:`Un bébé a plus d'os qu'un adulte !`},
{w:`Le squelette`,e:`🧍`,say:`Tous les os du corps ensemble : il tient le corps debout.`,ex:`Le squelette protège les organes.`,tip:`Sans squelette, on ne pourrait pas tenir debout.`},
{w:`Les muscles`,e:`💪`,g:1,say:`Ce qui nous permet de bouger : ils se serrent et se relâchent.`,ex:`Je fais travailler mes muscles.`,tip:`Le cœur aussi est un muscle.`},
{w:`La peau`,e:`🤚`,say:`L'enveloppe du corps : elle le protège et nous permet de toucher.`,ex:`La peau me protège du froid.`,tip:`La peau est le plus grand organe du corps.`},
{w:`Le sang`,e:`🩸`,g:1,say:`Le liquide rouge qui circule dans tout le corps.`,ex:`Le sang passe dans le cœur.`,tip:`Il transporte l'oxygène partout.`},
{w:`L'estomac`,e:`🍽️`,say:`Une poche dans le ventre où arrive la nourriture que je mange.`,ex:`Mon estomac digère le repas.`,tip:`Digérer = transformer la nourriture pour le corps.`},
{w:`Les dents`,e:`🦷`,g:1,say:`Elles servent à couper et à mâcher la nourriture.`,ex:`Je me brosse les dents.`,tip:`On a 20 dents de lait, puis 32 dents d'adulte.`},
{w:`La langue`,e:`👅`,g:1,say:`Elle sert à goûter et à parler.`,ex:`Ma langue sent le goût du bonbon.`,tip:`« Langue » veut aussi dire : le français, l'anglais…`},
{w:`Les cinq sens`,e:`🖐️`,say:`Voir, entendre, sentir, goûter, toucher : cinq façons de connaître le monde.`,ex:`J'utilise mes cinq sens.`,a:`🖐️`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">👁️ voir · 👂 entendre<br>👃 sentir · 👅 goûter · ✋ toucher</span>`,tip:`Chaque sens a son organe : les yeux, les oreilles, le nez, la langue, la peau.`}
],quiz:[
{q:`Que font les poumons ?`,o:[`ils nous font respirer`,`ils pensent`,`ils digèrent`],a:0,ex:`L'air entre dans les poumons.`},
{q:`Quel organe commande le corps ?`,o:[`le cerveau`,`l'estomac`,`la peau`],a:0,ex:`Il est dans la tête.`},
{q:`Le cœur envoie…`,o:[`le sang dans le corps`,`l'air dans les poumons`,`la nourriture`],a:0,ex:`Le cœur est un muscle qui pompe le sang.`},
{q:`Le squelette, c'est…`,o:[`tous les os du corps`,`tous les muscles`,`la peau`],a:0,ex:`Il tient le corps debout.`},
{q:`Quel sens utilise la langue ?`,o:[`le goût`,`l'odorat`,`la vue`],a:0,ex:`La langue sent les saveurs.`},
{q:`Les cinq sens sont…`,o:[`voir, entendre, sentir, goûter, toucher`,`courir, sauter, nager, lire, écrire`,`manger, dormir, rire, pleurer, parler`],a:0,ex:`Cinq façons de connaître le monde.`}
]},
dinoS:{t:`Les dinosaures`,e:`🦖`,bg:`#d9f5e8`,sub:`Carnivore, herbivore, fossile, paléontologue, éteint…`,say:`Les mots pour parler des dinosaures, des animaux d'il y a très longtemps !`,fiches:[
{w:`Le dinosaure`,e:`🦖`,g:1,say:`Un animal qui a vécu sur Terre il y a très très longtemps. Il n'existe plus.`,ex:`Le dinosaure vivait avant les humains.`,tip:`Le mot veut dire « terrible lézard ».`},
{w:`Le tyrannosaure`,e:`🦖`,say:`Un grand dinosaure qui mangeait de la viande : il avait de grandes dents et de toutes petites pattes avant.`,ex:`Le tyrannosaure poursuit sa proie.`,tip:`On l'appelle aussi « T. rex ».`},
{w:`Le diplodocus`,e:`🦕`,g:1,say:`Un énorme dinosaure avec un très long cou et une très longue queue. Il mangeait des plantes.`,ex:`Le diplodocus avance doucement.`,tip:`Il pouvait mesurer plus de 25 mètres !`},
{w:`Le carnivore`,e:`🥩`,say:`Un animal qui mange de la viande.`,ex:`Le tyrannosaure est un carnivore.`,a:`🥩`,b:`<span class="pp" style="display:inline-block;font-size:1rem">carn = la viande<br>→ <b>carnivore</b> : il mange de la viande</span>`,tip:`Un lion est un carnivore.`},
{w:`L'herbivore`,e:`🌿`,say:`Un animal qui mange des plantes.`,ex:`Le diplodocus est un herbivore.`,a:`🌿`,b:`<span class="pp" style="display:inline-block;font-size:1rem">herbe = les plantes<br>→ <b>herbivore</b> : il mange des plantes</span>`,tip:`Une vache est un herbivore.`},
{w:`Le fossile`,e:`🐚`,say:`Les restes très anciens d'un animal ou d'une plante, devenus de la pierre.`,ex:`On a trouvé un fossile de dinosaure.`,tip:`Grâce aux fossiles, on sait comment vivaient les dinosaures.`},
{w:`Le paléontologue`,e:`🧑‍🔬`,say:`Le scientifique qui cherche et qui étudie les fossiles.`,ex:`Le paléontologue creuse avec un pinceau.`,tip:`Il travaille souvent dans le désert, très doucement, pour ne rien casser.`},
{w:`L'œuf`,e:`🥚`,g:1,say:`Les dinosaures naissaient dans des œufs, comme les oiseaux.`,ex:`Le dinosaure pond un œuf.`,tip:`On a retrouvé des œufs de dinosaure fossilisés.`},
{w:`Éteint`,e:`🚫`,say:`Une espèce éteinte n'existe plus : il n'y en a plus aucun.`,ex:`Les dinosaures sont éteints.`,tip:`Le contraire : vivant.`},
{w:`La météorite`,e:`☄️`,say:`Un caillou venu de l'espace qui tombe sur la Terre.`,ex:`Une météorite est tombée dans le champ.`,tip:`On pense qu'une très grosse météorite a fait disparaître les dinosaures.`},
{w:`Des millions d'années`,e:`⏳`,say:`Les dinosaures ont vécu il y a plus de 66 millions d'années. Les humains n'étaient pas encore là !`,ex:`C'était il y a des millions d'années.`,a:`⏳`,b:`<span class="pp" style="display:inline-block;font-size:1rem">1 million = 1 000 000<br>Les dinosaures : il y a plus de 66 millions d'années.</span>`,tip:`C'est un temps tellement long qu'on a du mal à l'imaginer.`},
{w:`Le ptérodactyle`,e:`🦅`,say:`Un reptile volant qui vivait au temps des dinosaures. Ce n'était pas un dinosaure !`,ex:`Le ptérodactyle plane au-dessus de la mer.`,tip:`Il avait de grandes ailes en peau.`}
],quiz:[
{q:`Un carnivore mange…`,o:[`de la viande`,`des plantes`,`des cailloux`],a:0,ex:`Carn = la viande.`},
{q:`Un herbivore mange…`,o:[`des plantes`,`de la viande`,`des œufs seulement`],a:0,ex:`Herbe = les plantes.`},
{q:`Un fossile, c'est…`,o:[`le reste très ancien d'un être vivant, devenu pierre`,`un animal vivant`,`un jouet`],a:0,ex:`Les fossiles nous racontent le passé.`},
{q:`Qui étudie les fossiles ?`,o:[`le paléontologue`,`le capitaine`,`l'astronaute`],a:0,ex:`Il cherche et étudie les fossiles.`},
{q:`« Les dinosaures sont éteints » veut dire…`,o:[`il n'y en a plus aucun`,`ils dorment`,`ils sont très gros`],a:0,ex:`Éteint = n'existe plus.`},
{q:`Les dinosaures naissaient…`,o:[`dans des œufs`,`dans l'eau`,`dans un nid d'humain`],a:0,ex:`Comme les oiseaux.`}
]},
chaS:{t:`Le château fort`,e:`🏰`,bg:`#dfe8ff`,sub:`Rempart, donjon, pont-levis, douves, chevalier, Moyen Âge…`,say:`Les mots pour visiter un château fort comme au Moyen Âge !`,fiches:[
{w:`Le château fort`,e:`🏰`,g:1,say:`Une grande maison très solide, avec de hauts murs, qui servait à se défendre.`,ex:`Le château fort domine la vallée.`,tip:`« Fort » veut dire : bien protégé.`},
{w:`Le rempart`,e:`🧱`,say:`Le grand mur épais qui entoure le château.`,ex:`Les archers sont sur le rempart.`,tip:`Rempart = ce qui protège.`},
{w:`Le donjon`,e:`🔝`,say:`La plus grande tour du château : c'était le dernier refuge.`,ex:`Le seigneur habite dans le donjon.`,tip:`Si l'ennemi entrait, on se réfugiait dans le donjon.`},
{w:`Le pont-levis`,e:`🌉`,say:`Un pont qu'on baisse pour entrer dans le château, et qu'on lève pour le fermer.`,ex:`On baisse le pont-levis.`,a:`🌉`,b:`<span class="pp" style="display:inline-block;font-size:1rem">pont baissé = on entre<br>pont levé = c'est fermé</span>`,tip:`Pont-levis = un pont qu'on lève.`},
{w:`Les douves`,e:`🌊`,say:`Un large fossé rempli d'eau autour du château.`,ex:`Les douves entourent le château.`,tip:`Pour entrer, il fallait traverser les douves.`},
{w:`Le chevalier`,e:`🛡️`,say:`Un guerrier du Moyen Âge qui se battait à cheval, avec une armure.`,ex:`Le chevalier protège le château.`,tip:`Il portait une armure en métal.`},
{w:`L'épée`,e:`⚔️`,g:1,say:`Une longue arme avec une lame en métal, que portait le chevalier.`,ex:`Le chevalier sort son épée.`,tip:`Les deux épées croisées veulent dire : combat.`},
{w:`L'archer`,e:`🏹`,g:1,say:`Un soldat qui tire des flèches avec un arc.`,ex:`L'archer vise la cible.`,tip:`Les archers se tenaient en haut des murs.`},
{w:`Le roi`,e:`🤴`,g:1,say:`Le chef du pays : il dirige le royaume.`,ex:`Le roi vit dans un château.`,tip:`Un roi porte une couronne.`},
{w:`La reine`,e:`👸`,g:1,say:`La femme du roi, ou une femme qui dirige un royaume.`,ex:`La reine salue la foule.`,tip:`Roi et reine vivent dans un royaume.`},
{w:`La couronne`,e:`👑`,g:1,say:`Un bijou doré que porte un roi ou une reine sur la tête.`,ex:`Le roi met sa couronne.`,tip:`La couronne montre qui commande.`},
{w:`Le dragon`,e:`🐉`,g:1,say:`Un animal imaginaire qui crache du feu, dans les histoires et les légendes.`,ex:`Le chevalier affronte le dragon.`,tip:`Les dragons n'existent pas : c'est une légende.`},
{w:`Le Moyen Âge`,e:`📜`,say:`Une période de l'histoire, il y a plus de 500 ans.`,ex:`Au Moyen Âge, on construisait des châteaux forts.`,tip:`C'est l'époque des chevaliers, des rois et des châteaux forts.`}
],quiz:[
{q:`Les douves, c'est…`,o:[`un fossé rempli d'eau autour du château`,`la plus haute tour`,`l'épée du chevalier`],a:0,ex:`Il fallait les traverser pour entrer.`},
{q:`Le pont-levis…`,o:[`se baisse pour entrer, se lève pour fermer`,`est un pont de pierre fixe`,`est un tunnel`],a:0,ex:`Pont-levis = un pont qu'on lève.`},
{q:`Le donjon, c'est…`,o:[`la plus grande tour du château`,`le mur extérieur`,`le chevalier`],a:0,ex:`C'était le dernier refuge.`},
{q:`Qui tire des flèches ?`,o:[`l'archer`,`le roi`,`le capitaine`],a:0,ex:`Il utilise un arc.`},
{q:`Le dragon…`,o:[`n'existe que dans les légendes`,`vit dans les douves`,`est un chevalier`],a:0,ex:`C'est un animal imaginaire.`},
{q:`Le rempart, c'est…`,o:[`le grand mur qui protège le château`,`un pont`,`une arme`],a:0,ex:`Rempart = ce qui protège.`}
]},
ruS:{t:`Dehors : la rue et la ville`,e:`🏙️`,bg:`#fff3d6`,sub:`Trottoir, passage piéton, carrefour, bus, métro, boulangerie…`,say:`Les mots qu'on utilise quand on se promène dehors, dans la rue et en ville !`,fiches:[
{w:`Le trottoir`,e:`🚶`,say:`Le bord de la rue réservé aux piétons.`,ex:`Je marche sur le trottoir.`,tip:`Sur le trottoir, on marche. Sur la route, ce sont les voitures.`},
{w:`Le passage piéton`,e:`🚸`,say:`Les bandes blanches sur la route, pour traverser en sécurité.`,ex:`Je traverse sur le passage piéton.`,a:`🚸`,b:`<span class="pp" style="display:inline-block;font-size:1rem">1. je m'arrête 🛑<br>2. je regarde à gauche, à droite 👀<br>3. je traverse ✅</span>`,tip:`On traverse toujours sur le passage piéton.`},
{w:`Le feu tricolore`,e:`🚦`,say:`Le feu qui a trois couleurs : rouge, orange, vert.`,ex:`Le feu tricolore passe au vert.`,a:`🔴 &nbsp; 🟠 &nbsp; 🟢`,b:`<span class="pp" style="display:inline-block;font-size:1rem">🔴 stop · 🟠 attention · 🟢 on peut passer</span>`,tip:`Tricolore = trois couleurs.`},
{w:`Le carrefour`,e:`✖️`,say:`L'endroit où plusieurs routes se croisent.`,ex:`Au carrefour, les voitures ralentissent.`,tip:`Au carrefour, on fait très attention.`},
{w:`Le panneau`,e:`🪧`,say:`Une plaque avec un dessin ou un mot qui donne une information : stop, sens interdit, école…`,ex:`Le panneau indique la direction.`,tip:`Chaque panneau a son sens : il faut les connaître.`},
{w:`Le bus`,e:`🚌`,g:1,say:`Un grand véhicule qui transporte beaucoup de personnes dans la ville.`,ex:`Je prends le bus pour aller à l'école.`,tip:`Le bus s'arrête à l'arrêt de bus.`},
{w:`Le tramway`,e:`🚊`,g:1,say:`Un train qui roule dans la ville, sur des rails, au milieu de la rue.`,ex:`Le tramway passe toutes les dix minutes.`,tip:`On dit aussi « le tram ».`},
{w:`Le métro`,e:`🚇`,g:1,say:`Un train qui roule sous la terre dans les grandes villes.`,ex:`Je descends dans le métro.`,tip:`Métro = abréviation de « métropolitain ».`},
{w:`L'immeuble`,e:`🏢`,g:1,say:`Un grand bâtiment avec plusieurs étages et plusieurs appartements.`,ex:`J'habite dans un immeuble.`,tip:`Dans un immeuble, il y a souvent un ascenseur.`},
{w:`La boulangerie`,e:`🥖`,g:1,say:`Le magasin où on achète le pain.`,ex:`Je vais à la boulangerie.`,tip:`Le boulanger fait le pain. Le pâtissier fait les gâteaux.`},
{w:`Le marché`,e:`🧺`,say:`Un lieu avec des stands où on achète des fruits, des légumes, du fromage…`,ex:`Nous faisons les courses au marché.`,tip:`Un marché se tient souvent un jour précis dans la semaine.`},
{w:`La fontaine`,e:`⛲`,g:1,say:`Un jet d'eau dans la ville, sur une place.`,ex:`Les enfants s'assoient près de la fontaine.`,tip:`Certaines fontaines donnent de l'eau à boire.`},
{w:`La mairie`,e:`🏛️`,g:1,say:`Le bâtiment où travaillent le maire et ses employés. On y fait des papiers (naissance, mariage…).`,ex:`La mairie est sur la place.`,tip:`Le maire dirige la ville.`},
{w:`La poste`,e:`📮`,g:1,say:`Le bureau où on envoie les lettres et les colis.`,ex:`J'envoie une lettre à la poste.`,tip:`Le facteur ou la factrice distribue le courrier.`}
],quiz:[
{q:`Le trottoir est réservé…`,o:[`aux piétons`,`aux voitures`,`aux bus`],a:0,ex:`On y marche, loin des voitures.`},
{q:`Où traverse-t-on la route ?`,o:[`sur le passage piéton`,`au milieu de la route`,`sur le trottoir`],a:0,ex:`Les bandes blanches nous protègent.`},
{q:`Le métro roule…`,o:[`sous la terre`,`dans le ciel`,`sur l'eau`],a:0,ex:`Il circule dans des tunnels.`},
{q:`Où achète-t-on le pain ?`,o:[`à la boulangerie`,`à la poste`,`à la mairie`],a:0,ex:`Le boulanger fait le pain.`},
{q:`Le feu est rouge. Je…`,o:[`m'arrête`,`cours`,`traverse vite`],a:0,ex:`Rouge = stop.`},
{q:`La mairie, c'est…`,o:[`le bâtiment du maire`,`un magasin de pain`,`une gare`],a:0,ex:`Le maire dirige la ville.`}
]},
natS:{t:`Dehors : la nature et le jardin`,e:`🌳`,bg:`#d9f5e8`,sub:`Arbre, feuille, racine, fleur, abeille, forêt, sentier…`,say:`Les mots pour parler de ce qu'on voit quand on se promène dans la nature !`,fiches:[
{w:`L'arbre`,e:`🌳`,g:1,say:`Une grande plante avec un tronc, des branches et des feuilles.`,ex:`Le chat grimpe dans l'arbre.`,tip:`Un arbre peut vivre très longtemps.`},
{w:`Le tronc`,e:`🪵`,g:1,say:`La partie épaisse et dure de l'arbre.`,ex:`Le tronc est large.`,tip:`Le tronc porte les branches.`},
{w:`La branche`,e:`🌿`,g:1,say:`Ce qui part du tronc et porte les feuilles.`,ex:`Un oiseau se pose sur la branche.`,tip:`Les branches sont comme les bras de l'arbre.`},
{w:`La feuille`,e:`🍃`,g:1,say:`La partie plate et souvent verte qui pousse sur les branches.`,ex:`Les feuilles tombent en automne.`,tip:`En automne, beaucoup de feuilles changent de couleur.`},
{w:`La racine`,e:`🌱`,say:`La partie de la plante sous la terre : elle boit l'eau et tient la plante.`,ex:`Les racines boivent l'eau du sol.`,a:`🌱`,b:`<span class="pp" style="display:inline-block;font-size:1rem">dessus : tige et feuilles<br>dessous : <b>racines</b> 💧</span>`,tip:`On ne voit pas les racines : elles sont sous la terre.`},
{w:`La fleur`,e:`🌸`,g:1,say:`La partie colorée de la plante, qui sent bon et attire les insectes.`,ex:`Les fleurs sentent bon.`,tip:`Une fleur devient parfois un fruit.`},
{w:`La graine`,e:`🌰`,say:`Ce qu'on met en terre pour faire pousser une plante.`,ex:`Je plante une graine.`,a:`🌰`,b:`<span class="pp" style="display:inline-block;font-size:1rem">graine → 🌱 petite pousse → 🌳 plante</span>`,tip:`Avec de l'eau et du soleil, la graine pousse.`},
{w:`Le champignon`,e:`🍄`,g:1,say:`Il pousse dans la forêt, souvent après la pluie. Ce n'est ni une plante, ni un animal.`,ex:`Il y a un champignon sous le sapin.`,tip:`Attention : certains champignons sont dangereux. On ne mange jamais un champignon sans un adulte.`},
{w:`Le papillon`,e:`🦋`,g:1,say:`Un insecte aux grandes ailes colorées.`,ex:`Le papillon se pose sur la fleur.`,tip:`Avant, c'était une chenille.`},
{w:`L'abeille`,e:`🐝`,g:1,say:`Un insecte qui butine les fleurs et fabrique le miel.`,ex:`L'abeille butine la fleur.`,tip:`Butiner = récolter le nectar des fleurs.`},
{w:`Le ruisseau`,e:`🏞️`,say:`Un tout petit cours d'eau.`,ex:`Le ruisseau coule dans la prairie.`,tip:`Plusieurs ruisseaux forment une rivière.`},
{w:`Le sentier`,e:`🥾`,say:`Un petit chemin étroit pour marcher dans la nature.`,ex:`Nous suivons le sentier.`,tip:`Pour se promener, on met de bonnes chaussures.`},
{w:`La forêt`,e:`🌲`,g:1,say:`Un grand endroit rempli d'arbres.`,ex:`Nous nous promenons dans la forêt.`,tip:`La forêt abrite beaucoup d'animaux.`},
{w:`La prairie`,e:`🌾`,g:1,say:`Un grand terrain couvert d'herbe.`,ex:`Les vaches broutent dans la prairie.`,tip:`Un pré est une petite prairie.`}
],quiz:[
{q:`La racine…`,o:[`boit l'eau sous la terre`,`donne des fleurs`,`porte les fruits`],a:0,ex:`Elle tient aussi la plante.`},
{q:`L'abeille fabrique…`,o:[`le miel`,`le pain`,`le lait`],a:0,ex:`Elle butine les fleurs.`},
{q:`Le tronc, c'est…`,o:[`la partie épaisse de l'arbre`,`une petite branche`,`une feuille`],a:0,ex:`Il porte les branches.`},
{q:`Un sentier, c'est…`,o:[`un petit chemin`,`un grand pont`,`une rivière`],a:0,ex:`On y marche dans la nature.`},
{q:`Je trouve un champignon dans la forêt. Je…`,o:[`ne le mange pas sans demander à un adulte`,`le mange tout de suite`,`le donne à manger à tout le monde`],a:0,ex:`Certains champignons sont dangereux.`},
{q:`La forêt, c'est…`,o:[`un grand endroit plein d'arbres`,`un jardin de fleurs`,`une rue`],a:0,ex:`On y trouve beaucoup d'animaux.`}
]},
expS:{t:`Les expressions imagées`,e:`🗨️`,bg:`#e9defc`,sayl:`Ça veut dire`,exl:`Dans une phrase`,sub:`Il pleut des cordes, un froid de canard, poser un lapin…`,say:`Une <b>expression</b>, c'est une phrase qu'on ne comprend pas mot à mot : elle fait une <b>image</b> !`,fiches:[
{w:`Avoir un chat dans la gorge`,e:`🐱`,say:`Avoir du mal à parler, avoir la voix enrouée.`,ex:`Excuse-moi, j'ai un chat dans la gorge.`,a:`🐱`,b:`<span class="pp" style="display:inline-block;font-size:1rem">Il n'y a pas de vrai chat !<br>→ ma voix est enrouée 😶</span>`,tip:`C'est une image : personne n'a vraiment un chat dans la gorge.`},
{w:`Il pleut des cordes`,e:`🌧️`,say:`Il pleut très fort.`,ex:`Prends ton parapluie, il pleut des cordes !`,tip:`Les gouttes sont si serrées qu'on dirait des cordes.`},
{w:`Avoir la tête dans les nuages`,e:`☁️`,say:`Être distrait, rêver au lieu d'écouter.`,ex:`Léo a la tête dans les nuages pendant la leçon.`,tip:`On dit aussi : être dans la lune.`},
{w:`Poser un lapin`,e:`🐰`,say:`Ne pas venir à un rendez-vous, sans prévenir.`,ex:`Il m'a posé un lapin : je l'ai attendu une heure.`,tip:`Poser un lapin à quelqu'un, ce n'est pas gentil.`},
{w:`Avoir le cœur sur la main`,e:`🤲`,say:`Être très généreux, donner facilement.`,ex:`Mamie a le cœur sur la main.`,tip:`Une personne généreuse partage volontiers.`},
{w:`Coûter les yeux de la tête`,e:`💰`,say:`Coûter très cher.`,ex:`Cette voiture coûte les yeux de la tête.`,tip:`On ne donne pas vraiment ses yeux !`},
{w:`Avoir une faim de loup`,e:`🐺`,say:`Avoir très faim.`,ex:`Après le sport, j'ai une faim de loup.`,tip:`Un loup affamé mange beaucoup.`},
{w:`Un froid de canard`,e:`🦆`,say:`Un très grand froid.`,ex:`Il fait un froid de canard ce matin.`,tip:`On le dit pour parler d'un temps glacial.`},
{w:`Tomber dans les pommes`,e:`🍎`,say:`S'évanouir : perdre connaissance un instant.`,ex:`Il a tellement chaud qu'il a failli tomber dans les pommes.`,tip:`Il n'y a aucune pomme là-dedans !`},
{w:`Se jeter à l'eau`,e:`🏊`,say:`Se lancer, oser faire quelque chose de difficile.`,ex:`Il a pris son courage à deux mains et s'est jeté à l'eau.`,tip:`Un peu comme plonger dans une piscine froide.`},
{w:`Ce n'est pas la mer à boire`,e:`🌊`,say:`Ce n'est pas très difficile.`,ex:`Ranger ta chambre, ce n'est pas la mer à boire !`,tip:`Boire toute la mer serait impossible : ici, c'est facile.`},
{w:`Donner un coup de main`,e:`🤝`,say:`Aider quelqu'un.`,ex:`Tu peux me donner un coup de main ?`,tip:`On peut aussi dire : donner un coup de pouce.`},
{w:`Mettre son grain de sel`,e:`🧂`,say:`Donner son avis sans qu'on te l'ait demandé.`,ex:`Il met toujours son grain de sel dans nos discussions.`,tip:`Ce n'est pas très poli quand on n'est pas invité à parler.`},
{w:`Quand les poules auront des dents`,e:`🐔`,say:`Jamais.`,ex:`Il rangera sa chambre quand les poules auront des dents !`,tip:`Les poules n'ont pas de dents, donc ça n'arrivera jamais.`}
],quiz:[
{q:`« Il pleut des cordes » veut dire…`,o:[`il pleut très fort`,`il pleut un peu`,`il y a du soleil`],a:0,ex:`C'est une image.`},
{q:`« Avoir une faim de loup », c'est…`,o:[`avoir très faim`,`ne pas avoir faim`,`aimer les loups`],a:0,ex:`Un loup affamé mange beaucoup.`},
{q:`« Poser un lapin à quelqu'un », c'est…`,o:[`ne pas venir au rendez-vous`,`lui offrir un lapin`,`lui faire un câlin`],a:0,ex:`On ne prévient pas, on ne vient pas.`},
{q:`« Avoir le cœur sur la main », c'est…`,o:[`être très généreux`,`avoir mal au cœur`,`être fâché`],a:0,ex:`Il donne facilement.`},
{q:`« Ce n'est pas la mer à boire » veut dire…`,o:[`ce n'est pas très difficile`,`c'est impossible`,`il y a trop d'eau`],a:0,ex:`C'est facile à faire.`},
{q:`« Tomber dans les pommes », c'est…`,o:[`s'évanouir`,`manger des pommes`,`glisser sur un fruit`],a:0,ex:`On perd connaissance un instant.`}
]},
regS:{t:`Façons de parler`,e:`🗣️`,bg:`#dfe8ff`,sayl:`Ça veut dire`,exl:`Dans une phrase`,sub:`Familier ou courant ? Choisir le bon mot, avec les copains et à l'école`,say:`On ne parle pas pareil à la maison, entre copains et à l'école. Le <b>mot familier</b> se dit entre copains. Le <b>mot courant</b> convient partout !`,fiches:[
{w:`Un bouquin`,e:`📖`,say:`Mot familier pour dire « un livre ».`,ex:`J'ai oublié mon bouquin à la maison.`,a:`📖`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">😄 familier : bouquin<br>🙂 courant : livre<br>🎩 soutenu : ouvrage</span>`,tip:`À l'école et dans un texte, on écrit « livre ».`},
{w:`Une bagnole`,e:`🚗`,say:`Mot familier pour dire « une voiture ».`,ex:`Papa a une nouvelle bagnole.`,a:`🚗`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">😄 familier : bagnole<br>🙂 courant : voiture<br>🎩 soutenu : automobile</span>`,tip:`En rédaction, on écrit « voiture ».`},
{w:`Un gosse`,e:`🧒`,say:`Mot familier pour dire « un enfant ».`,ex:`Il y a beaucoup de gosses dans la cour.`,a:`🧒`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">😄 familier : gosse<br>🙂 courant : enfant</span>`,tip:`Pour être poli devant un adulte, on dit « enfant ».`},
{w:`Le boulot`,e:`💼`,say:`Mot familier pour dire « le travail ».`,ex:`Maman part au boulot.`,a:`💼`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">😄 familier : boulot<br>🙂 courant : travail</span>`,tip:`Dans une lettre, on écrit « travail ».`},
{w:`Les fringues`,e:`👕`,say:`Mot familier pour dire « les vêtements ».`,ex:`Range tes fringues dans l'armoire.`,a:`👕`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">😄 familier : fringues<br>🙂 courant : vêtements</span>`,tip:`À l'école, on dit « vêtements ».`},
{w:`Un pote`,e:`🧑‍🤝‍🧑`,say:`Mot familier pour dire « un ami ».`,ex:`Je joue avec mon pote.`,a:`🧑‍🤝‍🧑`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">😄 familier : pote, copain<br>🙂 courant : ami</span>`,tip:`« Copain » est un peu moins familier que « pote ».`},
{w:`Bouffer`,e:`🍽️`,say:`Mot familier pour dire « manger ».`,ex:`On va bouffer ? → On va manger ?`,a:`🍽️`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">😄 familier : bouffer<br>🙂 courant : manger<br>🎩 soutenu : se restaurer</span>`,tip:`À table devant des adultes, on dit « manger ».`},
{w:`Rigoler`,e:`😂`,say:`Mot familier pour dire « rire ».`,ex:`On a bien rigolé !`,a:`😂`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">😄 familier : rigoler<br>🙂 courant : rire<br>🎩 soutenu : s'esclaffer</span>`,tip:`« S'esclaffer » = rire très fort.`},
{w:`Être crevé`,e:`😴`,say:`Mot familier pour dire « être très fatigué ».`,ex:`Après la course, je suis crevé.`,a:`😴`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">😄 familier : crevé<br>🙂 courant : fatigué<br>🎩 soutenu : épuisé</span>`,tip:`À l'écrit, on préfère « fatigué ».`},
{w:`Plein de`,e:`🧺`,say:`Expression familière pour dire « beaucoup de ».`,ex:`Il y a plein de pommes dans le panier.`,a:`🧺`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">😄 familier : plein de<br>🙂 courant : beaucoup de<br>🎩 soutenu : énormément de</span>`,tip:`À l'écrit, on écrit « beaucoup de ».`},
{w:`C'est super !`,e:`👍`,say:`Expression familière pour dire « c'est très bien ».`,ex:`Ton dessin, c'est super !`,a:`👍`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">😄 familier : super, génial<br>🙂 courant : très bien<br>🎩 soutenu : excellent</span>`,tip:`Pour féliciter un adulte, on peut dire « c'est excellent ».`},
{w:`Se planter`,e:`❌`,say:`Mot familier pour dire « se tromper ».`,ex:`Je me suis planté dans mon calcul.`,a:`❌`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">😄 familier : se planter<br>🙂 courant : se tromper<br>🎩 soutenu : commettre une erreur</span>`,tip:`À l'école, on dit : « je me suis trompé ».`},
{w:`Salut !`,e:`👋`,say:`Façon familière de dire bonjour (ou au revoir) à un copain.`,ex:`Salut, ça va ?`,a:`👋`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">😄 entre copains : salut !<br>🙂 à tout le monde : bonjour<br>🎩 en fin de lettre : cordialement</span>`,tip:`À un adulte que tu ne connais pas, on dit « bonjour ».`},
{w:`Tu ou vous ?`,e:`🙇`,say:`On dit « tu » aux enfants, à la famille et aux amis. On dit « vous » à un adulte qu'on ne connaît pas, ou pour être poli.`,ex:`Tu viens jouer ? / Vous pouvez m'aider, madame ?`,a:`🙇`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">👦 à un copain : <b>tu</b><br>👩 à une dame inconnue : <b>vous</b></span>`,tip:`Dire « vous » est une marque de politesse.`},
{w:`Les mots de politesse`,e:`🙏`,say:`Bonjour, s'il vous plaît, merci, excusez-moi, pardon, au revoir… Ce sont des mots qui rendent la conversation agréable.`,ex:`Bonjour madame, un pain s'il vous plaît. Merci, au revoir !`,a:`🙏`,b:`<span class="pp" style="display:inline-block;font-size:1rem;text-align:left">🙂 bonjour · s'il vous plaît<br>🙏 merci · pardon<br>👋 au revoir</span>`,tip:`Ces mots sont toujours bienvenus, avec tout le monde.`}
],quiz:[
{q:`Quel mot est familier ?`,o:[`bouquin`,`livre`,`ouvrage`],a:0,ex:`Le mot courant est « livre ».`},
{q:`Le mot courant pour « bouffer » est…`,o:[`manger`,`rigoler`,`bagnole`],a:0,ex:`À table devant des adultes : manger.`},
{q:`Je parle à une dame que je ne connais pas. Je dis…`,o:[`vous`,`tu`,`toi`],a:0,ex:`On dit « vous » pour être poli.`},
{q:`À l'école, pour dire « je suis très fatigué », je préfère…`,o:[`je suis fatigué`,`je suis crevé`,`je suis claqué`],a:0,ex:`« Fatigué » convient à l'école.`},
{q:`« Rigoler » veut dire…`,o:[`rire`,`pleurer`,`crier`],a:0,ex:`Mot familier pour « rire ».`},
{q:`Pour dire bonjour à un adulte inconnu, je dis…`,o:[`bonjour`,`salut`,`coucou`],a:0,ex:`« Salut » est pour les copains.`}
]}
};
