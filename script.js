/* =========================================================
   Sonolux Panamá — site config
   Fill in what's missing when the client sends it.
   ========================================================= */
const CONFIG = {
  phone: "+50766141455",          // from Instagram bio
  phoneDisplay: "+507 6614-1455",
  whatsapp: "50766141455",        // digits only
  email: "",                      // pending: client's email
  formEndpoint: "",               // pending: FormSubmit endpoint (empty = form opens WhatsApp)
  instagram: "https://www.instagram.com/sonolux_panama/",
  facebook: "",
  tiktok: "",
};

/* Gallery (type: wedding | party | production) */
const GALLERY = [
  { type: "production", size: "wide", label: "Show de lásers",         src: "media/gallery/laser-show.jpg" },
  { type: "wedding",    size: "tall", label: "Novios en la pista",     src: "media/gallery/couple-wings.jpg" },
  { type: "production", size: "",     label: "Cabina Sonolux",          src: "media/gallery/dj-booth.jpg" },
  { type: "party",      size: "",     label: "Pista llena",            src: "media/gallery/led-crowd.jpg" },
  { type: "party",      size: "wide", label: "Lásers verdes",          src: "media/gallery/green-lasers.jpg" },
  { type: "wedding",    size: "wide", label: "Show de novios",          src: "media/gallery/couple-party.jpg" },
  { type: "production", size: "",     label: "Lásers y flores",        src: "media/gallery/lasers-flowers.jpg" },
  { type: "production", size: "",     label: "Lámparas y lásers",      src: "media/gallery/lasers-chandelier.jpg" },
  { type: "party",      size: "wide", label: "Haces azules",           src: "media/gallery/blue-beams.jpg" },
  { type: "production", size: "",     label: "Escenario",               src: "media/gallery/stage-wide.jpg" },
  { type: "party",      size: "",     label: "Pantalla y pista",        src: "media/gallery/purple-screen.jpg" },
  { type: "production", size: "wide", label: "Techo de lásers",        src: "media/gallery/laser-ceiling.jpg" },
  { type: "party",      size: "",     label: "Túnel de lásers",        src: "media/gallery/laser-tunnel.jpg" },
  { type: "wedding",    size: "",     label: "Novios con luces",        src: "media/gallery/couple-stage.jpg" },
  { type: "production", size: "wide", label: "Ola de lásers",          src: "media/gallery/laser-wave.jpg" },
  { type: "production", size: "",     label: "Lámparas y haces",        src: "media/gallery/chandelier-beams.jpg" },
  { type: "party",      size: "",     label: "Escenario encendido",     src: "media/gallery/stage-glow.jpg" },
  { type: "production", size: "",     label: "Lámpara",                 src: "media/gallery/chandelier.jpg" },
  { type: "party",      size: "wide", label: "Lásers en el jardín",    src: "media/gallery/garden-lasers.jpg" },
  { type: "production", size: "",     label: "Truss y lásers",         src: "media/gallery/truss-lasers.jpg" },
  { type: "wedding",    size: "",     label: "Monograma de boda",       src: "media/gallery/monogram.jpg" },
  { type: "party",      size: "wide", label: "Manos arriba",            src: "media/gallery/crowd-hands.jpg" },
  { type: "party",      size: "",     label: "Pantalla LED",            src: "media/gallery/crowd-led.jpg" },
  { type: "production", size: "",     label: "Lásers sobre la cabina", src: "media/gallery/laser-truss.jpg" },
];

/* Videos: local mp4 */
const VIDEOS = [
  { poster: "media/hero.jpg",   label: "Highlights", loop: true, src: "media/hero.mp4" },
  { poster: "media/lasers.jpg", label: "Laser show", loop: true, src: "media/lasers.mp4" },
];

/* Reviews: real ones only — { text, textEN?, name, event } */
const REVIEWS = [];

/* ========================================================= */

let lang = "es";
try { lang = localStorage.getItem("sonolux-lang") || "es"; } catch (e) {}
const t = (es, en) => (lang === "en" ? en : es);

