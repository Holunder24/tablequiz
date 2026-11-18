// ===== Fragen =====
// type: "choice"   = Auswahl (options + answer)
//       "text"     = freie Antwort (answer, optional accept = weitere richtige Schreibweisen)
//       "estimate" = Schätzfrage (Zahl). Beim Schließen bekommt der Tisch, der am nächsten dran ist, 1 Punkt.
// Punkte kannst du als Quizmaster für jede Antwort noch per Klick anpassen (0 / ½ / 1).

window.QUIZ_ROUNDS = [
  {
    title: "Runde 1 – Weihnachtswissen",
    questions: [
      {
        type: "choice",
        q: "Wer gilt als Erfinder des Adventskranzes?",
        options: ["Martin Luther", "Johann Hinrich Wichern", "Clemens Brentano", "Friedrich Fröbel"],
        answer: "Johann Hinrich Wichern"
      },
      {
        type: "choice",
        q: "In welchem Land wurde „Stille Nacht, heilige Nacht“ 1818 zum ersten Mal gesungen?",
        options: ["Deutschland", "Schweiz", "Österreich", "Italien"],
        answer: "Österreich"
      },
      {
        type: "text",
        q: "Wie heißt der Weihnachtsmann in Frankreich?",
        answer: "Père Noël",
        accept: ["pere noel", "papa noel", "père noel", "pere noël"]
      },
      {
        type: "text",
        q: "Aus welcher deutschen Stadt stammt der berühmte Christstollen mit eigenem Gütesiegel?",
        answer: "Dresden"
      },
      {
        type: "choice",
        q: "Welches Fest feiert man am 6. Januar?",
        options: ["Nikolaus", "Heilige Drei Könige", "Mariä Lichtmess", "Sankt Martin"],
        answer: "Heilige Drei Könige"
      },
      {
        type: "text",
        q: "„Kevin – Allein zu Haus“: In welche Stadt fliegt die Familie ohne Kevin?",
        answer: "Paris"
      },
      {
        type: "text",
        q: "Was ist die Hauptzutat von Marzipan (neben Zucker)?",
        answer: "Mandeln",
        accept: ["mandel"]
      },
      {
        type: "estimate",
        q: "Schätzfrage: Wie viele Geschenke bekommt man im Lied „The Twelve Days of Christmas“ insgesamt?",
        answer: 364
      }
    ]
  },
  {
    title: "Runde 2 – Weihnachten in Film & Musik",
    questions: [
      {
        type: "text",
        q: "Welche Band sang 1984 „Last Christmas“?",
        answer: "Wham!",
        accept: ["wham"]
      },
      {
        type: "choice",
        q: "In welchem Jahr erschien Mariah Careys „All I Want for Christmas Is You“?",
        options: ["1989", "1994", "1999", "2004"],
        answer: "1994"
      },
      {
        type: "text",
        q: "Wie heißt das Rentier mit der roten Nase?",
        answer: "Rudolph",
        accept: ["rudolf"]
      },
      {
        type: "text",
        q: "Wie heißt der Hund des Grinch?",
        answer: "Max"
      },
      {
        type: "choice",
        q: "„Drei Haselnüsse für Aschenbrödel“ (1973) ist eine Koproduktion welcher Länder?",
        options: ["BRD & Österreich", "DDR & Tschechoslowakei", "Polen & Ungarn", "DDR & Sowjetunion"],
        answer: "DDR & Tschechoslowakei"
      },
      {
        type: "text",
        q: "Wie heißt der skandinavische Glühwein?",
        answer: "Glögg",
        accept: ["glogg", "gløgg"]
      },
      {
        type: "choice",
        q: "Welcher Schauspieler spielt in „Schöne Bescherung“ (1989) den Familienvater Clark Griswold?",
        options: ["Steve Martin", "Bill Murray", "Chevy Chase", "Tom Hanks"],
        answer: "Chevy Chase"
      },
      {
        type: "estimate",
        q: "Schätzfrage: Aus welchem Jahr stammt die bekannte Verfilmung „Der kleine Lord“ mit Alec Guinness?",
        answer: 1980
      }
    ]
  }
];
