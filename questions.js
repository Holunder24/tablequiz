// ===== Fragen =====
// type: "choice"   = Auswahl (options + answer)
//       "text"     = freie Antwort (answer, optional accept = weitere richtige Schreibweisen).
//                    Kleine Tippfehler werden automatisch toleriert.
//       "estimate" = Schätzfrage (Zahl). Beim Schließen bekommt der Tisch, der am nächsten dran ist, 1 Punkt.
//                    display = wie die Lösung angezeigt wird (optional)
// Punkte kannst du als Quizmaster für jede Antwort noch per Klick anpassen (0 / ½ / 1).

window.QUIZ_ROUNDS = [
  {
    title: "Runde 1 – Unnützes Weihnachtswissen",
    questions: [
      {
        type: "choice",
        q: "Welches Lied wurde 1965 als allererstes im Weltraum gespielt – von zwei Astronauten auf Mundharmonika und Glöckchen?",
        options: ["Stille Nacht", "Jingle Bells", "O Tannenbaum", "Last Christmas"],
        answer: "Jingle Bells"
      },
      {
        type: "choice",
        q: "Was essen in Japan viele Familien traditionell an Weihnachten?",
        options: ["Sushi mit Lebkuchen", "Weihnachtsgans", "Frittiertes Hähnchen von KFC", "Ramen mit Zimt"],
        answer: "Frittiertes Hähnchen von KFC"
      },
      {
        type: "choice",
        q: "Was verstecken Norweger an Heiligabend, damit Hexen es nicht klauen und darauf davonfliegen?",
        options: ["Ihre Besen", "Ihre Socken", "Ihre Autoschlüssel", "Ihren Aquavit"],
        answer: "Ihre Besen"
      },
      {
        type: "choice",
        q: "In Katalonien schlagen Kinder an Weihnachten mit Stöcken auf einen Holzstamm, bis er Süßigkeiten „kackt“. Wie heißt er?",
        options: ["Tronco Loco", "Caga Tió", "Pupsi Navidad", "El Kackalog"],
        answer: "Caga Tió"
      },
      {
        type: "estimate",
        q: "Schätzfrage: Wie viele Weihnachtsmänner (die „Jólasveinar“) gibt es in Island?",
        answer: 13
      },
      {
        type: "choice",
        q: "Welche Stadt schenkt London seit 1947 jedes Jahr den großen Weihnachtsbaum am Trafalgar Square?",
        options: ["Stockholm", "Kopenhagen", "Oslo", "Helsinki"],
        answer: "Oslo"
      },
      {
        type: "text",
        q: "Was ist laut Umfragen das beliebteste Heiligabend-Essen der Deutschen?",
        answer: "Kartoffelsalat mit Würstchen",
        accept: ["kartoffelsalat", "würstchen", "wuerstchen", "wurst mit kartoffelsalat"]
      },
      {
        type: "estimate",
        q: "Schätzfrage: Wie viele Geschenke bekommt man im Lied „The Twelve Days of Christmas“ insgesamt?",
        answer: 364
      }
    ]
  },
  {
    title: "Runde 2 – Unnützes VHV-Wissen",
    questions: [
      {
        type: "choice",
        q: "Wofür stand die Abkürzung „VHV“ ursprünglich?",
        options: ["Verband Hannoverscher Versicherer", "Vereinigte Haftpflichtversicherung", "Versicherung für Haus & Verkehr", "Viel hilft viel"],
        answer: "Vereinigte Haftpflichtversicherung"
      },
      {
        type: "choice",
        q: "Für welche Branche wurde die VHV 1919 in Hannover als Selbsthilfe-Einrichtung gegründet?",
        options: ["Bäcker", "Bauwirtschaft", "Brauereien", "Bergbau"],
        answer: "Bauwirtschaft"
      },
      {
        type: "choice",
        q: "Als was startete die Hannoversche Lebensversicherung im Jahr 1875?",
        options: ["Als Verein preußischer Beamter", "Als Sterbekasse für Pferde", "Als Feuerkasse der Bäcker", "Als Kegelclub mit Rentenkasse"],
        answer: "Als Verein preußischer Beamter"
      },
      {
        type: "estimate",
        q: "Schätzfrage: Welchen runden Geburtstag (in Jahren) feierte die Hannoversche Lebensversicherung 2025?",
        answer: 150,
        display: "150 Jahre (gegründet 1875)"
      },
      {
        type: "choice",
        q: "Die VHV ist ein Versicherungsverein auf Gegenseitigkeit (a. G.). Wem gehört sie damit?",
        options: ["Dem Land Niedersachsen", "Den Mitgliedern, also den Versicherten", "Der Stadt Hannover", "Hannover 96"],
        answer: "Den Mitgliedern, also den Versicherten"
      },
      {
        type: "choice",
        q: "Welches berühmte Bauprojekt hat die VHV als Bauversicherer unter anderem abgesichert?",
        options: ["Kölner Dom", "Elbphilharmonie", "Schloss Neuschwanstein", "Brandenburger Tor"],
        answer: "Elbphilharmonie"
      },
      {
        type: "choice",
        q: "Welche Sparte ist seit 1968 die größte der VHV?",
        options: ["Bauversicherung", "Lebensversicherung", "Kfz-Versicherung", "Rechtsschutz"],
        answer: "Kfz-Versicherung"
      },
      {
        type: "estimate",
        q: "Schätzfrage: Wie viele Versicherungsverträge hatte die VHV Gruppe 2025 – in Millionen?",
        answer: 12.9,
        display: "12,9 Millionen Verträge"
      }
    ]
  },
  {
    title: "Runde 3 – Unnützes Hannover-Wissen",
    questions: [
      {
        type: "choice",
        q: "Wie viele Zähne hat ein Leibniz-Butterkeks?",
        options: ["48", "50", "52", "56"],
        answer: "52"
      },
      {
        type: "choice",
        q: "2013 wurde der goldene Leibniz-Keks von der Bahlsen-Fassade geklaut. Unter welchem Namen meldete sich der Dieb mit seinen Forderungen?",
        options: ["Keksmonster", "Krümelmonster", "Der Bröselbaron", "Robin Hood"],
        answer: "Krümelmonster"
      },
      {
        type: "choice",
        q: "Der Aufzug in der Rathauskuppel fährt schräg (17 Grad). Wo gibt es laut Stadt den einzigen vergleichbaren Aufzug?",
        options: ["Im Kölner Dom", "Im Big Ben", "Im Eiffelturm", "Im Schiefen Turm von Pisa"],
        answer: "Im Eiffelturm"
      },
      {
        type: "estimate",
        q: "Schätzfrage: Auf wie vielen Buchenpfählen steht das Neue Rathaus?",
        answer: 6026,
        display: "6.026 Buchenpfähle"
      },
      {
        type: "choice",
        q: "Was soll Stadtdirektor Tramm laut Legende geantwortet haben, als Kaiser Wilhelm II. nach den Kosten des Rathauses fragte?",
        options: ["„Fragen Sie lieber nicht, Majestät.“", "„Zehn Millionen Mark, und alles bar bezahlt, Majestät.“", "„Das zahlt die Versicherung, Majestät.“", "„Einen Butterkeks pro Ziegel, Majestät.“"],
        answer: "„Zehn Millionen Mark, und alles bar bezahlt, Majestät.“"
      },
      {
        type: "choice",
        q: "Was ist eine „Lüttje Lage“?",
        options: ["Ein Mittagsschlaf auf dem Schützenfest", "Bier und Korn gleichzeitig aus zwei Gläsern trinken", "Ein kleiner Schützenhut", "Eine Bratwurst ohne Brötchen"],
        answer: "Bier und Korn gleichzeitig aus zwei Gläsern trinken"
      },
      {
        type: "text",
        q: "Wie heißt das Maskottchen des Schützenfests Hannover – eine Zielscheibe mit Beinen?",
        answer: "Ballerkalle",
        accept: ["baller kalle", "baller-kalle"]
      },
      {
        type: "estimate",
        q: "Schätzfrage: Wie lang ist der Rote Faden auf dem Pflaster der Innenstadt – in Kilometern?",
        answer: 4.2,
        display: "4,2 km (vorbei an 36 Sehenswürdigkeiten)"
      }
    ]
  }
];
