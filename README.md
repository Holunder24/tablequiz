# 🎄 Weihnachts-Tablequiz

Live-Tablequiz für die Weihnachtsfeier. Läuft komplett über GitHub Pages, ohne Server und ohne Account.

| Seite | Für wen | Adresse |
|---|---|---|
| `index.html` | Tische (Handys) | https://holunder24.github.io/tablequiz/ |
| `host.html` | Quizmaster (PIN aus `config.js`) | https://holunder24.github.io/tablequiz/host.html |
| `screen.html` | Beamer / TV mit QR-Code | https://holunder24.github.io/tablequiz/screen.html |

## Ablauf
1. Quizmaster öffnet `host.html` (Laptop oder Tablet), Beamer zeigt `screen.html`.
2. Die Tische scannen den QR-Code, wählen ihren Tisch und optional einen Teamnamen.
3. Quizmaster klickt sich durch: **Frage zeigen → Antworten schließen → Lösung zeigen → Nächste Frage**.
   Die Tische sehen immer nur die aktuelle Frage und können nicht vorspulen.
4. Nach Runde 1 gibt es einen Zwischenstand, nach Runde 2 den Endstand.

Punkte werden beim Schließen automatisch vorgeschlagen (Auswahlfragen exakt, Freitext tolerant, Schätzfragen: nächster Wert gewinnt).
Pro Tisch lässt sich jederzeit 0 / ½ / 1 Punkt setzen.

## Anpassen
- **Fragen:** `questions.js` (Typen: `choice`, `text`, `estimate`)
- **Anzahl Tische, Titel, PIN:** `config.js`

## Technik
Die Live-Synchronisierung läuft über einen öffentlichen MQTT-Server (`broker.emqx.io`) mit einem zufälligen Raum-Namen.
Der Spielstand wird im Browser des Quizmasters gespeichert, deshalb geht beim Neuladen der Seite nichts verloren.
Hinweis: Das Repo ist öffentlich, d. h. wer `questions.js` im Browser direkt aufruft, könnte die Lösungen sehen.
