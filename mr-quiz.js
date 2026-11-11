/* Mini-questions après les explications (par mission, puis par titre d'écran). */
window.MRQ={
"oi": {
"Deux sons voisins": {
"q": "Dans « étoile », j'entends…",
"o": [
"oi",
"ou"
],
"a": 0
}
},
"f-debut": {
"Une phrase commence bien": {
"q": "Une phrase commence par…",
"o": [
"un point",
"une majuscule",
"une virgule"
],
"a": 1
},
"Une phrase a du sens": {
"q": "Laquelle est une phrase ?",
"o": [
"dort le chat",
"Le chat dort."
],
"a": 1
}
},
"sens": {
"Une phrase doit avoir du sens": {
"q": "« Papa lave le salon de ballons. » Cette phrase…",
"o": [
"a du sens",
"ne veut rien dire"
],
"a": 1
}
},
"f-ordre": {
"Qui ? Que fait-il ? Quoi ?": {
"q": "Dans une phrase, on dit d'abord…",
"o": [
"quoi",
"qui",
"que fait-il"
],
"a": 1
},
"On garde cet ordre": {
"q": "Quelle phrase est dans le bon ordre ?",
"o": [
"Mange Papa une pomme.",
"Papa mange une pomme."
],
"a": 1
}
},
"f-ponct": {
"Trois façons de finir une phrase": {
"q": "Pour demander, je mets…",
"o": [
"un point .",
"un point d'interrogation ?",
"un point d'exclamation !"
],
"a": 1
}
},
"gn": {
"Le nom est le chef": {
"q": "Dans « le petit chat », le chef est…",
"o": [
"le",
"petit",
"chat"
],
"a": 2
},
"Un groupe qui grandit": {
"q": "Dans « un grand vélo rouge », le nom chef est…",
"o": [
"grand",
"vélo",
"rouge"
],
"a": 1
},
"Le déterminant ouvre le groupe": {
"q": "Le déterminant se place…",
"o": [
"devant le nom",
"après le nom"
],
"a": 0
},
"Le nom donne le sujet": {
"q": "« lapin » désigne…",
"o": [
"un lieu",
"un animal",
"une personne"
],
"a": 1
},
"L'adjectif ajoute une précision": {
"q": "Dans « une petite souris », l'adjectif est…",
"o": [
"une",
"petite",
"souris"
],
"a": 1
},
"Le nom donne des indices": {
"q": "« des petits chiens » est au…",
"o": [
"singulier",
"pluriel"
],
"a": 1
},
"Les mots s'accordent": {
"q": "un petit chat → des…",
"o": [
"petit chat",
"petits chats",
"petits chat"
],
"a": 1
},
"La formule à retenir": {
"q": "Dans la formule, qu'est-ce qui est facultatif ?",
"o": [
"le déterminant",
"le nom chef",
"l'adjectif"
],
"a": 2
}
},
"accords": {
"Un seul ou plusieurs ?": {
"q": "Quand il y en a plusieurs, le nom prend…",
"o": [
"un s",
"un point",
"une majuscule"
],
"a": 0
},
"Le petit mot change": {
"q": "Au pluriel, « la » devient…",
"o": [
"des",
"les",
"mes"
],
"a": 1
}
},
"verbe": {
"Le verbe dit ce qu'on fait": {
"q": "Pour trouver le verbe, quelle question je pose ?",
"o": [
"Où est-il ?",
"Qu'est-ce qu'il fait ?",
"Quelle heure est-il ?"
],
"a": 1
}
},
"infinitif": {
"Le verbe et son infinitif": {
"q": "Le nom du verbe s'appelle…",
"o": [
"le pronom",
"l'infinitif",
"le pluriel"
],
"a": 1
}
},
"conj": {
"Le verbe change avec celui qui agit": {
"q": "Job et Rayan…",
"o": [
"marche",
"marchent"
],
"a": 1
},
"L'astuce : remplace par un pronom": {
"q": "« Job et Rayan », c'est comme…",
"o": [
"il",
"ils",
"elle"
],
"a": 1
},
"Pour aller plus loin : marcher": {
"q": "Nous…",
"o": [
"marchons",
"marchez",
"marchent"
],
"a": 0
}
},
"pattes": {
"La phrase à deux pattes": {
"q": "La 1re patte dit…",
"o": [
"ce qu'on en dit",
"de qui ou de quoi on parle",
"où ça se passe"
],
"a": 1
}
},
"f-sv": {
"Le sujet : qui fait l'action ?": {
"q": "Pour trouver le sujet, je demande…",
"o": [
"Qui est-ce qui ?",
"Où ?",
"Quand ?"
],
"a": 0
},
"Le verbe : l'action": {
"q": "Le verbe dit…",
"o": [
"où on est",
"ce qu'on fait",
"qui parle"
],
"a": 1
}
},
"sujet": {
"Le groupe sujet et le groupe verbal": {
"q": "Le groupe sujet dit…",
"o": [
"ce qu'on fait",
"de qui on parle"
],
"a": 1
}
},
"pronom": {
"On ne répète pas": {
"q": "À quoi sert un pronom ?",
"o": [
"À dire l'action",
"À finir la phrase",
"À remplacer un groupe nominal"
],
"a": 2
},
"Quel pronom choisir ?": {
"q": "Pour plusieurs filles (Sarah et Léa), je dis…",
"o": [
"ils",
"elle",
"elles"
],
"a": 2
}
},
"f-comp": {
"Ajouter des précisions": {
"q": "« dans le jardin » dit…",
"o": [
"où",
"quand",
"comment"
],
"a": 0
}
}
};