const ICONS = {
  ring: '<circle cx="12" cy="14" r="6"/><path d="M9 4h6l-1.5 3h-3z"/>',
  crown: '<path d="M3 18h18M4 18 3 7l5 4 4-6 4 6 5-4-1 11"/>',
  disco: '<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4v16M6.5 6.5c3 2 8 2 11 0M6.5 17.5c3-2 8-2 11 0"/>',
  speaker: '<rect x="6" y="2" width="12" height="20" rx="2"/><circle cx="12" cy="14" r="3.5"/><circle cx="12" cy="6.5" r="1.2"/>',
  light: '<path d="M8 3h8l-1 7H9z"/><path d="M9 10 5 21M15 10l4 11M12 10v11"/>',
  laser: '<path d="M12 21 3 4M12 21l9-17M12 21V3M12 21 7 3M12 21l5-18"/>',
  screen: '<rect x="2" y="4" width="20" height="13" rx="1.5"/><path d="M8 21h8M12 17v4"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/>',
};

const SERVICES = [
  { ic: "disco",   es: ["DJ", "Open format: reggaeton, salsa, merengue, típico, house, pop y throwbacks — leyendo la pista toda la noche."], en: ["DJ", "Open format: reggaeton, salsa, merengue, típico, house, pop and throwbacks — reading the floor all night."] },
  { ic: "speaker", es: ["Sonido profesional", "Equipo de audio para ceremonia, cóctel y fiesta, ajustado al tamaño del salón."], en: ["Professional sound", "Audio for the ceremony, cocktail hour and party, sized to the room."] },
  { ic: "light",   es: ["Iluminación", "Cabezas móviles, luces de pista y uplighting con los colores de tu evento."], en: ["Lighting", "Moving heads, dance-floor lights and uplighting in your event's colors."] },
  { ic: "laser",   es: ["Show de lásers", "Lásers y haces de luz para los momentos pico de la fiesta."], en: ["Laser show", "Lasers and beams for the peak moments of the party."] },
  { ic: "screen",  es: ["Pantallas LED", "Visuales, nombres, monogramas y contenido en pantalla."], en: ["LED screens", "Visuals, names, monograms and on-screen content."] },
  { ic: "mic",     es: ["Ceremonia", "Micrófonos y música para la ceremonia, civil o religiosa."], en: ["Ceremony", "Microphones and music for civil or religious ceremonies."] },
];

const FORM_SERVICES = [
  ["DJ", "DJ"], ["Sonido", "Sound"], ["Iluminación", "Lighting"], ["Lásers", "Lasers"],
  ["Pantallas LED", "LED screens"], ["Audio de ceremonia", "Ceremony audio"], ["Aún no sé", "Not sure yet"],
];

const FAQ = [
  ["¿Para qué tipo de eventos trabajan?", "Bodas, 15 años, cumpleaños, bar y bat mitzvah, eventos corporativos y fiestas privadas.",
   "What types of events do you do?", "Weddings, sweet 15s, birthdays, bar & bat mitzvahs, corporate events and private parties."],
  ["¿Qué música tocan?", "Open format: reggaeton, salsa, merengue, típico, bachata, house, electrónica, pop, throwbacks y lo que tu evento necesite.",
   "What music do you play?", "Open format: reggaeton, salsa, merengue, típico, bachata, house, electronic, pop, throwbacks and whatever your event needs."],
  ["¿Puedo pedir canciones?", "Sí. Antes del evento planificamos contigo las canciones que no pueden faltar y las que no quieres que suenen.",
   "Can I request songs?", "Yes. Before the event we plan the must-play songs and the ones you don't want with you."],
  ["¿Llevan su propio sonido e iluminación?", "Sí. El sonido, las luces, los lásers y las pantallas LED se incluyen según el paquete y el tamaño del evento.",
   "Do you bring your own sound and lighting?", "Yes. Sound, lights, lasers and LED screens are included depending on the package and event size."],
  ["¿Trabajan con mi wedding planner y el venue?", "Sí. Coordinamos horarios, montaje y momentos clave directamente con tu planner y el venue.",
   "Do you work with my wedding planner and venue?", "Yes. We coordinate timing, setup and key moments directly with your planner and venue."],
  ["¿Viajan fuera de la ciudad?", "Sí. Hacemos eventos en todo Panamá y también fuera del país.",
   "Do you travel?", "Yes. We do events all over Panama and abroad."],
  ["¿Con cuánta anticipación debo reservar?", "Lo antes posible, sobre todo para bodas y fechas de temporada alta.",
   "How far in advance should I book?", "As early as possible, especially for weddings and peak-season dates."],
  ["¿Cómo aparto mi fecha?", "Envía tu solicitud por la web o WhatsApp. Te confirmamos disponibilidad y con el abono queda apartada tu fecha.",
   "How do I reserve my date?", "Send your request through the website or WhatsApp. We confirm availability and the deposit locks your date."],
];

