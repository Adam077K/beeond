/* ══════════════════════════════════════════════════════════════════════
   Beeond v7 · The Blueprint — concept behaviour
   Deterministic, fire-once. No loops. Reduced-motion handled in CSS.
   ══════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";
  var root = document.documentElement;
  var body = document.body;

  /* ── 1. Hero draw → build (one shot on load) ───────────────────────── */
  function runHero() {
    // two frames so the hidden initial state paints before we animate in
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        root.classList.add("hero-drawn");
      });
    });
  }
  if (document.readyState === "complete") runHero();
  else window.addEventListener("load", runHero);

  /* ── 2. Scroll reveals — fire once ─────────────────────────────────── */
  var reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var ro = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            ro.unobserve(e.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) { ro.observe(el); });

    /* dark art (swarm + final): light cells / build the cell, once */
    var ao = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            ao.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll("[data-dark-art]").forEach(function (el) { ao.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
    document.querySelectorAll("[data-dark-art]").forEach(function (el) { el.classList.add("in"); });
  }

  /* ── 3. Header: glass pill on scroll + night mode over dark bands ───── */
  var header = document.querySelector("[data-header]");
  var inner = header.querySelector(".header-inner");
  var darkSections = document.querySelectorAll("[data-dark-section]");

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (y > 24) {
      header.classList.add("header-scrolled");
      inner.classList.add("header-glass");
    } else {
      header.classList.remove("header-scrolled");
      inner.classList.remove("header-glass");
    }
    // night mode: is the header strip over a deep section?
    var probe = header.getBoundingClientRect().bottom - 8;
    var onDark = false;
    darkSections.forEach(function (s) {
      var r = s.getBoundingClientRect();
      if (r.top <= probe && r.bottom >= probe) onDark = true;
    });
    header.classList.toggle("on-dark", onDark);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── 4. Language toggle (header button + dock) ─────────────────────── */
  function setLang(lang) {
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "he" ? "rtl" : "ltr");
    syncSeg("lang", lang);
    // header button label flips automatically via i18n spans
    onScroll();
  }
  function toggleLang() {
    setLang(root.getAttribute("lang") === "he" ? "en" : "he");
  }
  var headerToggle = document.querySelector("[data-locale-toggle]");
  if (headerToggle) headerToggle.addEventListener("click", toggleLang);

  /* ── 5. Font + hero-copy toggles ───────────────────────────────────── */
  function setFont(v) {
    body.classList.toggle("font-b", v === "b");
    body.classList.toggle("font-a", v === "a");
    syncSeg("font", v);
  }
  function setCopy(v) {
    body.classList.toggle("copy-choice-b", v === "b");
    syncSeg("copy", v);
  }

  /* ── 6. Segmented control wiring + state sync ──────────────────────── */
  function syncSeg(name, val) {
    var seg = document.querySelector('[data-toggle="' + name + '"]');
    if (!seg) return;
    seg.querySelectorAll("button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.val === val));
    });
  }
  document.querySelectorAll(".seg").forEach(function (seg) {
    var name = seg.dataset.toggle;
    seg.addEventListener("click", function (ev) {
      var btn = ev.target.closest("button[data-val]");
      if (!btn) return;
      var v = btn.dataset.val;
      if (name === "font") setFont(v);
      else if (name === "lang") setLang(v);
      else if (name === "copy") setCopy(v);
    });
  });

  // initial state: HE · Font A (serif) · Hero copy B
  body.classList.add("font-a");
  syncSeg("font", "a");
  syncSeg("lang", "he");
  syncSeg("copy", "b");
})();
