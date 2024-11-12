const levels = [
    {
      level: "A1",
      categories: [
        {
          name: "Vocabulary",
          questions: 
          [
            { question: "Traduire : 'House'", options: ["Maison", "Château", "Appartement"], answer: "Maison" },
            { question: "Que signifie 'Bonjour' ?", options: ["Goodbye", "Hello", "Good morning"], answer: "Hello" },
            { question: "Traduire : 'Friend'", options: ["Ami", "Chien", "Arbre"], answer: "Ami" },
            { question: "Choisir le bon mot : 'C'est un ______.'", options: ["homme", "femme", "enfant"], answer: "homme" },
            { question: "Que signifie 'un' ?", options: ["one", "un", "a"], answer: "one" },
            { question: "Traduire : 'Cat'", options: ["Chien", "Chat", "Oiseau"], answer: "Chat" },
            { question: "Traduire : 'Happy'", options: ["Triste", "Content", "Angry"], answer: "Content" },
            { question: "Identifier l'action : 'Manger'", options: ["Parler", "Manger", "Écrire"], answer: "Manger" },
            { question: "Choisir la traduction correcte : 'Dog'", options: ["Chien", "Chat", "Oiseau"], answer: "Chien" },
            { question: "Traduire : 'School'", options: ["École", "Collège", "Université"], answer: "École" }
          ]
        },
        {
          name: "Grammar",
          questions: [
            { question: "Compléter la phrase : 'Je ______ (être) content.'", options: ["suis", "sont", "est"], answer: "suis" },
            { question: "Compléter la phrase : 'Elle ______ (avoir) un chat.'", options: ["a", "as", "avons"], answer: "a" },
            { question: "Choisir le bon pronom : 'C'est ______ livre.'", options: ["ce", "cette", "ces"], answer: "ce" },
            { question: "Compléter la phrase : 'Nous ______ (manger) à midi.'", options: ["mangeons", "mange", "manger"], answer: "mangeons" },
            { question: "Choisir le bon pronom relatif : 'Voici la voiture ______ je parle.'", options: ["dont", "que", "qui"], answer: "dont" },
            { question: "Compléter la phrase : 'Tu ______ (être) fatigué.'", options: ["es", "est", "sont"], answer: "es" },
            { question: "Choisir la bonne forme : 'Il ______ (avoir) un chien.'", options: ["a", "ont", "avons"], answer: "a" },
            { question: "Compléter la phrase : 'Elle ______ (jouer) au tennis.'", options: ["joue", "jouer", "jouent"], answer: "joue" },
            { question: "Compléter la phrase : 'Vous ______ (être) à l'école.'", options: ["êtes", "sont", "es"], answer: "êtes" },
            { question: "Choisir la bonne forme du verbe : 'Nous ______ (finir) notre travail.'", options: ["finissons", "finir", "finit"], answer: "finissons" }
          ]
        },
        {
          name: "Orthography",
          questions: [
            { question: "Identifier la bonne orthographe : 'Inévitable'", options: ["Inevitabe", "Inévitable", "Inévitabale"], answer: "Inévitable" },
            { question: "Choisir la bonne orthographe : 'Période'", options: ["Période", "Periode", "Périodee"], answer: "Période" },
            { question: "Choisir la bonne orthographe : 'Essentiel'", options: ["Essenciel", "Essentiel", "Esentiel"], answer: "Essentiel" },
            { question: "Identifier la bonne orthographe : 'Savoir'", options: ["Savoir", "Savwaire", "Savoire"], answer: "Savoir" },
            { question: "Choisir la bonne orthographe : 'Phénomène'", options: ["Phenomenne", "Phénomène", "Phenomène"], answer: "Phénomène" },
            { question: "Identifier la bonne orthographe : 'Systématique'", options: ["Systématique", "Systémathique", "Systématiquee"], answer: "Systématique" },
            { question: "Choisir la bonne orthographe : 'Candidat'", options: ["Candidatt", "Candidat", "Canditat"], answer: "Candidat" },
            { question: "Identifier la bonne orthographe : 'Exceptionnel'", options: ["Exceptionel", "Exeptionnel", "Exceptionnel"], answer: "Exceptionnel" },
            { question: "Choisir la bonne orthographe : 'Caractéristique'", options: ["Caractéristique", "Caractéristique", "Caractaire"], answer: "Caractéristique" },
            { question: "Identifier la bonne orthographe : 'Réflexion'", options: ["Réflexion", "Reflextion", "Reflexion"], answer: "Réflexion" }
          ]
        }
      ]
    },
    {
        level: "A2",
        categories: [
        {
          name: "Vocabulary",
          questions: [
            { question: "Traduire : 'Dog'", options: ["Chien", "Chat", "Oiseau"], answer: "Chien" },
            { question: "Que signifie 'S'il vous plaît' ?", options: ["Thank you", "Please", "Sorry"], answer: "Please" },
            { question: "Traduire : 'Happy'", options: ["Triste", "Content", "Angry"], answer: "Content" },
            { question: "Choisir le bon mot : 'Je vais à ______.'", options: ["l'école", "la maison", "le travail"], answer: "l'école" },
            { question: "Que signifie 'Bonjour' ?", options: ["Good morning", "Good night", "Hello"], answer: "Good morning" },
            { question: "Traduire : 'Car'", options: ["Vélo", "Voiture", "Camion"], answer: "Voiture" },
            { question: "Identifier l'action : 'Lire'", options: ["Écrire", "Lire", "Chanter"], answer: "Lire" },
            { question: "Traduire : 'Cat'", options: ["Chat", "Chien", "Vache"], answer: "Chat" },
            { question: "Que signifie 'Bonjour' ?", options: ["Hello", "Goodbye", "Yes"], answer: "Hello" },
            { question: "Traduire : 'School'", options: ["École", "Université", "Collège"], answer: "École" }
            ]
        },
        {
          name: "Grammar",
          questions: [
            { question: "Compléter la phrase : 'Elle ______ (être) contente.'", options: ["est", "sont", "suis"], answer: "est" },
            { question: "Compléter la phrase : 'Nous ______ (avoir) des amis.'", options: ["avons", "ont", "a"], answer: "avons" },
            { question: "Choisir le bon pronom : 'C'est ______ livre.'", options: ["ce", "cette", "ces"], answer: "ce" },
            { question: "Compléter la phrase : 'Ils ______ (manger) à midi.'", options: ["mangent", "mangeons", "mange"], answer: "mangent" },
            { question: "Choisir le bon pronom relatif : 'Voici la fille ______ je parle.'", options: ["dont", "que", "qui"], answer: "que" },
            { question: "Compléter la phrase : 'Tu ______ (être) à l'école.'", options: ["es", "sont", "est"], answer: "es" },
            { question: "Choisir la bonne forme : 'Elle ______ (avoir) une voiture.'", options: ["a", "ont", "avons"], answer: "a" },
            { question: "Compléter la phrase : 'Nous ______ (étudier) à la bibliothèque.'", options: ["étudions", "étudie", "étudient"], answer: "étudions" },
            { question: "Compléter la phrase : 'Je ______ (avoir) une question.'", options: ["ai", "ont", "a"], answer: "ai" },
            { question: "Choisir la bonne forme : 'Ils ______ (parler) français.'", options: ["parlent", "parles", "parle"], answer: "parlent" }
            ]
        },
        {
          name: "Orthography",
          questions: [
            { question: "Identifier la bonne orthographe : 'Obligatoire'", options: ["Obligatoire", "Obligatire", "Obligatoir"], answer: "Obligatoire" },
            { question: "Choisir la bonne orthographe : 'Communication'", options: ["Comunicacion", "Communication", "Commuication"], answer: "Communication" },
            { question: "Choisir la bonne orthographe : 'Réussir'", options: ["Réussir", "Reussir", "Réeussir"], answer: "Réussir" },
            { question: "Identifier la bonne orthographe : 'Accident'", options: ["Accident", "Acident", "Accidant"], answer: "Accident" },
            { question: "Choisir la bonne orthographe : 'Exposition'", options: ["Exposition", "Exposicion", "Exposistion"], answer: "Exposition" },
            { question: "Identifier la bonne orthographe : 'Critère'", options: ["Critère", "Criteres", "Critèree"], answer: "Critère" },
            { question: "Choisir la bonne orthographe : 'Difficulté'", options: ["Difficulté", "Dificulte", "Difficulte"], answer: "Difficulté" },
            { question: "Identifier la bonne orthographe : 'Immédiatement'", options: ["Immédiatement", "Immidiatement", "Immediatement"], answer: "Immédiatement" },
            { question: "Choisir la bonne orthographe : 'Véritable'", options: ["Veritable", "Véritable", "Véritabl"], answer: "Véritable" },
            { question: "Identifier la bonne orthographe : 'Pratique'", options: ["Pratique", "Pratiqie", "Praitique"], answer: "Pratique" }
            ]
        }
        ]
    },
    {
        level: "B1",
        categories: [
        {
          name: "Vocabulary",
          questions: [
            { question: "Traduire : 'Work'", options: ["Travail", "Étude", "Jeu"], answer: "Travail" },
            { question: "Que signifie 'Merci' ?", options: ["Sorry", "Thank you", "Please"], answer: "Thank you" },
            { question: "Traduire : 'House'", options: ["Maison", "Château", "Appartement"], answer: "Maison" },
            { question: "Choisir le bon mot : 'Le ______ est grand.'", options: ["chat", "chien", "oiseau"], answer: "chat" },
            { question: "Que signifie 'Ensemble' ?", options: ["Alone", "Together", "Under"], answer: "Together" },
            { question: "Traduire : 'Change'", options: ["Changement", "Chier", "Chant"], answer: "Changement" },
            { question: "Identifier l'action : 'Parler'", options: ["Écrire", "Parler", "Chanter"], answer: "Parler" },
            { question: "Traduire : 'Language'", options: ["Langue", "Pays", "Vitesse"], answer: "Langue" },
            { question: "Que signifie 'Difficult' ?", options: ["Difficile", "Facile", "Moyen"], answer: "Difficile" },
            { question: "Traduire : 'Friend'", options: ["Ami", "Chien", "Rivière"], answer: "Ami" }
            ]
        },
        {
          name: "Grammar",
          questions: [
            { question: "Compléter la phrase : 'Elle ______ (être) contente.'", options: ["est", "sont", "suis"], answer: "est" },
            { question: "Compléter la phrase : 'Ils ______ (avoir) des idées.'" , options: ["ont", "avons", "a"], answer: "ont" },
            { question: "Choisir la bonne forme : 'Ils ______ (parler) français.'", options: ["parlent", "parles", "parle"], answer: "parlent" },
            { question: "Compléter la phrase : 'Je ______ (avoir) une question.'", options: ["ai", "ont", "a"], answer: "ai" },
            { question: "Choisir la bonne préposition : 'Il est allé ______ parc.'", options: ["au", "à", "dans"], answer: "au" },
            { question: "Compléter la phrase : 'Nous ______ (faire) nos devoirs.'", options: ["faisons", "fais", "fait"], answer: "faisons" },
            { question: "Compléter la phrase : 'Elle ______ (aller) au travail.'", options: ["va", "allons", "sont"], answer: "va" },
            { question: "Choisir le bon pronom relatif : 'Voici la femme ______ je parle.'", options: ["dont", "que", "qui"], answer: "que" },
            { question: "Compléter la phrase : 'Vous ______ (étudier) à l’université.'", options: ["étudiez", "étudions", "étudient"], answer: "étudiez" },
            { question: "Compléter la phrase : 'Ils ______ (manger) à midi.'", options: ["mangent", "mangeons", "mange"], answer: "mangent" }
            ]
        },
        {
            name: "Orthography",
            questions: [
            { question: "Identifier la bonne orthographe : 'Communication'", options: ["Comunicacion", "Communication", "Commuication"], answer: "Communication" },
            { question: "Choisir la bonne orthographe : 'Réussir'", options: ["Réussir", "Reussir", "Réeussir"], answer: "Réussir" },
            { question: "Choisir la bonne orthographe : 'Accident'", options: ["Accident", "Acident", "Accidant"], answer: "Accident" },
            { question: "Identifier la bonne orthographe : 'Critère'", options: ["Critère", "Criteres", "Critèree"], answer: "Critère" },
            { question: "Choisir la bonne orthographe : 'Difficulté'", options: ["Difficulté", "Dificulte", "Difficulte"], answer: "Difficulté" },
            { question: "Identifier la bonne orthographe : 'Immédiatement'", options: ["Immédiatement", "Immidiatement", "Immediatement"], answer: "Immédiatement" },
            { question: "Choisir la bonne orthographe : 'Véritable'", options: ["Veritable", "Véritable", "Véritabl"], answer: "Véritable" },
            { question: "Identifier la bonne orthographe : 'Pratique'", options: ["Pratique", "Pratiqie", "Praitique"], answer: "Pratique" },
            { question: "Identifier la bonne orthographe : 'Équilibre'", options: ["Equilibre", "Équilibre", "Equillibre"], answer: "Équilibre" },
            { question: "Choisir la bonne orthographe : 'Adaptation'", options: ["Adaptation", "Adaption", "Adapatation"], answer: "Adaptation" }
            ]
        }
        ]
    },
    {
        level: "B1",
        categories: [
        {
            name: "Vocabulary",
            questions: [
            { question: "Traduire : 'Work'", options: ["Travail", "Étude", "Jeu"], answer: "Travail" },
            { question: "Que signifie 'Merci' ?", options: ["Sorry", "Thank you", "Please"], answer: "Thank you" },
            { question: "Traduire : 'House'", options: ["Maison", "Château", "Appartement"], answer: "Maison" },
            { question: "Choisir le bon mot : 'Le ______ est grand.'", options: ["chat", "chien", "oiseau"], answer: "chat" },
            { question: "Que signifie 'Ensemble' ?", options: ["Alone", "Together", "Under"], answer: "Together" },
            { question: "Traduire : 'Change'", options: ["Changement", "Chier", "Chant"], answer: "Changement" },
            { question: "Identifier l'action : 'Parler'", options: ["Écrire", "Parler", "Chanter"], answer: "Parler" },
            { question: "Traduire : 'Language'", options: ["Langue", "Pays", "Vitesse"], answer: "Langue" },
            { question: "Que signifie 'Difficult' ?", options: ["Difficile", "Facile", "Moyen"], answer: "Difficile" },
            { question: "Traduire : 'Friend'", options: ["Ami", "Chien", "Rivière"], answer: "Ami" }
            ]
        },
          {
            name: "Grammar",
            questions: [
              { question: "Compléter la phrase : 'Elle ______ (être) contente.'", options: ["est", "sont", "suis"], answer: "est" },
              { question: "Compléter la phrase : 'Ils ______ (avoir) des idées.'" , options: ["ont", "avons", "a"], answer: "ont" },
              { question: "Choisir la bonne forme : 'Ils ______ (parler) français.'", options: ["parlent", "parles", "parle"], answer: "parlent" },
              { question: "Compléter la phrase : 'Je ______ (avoir) une question.'", options: ["ai", "ont", "a"], answer: "ai" },
              { question: "Choisir la bonne préposition : 'Il est allé ______ parc.'", options: ["au", "à", "dans"], answer: "au" },
              { question: "Compléter la phrase : 'Nous ______ (faire) nos devoirs.'", options: ["faisons", "fais", "fait"], answer: "faisons" },
              { question: "Compléter la phrase : 'Elle ______ (aller) au travail.'", options: ["va", "allons", "sont"], answer: "va" },
              { question: "Choisir le bon pronom relatif : 'Voici la femme ______ je parle.'", options: ["dont", "que", "qui"], answer: "que" },
              { question: "Compléter la phrase : 'Vous ______ (étudier) à l’université.'", options: ["étudiez", "étudions", "étudient"], answer: "étudiez" },
              { question: "Compléter la phrase : 'Ils ______ (manger) à midi.'", options: ["mangent", "mangeons", "mange"], answer: "mangent" }
            ]
          },
          {
            name: "Orthography",
            questions: [
              { question: "Identifier la bonne orthographe : 'Communication'", options: ["Comunicacion", "Communication", "Commuication"], answer: "Communication" },
              { question: "Choisir la bonne orthographe : 'Réussir'", options: ["Réussir", "Reussir", "Réeussir"], answer: "Réussir" },
              { question: "Choisir la bonne orthographe : 'Accident'", options: ["Accident", "Acident", "Accidant"], answer: "Accident" },
              { question: "Identifier la bonne orthographe : 'Critère'", options: ["Critère", "Criteres", "Critèree"], answer: "Critère" },
              { question: "Choisir la bonne orthographe : 'Difficulté'", options: ["Difficulté", "Dificulte", "Difficulte"], answer: "Difficulté" },
              { question: "Identifier la bonne orthographe : 'Immédiatement'", options: ["Immédiatement", "Immidiatement", "Immediatement"], answer: "Immédiatement" },
              { question: "Choisir la bonne orthographe : 'Véritable'", options: ["Veritable", "Véritable", "Véritabl"], answer: "Véritable" },
              { question: "Identifier la bonne orthographe : 'Pratique'", options: ["Pratique", "Pratiqie", "Praitique"], answer: "Pratique" },
              { question: "Identifier la bonne orthographe : 'Équilibre'", options: ["Equilibre", "Équilibre", "Equillibre"], answer: "Équilibre" },
              { question: "Choisir la bonne orthographe : 'Adaptation'", options: ["Adaptation", "Adaption", "Adapatation"], answer: "Adaptation" }
            ]
          }
        ]
      },
      {
        level: "B2",
        categories: [
          {
            name: "Vocabulary",
            questions: [
              { question: "Traduire : 'Complicated'", options: ["Complexe", "Compliqué", "Facile"], answer: "Compliqué" },
              { question: "Que signifie 'Solution' ?", options: ["Réponse", "Problème", "Issue"], answer: "Réponse" },
              { question: "Traduire : 'Analysis'", options: ["Analyse", "Évaluation", "Examen"], answer: "Analyse" },
              { question: "Choisir le bon mot : 'L'________ des résultats est importante.'", options: ["importance", "évaluation", "objectif"], answer: "évaluation" },
              { question: "Que signifie 'Équilibre' ?", options: ["Balance", "Instabilité", "Inégalité"], answer: "Balance" },
              { question: "Traduire : 'Participation'", options: ["Participation", "Contribuer", "Inscription"], answer: "Participation" },
              { question: "Choisir la bonne définition : 'Motiver'", options: ["Encourager", "Dissuader", "Ignorer"], answer: "Encourager" },
              { question: "Identifier l'objet : 'Recherche'", options: ["Science", "Investigation", "Expérience"], answer: "Investigation" },
              { question: "Choisir le bon mot : 'C'est un problème ________.'", options: ["complexe", "difficile", "facile"], answer: "complexe" },
              { question: "Traduire : 'Project'", options: ["Projet", "Exposition", "Période"], answer: "Projet" }
            ]
          },
          {
            name: "Grammar",
            questions: [
              { question: "Compléter la phrase : 'Si vous _______ (étudier) plus, vous réussirez.'", options: ["étudiez", "étudieriez", "étudier"], answer: "étudiez" },
              { question: "Compléter la phrase : 'Elle _______ (finir) ses devoirs avant le dîner.'", options: ["finira", "finit", "finirait"], answer: "finira" },
              { question: "Choisir la bonne préposition : 'Ils ont déménagé _______ Paris.'", options: ["à", "en", "de"], answer: "à" },
              { question: "Compléter la phrase : 'Il est important _______ réagir rapidement.'", options: ["de", "à", "pour"], answer: "de" },
              { question: "Compléter la phrase : 'Si j'étais toi, je _______ (partir) en vacances.'", options: ["partirais", "partir", "partirait"], answer: "partirais" },
              { question: "Compléter la phrase : 'Nous _______ (être) en réunion toute la matinée.'", options: ["serons", "sommes", "étions"], answer: "serons" },
              { question: "Choisir la bonne forme : 'Ils _______ (voir) le film demain.'", options: ["verront", "voient", "voyaient"], answer: "verront" },
              { question: "Compléter la phrase : 'Elle est la seule à _______ (comprendre) ce concept.'", options: ["comprendre", "comprend", "comprendrait"], answer: "comprendre" },
              { question: "Compléter la phrase : 'Je ne pense pas qu'il _______ (être) d'accord.'", options: ["soit", "est", "serait"], answer: "soit" },
              { question: "Compléter la phrase : 'Si nous _______ (avoir) un budget plus élevé, nous aurions pu investir.'", options: ["avions", "avons", "auraient"], answer: "avions" }
            ]
          },
          {
            name: "Orthography",
            questions: [
              { question: "Identifier la bonne orthographe : 'Communication'", options: ["Comunicacion", "Communication", "Commuication"], answer: "Communication" },
              { question: "Choisir la bonne orthographe : 'Réussir'", options: ["Réussir", "Reussir", "Réeussir"], answer: "Réussir" },
              { question: "Choisir la bonne orthographe : 'Accident'", options: ["Accident", "Acident", "Accidant"], answer: "Accident" },
              { question: "Identifier la bonne orthographe : 'Critère'", options: ["Critère", "Criteres", "Critèree"], answer: "Critère" },
              { question: "Choisir la bonne orthographe : 'Difficulté'", options: ["Difficulté", "Dificulte", "Difficulte"], answer: "Difficulté" },
              { question: "Identifier la bonne orthographe : 'Immédiatement'", options: ["Immédiatement", "Immidiatement", "Immediatement"], answer: "Immédiatement" },
              { question: "Choisir la bonne orthographe : 'Véritable'", options: ["Veritable", "Véritable", "Véritabl"], answer: "Véritable" },
              { question: "Identifier la bonne orthographe : 'Pratique'", options: ["Pratique", "Pratiqie", "Praitique"], answer: "Pratique" },
              { question: "Identifier la bonne orthographe : 'Équilibre'", options: ["Equilibre", "Équilibre", "Equillibre"], answer: "Équilibre" },
              { question: "Choisir la bonne orthographe : 'Adaptation'", options: ["Adaptation", "Adaption", "Adapatation"], answer: "Adaptation" }
            ]
          }
        ]
      },
    {
      level: "C1",
      categories: [
        {
          name: "Vocabulary",
          questions: [
            { question: "Traduire : 'Phenomenon'", options: ["Phénomène", "Problème", "Conséquence"], answer: "Phénomène" },
            { question: "Que signifie 'Réflexion' ?", options: ["Action de penser", "Résultat", "Inconnu"], answer: "Action de penser" },
            { question: "Traduire : 'Perspective'", options: ["Perspectives", "Angle", "Vision"], answer: "Perspectives" },
            { question: "Choisir le bon mot : 'L'________ de cette situation est évident.'", options: ["importance", "impact", "aspect"], answer: "importance" },
            { question: "Que signifie 'Persuader' ?", options: ["Convaincre", "Mentir", "Indifférent"], answer: "Convaincre" },
            { question: "Traduire : 'Analysis'", options: ["Analyse", "Examen", "Observation"], answer: "Analyse" },
            { question: "Traduire : 'Complex'", options: ["Simple", "Compliqué", "Complexe"], answer: "Complexe" },
            { question: "Identifier l'objet : 'Démocratie'", options: ["Idéologie", "Gouvernance", "Politique"], answer: "Gouvernance" },
            { question: "Choisir le mot correct : 'La situation est ______.'", options: ["décisive", "étrange", "neutre"], answer: "décisive" },
            { question: "Traduire : 'Structure'", options: ["Structure", "Organisation", "Conception"], answer: "Structure" }
          ]
        },
        {
          name: "Grammar",
          questions: [
            { question: "Compléter la phrase : 'Si nous ______ (avoir) plus de temps, nous l'aurions fait.'", options: ["avions", "eûmes", "aurions eu"], answer: "aurions eu" },
            { question: "Choisir le bon pronom relatif : 'Voici le livre ______ il m’a parlé.'", options: ["dont", "que", "qui"], answer: "dont" },
            { question: "Compléter la phrase : 'Elle ______ (travailler) à l’étranger pendant 5 ans.'", options: ["travaille", "travaillera", "a travaillé"], answer: "a travaillé" },
            { question: "Choisir le bon temps : 'Si elle ______ (faire) attention, elle n’aurait pas fait d’erreur.'", options: ["avait fait", "faisait", "fera"], answer: "avait fait" },
            { question: "Compléter la phrase : 'Il est arrivé ______ je sois prêt.'", options: ["avant que", "après que", "lorsque"], answer: "avant que" },
            { question: "Choisir la bonne forme : 'Les résultats ______ (être) excellents.'", options: ["étaient", "seraient", "ont été"], answer: "étaient" },
            { question: "Compléter la phrase : 'Je ne crois pas qu’il ______ (comprendre).'", options: ["comprenne", "comprend", "comprendra"], answer: "comprenne" },
            { question: "Choisir le bon mode : 'Il parle comme s’il ______ (savoir) tout.'", options: ["savait", "sache", "a su"], answer: "savait" },
            { question: "Compléter la phrase : 'Si j’______ (avoir) plus de temps, je lirais davantage.'", options: ["avais", "ai", "aurai"], answer: "avais" },
            { question: "Choisir le bon pronom : 'C’est le film ______ j’ai parlé.'", options: ["dont", "que", "qui"], answer: "dont" }
          ]
        },
        {
          name: "Orthography",
          questions: [
            { question: "Identifier la bonne orthographe : 'Inévitable'", options: ["Inevitabe", "Inévitable", "Inévitabale"], answer: "Inévitable" },
            { question: "Choisir la bonne orthographe : 'Période'", options: ["Période", "Periode", "Périodee"], answer: "Période" },
            { question: "Choisir la bonne orthographe : 'Essentiel'", options: ["Essenciel", "Essentiel", "Esentiel"], answer: "Essentiel" },
            { question: "Identifier la bonne orthographe : 'Savoir'", options: ["Savoir", "Savwaire", "Savoire"], answer: "Savoir" },
            { question: "Choisir la bonne orthographe : 'Phénomène'", options: ["Phenomenne", "Phénomène", "Phenomène"], answer: "Phénomène" },
            { question: "Identifier la bonne orthographe : 'Systématique'", options: ["Systématique", "Systémathique", "Systématiquee"], answer: "Systématique" },
            { question: "Choisir la bonne orthographe : 'Candidat'", options: ["Candidatt", "Candidat", "Canditat"], answer: "Candidat" },
            { question: "Identifier la bonne orthographe : 'Exceptionnel'", options: ["Exceptionel", "Exeptionnel", "Exceptionnel"], answer: "Exceptionnel" },
            { question: "Choisir la bonne orthographe : 'Caractéristique'", options: ["Caractéristique", "Caractéristique", "Caractaire"], answer: "Caractéristique" },
            { question: "Identifier la bonne orthographe : 'Réflexion'", options: ["Réflexion", "Reflextion", "Reflexion"], answer: "Réflexion" }
          ]
        }
      ]
    },
    {
      level: "C2",
      categories: [
        {
          name: "Vocabulary",
          questions: [
            { question: "Traduire : 'Phenomenon'", options: ["Phénomène", "Problème", "Conséquence"], answer: "Phénomène" },
            { question: "Que signifie 'Réflexion' ?", options: ["Action de penser", "Résultat", "Inconnu"], answer: "Action de penser" },
            { question: "Traduire : 'Perspective'", options: ["Perspectives", "Angle", "Vision"], answer: "Perspectives" },
            { question: "Choisir le bon mot : 'L’________ de cette situation est évident.'", options: ["importance", "impact", "aspect"], answer: "importance" },
            { question: "Que signifie 'Persuader' ?", options: ["Convaincre", "Mentir", "Indifférent"], answer: "Convaincre" },
            { question: "Traduire : 'Analysis'", options: ["Analyse", "Examen", "Observation"], answer: "Analyse" },
            { question: "Traduire : 'Complex'", options: ["Simple", "Compliqué", "Complexe"], answer: "Complexe" },
            { question: "Identifier l'objet : 'Démocratie'", options: ["Idéologie", "Gouvernance", "Politique"], answer: "Gouvernance" },
            { question: "Choisir le mot correct : 'La situation est ______.'", options: ["décisive", "étrange", "neutre"], answer: "décisive" },
            { question: "Traduire : 'Structure'", options: ["Structure", "Disposition", "Arrangement"], answer: "Structure" }
          ]
        },
        {
          name: "Grammar",
          questions: [
            { question: "Compléter la phrase : 'La situation ______ (devenir) grave.'", options: ["devient", "devient", "devenir"], answer: "devient" },
            { question: "Choisir la forme correcte : 'L’objectif ________ atteindre.'" , options: ["est", "sont", "ont"], answer: "est" },
            { question: "Compléter la phrase : 'Il est _______ d’exprimer son avis'", options: ["facile", "plus facile", "plus difficile"], answer: "facile" }
          ]
        },
        {
          name: "Orthography",
          questions: [
            { question: "Identifiez la bonne orthographe : 'Perseverance'", options: ["Perseverence", "Perseverance", "Perseverence"], answer: "Perseverance" }
          ]
        }
      ]
    }
  ];