const SOCIAL_SVG = {
  instagram: '<path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 3.8c2.7 0 3 0 4 .1 2.7.1 4 1.4 4.1 4.1.1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.7-1.4 4-4.1 4.1-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.7-.1-4-1.4-4.1-4.1-.1-1-.1-1.3-.1-4s0-3 .1-4C4 5.3 5.3 4 8 3.9c1 0 1.3-.1 4-.1ZM12 2c-2.7 0-3.1 0-4.1.1C4.3 2.2 2.2 4.3 2.1 7.9 2 8.9 2 9.3 2 12s0 3.1.1 4.1c.1 3.6 2.2 5.7 5.8 5.8 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c3.6-.1 5.7-2.2 5.8-5.8.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-3.6-2.2-5.7-5.8-5.8C15.1 2 14.7 2 12 2Z"/>',
  facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z"/>',
  tiktok: '<path d="M16.6 2h-3.4v13.6a2.9 2.9 0 1 1-2-2.8V9.4a6.3 6.3 0 1 0 5.4 6.2V8.8a7.9 7.9 0 0 0 4.4 1.4V6.8a4.5 4.5 0 0 1-4.4-4.8Z"/>',
};

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- renderers ---------- */
function renderServices() {
  if (!$("#svcGrid")) return;
  $("#svcGrid").innerHTML = SERVICES.map((s) => {
    const [title, desc] = s[lang];
    return `<article class="svc reveal"><div class="svc-ic"><svg viewBox="0 0 24 24">${ICONS[s.ic]}</svg></div><h3>${title}</h3><p>${desc}</p></article>`;
  }).join("");
}
function renderGallery() {
  if (!$("#galGrid")) return;
  $("#galGrid").innerHTML = GALLERY.map((g, i) => `
    <figure class="gal-item ${g.size} reveal" data-type="${g.type}" data-i="${i}"><img src="${g.src}" alt="${esc(g.label)}" loading="lazy"></figure>`).join("");
}
function renderVideos() {
  if (!$("#vidGrid")) return;
  $("#vidGrid").innerHTML = VIDEOS.map((v) => `<div class="vid reveal"><video src="${v.src}" poster="${v.poster}" ${v.loop ? "autoplay muted loop" : 'controls preload="none"'} playsinline></video></div>`).join("");
}
function renderReviews() {
  const g = $("#revGrid"); if (!g) return;
  if (!REVIEWS.length) {
    g.innerHTML = `<div class="rev-empty">${t("Pronto publicaremos reseñas de nuestras parejas. ¿Celebraste con Sonolux? Nos encantaría saber tu opinión.", "Reviews from our couples are coming soon. Celebrated with Sonolux? We'd love to hear from you.")}
      <br><a class="btn btn-ghost btn-sm" href="${CONFIG.instagram}" target="_blank" rel="noopener">Instagram</a></div>`;
    return;
  }
  g.innerHTML = REVIEWS.map((r) => `<blockquote class="rev reveal"><div class="stars">★★★★★</div><p>“${esc(lang === "en" && r.textEN ? r.textEN : r.text)}”</p><cite>— ${esc(r.name)}${r.event ? ` · ${esc(r.event)}` : ""}</cite></blockquote>`).join("");
}
function renderFAQ() {
  if (!$("#faqList")) return;
  $("#faqList").innerHTML = FAQ.map(([qEs, aEs, qEn, aEn]) => `
    <div class="faq-item"><button class="faq-q" aria-expanded="false">${t(qEs, qEn)}</button><div class="faq-a"><div>${t(aEs, aEn)}</div></div></div>`).join("");
}
function renderFormServices() {
  if (!$("#svcChecks")) return;
  const checked = new Set($$("#svcChecks input:checked").map((i) => i.value));
  $("#svcChecks").innerHTML = FORM_SERVICES.map(([es, en]) => `<label><input type="checkbox" name="services" value="${es}"${checked.has(es) ? " checked" : ""}> ${t(es, en)}</label>`).join("");
}

