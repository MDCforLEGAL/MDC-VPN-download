/* MDC VPN — interactions */
(function () {
  "use strict";

  var i18n = window.MDCi18n;
  i18n.init();

  /* ── Language switcher ─────────────────────────────── */
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      i18n.set(btn.getAttribute("data-lang"), true);
    });
  });

  /* ── Mobile menu ───────────────────────────────────── */
  var menuBtn = document.getElementById("menu-btn");
  var navLinks = document.getElementById("nav-links");

  function setMenu(open) {
    navLinks.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  menuBtn.addEventListener("click", function () {
    setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () { setMenu(false); });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navLinks.classList.contains("is-open")) {
      setMenu(false);
      menuBtn.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) setMenu(false);
  });

  /* ── App mockup ────────────────────────────────────── */
  var device = document.getElementById("device");
  var statusLabel = document.getElementById("status-label");
  var timerEl = document.getElementById("session-timer");
  var toggleBtn = document.getElementById("device-toggle");
  var toggleLabel = document.getElementById("toggle-label");
  var ringWrap = document.querySelector(".ring-wrap");
  var profileSelect = document.getElementById("profile-select");
  var protoChip = document.getElementById("proto-chip");
  var speedDown = document.getElementById("speed-down");
  var speedUp = document.getElementById("speed-up");

  var state = "disconnected";
  var elapsed = 14 * 60 + 32;
  var timerId = null;
  var speedId = null;
  var transitionId = null;
  var dl = 24.6;
  var ul = 4.2;

  function t(key) { return i18n.t(key); }

  function formatTime(total) {
    var h = Math.floor(total / 3600);
    var m = Math.floor((total % 3600) / 60);
    var s = total % 60;
    return [h, m, s].map(function (n) { return String(n).padStart(2, "0"); }).join(":");
  }

  function formatSpeed(v) {
    return v.toFixed(1) + " <em>MB/s</em>";
  }

  function clearTimers() {
    clearInterval(timerId);
    clearInterval(speedId);
    clearTimeout(transitionId);
    timerId = speedId = transitionId = null;
  }

  function paint() {
    device.setAttribute("data-state", state);
    statusLabel.textContent = t("status." + state);

    var btnKey = state === "protected" ? "btn.disconnect"
      : state === "connecting" ? "btn.cancel"
      : "btn.connect";
    toggleLabel.textContent = t(btnKey);
    ringWrap.setAttribute("aria-label", t(btnKey));

    if (state !== "protected") {
      timerEl.textContent = state === "disconnected" ? "00:00:00" : formatTime(elapsed);
    }
    if (state !== "protected") {
      speedDown.innerHTML = formatSpeed(0);
      speedUp.innerHTML = formatSpeed(0);
    }
  }

  function startSession() {
    timerEl.textContent = formatTime(elapsed);
    speedDown.innerHTML = formatSpeed(dl);
    speedUp.innerHTML = formatSpeed(ul);

    timerId = setInterval(function () {
      elapsed += 1;
      timerEl.textContent = formatTime(elapsed);
    }, 1000);

    speedId = setInterval(function () {
      dl = Math.min(96, Math.max(1.2, dl + (Math.random() - 0.45) * 6));
      ul = Math.min(24, Math.max(0.2, ul + (Math.random() - 0.5) * 1.6));
      speedDown.innerHTML = formatSpeed(dl);
      speedUp.innerHTML = formatSpeed(ul);
    }, 1200);
  }

  function toState(next) {
    clearTimers();
    state = next;
    paint();

    if (next === "connecting") {
      transitionId = setTimeout(function () { toState("protected"); }, 1400);
    } else if (next === "protected") {
      startSession();
    } else if (next === "disconnecting") {
      transitionId = setTimeout(function () { toState("disconnected"); }, 900);
    } else if (next === "disconnected") {
      elapsed = 0;
      timerEl.textContent = "00:00:00";
    }
  }

  function toggleConnection() {
    if (state === "disconnected") {
      elapsed = 14 * 60 + 32;
      toState("connecting");
    } else if (state === "connecting") {
      toState("disconnected");
    } else if (state === "protected") {
      toState("disconnecting");
    }
  }

  toggleBtn.addEventListener("click", toggleConnection);

  ringWrap.setAttribute("role", "button");
  ringWrap.setAttribute("tabindex", "0");
  ringWrap.addEventListener("click", toggleConnection);
  ringWrap.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleConnection();
    }
  });

  profileSelect.addEventListener("change", function () {
    protoChip.textContent = profileSelect.value.endsWith(".conf") ? "WIREGUARD" : "OVPN3";
  });

  i18n.onChange(paint);
  paint();

  /* ── Latest release tag (progressive enhancement) ──── */
  var REPO = "MDCforLEGAL/MDC-VPN";
  var RELEASES = "https://github.com/" + REPO + "/releases";

  function setDownloadLinks(tag, assets) {
    document.querySelectorAll("[data-release-tag]").forEach(function (el) {
      el.textContent = tag;
    });
    ["apk", "zip"].forEach(function (kind) {
      var asset = assets.find(function (a) {
        return kind === "apk" ? /\.apk$/i.test(a.name) : /\.zip$/i.test(a.name);
      });
      if (!asset) return;
      document.querySelectorAll('[data-download="' + kind + '"]').forEach(function (el) {
        el.setAttribute("href", asset.browser_download_url);
      });
    });
  }

  fetch("https://api.github.com/repos/" + REPO + "/releases/latest", {
    headers: { Accept: "application/vnd.github+json" }
  })
    .then(function (res) { return res.ok ? res.json() : null; })
    .then(function (data) {
      if (!data || !data.tag_name) return;
      setDownloadLinks(data.tag_name, Array.isArray(data.assets) ? data.assets : []);
    })
    .catch(function () {
      /* Offline or rate limited: the static /releases/latest links stay in place. */
    });

  /* ── Changelog (GitHub release notes) ──────────────── */
  var logList = document.getElementById("changelog-list");
  var cachedReleases = null;

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Release notes arrive as untrusted Markdown: escape first, then style. */
  function inlineMarkdown(text) {
    return text
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  function renderNotes(markdown) {
    var lines = escapeHtml(String(markdown).replace(/\r/g, "")).split("\n");
    var html = [];
    var inList = false;
    var inCode = false;

    function closeList() {
      if (inList) { html.push("</ul>"); inList = false; }
    }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];

      if (/^\s*```/.test(line)) {
        closeList();
        html.push(inCode ? "</pre>" : "<pre>");
        inCode = !inCode;
        continue;
      }
      if (inCode) { html.push(line + "\n"); continue; }
      if (!line.trim()) { closeList(); continue; }

      var heading = line.match(/^\s*#{1,6}\s+(.*)$/);
      if (heading) {
        closeList();
        html.push('<p class="md-h">' + inlineMarkdown(heading[1]) + "</p>");
        continue;
      }

      var bullet = line.match(/^\s*[-*]\s+(.*)$/);
      if (bullet) {
        if (!inList) { html.push("<ul>"); inList = true; }
        html.push("<li>" + inlineMarkdown(bullet[1]) + "</li>");
        continue;
      }

      closeList();
      html.push("<p>" + inlineMarkdown(line.trim()) + "</p>");
    }

    closeList();
    if (inCode) html.push("</pre>");
    return html.join("");
  }

  function formatReleaseDate(iso) {
    var date = new Date(iso);
    if (isNaN(date.getTime())) return "";
    try {
      return new Intl.DateTimeFormat(i18n.lang === "tr" ? "tr-TR" : "en-GB", {
        day: "2-digit", month: "short", year: "numeric"
      }).format(date);
    } catch (e) {
      return date.toISOString().slice(0, 10);
    }
  }

  function releaseState(message, withLink) {
    var p = document.createElement("p");
    p.className = "changelog-state";
    p.textContent = message;
    if (withLink) {
      p.appendChild(document.createTextNode(" "));
      var a = document.createElement("a");
      a.href = RELEASES;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = t("log.all");
      p.appendChild(a);
    }
    logList.innerHTML = "";
    logList.appendChild(p);
    logList.setAttribute("aria-busy", "false");
  }

  function renderReleases(releases) {
    logList.innerHTML = "";

    if (!releases.length) {
      releaseState(t("log.empty"), true);
      return;
    }

    releases.slice(0, 5).forEach(function (release, index) {
      var item = document.createElement("details");
      item.className = "release";
      if (index === 0) item.open = true;

      var summary = document.createElement("summary");
      var tag = release.tag_name || release.name || "—";

      var tagEl = document.createElement("span");
      tagEl.className = "release-tag mono";
      tagEl.textContent = tag;

      var nameEl = document.createElement("span");
      nameEl.className = "release-name";
      nameEl.textContent = release.name || tag;

      summary.appendChild(tagEl);
      summary.appendChild(nameEl);

      if (index === 0) {
        var badge = document.createElement("span");
        badge.className = "badge mono";
        badge.textContent = t("log.latest");
        summary.appendChild(badge);
      }

      var dateEl = document.createElement("span");
      dateEl.className = "release-date mono";
      dateEl.textContent = formatReleaseDate(release.published_at);
      summary.appendChild(dateEl);

      summary.insertAdjacentHTML("beforeend",
        '<svg class="release-chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>');

      var body = document.createElement("div");
      body.className = "release-body";
      var notes = typeof release.body === "string" ? release.body.trim() : "";
      body.innerHTML = notes
        ? renderNotes(notes)
        : "<p>" + escapeHtml(t("log.emptyBody")) + "</p>";

      item.appendChild(summary);
      item.appendChild(body);
      logList.appendChild(item);
    });

    logList.setAttribute("aria-busy", "false");
  }

  i18n.onChange(function () {
    if (cachedReleases) renderReleases(cachedReleases);
  });

  fetch("https://api.github.com/repos/" + REPO + "/releases?per_page=5", {
    headers: { Accept: "application/vnd.github+json" }
  })
    .then(function (res) {
      if (!res.ok) throw new Error("GitHub API " + res.status);
      return res.json();
    })
    .then(function (data) {
      cachedReleases = Array.isArray(data) ? data : [];
      renderReleases(cachedReleases);
    })
    .catch(function () {
      releaseState(t("log.error"), true);
    });

  document.getElementById("year").textContent = String(new Date().getFullYear());
})();
