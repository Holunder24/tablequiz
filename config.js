// ===== Einstellungen fürs Quiz =====
window.QUIZ_CONFIG = {
  // Titel, der überall angezeigt wird
  title: "Weihnachts-Tablequiz",

  // Wie viele Tische es gibt
  tables: 10,

  // PIN für die Quizmaster-Seite (host.html)
  hostPin: "2412",

  // Interner Raum-Name für die Live-Verbindung.
  // Ändern = alle Geräte landen in einem neuen, leeren Quiz.
  room: "tablequiz-holunder24-xmas-b52f1c9c",

  // Öffentlicher MQTT-Server für die Live-Verbindung (kostenlos, ohne Account)
  broker: "wss://broker.emqx.io:8084/mqtt"
};