/* ---------- language (Spanish is the base text, data-en holds English) ---------- */
function applyLang() {
  document.documentElement.lang = lang;
  $$("[data-en]").forEach((el) => {
    if (el.dataset.es === undefined) el.dataset.es = el.innerHTML;
    el.innerHTML = lang === "en" ? el.dataset.en : el.dataset.es;
  });
  $$("[data-ph-en]").forEach((el) => {
    if (el.dataset.phEs === undefined) el.dataset.phEs = el.placeholder;
    el.placeholder = lang === "en" ? el.dataset.phEn : el.dataset.phEs;
  });
  $("#langBtn").textContent = lang === "en" ? "ES" : "EN";
  $("#langBtn").setAttribute("aria-label", lang === "en" ? "Cambiar a español" : "Switch to English");
  renderServices(); renderGallery(); renderVideos(); renderReviews(); renderFAQ(); renderFormServices();
  applyContact(); observeReveal(); applyFilter(currentFilter);
}

/* ---------- contact wiring ---------- */
const QUOTE = $("#quote") ? "#quote" : "index.html#quote";
function waLink(msg) {
  const text = msg || t("¡Hola Sonolux! Quiero revisar disponibilidad para mi evento.", "Hi Sonolux! I'd like to check availability for my event.");
  return CONFIG.whatsapp ? `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}` : QUOTE;
}
function applyContact() {
  $$(".js-whatsapp").forEach((a) => { a.href = waLink(); if (CONFIG.whatsapp) { a.target = "_blank"; a.rel = "noopener"; } });
  $$(".js-call").forEach((a) => (a.href = CONFIG.phone ? `tel:${CONFIG.phone}` : QUOTE));
  $$(".js-instagram").forEach((a) => (a.href = CONFIG.instagram));
  $$(".js-email").forEach((a) => { a.href = CONFIG.email ? `mailto:${CONFIG.email}` : QUOTE; a.closest("li") && (a.closest("li").hidden = !CONFIG.email); });
  $$(".js-phone-text").forEach((a) => (a.textContent = CONFIG.phoneDisplay || t("Llamar", "Call")));
  $$(".js-email-text").forEach((a) => (a.textContent = CONFIG.email || "Email"));
  const soc = $("#socials");
  if (soc) soc.innerHTML = ["instagram", "facebook", "tiktok"].filter((k) => CONFIG[k])
    .map((k) => `<a href="${CONFIG[k]}" target="_blank" rel="noopener" aria-label="${k}"><svg viewBox="0 0 24 24">${SOCIAL_SVG[k]}</svg></a>`).join("");
}

/* ---------- gallery filter + lightbox ---------- */
let currentFilter = "all";
function applyFilter(f) {
  currentFilter = f;
  $$("#filters .chip").forEach((c) => c.classList.toggle("active", c.dataset.f === f));
  $$(".gal-item").forEach((it) => it.classList.toggle("hide", f !== "all" && it.dataset.type !== f));
}
$("#filters")?.addEventListener("click", (e) => { const c = e.target.closest(".chip"); if (c) applyFilter(c.dataset.f); });
let lbList = [], lbPos = 0;
function lbShow(pos) {
  lbPos = (pos + lbList.length) % lbList.length;
  const g = GALLERY[lbList[lbPos]];
  $("#lbBody").innerHTML = `<img src="${g.src}" alt="${esc(g.label)}">`;
  $("#lbCount").textContent = `${lbPos + 1} / ${lbList.length}`;
}
const lbClose = () => { if ($("#lightbox")) $("#lightbox").hidden = true; document.body.style.overflow = ""; };
$("#galGrid")?.addEventListener("click", (e) => {
  const it = e.target.closest(".gal-item"); if (!it) return;
  lbList = $$(".gal-item:not(.hide)").map((el) => +el.dataset.i);
  lbShow(lbList.indexOf(+it.dataset.i));
  $("#lightbox").hidden = false;
  document.body.style.overflow = "hidden";
});
$("#lightbox")?.addEventListener("click", (e) => {
  if (e.target.closest(".lb-prev")) return lbShow(lbPos - 1);
  if (e.target.closest(".lb-next")) return lbShow(lbPos + 1);
  if (e.target.closest(".lb-close") || e.target.id === "lightbox" || e.target.id === "lbBody") lbClose();
});
document.addEventListener("keydown", (e) => {
  if (!$("#lightbox") || $("#lightbox").hidden) return;
  if (e.key === "Escape") lbClose();
  if (e.key === "ArrowLeft") lbShow(lbPos - 1);
  if (e.key === "ArrowRight") lbShow(lbPos + 1);
});
let lbX = null;
$("#lightbox")?.addEventListener("touchstart", (e) => { lbX = e.touches[0].clientX; }, { passive: true });
$("#lightbox")?.addEventListener("touchend", (e) => {
  if (lbX === null) return;
  const dx = e.changedTouches[0].clientX - lbX; lbX = null;
  if (Math.abs(dx) > 40) lbShow(lbPos + (dx < 0 ? 1 : -1));
});

