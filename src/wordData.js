const wordData = [
  {
    date: 'April 18, 2024',
    word: 'Verhandlung',
    image: "https://raw.githubusercontent.com/ayhanmetin/wordimage/main/1/beenden.png",
    example1: 'Die Verhandlung war lang und anstrengend.',
    example2: 'Die Parteien erreichten schließlich eine Verhandlung.',
    meaningENG: 'negotiation',
    meaningTR: 'müzakere',
    quote1:"",
    quote2:"",
    quote3:"",
    id: '1',
    level: '1',
    block: '1',
    grammar: 'noun',
    grammar2:"3rd , singular , preterit zog | past participle gezogen",
    means: 'Circumlocution refers to the use of many words to say something that could be said more clearly and directly with fewer words. Usually encountered in formal speech and writing, circumlocution can also refer to speech that is intentionally evasive.'
  },
  

  {
    date: 'April 18, 2024',
    word: 'verbessern',
    example1: 'Wir müssen die Qualität unserer Produkte verbessern.',
    example2: 'Sie verbessert ständig ihre Deutschkenntnisse.',
    meaningENG: 'to improve',
    meaningTR: 'iyileştirmek',
    id: '99',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To make something better or to become better.',
  },
  {
    date: 'April 19, 2024',
    word: 'entdecken',
    example1: 'Er hat seine Leidenschaft für Musik entdeckt.',
    example2: 'Forscher haben eine neue Art entdeckt.',
    meaningENG: 'to discover',
    meaningTR: 'keşfetmek',
    id: '2',
    level: '1',
    block: '1',
    grammar: 'verb',
    means:
      'To find information, a place, or an object, especially for the first time.',
  },
  {
    date: 'April 20, 2024',
    word: 'erklären',
    example1: 'Kannst du mir erklären, wie das funktioniert?',
    example2: 'Der Professor erklärte die Theorie sehr detailliert.',
    meaningENG: 'to explain',
    meaningTR: 'açıklamak',
    id: '3',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To make something clear or easy to understand.',
  },
  {
    date: 'April 21, 2024',
    word: 'beenden',
    example1: 'Sie hat beschlossen, ihr Studium zu beenden.',
    example2: 'Er beendete das Gespräch abrupt.',
    meaningENG: 'to finish',
    meaningTR: 'bitirmek',
    id: '4',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To stop doing something or come to an end.',
  },
  {
    date: 'April 22, 2024',
    word: 'anfangen',
    example1: 'Ich fange nächste Woche einen neuen Job an.',
    example2: 'Wann fängt der Film an?',
    meaningENG: 'to start',
    meaningTR: 'başlamak',
    id: '5',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To begin doing something.',
  },
  {
    date: 'April 23, 2024',
    word: 'entscheiden',
    example1: 'Wir müssen uns bald entscheiden.',
    example2: 'Sie entschied sich für den roten Pullover.',
    meaningENG: 'to decide',
    meaningTR: 'karar vermek',
    id: '6',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To make a choice or judgment about something.',
  },
  {
    date: 'April 24, 2024',
    word: 'bauen',
    example1: 'Sie bauen ein neues Haus am Stadtrand.',
    example2: 'Die Stadt plant, eine neue Brücke zu bauen.',
    meaningENG: 'to build',
    meaningTR: 'inşa etmek',
    id: '7',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To construct or make something.',
  },
  {
    date: 'April 25, 2024',
    word: 'besuchen',
    example1: 'Nächstes Jahr besuche ich Japan.',
    example2: 'Hast du schon einmal das Museum besucht?',
    meaningENG: 'to visit',
    meaningTR: 'ziyaret etmek',
    id: '8',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To go somewhere to spend time with someone or see something.',
  },
  {
    date: 'April 26, 2024',
    word: 'verkaufen',
    example1: 'Er verkauft sein altes Auto.',
    example2: 'Das Geschäft verkauft verschiedene Arten von Produkten.',
    meaningENG: 'to sell',
    meaningTR: 'satmak',
    id: '9',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To give something to someone else in return for money.',
  },
  {
    date: 'April 27, 2024',
    word: 'kaufen',
    example1: 'Ich kaufe ein neues Fahrrad.',
    example2: 'Sie kauften ihr erstes Haus zusammen.',
    meaningENG: 'to buy',
    meaningTR: 'almak',
    id: '10',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To acquire something by paying for it.',
  },
  {
    date: 'April 28, 2024',
    word: 'schreiben',
    example1: 'Er schreibt einen Brief an seinen Freund.',
    example2: 'Sie schreibt an ihrem neuen Roman.',
    meaningENG: 'to write',
    meaningTR: 'yazmak',
    id: '11',
    level: '1',
    block: '1',
    grammar: 'verb',
    means:
      'To compose text or symbols on a surface, typically paper, with an instrument such as a pen.',
  },
  {
    date: 'April 29, 2024',
    word: 'laufen',
    example1: 'Er läuft jeden Morgen fünf Kilometer.',
    example2: 'Das Wasser läuft aus dem Hahn.',
    meaningENG: 'to run',
    meaningTR: 'koşmak',
    id: '12',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To move quickly on foot, faster than walking, or to operate.',
  },
  {
    date: 'April 30, 2024',
    word: 'ändern',
    example1: 'Sie mussten ihre Pläne aufgrund des Wetters ändern.',
    example2: 'Du kannst die Einstellungen jederzeit ändern.',
    meaningENG: 'to change',
    meaningTR: 'değiştirmek',
    id: '13',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To make or become different.',
  },
  {
    date: 'May 1, 2024',
    word: 'reparieren',
    example1: 'Kannst du das kaputte Fenster reparieren?',
    example2: 'Er reparierte das Auto selbst.',
    meaningENG: 'to repair',
    meaningTR: 'onarmak',
    id: '14',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To fix something that is broken or damaged.',
  },
  {
    date: 'May 2, 2024',
    word: 'studieren',
    example1: 'Sie studiert Medizin an der Universität.',
    example2: 'Er studierte die Dokumente sorgfältig.',
    meaningENG: 'to study',
    meaningTR: 'öğrenmek',
    id: '15',
    level: '1',
    block: '1',
    grammar: 'verb',
    means:
      'To learn about a subject, usually at school or university, or to examine something in detail.',
  },
  {
    date: 'May 3, 2024',
    word: 'organisieren',
    example1: 'Wir organisieren eine Konferenz über nachhaltige Entwicklung.',
    example2: 'Sie organisierte ihre Gedanken vor der Präsentation.',
    meaningENG: 'to organize',
    meaningTR: 'organize etmek',
    id: '16',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To arrange or put in order; to prepare or plan.',
  },
  {
    date: 'May 4, 2024',
    word: 'lieben',
    example1: 'Ich liebe es, am Strand zu sein.',
    example2: 'Sie liebt ihren Hund sehr.',
    meaningENG: 'to love',
    meaningTR: 'sevmek',
    id: '17',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To feel a deep romantic or sexual attachment to someone.',
  },
  {
    date: 'May 5, 2024',
    word: 'kochen',
    example1: 'Er kocht jeden Abend für seine Familie.',
    example2: 'Kannst du die Suppe kochen lassen?',
    meaningENG: 'to cook',
    meaningTR: 'pişirmek',
    id: '18',
    level: '1',
    block: '1',
    grammar: 'verb',
    means:
      'To prepare food for eating by heating it, typically in an oven or on a stove.',
  },
  {
    date: 'May 6, 2024',
    word: 'reisen',
    example1: 'Nächstes Jahr reisen wir nach Spanien.',
    example2: 'Sie reist gerne allein.',
    meaningENG: 'to travel',
    meaningTR: 'seyahat etmek',
    id: '19',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To make a journey, typically over a long distance.',
  },
  {
    date: 'May 7, 2024',
    word: 'sehen',
    example1: 'Kannst du das Schild dort sehen?',
    example2: 'Ich sah ihn gestern in der Stadt.',
    meaningENG: 'to see',
    meaningTR: 'görmek',
    id: '20',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To perceive with the eyes; to discern visually.',
  },
  {
    date: 'May 8, 2024',
    word: 'hören',
    example1: 'Kannst du dieses Geräusch hören?',
    example2: 'Sie hörte aufmerksam zu, während die Lehrerin sprach.',
    meaningENG: 'to hear',
    meaningTR: 'duymak',
    id: '21',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To perceive with the ear the sound made by (someone or something).',
  },
  {
    date: 'May 9, 2024',
    word: 'schlafen',
    example1: 'Er schläft tief nach dem langen Arbeitstag.',
    example2: 'Das Baby schlief die ganze Nacht durch.',
    meaningENG: 'to sleep',
    meaningTR: 'uyumak',
    id: '22',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To be in a state of rest where consciousness is suspended.',
  },
  {
    date: 'May 10, 2024',
    word: 'sprechen',
    example1: 'Wir sprechen über sehr wichtige Themen.',
    example2: 'Kannst du langsamer sprechen?',
    meaningENG: 'to speak',
    meaningTR: 'konuşmak',
    id: '23',
    level: '1',
    block: '1',
    grammar: 'verb',
    means:
      "To convey information or express one's thoughts and feelings in spoken language.",
  },
  {
    date: 'May 11, 2024',
    word: 'essen',
    example1: 'Wir essen heute Abend in einem Restaurant.',
    example2: 'Das Kind isst langsam seine Suppe.',
    meaningENG: 'to eat',
    meaningTR: 'yemek yemek',
    id: '24',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To take into the mouth and swallow for nourishment; consume food.',
  },
  {
    date: 'May 12, 2024',
    word: 'trinken',
    example1: 'Ich trinke gerne Kaffee am Morgen.',
    example2: 'Sie trank ein Glas Wasser.',
    meaningENG: 'to drink',
    meaningTR: 'içmek',
    id: '25',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To take a liquid into the mouth and swallow.',
  },
  {
    date: 'May 13, 2024',
    word: 'lesen',
    example1: 'Er liest jeden Tag die Zeitung.',
    example2: 'Kannst du mir aus dem Buch vorlesen?',
    meaningENG: 'to read',
    meaningTR: 'okumak',
    id: '26',
    level: '1',
    block: '1',
    grammar: 'verb',
    means:
      'To look at and comprehend the meaning of written or printed matter by mentally interpreting the characters or symbols of which it is composed.',
  },
  {
    date: 'May 14, 2024',
    word: 'spielen',
    example1: 'Die Kinder spielen im Park.',
    example2: 'Er spielt am Wochenende Fußball.',
    meaningENG: 'to play',
    meaningTR: 'oynamak',
    id: '27',
    level: '1',
    block: '1',
    grammar: 'verb',
    means:
      'Engage in activity for enjoyment and recreation rather than a serious or practical purpose.',
  },
  {
    date: 'May 15, 2024',
    word: 'arbeiten',
    example1: 'Sie arbeitet bei einer Softwarefirma.',
    example2: 'Er arbeitet hart an seinem neuen Projekt.',
    meaningENG: 'to work',
    meaningTR: 'çalışmak',
    id: '28',
    level: '1',
    block: '1',
    grammar: 'verb',
    means:
      "To be engaged in physical or mental activity in order to achieve a purpose or result, especially in one's job; do work.",
  },
  {
    date: 'May 16, 2024',
    word: 'fühlen',
    example1: 'Ich fühle mich heute viel besser.',
    example2: 'Sie fühlte eine leichte Brise.',
    meaningENG: 'to feel',
    meaningTR: 'hissetmek',
    id: '29',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To experience a particular physical or emotional sensation.',
  },
  {
    date: 'May 17, 2024',
    word: 'finden',
    example1: 'Ich kann mein Handy nicht finden.',
    example2: 'Hast du gefunden, wonach du gesucht hast?',
    meaningENG: 'to find',
    meaningTR: 'bulmak',
    id: '30',
    level: '1',
    block: '1',
    grammar: 'verb',
    means: 'To discover or perceive by chance or unexpectedly.',
  },
];

export default wordData;
