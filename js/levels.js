let user = JSON.parse(localStorage.getItem("current_user")) || {};

let users = JSON.parse(localStorage.getItem("user_list")) || [];

// users = [{
//   name: "younes",
//   id: "123",
//   niveau: 1,
//   categorie: {
//       grammar: false,
//       vocabulary: false,
//       orthograph: false
//   },
//   tests: [
//       ]},
//       {   
//   name: "amine",
//   id: "124",
//   niveau: 1,
//   categorie: {
//       grammar: false,
//       vocabulary: false,
//       orthograph: false
//   },
//   tests: [
//       ]}
// ]


  // user = users[0];
  // user = users[1];

// localStorage.setItem("user_list", JSON.stringify(users));


  document.getElementById('username').textContent = `Username: ${user.name}`;
  if (user.niveau == 1) {
    document.getElementById('niveau').textContent = `Niveau: A1`;
  }else if (user.niveau == 2) {
    document.getElementById('niveau').textContent = `Niveau: A2`;
  }else if (user.niveau == 3) {
    document.getElementById('niveau').textContent = `Niveau: B1`;
  }else if (user.niveau == 4) {
    document.getElementById('niveau').textContent = `Niveau: B2`;
  }else if (user.niveau == 5) {
    document.getElementById('niveau').textContent = `Niveau: C1`;
  }else if (user.niveau == 6) {
    document.getElementById('niveau').textContent = `Niveau: C2`;
  }


  

        const levels =  JSON.parse(localStorage.getItem("quizz")) || [
            {
              level: 1,
              categories: [
                {
                  name: "Vocabulary",
                  questions: {
                    quests: [
                      "Traduire : 'House'",
                      "Que signifie 'Bonjour' ?",
                      "Traduire : 'Friend'",
                      "Choisir le bon mot : 'C'est un ______.'",
                      "Que signifie 'un' ?",
                      "Traduire : 'Cat'",
                      "Traduire : 'Happy'",
                      "Identifier l'action : 'Manger'",
                      "Choisir la traduction correcte : 'Dog'",
                      "Traduire : 'School'"
                    ],
                    answers: [
                      ["Maison", "Château", "Appartement"],
                      ["Goodbye", "Hello", "Good morning"],
                      ["Ami", "Chien", "Arbre"],
                      ["femme", "enfant", "homme"],
                      ["one", "un", "a"],
                      ["Chien", "Chat", "Oiseau"],
                      ["Triste", "Angry", "Content"],
                      ["Parler", "Manger", "Écrire"],
                      ["Chien", "Chat", "Oiseau"],
                      ["École", "Collège", "Université"]
                    ],
                    correct: [0, 1, 0, 2, 0, 1, 2, 1, 0, 0],
                    selected: []
                  }
                },
                {
                  name: "Grammar",
                  questions: {
                    quests: [
                      "Compléter la phrase : 'Je ______ (être) content.'",
                      "Choisir le bon pronom : 'Il est ______ dans la salle.'",
                      "Compléter : 'Nous ______ (avoir) faim.'",
                      "Choisir le bon article : 'C'est ______ amie.'",
                      "Compléter : 'Ils ______ (aller) au parc.'",
                      "Compléter la phrase : 'Je ______ (vouloir) manger.'",
                      "Choisir le bon temps : 'Il ______ (faire) beau.'",
                      "Compléter : 'Elle ______ (aimer) les chats.'",
                      "Choisir le bon adjectif : 'Elle est ______.'",
                      "Compléter : 'Vous ______ (être) grands.'"
                    ],
                    answers: [
                      ["suis", "es", "est"],
                      ["lui", "elle", "eux"],
                      ["ai", "as", "avons"],
                      ["le", "la", "les"],
                      ["vont", "vas", "va"],
                      ["veux", "veut", "voulez"],
                      ["fait", "fais", "feras"],
                      ["aime", "aimes", "aimer"],
                      ["grand", "grande", "grands"],
                      ["êtes", "sont", "sommes"]
                    ],
                    correct: [0, 0, 2, 1, 0, 0, 0, 0, 1, 0],
                    selected: []
                  }
                },
                {
                  name: "Orthography",
                  questions: {
                    quests: [
                      "Choisir la bonne orthographe : 'Maison'",
                      "Identifier la bonne orthographe : 'Château'",
                      "Choisir la bonne orthographe : 'Appartements'",
                      "Identifier la bonne orthographe : 'Enfant'",
                      "Choisir la bonne orthographe : 'Femme'",
                      "Identifier la bonne orthographe : 'Arbre'",
                      "Choisir la bonne orthographe : 'Bonjour'",
                      "Identifier la bonne orthographe : 'École'",
                      "Choisir la bonne orthographe : 'Université'",
                      "Identifier la bonne orthographe : 'Triste'"
                    ],
                    answers: [
                      ["Mayson", "Maison", "Masion"],
                      ["Chateaux", "Château", "Chateu"],
                      ["Appartemant", "Appartements", "Apartement"],
                      ["Enfont", "Enfant", "Enfante"],
                      ["Famme", "Femme", "Feme"],
                      ["Arbre", "Arbre", "Aubre"],
                      ["Bonjour", "Bounjour", "Bonjoure"],
                      ["École", "Écol", "Ecole"],
                      ["Universitée", "Université", "Univérsite"],
                      ["Triste", "Trist", "Tryste"]
                    ],
                    correct: [1, 1, 1, 1, 1, 0,0, 0, 1, 0],
                    selected: []
                  }
                }
              ]
            },
            {
              level: 2,
              categories: [
                {
                  name: "Vocabulary",
                  questions: {
                    quests: [
                      "Traduire : 'Book'",
                      "Que signifie 'Content' ?",
                      "Traduire : 'Animal'",
                      "Choisir le bon mot : 'C'est une ______.'",
                      "Que signifie 'vite' ?",
                      "Traduire : 'City'",
                      "Traduire : 'Sad'",
                      "Identifier l'action : 'Lire'",
                      "Choisir la traduction correcte : 'Love'",
                      "Traduire : 'University'"
                    ],
                    answers: [
                      ["Livre", "Livre", "Livre"],
                      ["Content", "Triste", "Fatigué"],
                      ["Animal", "Chien", "Arbre"],
                      ["garçon", "fille", "enfant"],
                      ["Fast", "Slow", "Quick"],
                      ["City", "Town", "Village"],
                      ["Sad", "Mad", "Happy"],
                      ["Read", "Write", "See"],
                      ["Love", "Hate", "Feel"],
                      ["University", "School", "College"]
                    ],
                    correct: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                    selected: []
                  }
                },
                {
                  name: "Grammar",
                  questions: {
                    quests: [
                      "Compléter la phrase : 'Tu ______ (être) ici.'",
                      "Choisir le bon article : 'C'est ______ voiture.'",
                      "Compléter : 'Ils ______ (avoir) des amis.'",
                      "Choisir le bon pronom : 'Elle parle de ______ (ils).' ",
                      "Compléter : 'Nous ______ (aller) souvent.'",
                      "Compléter la phrase : 'Il ______ (pouvoir) le faire.'",
                      "Choisir le bon temps : 'Vous ______ (venir) demain.'",
                      "Compléter : 'Il ______ (faire) froid.'",
                      "Choisir le bon adjectif : 'C'est ______ ami.'",
                      "Compléter : 'Ils ______ (être) heureux.'"
                    ],
                    answers: [
                      ["es", "suis", "est"],
                      ["une", "la", "un"],
                      ["ont", "avons", "a"],
                      ["eux", "lui", "elle"],
                      ["allons", "allez", "allant"],
                      ["peut", "pouvons", "pouvait"],
                      ["venez", "viendrez", "viendra"],
                      ["fait", "fera", "faire"],
                      ["leur", "son", "sa"],
                      ["sont", "est", "suis"]
                    ],
                    correct: [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                    selected: []
                  }
                },
                {
                  name: "Orthography",
                  questions: {
                    quests: [
                      "Choisir la bonne orthographe : 'Arbre'",
                      "Identifier la bonne orthographe : 'Homme'",
                      "Choisir la bonne orthographe : 'Content'",
                      "Identifier la bonne orthographe : 'Fatigué'",
                      "Choisir la bonne orthographe : 'Enfant'",
                      "Identifier la bonne orthographe : 'Rapide'",
                      "Choisir la bonne orthographe : 'Chaud'",
                      "Identifier la bonne orthographe : 'Univers'",
                      "Choisir la bonne orthographe : 'Amour'",
                      "Identifier la bonne orthographe : 'Écrire'"
                    ],
                    answers: [
                      ["Arbre", "Arbr", "Arbr"],
                      ["Homme", "Homme", "Hom"],
                      ["Content", "Content", "Contant"],
                      ["Fatigue", "Fatigué", "Fatiguée"],
                      ["Enfant", "Enfent", "Enfand"],
                      ["Rapide", "Rapid", "Rapid"],
                      ["Chaud", "Chod", "Chaud"],
                      ["Univers", "Univère", "Univer"],
                      ["Amour", "Amor", "Amoour"],
                      ["Écrire", "Écreer", "Écrit"]
                    ],
                    correct: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                    selected: []
                  }
                }
              ]
            },
            {
              level: 3,
              categories: [
                {
                  name: "Vocabulary",
                  questions: {
                    quests: [
                      "Traduire : 'Dog'",
                      "Que signifie 'Excited' ?",
                      "Traduire : 'World'",
                      "Choisir le bon mot : 'Elle est ______.'",
                      "Que signifie 'lent' ?",
                      "Traduire : 'Dream'",
                      "Traduire : 'Love'",
                      "Identifier l'action : 'Écouter'",
                      "Choisir la traduction correcte : 'Tree'",
                      "Traduire : 'University'"
                    ],
                    answers: [
                      ["Chien", "Chat", "Lapin"],
                      ["Excité", "Calm", "Bored"],
                      ["Monde", "Planète", "Univers"],
                      ["heureuse", "triste", "fatiguée"],
                      ["Slow", "Fast", "Careful"],
                      ["Rêve", "Cauchemar", "Dormir"],
                      ["Amour", "Amitié", "Familial"],
                      ["Écouter", "Regarder", "Parler"],
                      ["Arbre", "Fleur", "Bûche"],
                      ["Université", "École", "Collège"]
                    ],
                    correct: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    selected: []
                  }
                },
                {
                  name: "Grammar",
                  questions: {
                    quests: [
                      "Compléter : 'Ils ______ (être) partis.'",
                      "Choisir le bon pronom : 'Je parle de ______ (elles).' ",
                      "Compléter : 'Nous ______ (être) heureux.'",
                      "Compléter la phrase : 'Ils ______ (avoir) gagné.'",
                      "Choisir le bon pronom : 'Elle est ______ (lui).'",
                      "Compléter la phrase : 'Je ______ (aller) à la fête.'",
                      "Choisir le bon temps : 'Vous ______ (avoir) fini.'",
                      "Compléter : 'Je ______ (devoir) partir.'",
                      "Choisir le bon adjectif : 'Il est ______.'",
                      "Compléter : 'Nous ______ (vouloir) tout comprendre.'"
                    ],
                    answers: [
                      ["sommes", "étions", "ont"],
                      ["elle", "eux", "elles"],
                      ["allons", "allez", "sont"],
                      ["avons", "ont", "aurons"],
                      ["lui", "l' ", "le"],
                      ["va", "vais", "sont"],
                      ["ont", "avait", "avait"],
                      ["veux", "veut", "voulais"],
                      ["veux", "veut", "voulais"],
                      ["est", "sont", "serait"]
                    ],
                    correct: [0, 2, 0, 0, 0, 1, 0, 0, 0, 1],
                    selected: []
                  }
                },
                {
                  name: "Orthography",
                  questions: {
                    quests: [
                      "Choisir la bonne orthographe : 'Intéressant'",
                      "Identifier la bonne orthographe : 'Obstacle'",
                      "Choisir la bonne orthographe : 'Réussir'",
                      "Identifier la bonne orthographe : 'Important'",
                      "Choisir la bonne orthographe : 'Énergie'",
                      "Identifier la bonne orthographe : 'Accident'",
                      "Choisir la bonne orthographe : 'Voiture'",
                      "Identifier la bonne orthographe : 'Problème'",
                      "Choisir la bonne orthographe : 'Exercice'",
                      "Identifier la bonne orthographe : 'Expression'"
                    ],
                    answers: [
                      ["Intéressant", "Interressant", "Intérésant"],
                      ["Obstacle", "Obstaclé", "Obsticale"],
                      ["Réussir", "Réussir", "Réusir"],
                      ["Important", "Importante", "Importans"],
                      ["Énergie", "Énerge", "Énergié"],
                      ["Accident", "Acident", "Accident"],
                      ["Voiture", "Vitoire", "Voitoire"],
                      ["Problème", "Probleme", "Problèmé"],
                      ["Exercice", "Exercisse", "Exercé"],
                      ["Expression", "Expréssion", "Exprssion"]
                    ],
                    correct: [0,0,0,0,0,0,0,0,0,0],
                    selected: []
                  }
                }
              ]
            },
            {
              level: 4,
              categories: [
                {
                  name: "Vocabulary",
                  questions: {
                    quests: [
                      "Traduire : 'Balance'",
                      "Que signifie 'Fier' ?",
                      "Traduire : 'Health'",
                      "Choisir le bon mot : 'Il a un ______ esprit.'",
                      "Que signifie 'Ambition' ?",
                      "Traduire : 'Success'",
                      "Traduire : 'Harmony'",
                      "Identifier l'action : 'Connaître'",
                      "Choisir la traduction correcte : 'Strategy'",
                      "Traduire : 'Courage'"
                    ],
                    answers: [
                      ["Balance", "Poids", "Mesure"],
                      ["Proud", "Happy", "Sad"],
                      ["Santé", "Bien-être", "Soins"],
                      ["fort", "sain", "délirant"],
                      ["Goal", "Ambition", "Objet"],
                      ["Réussite", "Succès", "Valeur"],
                      ["Harmonie", "Entente", "Cohérence"],
                      ["Apprendre", "Écouter", "Connaître"],
                      ["Stratégie", "Plan", "Prédiction"],
                      ["Courage", "Force", "Bravoure"]
                    ],
                    correct: [0,0,0,0,1,0,0,0,0,0],
                    selected: []
                  }
                },
                {
                  name: "Grammar",
                  questions: {
                    quests: [
                      "Compléter : 'Nous ______ (faire) le projet ensemble.'",
                      "Choisir le bon temps : 'Elle ______ (partir) demain.'",
                      "Compléter : 'Ils ______ (savoir) ce qu'ils veulent.'",
                      "Compléter la phrase : 'Vous ______ (avoir) les résultats.'",
                      "Choisir le bon pronom : 'Il ______ (parler) de lui.'",
                      "Compléter : 'Je ______ (pouvoir) finir.'",
                      "Choisir la bonne forme : 'Ils ______ (revenir) bientôt.'",
                      "Compléter : 'Nous ______ (être) en retard.'",
                      "Choisir le bon pronom relatif : 'Voici le livre ______ je lis.'",
                      "Compléter : 'Elle ______ (voir) la réponse.'"
                    ],
                    answers: [
                      ["faisons", "ferons", "font"],
                      ["partira", "part", "partent"],
                      ["savaient", "sait", "savoir"],
                      ["avons", "ont", "avaient"],
                      ["parle", "en parlent", "parlent"],
                      ["peux", "peut", "pouvons"],
                      ["viennent", "viendront", "sont"],
                      ["sommes", "seront", "est"],
                      ["dont", "que", "qui"],
                      ["voit", "a vu", "verra"]
                    ],
                    correct: [0,0,0,0,0,1,0,0,0,0],
                    selected: []
                  }
                },
                {
                  name: "Orthography",
                  questions: {
                    quests: [
                      "Choisir la bonne orthographe : 'Volonté'",
                      "Identifier la bonne orthographe : 'Généralité'",
                      "Choisir la bonne orthographe : 'Prospérité'",
                      "Identifier la bonne orthographe : 'Évaluation'",
                      "Choisir la bonne orthographe : 'Diplôme'",
                      "Identifier la bonne orthographe : 'Responsabilité'",
                      "Choisir la bonne orthographe : 'Indépendance'",
                      "Identifier la bonne orthographe : 'Ambassade'",
                      "Choisir la bonne orthographe : 'Esthétique'",
                      "Identifier la bonne orthographe : 'Environnement'"
                    ],
                    answers: [
                      ["Volonté", "Voulonté", "Vollonté"],
                      ["Généralité", "Generaliété", "Generalité"],
                      ["Prospérité", "Prosperité", "Prospérité"],
                      ["Évaluation", "Evalaution", "Evalutation"],
                      ["Diplôme", "Diplome", "Dimplome"],
                      ["Responsabilité", "Resonsabilité", "Responsabilté"],
                      ["Indépendance", "Independance", "Indepandance"],
                      ["Ambassade", "Ambsade", "Ambasade"],
                      ["Esthétique", "Esthetique", "Estethique"],
                      ["Environnement", "Envirronement", "Enviornement"]
                    ],
                    correct: [0,0,0,0,0,0,0,0,0,0],
                    selected: []
                  }
                }
              ]
            },
            {
              level: 5,
              categories: [
                {
                  name: "Vocabulary",
                  questions: {
                    quests: [
                      "Traduire : 'Phenomenon'",
                      "Que signifie 'Réflexion' ?",
                      "Traduire : 'Perspective'",
                      "Choisir le bon mot : 'L'________ de cette situation est évident.'",
                      "Que signifie 'Persuader' ?",
                      "Traduire : 'Analysis'",
                      "Traduire : 'Complex'",
                      "Identifier l'objet : 'Démocratie'",
                      "Choisir le mot correct : 'La situation est ______.'",
                      "Traduire : 'Structure'"
                    ],
                    answers: [
                      ["Phénomène", "Problème", "Conséquence"],
                      ["Action de penser", "Résultat", "Inconnu"],
                      ["Perspectives", "Angle", "Vision"],
                      ["importance", "impact", "aspect"],
                      ["Convaincre", "Mentir", "Indifférent"],
                      ["Analyse", "Examen", "Observation"],
                      ["Complexe", "Compliqué", "Simple"],
                      ["Gouvernance", "Politique", "Idéologie"],
                      ["décisive", "étrange", "neutre"],
                      ["Structure", "Organisation", "Conception"]
                    ],
                    correct: [0,0,0,0,0,0,0,0,0,0],
                    selected: []
                  }
                },
                {
                  name: "Grammar",
                  questions: {
                    quests: [
                      "Compléter la phrase : 'Si nous ______ (avoir) plus de temps, nous l'aurions fait.'",
                      "Choisir le bon pronom relatif : 'Voici le livre ______ il m’a parlé.'",
                      "Compléter la phrase : 'Elle ______ (travailler) à l’étranger pendant 5 ans.'",
                      "Choisir le bon temps : 'Si elle ______ (faire) attention, elle n’aurait pas fait d’erreur.'",
                      "Compléter la phrase : 'Il est arrivé ______ je sois prêt.'",
                      "Choisir la bonne forme : 'Les résultats ______ (être) excellents.'",
                      "Compléter la phrase : 'Je ne crois pas qu’il ______ (comprendre).'",
                      "Choisir le bon mode : 'Il parle comme s’il ______ (savoir) tout.'",
                      "Compléter la phrase : 'Si j’______ (avoir) plus de temps, je lirais davantage.'",
                      "Choisir le bon pronom : 'C’est le film ______ j’ai parlé.'"
                    ],
                    answers: [
                      ["avions", "eûmes", "aurions eu"],
                      ["dont", "qui", "que"],
                      ["travaillait", "a travaillé", "travaillant"],
                      ["avait fait", "ferait", "avait"],
                      ["avant", "avant que", "jusqu’à ce"],
                      ["sont", "seront", "étaient"],
                      ["comprend", "comprendre", "comprenne"],
                      ["savait", "sait", "saurait"],
                      ["avais", "ai", "a"],
                      ["dont", "que", "qui"]
                    ],
                    correct: [2, 0, 0, 1, 1, 0, 2, 0, 2, 0],
                    selected: []
                  }
                },
                {
                  name: "Orthography",
                  questions: {
                    quests: [
                      "Choisir la bonne orthographe : 'Réussite'",
                      "Identifier la bonne orthographe : 'Système'",
                      "Choisir la bonne orthographe : 'Privilège'",
                      "Identifier la bonne orthographe : 'Réflexion'",
                      "Choisir la bonne orthographe : 'Perspective'",
                      "Identifier la bonne orthographe : 'Expérience'",
                      "Choisir la bonne orthographe : 'Intelligence'",
                      "Identifier la bonne orthographe : 'Application'",
                      "Choisir la bonne orthographe : 'Perspective'",
                      "Identifier la bonne orthographe : 'Direction'"
                    ],
                    answers: [
                      ["Réussite", "Réussit", "Réussi"],
                      ["Système", "Systéme", "Sisteme"],
                      ["Privilège", "Privillège", "Privilegié"],
                      ["Réflexion", "Reflexion", "Reflexion"],
                      ["Perspective", "Perspectif", "Perspectives"],
                      ["Expérience", "Experiance", "Experiences"],
                      ["Intelligence", "Intelligents", "Intéllegence"],
                      ["Application", "Aplication", "Appliaction"],
                      ["Perspective", "Perspectif", "Perspectives"],
                      ["Direction", "Dirrection", "Drection"]
                    ],
                    correct: [0,0,0,0,0,0,0,0,0,0],
                    selected: []
                  }
                }
              ]
            },
            {
              level: "6",
              categories: [
                {
                  name: "Vocabulary",
                  questions: {
                    quests: [
                      "Traduire : 'Revolution'",
                      "Que signifie 'Innovation' ?",
                      "Traduire : 'Leadership'",
                      "Choisir le bon mot : 'Cette solution est ______.'",
                      "Que signifie 'Efficacité' ?",
                      "Traduire : 'Sustainability'",
                      "Traduire : 'Collaboration'",
                      "Identifier l’action : 'Transformer'",
                      "Choisir la traduction correcte : 'Resource'",
                      "Traduire : 'Influence'"
                    ],
                    answers: [
                      ["Révolution", "Évolution", "Transformation"],
                      ["Création", "Réduction", "Invention"],
                      ["Leadership", "Comportement", "Charisme"],
                      ["optimale", "pratique", "approach"],
                      ["Productivité", "Rendement", "Rendement"],
                      ["Durabilité", "Innovation", "Pérennité"],
                      ["Collaboration", "Partenariat", "Concurrence"],
                      ["Modifier", "Changer", "Reformer"],
                      ["Ressource", "Requête", "Valeur"],
                      ["Influence", "Impact", "Effet"]
                    ],
                    correct: [0,0,0,0,1,0,0,0,0,0],
                    selected: []
                  }
                },
                {
                  name: "Grammar",
                  questions: {
                    quests: [
                      "Compléter : 'Si nous ______ (avoir) plus de temps, nous aurions terminé.'",
                      "Choisir le bon temps : 'Il ______ (être) important de finir ce travail.'",
                      "Compléter : 'Si tu ______ (faire) attention, tu n’aurais pas fait d’erreur.'",
                      "Compléter la phrase : 'Elle a agi comme si elle ______ (savoir) la vérité.'",
                      "Choisir la bonne structure : 'Je préfère qu’il ______ (être) prêt.'",
                      "Compléter : 'Je ______ (savoir) que tu viendras.'",
                      "Choisir la bonne forme : 'Il aurait dû ______ (venir) avant.'",
                      "Compléter : 'Si j’______ (avoir) plus de connaissances, je serais parti.'",
                      "Choisir la bonne structure : 'C’est le moment ______ nous devons nous préparer.'",
                      "Compléter : 'Je ______ (avoir) vu ce film hier.'"
                    ],
                    answers: [
                      ["avions", "avons", "aurons"],
                      ["est", "sera", "été"],
                      ["avais fait", "faisais", "faisant"],
                      ["avait su", "saurait", "a su"],
                      ["soit", "être", "ait"],
                      ["savais", "savoir", "sait"],
                      ["devoir", "venait", "venait"],
                      ["avais", "ai", "avait"],
                      ["qu’il", "qui", "où"],
                      ["ai", "avoir", "avait"]
                    ],
                    correct: [0,0,0,0,0,0,0,0,0,0],
                    selected: []
                  }
                },
                {
                  name: "Orthography",
                  questions: {
                    quests: [
                      "Choisir la bonne orthographe : 'Métaphysique'",
                      "Identifier la bonne orthographe : 'Ressource'",
                      "Choisir la bonne orthographe : 'Élévation'",
                      "Identifier la bonne orthographe : 'Représentation'",
                      "Choisir la bonne orthographe : 'Affirmation'",
                      "Identifier la bonne orthographe : 'Innovation'",
                      "Choisir la bonne orthographe : 'Constitution'",
                      "Identifier la bonne orthographe : 'Révolution'",
                      "Choisir la bonne orthographe : 'Progrès'",
                      "Identifier la bonne orthographe : 'Démocratique'"
                    ],
                    answers: [
                      ["Métaphysique", "Metaphysique", "Métaphysiques"],
                      ["Ressource", "Ressorcée", "Réssource"],
                      ["Élévation", "Élévation", "Elevasion"],
                      ["Représentation", "Représentation", "Représantation"],
                      ["Affirmation", "Affermation", "Affermation"],
                      ["Innovation", "Inovation", "Innovanation"],
                      ["Constitution", "Constitution", "Consstitution"],
                      ["Révolution", "Revolution", "Révoloution"],
                      ["Progrès", "Progres", "Pogres"],
                      ["Démocratique", "Démocatique", "Democratique"]
                    ],
                    correct: [0,0,0,0,0,0,0,0,0,0],
                    selected: []
                  }
                }
              ]
            }
          ]
          localStorage.setItem("quizz", JSON.stringify(levels));

          
          
const gotoquiz = document.querySelectorAll(".level");
function lock() {
    if (user.niveau === 1) {
        for (let i = 3; i < gotoquiz.length; i++) {
            let parrent = gotoquiz[i].parentNode;
            let leveltitle = parrent.querySelector("h2");
            leveltitle.style.textDecoration = "line-through"

            let ahref = gotoquiz[i].querySelector("a");
            ahref.href ="#"
            
            ahref.style.pointerEvents = "none";
            ahref.style.cursor = "not-allowed";
            gotoquiz[i].style.backgroundColor ="gray";
        }
    }
    else if (user.niveau === 2) {
        
        for (let i = 6; i < gotoquiz.length; i++) {
            let parrent = gotoquiz[i].parentNode;
            let leveltitle = parrent.querySelector("h2");
            leveltitle.style.textDecoration = "line-through"

            let ahref = gotoquiz[i].querySelector("a");
            ahref.href ="#"
            
            ahref.style.pointerEvents = "none";
            ahref.style.cursor = "not-allowed";
            gotoquiz[i].style.backgroundColor ="gray";
            gotoquiz[i].style.cursor = "not-allowed";
        }
    }
    else if (user.niveau === 3) {
        
        for (let i = 9; i < gotoquiz.length; i++) {
            let parrent = gotoquiz[i].parentNode;
            let leveltitle = parrent.querySelector("h2");
            leveltitle.style.textDecoration = "line-through"

            let ahref = gotoquiz[i].querySelector("a");
            ahref.href ="#";
            
            ahref.style.pointerEvents = "none";
            ahref.style.cursor = "not-allowed";
            gotoquiz[i].style.backgroundColor ="gray";
            gotoquiz[i].style.cursor = "not-allowed";

        }
    }
    else if (user.niveau === 4) {
        
        for (let i = 12; i < gotoquiz.length; i++) {
            let parrent = gotoquiz[i].parentNode;
            let leveltitle = parrent.querySelector("h2");
            leveltitle.style.textDecoration = "line-through"

            let ahref = gotoquiz[i].querySelector("a");
            ahref.href ="#"
            
            ahref.style.pointerEvents = "none";
            ahref.style.cursor = "not-allowed";
            gotoquiz[i].style.backgroundColor ="gray";
            gotoquiz[i].style.cursor = "not-allowed";

        }
    }
    else if (user.niveau === 5) {
        
        for (let i = 15; i < gotoquiz.length; i++) {
            let parrent = gotoquiz[i].parentNode;
            let leveltitle = parrent.querySelector("h2");
            leveltitle.style.textDecoration = "line-through"

            let ahref = gotoquiz[i].querySelector("a");
            ahref.href ="#"
            
            ahref.style.pointerEvents = "none";
            ahref.style.cursor = "not-allowed";
            gotoquiz[i].style.backgroundColor ="gray";
            gotoquiz[i].style.cursor = "not-allowed";

        }
    }
}
lock();


gotoquiz.forEach(link => {
    link.addEventListener("click",(e) => {
        let test;
        let selectedlevel;
        let selectedcategory;
        let loggedaccount;
        const dificulty = link.getAttribute('data-level');            
        const category = link.getAttribute('data-category');  
        
        for (let i = 0; i < levels.length; i++) {
            if (dificulty == levels[i].level) {
                for (let y = 0; y < 3; y++) {
                    if (category == levels[i].categories[y].name) {
                        selectedlevel = levels[i].level;
                        selectedcategory = levels[i].categories[y].name;
                        test = levels[i].categories[y].questions;
                        loggedaccount = user;

                        localStorage.setItem("test", JSON.stringify(test));
                        localStorage.setItem("level", JSON.stringify(selectedlevel));
                        localStorage.setItem("cat", JSON.stringify(selectedcategory));
                        localStorage.setItem("current_user", JSON.stringify(user));

                        console.log(test);
                        for (let i = 0; i < users.length; i++) {
                            if (loggedaccount.id == users[i].id) {
                                user[i] = loggedaccount;
                            }
                        }
                        localStorage.setItem("user_list", JSON.stringify(users));
                        return;
                    }
                }
            }
        }
    })
});
const logout = document.getElementById("logoutButton");
logout.addEventListener("click", () => {
    localStorage.removeItem("current_user");
    window.location.href = "index.html";
});