/* ---------- FAQ ---------- */
$("#faqList")?.addEventListener("click", (e) => {
  const q = e.target.closest(".faq-q"); if (!q) return;
  const item = q.parentElement; const open = !item.classList.contains("open");
  item.classList.toggle("open", open); q.setAttribute("aria-expanded", open);
});

/* ---------- nav ---------- */
const nav = $("#nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 30), { passive: true });
$("#burger").addEventListener("click", () => nav.classList.toggle("open"));
$("#navLinks").addEventListener("click", (e) => { if (e.target.closest("a")) nav.classList.remove("open"); });
$("#langBtn").addEventListener("click", () => {
  lang = lang === "en" ? "es" : "en";
  try { localStorage.setItem("sonolux-lang", lang); } catch (e) {}
  applyLang();
});

/* Buttons with data-type pre-select the event type in the form */
document.addEventListener("click", (e) => {
  const b = e.target.closest("a[data-type]"); if (!b) return;
  if ($("#eventType")) $("#eventType").value = b.dataset.type;
});

/* ---------- reveal on scroll ---------- */
let io;
function observeReveal() {
  if (!("IntersectionObserver" in window)) { $$(".reveal").forEach((el) => el.classList.add("in")); return; }
  io ||= new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12 });
  $$(".reveal:not(.in)").forEach((el) => io.observe(el));
}

/* ---------- quote form ---------- */
const form = $("#quoteForm");
const msg = $("#formMsg");
if (form) {
form.event_date.min = new Date().toISOString().slice(0, 10);
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (form._honey.value) return;
  let bad = false;
  $$("[required]", form).forEach((f) => { const ok = f.checkValidity(); f.classList.toggle("invalid", !ok); if (!ok) bad = true; });
  if (bad) { msg.className = "form-msg err"; msg.textContent = t("Por favor completa los campos obligatorios.", "Please fill in the required fields."); return; }

  const fd = new FormData(form);
  const data = Object.fromEntries([...fd.entries()].filter(([k]) => k !== "services" && k !== "_honey"));
  data.services = fd.getAll("services").join(", ") || "-";
  data.language = lang.toUpperCase();
  data._subject = `Nueva solicitud: ${data.event_type} — ${data.event_date} — ${data.name}`;
  data._template = "table";

  const btn = form.querySelector("button[type=submit]");
  btn.disabled = true;
  if (CONFIG.formEndpoint) {
    try {
      const r = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error(r.status);
      form.reset(); renderFormServices();
      msg.className = "form-msg ok";
      msg.textContent = t("¡Gracias! Tu solicitud fue enviada. Te contactaremos pronto.", "Thanks! Your request was sent. We'll get back to you soon.");
    } catch (err) {
      msg.className = "form-msg err";
      msg.textContent = t("Algo salió mal. Escríbenos por WhatsApp.", "Something went wrong. Please message us on WhatsApp.");
    }
  } else {
    const lines = [
      t("Nueva solicitud de evento", "New event request"),
      `${t("Nombre", "Name")}: ${data.name}`, `${t("Teléfono", "Phone")}: ${data.phone}`, `Email: ${data.email}`,
      `${t("Evento", "Event")}: ${data.event_type} — ${data.event_date}`, `${t("Lugar", "Venue")}: ${data.venue_city}`,
      `${t("Invitados", "Guests")}: ${data.guest_count || "-"}`, `${t("Servicios", "Services")}: ${data.services}`, data.message || "",
    ];
    window.open(waLink(lines.join("\n")), "_blank");
    msg.className = "form-msg ok";
    msg.textContent = t("Abriendo WhatsApp con tu solicitud…", "Opening WhatsApp with your request…");
  }
  btn.disabled = false;
});
$$("[required]", form).forEach((f) => f.addEventListener("input", () => f.classList.remove("invalid")));
}