/* Missions ajoutées (Français, groupe « 3. Le nom ») */
window.MRX=[
{"id": "nom", "name": "Le nom propre et le nom commun", "sub": "La catégorie ou le nom précis ?", "cls": "gn", "badge": "N", "steps": [{"t": "teach", "title": "Deux familles de noms", "say": "Imagine un grand magasin de mots : les noms sont rangés dans deux rayons.", "html": "<p class=\"big\">Imagine un grand magasin de mots : les noms sont rangés dans <b>deux rayons</b>.</p><div class=\"row\"><span class=\"w g\">Rayon 1 : les noms communs</span><span class=\"w v\">Rayon 2 : les noms propres</span></div>", "chk": {"q": "Les noms sont rangés dans combien de rayons ?", "o": ["un", "deux", "trois"], "a": 1}}, {"t": "teach", "title": "Rayon 1 : les noms communs", "say": "Un nom commun désigne une personne, un animal, un lieu ou une chose en général. Une fille, un chien, une ville, un livre.", "html": "<p class=\"big\">Un <b class=\"g\">nom commun</b> désigne une personne, un animal, un lieu ou une chose <b>en général</b>.</p><div class=\"row\"><span class=\"w g\">une fille</span><span class=\"w g\">un chien</span><span class=\"w g\">une ville</span><span class=\"w g\">un livre</span></div>", "chk": {"q": "Lequel est un nom commun ?", "o": ["Paris", "un chien", "Lina"], "a": 1}}, {"t": "teach", "title": "Un déterminant devant", "say": "On peut souvent mettre un déterminant devant : un chien, la ville, des livres.", "html": "<p class=\"big\">On peut souvent mettre un <b class=\"p\">déterminant</b> devant.</p><div class=\"row\"><span class=\"w p\">un</span><span class=\"w g\">chien</span><span class=\"w p\">la</span><span class=\"w g\">ville</span><span class=\"w p\">des</span><span class=\"w g\">livres</span></div>", "chk": {"q": "Dans « la ville », le déterminant est…", "o": ["la", "ville"], "a": 0}}, {"t": "teach", "title": "Rayon 2 : les noms propres", "say": "Un nom propre désigne une personne, un animal ou un lieu précis. Il donne son nom particulier.", "html": "<p class=\"big\">Un <b class=\"v\">nom propre</b> désigne une personne, un animal ou un lieu <b>précis</b>. Il donne son nom particulier.</p><p><span class=\"w v\">Lina</span> est une fille.<br><span class=\"w v\">Médor</span> est un chien.<br><span class=\"w v\">Paris</span> est une ville.<br><span class=\"w v\">Le Petit Prince</span> est un livre.</p>", "chk": {"q": "Lequel est un nom propre ?", "o": ["une ville", "un livre", "Médor"], "a": 2}}, {"t": "teach", "title": "La majuscule", "say": "Le nom propre commence par une majuscule. Une ville, nom commun. Paris, nom propre. Un chien, nom commun. Médor, nom propre.", "html": "<p class=\"big\">Le nom propre commence par une <b>majuscule</b>.</p><p><span class=\"w g\">une ville</span> → nom commun<br><span class=\"w v\">Paris</span> → nom propre</p><p><span class=\"w g\">un chien</span> → nom commun<br><span class=\"w v\">Médor</span> → nom propre</p>", "chk": {"q": "Le nom propre commence par…", "o": ["une minuscule", "un point", "une majuscule"], "a": 2}}, {"t": "teach", "title": "L'indice du détective", "say": "Pose-toi cette question : est-ce que ce mot désigne une catégorie ou quelqu'un, quelque chose de précis ?", "html": "<p class=\"big\">« Est-ce que ce mot désigne une <b>catégorie</b> ou quelqu'un / quelque chose de <b>précis</b> ? »</p><p><span class=\"w g\">maîtresse</span> une catégorie de personne → nom commun<br><span class=\"w v\">Madame Dupont</span> une personne précise → nom propre</p><p><span class=\"w g\">pays</span> une catégorie de lieu → nom commun<br><span class=\"w v\">l'Italie</span> un pays précis → nom propre</p>", "chk": {"q": "« l'Italie » est un pays précis. C'est…", "o": ["un nom commun", "un nom propre"], "a": 1}}, {"t": "teach", "title": "Attention à la majuscule", "say": "Attention : la majuscule est un indice, mais pas toujours une preuve. Le premier mot d'une phrase commence aussi par une majuscule.", "html": "<p class=\"big\">La majuscule est un indice, mais <b>pas toujours une preuve</b>.</p><p>Le premier mot d'une phrase commence aussi par une majuscule.</p><p><b>Lina joue dans le jardin.</b><br>Lina : nom propre ; jardin : nom commun.</p><p><b>Un chien court.</b><br>« Un » a une majuscule car il commence la phrase. Ce n'est pas un nom propre.</p>", "chk": {"q": "« Un chien court. » Le mot « Un » est-il un nom propre ?", "o": ["Oui", "Non"], "a": 1}}, {"t": "teach", "title": "Les noms propres des animaux", "say": "Le nom de l'espèce ou de la catégorie est un nom commun. Le nom particulier de l'animal est un nom propre. Mon chat s'appelle Nuage.", "html": "<p>Le nom de l'espèce ou de la catégorie est un <b class=\"g\">nom commun</b>. Le nom particulier de l'animal est un <b class=\"v\">nom propre</b>.</p><p class=\"big\">Mon <span class=\"w g\">chat</span> s'appelle <span class=\"w v\">Nuage</span>.</p>", "chk": {"q": "« Mon chat s'appelle Nuage. » Le nom propre est…", "o": ["chat", "Nuage"], "a": 1}}, {"t": "teach", "title": "Les noms propres des lieux", "say": "Les noms de villes, de pays, de rues et de monuments sont aussi des noms propres. Lina habite à Rome, en Italie. Elle visite le Colisée.", "html": "<p>Les noms de villes, de pays, de rues et de monuments sont aussi des <b class=\"v\">noms propres</b>.</p><p class=\"big\"><span class=\"w v\">Lina</span> habite à <span class=\"w v\">Rome</span>, en <span class=\"w v\">Italie</span>. Elle visite le <span class=\"w v\">Colisée</span>.</p><p>habite, visite : verbes ; ce ne sont pas des noms.</p>", "chk": {"q": "« Rome » est…", "o": ["un verbe", "un nom propre", "un nom commun"], "a": 1}}, {"t": "teach", "title": "Un déterminant devant un nom propre", "say": "On peut parfois trouver un déterminant devant un nom propre : la France, les Alpes, le Rhône. Le nom reste propre, car il désigne un lieu précis.", "html": "<p>On peut parfois trouver un déterminant devant un nom propre.</p><div class=\"row\"><span class=\"w v\">la France</span><span class=\"w v\">les Alpes</span><span class=\"w v\">le Rhône</span></div><p class=\"big\">Le nom reste <b class=\"v\">propre</b>, car il désigne un lieu précis.</p>", "chk": {"q": "« la France » est…", "o": ["un nom commun", "un nom propre"], "a": 1}}, {"t": "sort", "q": "Range les mots dans le bon rayon.", "cats": [{"k": "c", "label": "Nom commun", "cls": "g"}, {"k": "p", "label": "Nom propre", "cls": "v"}], "items": [{"w": "école", "cat": "c", "hint": "c'est une catégorie."}, {"w": "Sofia", "cat": "p", "hint": "c'est un nom précis."}, {"w": "montagne", "cat": "c", "hint": "c'est une catégorie."}, {"w": "Milan", "cat": "p", "hint": "c'est un nom précis."}, {"w": "lapin", "cat": "c", "hint": "c'est une catégorie."}, {"w": "Caramel", "cat": "p", "hint": "c'est un nom précis."}, {"w": "fleuve", "cat": "c", "hint": "c'est une catégorie."}, {"w": "le Rhône", "cat": "p", "hint": "c'est un nom précis."}, {"w": "garçon", "cat": "c", "hint": "c'est une catégorie."}, {"w": "Adam", "cat": "p", "hint": "c'est un nom précis."}]}, {"t": "choice", "q": "« Emma lit un livre. » Le mot « Emma » est…", "opts": ["un nom commun", "un nom propre"], "ans": 1, "ok": "Oui : Emma est un nom propre.", "ko": "Est-ce une catégorie ou un nom précis ?"}, {"t": "choice", "q": "« Emma lit un livre. » Le mot « livre » est…", "opts": ["un nom commun", "un nom propre"], "ans": 0, "ok": "Oui : livre est un nom commun.", "ko": "Est-ce une catégorie ou un nom précis ?"}, {"t": "choice", "q": "« Mon frère joue avec Rex. » Le mot « frère » est…", "opts": ["un nom commun", "un nom propre"], "ans": 0, "ok": "Oui : frère est un nom commun.", "ko": "Est-ce une catégorie ou un nom précis ?"}, {"t": "choice", "q": "« Mon frère joue avec Rex. » Le mot « Rex » est…", "opts": ["un nom commun", "un nom propre"], "ans": 1, "ok": "Oui : Rex est un nom propre.", "ko": "Est-ce une catégorie ou un nom précis ?"}, {"t": "choice", "q": "« Nous visitons Rome avec notre classe. » Le mot « Rome » est…", "opts": ["un nom commun", "un nom propre"], "ans": 1, "ok": "Oui : Rome est un nom propre.", "ko": "Est-ce une catégorie ou un nom précis ?"}, {"t": "choice", "q": "« Nous visitons Rome avec notre classe. » Le mot « classe » est…", "opts": ["un nom commun", "un nom propre"], "ans": 0, "ok": "Oui : classe est un nom commun.", "ko": "Est-ce une catégorie ou un nom précis ?"}, {"t": "choice", "q": "« Le chat de Nina dort. » Le mot « chat » est…", "opts": ["un nom commun", "un nom propre"], "ans": 0, "ok": "Oui : chat est un nom commun.", "ko": "Est-ce une catégorie ou un nom précis ?"}, {"t": "choice", "q": "« Le chat de Nina dort. » Le mot « Nina » est…", "opts": ["un nom commun", "un nom propre"], "ans": 1, "ok": "Oui : Nina est un nom propre.", "ko": "Est-ce une catégorie ou un nom précis ?"}, {"t": "choice", "q": "« Milan est une ville. » Le mot « Milan » est…", "opts": ["un nom commun", "un nom propre"], "ans": 1, "ok": "Oui : Milan est un nom propre.", "ko": "Est-ce une catégorie ou un nom précis ?"}, {"t": "choice", "q": "« Milan est une ville. » Le mot « ville » est…", "opts": ["un nom commun", "un nom propre"], "ans": 0, "ok": "Oui : ville est un nom commun.", "ko": "Est-ce une catégorie ou un nom précis ?"}, {"t": "match", "q": "Associe chaque nom commun à un nom propre.", "pairs": [{"l": "une fille", "r": "Lina"}, {"l": "un garçon", "r": "Noé"}, {"l": "un chien", "r": "Rex"}, {"l": "une ville", "r": "Paris"}, {"l": "un pays", "r": "France"}]}, {"t": "tapmany", "q": "La majuscule s'est perdue ! Touche les mots qui doivent prendre une majuscule.", "tokens": ["lina", "habite", "à", "paris."], "ans": [0, 3], "ok": "Oui : Lina habite à Paris."}, {"t": "tapmany", "q": "Touche les mots qui doivent prendre une majuscule.", "tokens": ["mon", "chien", "s'appelle", "milo."], "ans": [0, 3], "ok": "Oui : Mon chien s'appelle Milo."}, {"t": "tapmany", "q": "Touche les mots qui doivent prendre une majuscule.", "tokens": ["nous", "visitons", "l'italie."], "ans": [0, 2], "ok": "Oui : Nous visitons l'Italie."}, {"t": "tapmany", "q": "Touche le mot qui doit prendre une majuscule.", "tokens": ["adam", "joue", "avec", "un", "ballon."], "ans": [0], "ok": "Oui : Adam joue avec un ballon. Adam commence par une majuscule parce que c'est un nom propre et parce qu'il est au début de la phrase."}, {"t": "tapmany", "q": "Touche tous les noms propres.", "tokens": ["Sofia", "promène", "son", "chien", "Caramel", "dans", "le", "parc", "de", "Milan."], "ans": [0, 4, 9], "ok": "Oui : Sofia, Caramel, Milan."}, {"t": "tapmany", "q": "Touche tous les noms communs.", "tokens": ["Sofia", "promène", "son", "chien", "Caramel", "dans", "le", "parc", "de", "Milan."], "ans": [3, 7], "ok": "Oui : chien, parc."}, {"t": "tap", "q": "Un nom propre a perdu sa majuscule. Touche-le.", "tokens": ["Mon", "cousin", "habite", "à", "lyon."], "ans": 4, "ok": "Oui : Mon cousin habite à Lyon.", "ko": "Cherche le nom d'une ville précise."}, {"t": "tap", "q": "Un nom propre a perdu sa majuscule. Touche-le.", "tokens": ["La", "chienne", "de", "monsieur", "Martin", "s'appelle", "perle."], "ans": 6, "ok": "Oui : La chienne de monsieur Martin s'appelle Perle.", "ko": "Cherche le nom particulier de la chienne."}, {"t": "tap", "q": "Un nom propre a perdu sa majuscule. Touche-le.", "tokens": ["Nous", "partons", "en", "Espagne", "avec", "nina."], "ans": 5, "ok": "Oui : Nous partons en Espagne avec Nina.", "ko": "Cherche le prénom."}, {"t": "teach", "title": "Le pense-bête du détective", "say": "Nom commun : il nomme une catégorie. Nom propre : il donne un nom précis. Le nom propre commence par une majuscule. Une majuscule au début d'une phrase ne transforme pas un nom commun en nom propre.", "html": "<p><span class=\"w g\">Nom commun</span> il nomme une catégorie : fille, chien, ville, livre.</p><p><span class=\"w v\">Nom propre</span> il donne un nom précis : Lina, Rex, Rome, Le Petit Prince.</p><p>Le nom propre commence par une majuscule.</p><p>Une majuscule au début d'une phrase ne transforme pas un nom commun en nom propre.</p><p class=\"big\">Nom commun = la catégorie<br>Nom propre = le nom particulier</p>", "chk": {"q": "Nom propre = …", "o": ["la catégorie", "le nom particulier"], "a": 1}}]},
{"id": "det", "name": "Les déterminants", "sub": "Le petit mot qui accompagne le nom", "cls": "gn", "badge": "D", "steps": [{"t": "teach", "title": "Le gardien du nom", "say": "Le déterminant se place généralement devant le nom. Il annonce le nom et forme avec lui le début d'un groupe nominal.", "html": "<p class=\"big\">Le <b class=\"p\">déterminant</b> se place généralement <b>devant le nom</b>.</p><p>Il annonce le nom et forme avec lui le début d'un groupe nominal.</p><div class=\"row\"><span class=\"w p\">la</span><span class=\"w v\">maison</span><span class=\"w p\">un</span><span class=\"w v\">chien</span><span class=\"w p\">mes</span><span class=\"w v\">chaussures</span></div><p>la, un, mes sont des déterminants ; maison, chien, chaussures sont les noms.</p>", "chk": {"q": "Dans « mes chaussures », le déterminant est…", "o": ["mes", "chaussures"], "a": 0}}, {"t": "teach", "title": "Le déterminant donne des indices", "say": "Le déterminant donne des indices sur le nom : est-ce qu'on parle d'une chose ou de plusieurs ? Est-ce une chose connue ou pas encore précisée ? À qui appartient-elle ?", "html": "<p class=\"big\">Le déterminant donne des <b>indices</b> sur le nom.</p><p>Est-ce qu'on parle d'une chose ou de plusieurs ?</p><p>Est-ce une chose connue ou pas encore précisée ?</p><p>À qui appartient-elle ?</p>", "chk": {"q": "Le déterminant donne des indices sur…", "o": ["le verbe", "le nom"], "a": 1}}, {"t": "teach", "title": "Les articles", "say": "Les articles accompagnent souvent un nom sans préciser à qui il appartient. Articles définis : le, la, l apostrophe, les. Articles indéfinis : un, une, des.", "html": "<p>Ils accompagnent souvent un nom sans préciser à qui il appartient.</p><table class=\"tbl\"><tr><th>Articles définis</th><th>Articles indéfinis</th></tr><tr><td>le, la, l', les</td><td>un, une, des</td></tr></table>", "chk": {"q": "« un, une, des » sont des articles…", "o": ["définis", "indéfinis"], "a": 1}}, {"t": "teach", "title": "Le, un ou les ?", "say": "Le chat dort. On parle d'un chat précis ou déjà connu. Un chat dort. On présente un chat, sans dire lequel. Les enfants jouent. On parle de plusieurs enfants.", "html": "<p><span class=\"w p\">Le</span> chat dort.<br>On parle d'un chat précis ou déjà connu.</p><p><span class=\"w p\">Un</span> chat dort.<br>On présente un chat, sans dire lequel.</p><p><span class=\"w p\">Les</span> enfants jouent.<br>On parle de plusieurs enfants.</p>", "chk": {"q": "« Un chat dort. » Sait-on de quel chat on parle ?", "o": ["Oui, un chat précis", "Non, on ne dit pas lequel"], "a": 1}}, {"t": "teach", "title": "Les déterminants possessifs", "say": "Ils indiquent à qui appartient ce dont on parle. Mon livre, ta trousse, ses jouets, nos crayons.", "html": "<p class=\"big\">Ils indiquent <b>à qui appartient</b> ce dont on parle.</p><div class=\"row\"><span class=\"w p\">mon</span><span class=\"w v\">livre</span><span class=\"w p\">ta</span><span class=\"w v\">trousse</span></div><div class=\"row\"><span class=\"w p\">ses</span><span class=\"w v\">jouets</span><span class=\"w p\">nos</span><span class=\"w v\">crayons</span></div>", "chk": {"q": "« mon, ta, ses, nos » indiquent…", "o": ["un nombre", "à qui ça appartient", "qu'on montre quelque chose"], "a": 1}}, {"t": "teach", "title": "Le possessif s'accorde", "say": "Attention, le déterminant s'accorde avec le nom qui suit : mon amie, mais ma sœur. Mes amis et mes amies.", "html": "<p class=\"big\">Attention, le déterminant s'accorde avec le nom qui suit.</p><p><span class=\"w p\">mon</span> amie, mais <span class=\"w p\">ma</span> sœur</p><p><span class=\"w p\">mes</span> amis et <span class=\"w p\">mes</span> amies</p>", "chk": {"q": "On dit…", "o": ["ma sœur", "mon sœur"], "a": 0}}, {"t": "teach", "title": "Les déterminants démonstratifs", "say": "Ils servent à montrer ou désigner. Ce ballon, cette fleur, ces chaussures. On pourrait presque les accompagner d'un geste : Regarde ce ballon !", "html": "<p class=\"big\">Ils servent à <b>montrer</b> ou désigner.</p><div class=\"row\"><span class=\"w p\">ce</span><span class=\"w v\">ballon</span><span class=\"w p\">cette</span><span class=\"w v\">fleur</span><span class=\"w p\">ces</span><span class=\"w v\">chaussures</span></div><p>On pourrait presque les accompagner d'un geste : « Regarde ce ballon ! »</p>", "chk": {"q": "« ce, cette, ces » servent à…", "o": ["montrer", "compter", "dire à qui c'est"], "a": 0}}, {"t": "teach", "title": "Les déterminants numéraux", "say": "Ils indiquent un nombre précis. Deux pommes, trois crayons, dix étoiles.", "html": "<p class=\"big\">Ils indiquent un <b>nombre précis</b>.</p><div class=\"row\"><span class=\"w p\">deux</span><span class=\"w v\">pommes</span><span class=\"w p\">trois</span><span class=\"w v\">crayons</span><span class=\"w p\">dix</span><span class=\"w v\">étoiles</span></div>", "chk": {"q": "Dans « trois crayons », le déterminant est…", "o": ["trois", "crayons"], "a": 0}}, {"t": "teach", "title": "Le déterminant s'accorde avec le nom", "say": "Le déterminant change souvent selon le genre et le nombre du nom. Un garçon, une fille, des garçons, des filles.", "html": "<p>Le déterminant change souvent selon le genre et le nombre du nom.</p><table class=\"tbl\"><tr><th>Nom</th><th>Déterminant et nom</th></tr><tr><td>masculin singulier</td><td>un garçon</td></tr><tr><td>féminin singulier</td><td>une fille</td></tr><tr><td>masculin pluriel</td><td>des garçons</td></tr><tr><td>féminin pluriel</td><td>des filles</td></tr></table>", "chk": {"q": "Féminin singulier : … fille", "o": ["un", "une", "des"], "a": 1}}, {"t": "teach", "title": "Regarde le nom qui vient après", "say": "Pour choisir le déterminant, regarde bien le nom qui vient après. Une petite maison. Des petites maisons. Dans le deuxième exemple, le nom maisons est au pluriel. Le déterminant devient des.", "html": "<p class=\"big\">Pour choisir le déterminant, regarde bien le nom qui vient après.</p><p><span class=\"w p\">une</span> petite maison<br><span class=\"w p\">des</span> petites maisons</p><p>Dans le deuxième exemple, le nom maisons est au pluriel. Le déterminant devient des.</p>", "chk": {"q": "… petites maisons", "o": ["une", "des"], "a": 1}}, {"t": "teach", "title": "Le jeu du mot manquant", "say": "Dans chaque groupe, le déterminant est le petit mot qui se trouve devant le nom. Cette grande tortue avance lentement. Astuce : demande-toi quel petit mot accompagne le nom.", "html": "<p>Dans chaque groupe, le déterminant est le petit mot qui se trouve devant le nom.</p><p class=\"big\"><span class=\"w p\">Cette</span><span class=\"w g\">grande</span><span class=\"w v\">tortue</span> avance lentement.</p><p>Cette : déterminant · grande : adjectif · tortue : nom</p><p><b>Astuce :</b> demande-toi « Quel petit mot accompagne le nom ? »</p>", "chk": {"q": "Dans « Cette grande tortue », le déterminant est…", "o": ["Cette", "grande", "tortue"], "a": 0}}, {"t": "tapmany", "q": "Attrape les déterminants : touche-les tous.", "tokens": ["Le", "lapin", "mange", "une", "carotte."], "ans": [0, 3], "ok": "Oui : le, une."}, {"t": "tapmany", "q": "Touche tous les déterminants.", "tokens": ["Mes", "amis", "visitent", "cette", "maison."], "ans": [0, 3], "ok": "Oui : mes, cette."}, {"t": "tapmany", "q": "Touche tous les déterminants.", "tokens": ["Trois", "oiseaux", "sont", "posés", "sur", "la", "branche."], "ans": [0, 5], "ok": "Oui : trois, la."}, {"t": "tapmany", "q": "Touche tous les déterminants.", "tokens": ["Un", "dragon", "garde", "ses", "trésors."], "ans": [0, 3], "ok": "Oui : un, ses."}, {"t": "choice", "q": "Quel nom va avec « une » ?", "opts": ["ballon", "pomme"], "ans": 1, "ok": "Oui : une pomme.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "Quel nom va avec « ces » ?", "opts": ["fleur", "fleurs"], "ans": 1, "ok": "Oui : ces fleurs.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "Quel nom va avec « mon » ?", "opts": ["cartable", "chaussures"], "ans": 0, "ok": "Oui : mon cartable.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "Quel nom va avec « trois » ?", "opts": ["étoile", "étoiles"], "ans": 1, "ok": "Oui : trois étoiles.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "Complète avec le bon article : ___ école", "opts": ["un", "une", "les"], "ans": 1, "ok": "Oui : une école.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "Complète avec le bon article : ___ lapin", "opts": ["un", "une", "des"], "ans": 0, "ok": "Oui : un lapin.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "Complète avec le bon article : ___ étoiles", "opts": ["une", "la", "des"], "ans": 2, "ok": "Oui : des étoiles.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "Complète avec le bon article : ___ gâteau que nous avons préparé", "opts": ["le", "la", "les"], "ans": 0, "ok": "Oui : le gâteau.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "Complète avec le bon article : ___ pommes dans le panier", "opts": ["la", "les", "une"], "ans": 1, "ok": "Oui : les pommes.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "Montre la bonne chose : ___ château est immense.", "opts": ["Ce", "Cette", "Ces"], "ans": 0, "ok": "Oui : ce château.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "Montre la bonne chose : ___ robe est jolie.", "opts": ["Ce", "Cette", "Ces"], "ans": 1, "ok": "Oui : cette robe.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "Montre la bonne chose : ___ enfants jouent ensemble.", "opts": ["Ce", "Cette", "Ces"], "ans": 2, "ok": "Oui : ces enfants.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "Montre la bonne chose : ___ crayons sont à moi.", "opts": ["Ce", "Cette", "Ces"], "ans": 2, "ok": "Oui : ces crayons.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "À qui est-ce ? ___ livre", "opts": ["mon", "ma", "mes"], "ans": 0, "ok": "Oui : mon livre.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "À qui est-ce ? ___ règle", "opts": ["mon", "ma", "mes"], "ans": 1, "ok": "Oui : ma règle.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "À qui est-ce ? ___ chaussures", "opts": ["mon", "ma", "mes"], "ans": 2, "ok": "Oui : mes chaussures.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "À qui est-ce ? ___ amie", "opts": ["mon", "ma", "mes"], "ans": 0, "ok": "Oui : mon amie. On dit mon amie pour que ce soit plus facile à prononcer. Le nom amie reste féminin.", "ko": "On dit mon amie pour que ce soit plus facile à prononcer."}, {"t": "choice", "q": "Répare la machine : « une garçon »", "opts": ["un garçon", "une garçons"], "ans": 0, "ok": "Oui : un garçon.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "Répare la machine : « ce fleur »", "opts": ["ces fleur", "cette fleur"], "ans": 1, "ok": "Oui : cette fleur.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "Répare la machine : « des ballon »", "opts": ["une ballon", "des ballons"], "ans": 1, "ok": "Oui : des ballons.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "choice", "q": "Répare la machine : « les maison »", "opts": ["les maisons", "le maison"], "ans": 0, "ok": "Oui : les maisons.", "ko": "Regarde bien le nom : féminin ou masculin ? Un seul ou plusieurs ?"}, {"t": "build", "q": "Construis le groupe nominal.", "words": ["pizza", "une", "ronde"], "ans": "une pizza ronde", "ok": "Bravo : « une pizza ronde »", "ko": "Commence par le déterminant."}, {"t": "build", "q": "Construis le groupe nominal.", "words": ["préférés", "mes", "jouets"], "ans": "mes jouets préférés", "ok": "Bravo : « mes jouets préférés »", "ko": "Commence par le déterminant."}, {"t": "build", "q": "Construis le groupe nominal.", "words": ["gâteau", "délicieux", "ce"], "ans": "ce gâteau délicieux", "ok": "Bravo : « ce gâteau délicieux »", "ko": "Commence par le déterminant."}, {"t": "tapmany", "q": "La chasse aux déterminants : touche-les tous.", "tokens": ["Les", "six", "amis", "posent", "leurs", "sacs", "près", "de", "cette", "grande", "table."], "ans": [0, 4, 8], "ok": "Oui : les, leurs, cette."}, {"t": "tapmany", "q": "La chasse aux déterminants : touche-les tous.", "tokens": ["Deux", "gâteaux", "attendent", "les", "enfants."], "ans": [0, 3], "ok": "Oui : deux, les."}, {"t": "teach", "title": "Le pense-bête", "say": "Le déterminant se place généralement devant le nom. Il peut indiquer le genre, le nombre, la possession, la désignation ou une quantité. Pour vérifier ton groupe, lis-le à voix haute : ce ballon, cette balle, ces ballons.", "html": "<p class=\"big\">Le déterminant se place généralement devant le nom.</p><p>Il peut indiquer le genre, le nombre, la possession, la désignation ou une quantité.</p><p>Pour vérifier ton groupe, lis-le à voix haute :</p><div class=\"row\"><span class=\"w p\">ce</span><span class=\"w v\">ballon</span><span class=\"w p\">cette</span><span class=\"w v\">balle</span><span class=\"w p\">ces</span><span class=\"w v\">ballons</span></div>", "chk": {"q": "Le déterminant se place généralement…", "o": ["devant le nom", "après le nom"], "a": 0}}]}
];

