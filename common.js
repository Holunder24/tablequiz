// Gemeinsame Helfer für alle Seiten
const CFG = window.QUIZ_CONFIG;
const TOPIC = {
  state: CFG.room + "/state",
  answer: CFG.room + "/answer",
  join: CFG.room + "/join",
  hello: CFG.room + "/hello"
};

function connectQuiz({ subscribe, onMessage, onStatus }) {
  const client = mqtt.connect(CFG.broker, {
    clientId: "tq_" + Math.random().toString(16).slice(2, 12),
    reconnectPeriod: 2000,
    connectTimeout: 10000,
    keepalive: 30,
    clean: true
  });
  const status = (s) => onStatus && onStatus(s);
  status("connecting");
  client.on("connect", () => {
    status("online");
    client.subscribe(subscribe, { qos: 1 });
  });
  client.on("reconnect", () => status("connecting"));
  client.on("offline", () => status("offline"));
  client.on("close", () => status("offline"));
  client.on("error", (e) => console.warn("MQTT", e && e.message));
  client.on("message", (topic, payload) => {
    let data;
    try { data = JSON.parse(payload.toString()); } catch (e) { return; }
    onMessage(topic, data);
  });
  return {
    client,
    publish(topic, obj, opts) {
      client.publish(topic, JSON.stringify(obj), Object.assign({ qos: 1 }, opts || {}));
    }
  };
}

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function norm(s) {
  return String(s == null ? "" : s)
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/ß/g, "ss")
    .replace(/[.,!?;:"'„“”‚‘’«»()\-–]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function load(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
}
function save(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
}

function tableLabel(t, names) {
  const n = names && names[t];
  return n ? `Tisch ${t} · ${n}` : `Tisch ${t}`;
}

function baseUrl() {
  return location.href.replace(/[^/]*([?#].*)?$/, "");
}

function setStatusDot(el, s) {
  if (!el) return;
  el.dataset.status = s;
  el.title = s === "online" ? "Verbunden" : s === "connecting" ? "Verbinde…" : "Keine Verbindung";
  el.textContent = s === "online" ? "live" : s === "connecting" ? "verbinde…" : "offline";
}

function rankRows(scores, names) {
  if (!scores || !scores.length) return '<p class="muted">Noch keine Punkte.</p>';
  let place = 0, last = null;
  return '<ol class="ranking">' + scores.map((s, i) => {
    if (s.total !== last) { place = i + 1; last = s.total; }
    const medal = s.total <= 0 ? place + "." : place === 1 ? "🥇" : place === 2 ? "🥈" : place === 3 ? "🥉" : place + ".";
    const per = (s.perRound || []).length > 1 ? s.perRound.map((p) => fmtPts(p)).join(" + ") : "";
    return `<li class="${place <= 3 && s.total > 0 ? "top top" + place : ""}"><span class="place">${medal}</span><span class="who">${esc(tableLabel(s.table, names))}</span><span class="per muted">${per}</span><span class="pts">${fmtPts(s.total)}</span></li>`;
  }).join("") + "</ol>";
}

function fmtPts(p) {
  return String(Math.round(p * 10) / 10).replace(".", ",");
}