/* ---------- init ---------- */
$("#year").textContent = new Date().getFullYear();
applyLang();
$$(".section .h2, .section .kicker, .feature-visual, .night-card, .pillars li").forEach((el) => el.classList.add("reveal"));
observeReveal();

/* ---------- intro: "Bienvenidos a" + logo, then blur/fade out ---------- */
(() => {
  const intro = $("#intro"); if (!intro) return;
  let seen = false;
  try { seen = sessionStorage.getItem("sonolux-intro") === "1"; sessionStorage.setItem("sonolux-intro", "1"); } catch (e) {}
  if (seen) { intro.remove(); document.body.classList.remove("intro-on"); return; }
  const close = () => {
    if (intro.classList.contains("out")) return;
    intro.classList.add("out");
    document.body.classList.remove("intro-on");
    setTimeout(() => intro.remove(), 1300);
  };
  setTimeout(() => { if ($("#introTap")?.hidden !== false) close(); }, 3400);
  setTimeout(close, 9000);
  intro.addEventListener("click", close);
})();

/* ---------- music player ---------- */
(() => {
  const audio = $("#bgMusic"), player = $("#player"), vol = $("#plVol");
  if (!audio) return;
  try {
    const v = sessionStorage.getItem("sonolux-vol"); if (v !== null) vol.value = v;
    const tm = +sessionStorage.getItem("sonolux-time"); if (tm) audio.currentTime = tm;
  } catch (e) {}
  audio.volume = +vol.value;
  addEventListener("pagehide", () => { try { sessionStorage.setItem("sonolux-time", audio.currentTime); sessionStorage.setItem("sonolux-vol", vol.value); } catch (e) {} });
  let userPaused = false;
  const sync = () => player.classList.toggle("playing", !audio.paused);
  audio.addEventListener("play", sync); audio.addEventListener("pause", sync);
  const play = () => audio.play().catch(() => {});
  $("#plToggle").addEventListener("click", (e) => {
    e.stopPropagation();
    if (audio.paused) { userPaused = false; play(); } else { userPaused = true; audio.pause(); }
  });
  vol.addEventListener("input", () => (audio.volume = +vol.value));
  vol.addEventListener("click", (e) => e.stopPropagation());
  audio.play().catch(() => {
    const tap = $("#introTap"); if (tap) tap.hidden = false;
    const start = () => { if (!userPaused) play(); ["pointerdown", "keydown", "touchend"].forEach((ev) => removeEventListener(ev, start)); };
    ["pointerdown", "keydown", "touchend"].forEach((ev) => addEventListener(ev, start));
  });
})();

/* ---------- back to top ---------- */
(() => {
  const btn = $("#toTop"); if (!btn) return;
  addEventListener("scroll", () => btn.classList.toggle("show", scrollY > 700), { passive: true });
  btn.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
})();

/* ---------- cookie notice (essential storage only) ---------- */
(() => {
  const bar = $("#cookieBar"); if (!bar) return;
  let ok = null; try { ok = localStorage.getItem("sonolux-cookies"); } catch (e) {}
  if (!ok) setTimeout(() => (bar.hidden = false), $("#intro") ? 3800 : 600);
  $("#cookieOk")?.addEventListener("click", () => { try { localStorage.setItem("sonolux-cookies", "ok"); } catch (e) {} bar.hidden = true; });
  $$(".js-cookie-settings").forEach((b) => b.addEventListener("click", () => (bar.hidden = false)));
})();