/* Écran d'explication : la mini-question vient après « Suivant ». Mauvaise réponse = retour à l'explication. */
window.mrTeach=function(s){
  const mq=M[cur.m],mt=/^(.*) · (\d+)\/(\d+)$/.exec(s.title),ck=(!mt||mt[2]===mt[3])?(s.chk||((window.MRQ||{})[mq.id]||{})[mt?mt[1]:s.title]):null;
  if(ck&&st.q){
    app.innerHTML=head()+`<div class="card"><span class="lead">As-tu bien écouté ?</span><h2>${esc(ck.q)}</h2>
    <div style="display:flex;flex-direction:column;gap:10px">${ck.o.map((o,k)=>`<button class="opt ${st.ok&&k===ck.a?'good':''}" data-q="${k}" ${st.ok||st.bad?'disabled':''}>${esc(o)}</button>`).join('')}</div>
    ${st.bad?fbBox('ko','Pas tout à fait. Regarde encore l\'explication.')+'<button class="go" id="rev">↩ Revoir l\'explication</button>':''}
    ${st.ok?fbBox('ok','Oui, bravo !')+nextBtn():''}</div>`;
    app.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{if(+b.dataset.q===ck.a)st.ok=1;else st.bad=1;step();});
    const rv=document.getElementById('rev');if(rv)rv.onclick=()=>{st={};step();};
    return;
  }
  app.innerHTML=head()+`<div class="card"><span class="lead">À retenir</span><h2>${s.title}</h2>${s.html}
  <button class="speak" id="say">🔊 Écouter</button>${ck?'<button class="go" id="toq">Suivant ›</button>':nextBtn()}</div>`;
  const tq=document.getElementById('toq');if(tq)tq.onclick=()=>{try{speechSynthesis.cancel()}catch(e){}st.q=1;step();};
  document.getElementById('say').onclick=()=>say(s.say);
  document.querySelectorAll('.vc').forEach(b=>b.onclick=()=>say(b.dataset.say));
  if(s.js&&FHJ[s.js])FHJ[s.js]();
};
