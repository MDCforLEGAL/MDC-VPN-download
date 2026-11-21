/* MDC VPN — bilingual copy (TR / EN) */
(function () {
  "use strict";

  var STRINGS = {
    en: {
      "page.title": "MDC VPN — Open-source VPN client for Android & Windows",
      "page.desc": "Open-source OpenVPN and WireGuard client for Android and Windows x64. Bring your own .ovpn or .conf profile. No accounts, no telemetry, no bloat.",
      "a11y.skip": "Skip to content",
      "a11y.menu": "Menu",

      "nav.features": "Features",
      "nav.architecture": "Architecture & Security",
      "nav.download": "Download",

      "hero.badge.platforms": "Android · Windows x64",
      "hero.title": 'OpenVPN &amp; WireGuard, <span class="accent">under your control.</span>',
      "hero.sub": "A distraction-free, open-source VPN client for Android and Windows x64. Import your own .ovpn or .conf profile, connect in one tap and watch the session in real time. No accounts, no telemetry, no bloat.",
      "hero.cta.android": "Download for Android (.APK)",
      "hero.cta.windows": "Download for Windows x64 (.ZIP)",
      "hero.cta.github": "View source on GitHub",
      "hero.meta.protocols": "Protocols",
      "hero.meta.requires": "Requires",
      "hero.meta.license": "License",

      "mockup.profile": "Server profile",
      "mockup.download": "Download",
      "mockup.upload": "Upload",
      "mockup.hint": "Interactive preview — tap the ring or the button to connect.",

      "status.disconnected": "Not connected",
      "status.connecting": "Connecting",
      "status.protected": "Protected",
      "status.disconnecting": "Disconnecting",
      "btn.connect": "Connect",
      "btn.disconnect": "Disconnect",
      "btn.cancel": "Cancel",

      "arch.eyebrow": "Architecture & Security",
      "arch.title": "Two editions. One calm interface.",
      "arch.sub": "Each edition drives a real native tunnel — no shims, no hidden relays. Profiles and credentials stay on the device, inside the app sandbox.",
      "arch.s1": "Isolated tunnel process with AIDL status callbacks.",
      "arch.s2": "Tunnel verified through ConnectivityManager, not UI state.",
      "arch.s3": "Hard connect timeout, with the real error surfaced to you.",
      "arch.s4": "Telemetry events, analytics SDKs and third-party trackers.",

      "android.title": "Android Edition",
      "android.desc": "A native app built on Kotlin and Material Design 3. The tunnel runs through Android's own VpnService with the OpenVPN 3 core, in a dedicated process.",
      "android.f1": "OpenVPN 3 (OVPN3) core via libovpn3.so, wired into VpnService.",
      "android.f2": "Persistent foreground notification with a live chronometer and quick disconnect.",
      "android.f3": "State recovery after a process kill — the app verifies the live tunnel, not a cached flag.",
      "android.f4": "Private storage with allowBackup=false; imported profiles never leave the sandbox.",

      "win.title": "Windows x64 Edition",
      "win.desc": "A lightweight portable desktop app. No installer and no service to manage — double-click MDC-VPN.exe and elevate when Windows asks.",
      "win.f1": "Bundled OpenVPN Community with the Wintun driver, plus native WireGuard for Windows.",
      "win.f2": "UAC elevation prompt only when the tunnel actually needs it.",
      "win.f3": "Temporary credential files are written for the session and cleaned up on disconnect.",
      "win.f4": "One portable folder — run it from a USB stick and remove it without a trace.",

      "feat.eyebrow": "Features",
      "feat.title": "Everything the tunnel needs. Nothing else.",
      "feat.sub": "Built for teams that run their own VPN servers and want a client that stays out of the way.",
      "feat.f1.title": "Multi-protocol support",
      "feat.f1.desc": "Import .ovpn (OpenVPN) and .conf (WireGuard) profiles straight from the file picker. No conversion steps and no cloud upload.",
      "feat.f2.title": "One-tap control & live metrics",
      "feat.f2.desc": "Connect or disconnect instantly, follow the session duration counter and watch upload and download speeds in real time.",
      "feat.f3.title": "Legacy & enterprise compatibility",
      "feat.f3.desc": "Full support for BF-CBC, ns-cert-type, tls-remote, LZO, TLS 1.0 and auth-user-pass — old infrastructure keeps working.",
      "feat.f4.title": "Smart fail-safe & diagnostics",
      "feat.f4.desc": "A 45-second connection timeout with plain-language error diagnostics, instead of a spinner that never resolves.",
      "feat.f5.title": "Zero-trace local privacy",
      "feat.f5.desc": "Profiles live in a private app sandbox with allowBackup=false. No telemetry, and temporary auth files are deleted on disconnect.",
      "feat.f6.title": "Fully open source (AGPL-3.0)",
      "feat.f6.desc": "Transparent automated builds via GitHub Actions — read the source, check the workflow, verify the artifact yourself.",

      "dl.eyebrow": "Download",
      "dl.title": "Get the build for your platform.",
      "dl.sub": "Both editions ship from the same release. Bring your own .ovpn or .conf server profile — MDC VPN does not resell or route your traffic.",
      "dl.android.req": "APK · Android 7.0+ (SDK 24+)",
      "dl.android.i1": "Download the .APK from the latest release.",
      "dl.android.i2": "Allow installs from your browser or file manager when prompted.",
      "dl.android.i3": "Import your .ovpn or .conf profile inside the app, then connect.",
      "dl.android.cta": "Download APK",
      "dl.win.req": "Portable ZIP · Windows 10/11",
      "dl.win.i1": "Download and extract the portable .ZIP archive.",
      "dl.win.i2": "Run MDC-VPN.exe and approve the UAC elevation prompt.",
      "dl.win.i3": "Open your .ovpn or .conf profile from the app window.",
      "dl.win.cta": "Download ZIP",
      "dl.note": "MDC VPN is a client only. You need an OpenVPN or WireGuard server profile from your own infrastructure or provider — the app does not include a subscription or a default server.",
      "dl.all": "Browse all releases",

      "log.eyebrow": "Release notes",
      "log.title": "Changelog",
      "log.sub": "Every build ships as a GitHub Release. The newest entries are listed here, pulled straight from the repository.",
      "log.live": "Live from GitHub",
      "log.loading": "Loading release notes…",
      "log.error": "Release notes could not be loaded right now. Read them directly on GitHub.",
      "log.empty": "No releases have been published yet.",
      "log.emptyBody": "This release was published without notes.",
      "log.latest": "Latest",
      "log.all": "All releases on GitHub",

      "footer.tagline": "Open-source OpenVPN and WireGuard client for Android and Windows x64.",
      "footer.repo": "Repository",
      "footer.releases": "Releases",
      "footer.issues": "Issues",
      "footer.license": "AGPL-3.0 License",
      "footer.rights": "Licensed under AGPL-3.0 · Provided as is, without warranty."
    },

    tr: {
      "page.title": "MDC VPN — Android ve Windows için açık kaynak VPN istemcisi",
      "page.desc": "Android ve Windows x64 için açık kaynak OpenVPN ve WireGuard istemcisi. Kendi .ovpn veya .conf profilinizi kullanın. Hesap yok, telemetri yok, gereksiz yük yok.",
      "a11y.skip": "İçeriğe geç",
      "a11y.menu": "Menü",

      "nav.features": "Özellikler",
      "nav.architecture": "Mimari ve Güvenlik",
      "nav.download": "İndir",

      "hero.badge.platforms": "Android · Windows x64",
      "hero.title": 'OpenVPN ve WireGuard, <span class="accent">tamamen sizin kontrolünüzde.</span>',
      "hero.sub": "Android ve Windows x64 için dikkat dağıtmayan, açık kaynak bir VPN istemcisi. Kendi .ovpn veya .conf profilinizi içe aktarın, tek dokunuşla bağlanın ve oturumu anlık olarak izleyin. Hesap yok, telemetri yok, gereksiz yük yok.",
      "hero.cta.android": "Android için indir (.APK)",
      "hero.cta.windows": "Windows x64 için indir (.ZIP)",
      "hero.cta.github": "Kaynak kodu GitHub'da görüntüle",
      "hero.meta.protocols": "Protokoller",
      "hero.meta.requires": "Gereksinim",
      "hero.meta.license": "Lisans",

      "mockup.profile": "Sunucu profili",
      "mockup.download": "İndirme",
      "mockup.upload": "Yükleme",
      "mockup.hint": "Etkileşimli önizleme — bağlanmak için halkaya veya düğmeye dokunun.",

      "status.disconnected": "Bağlı değil",
      "status.connecting": "Bağlanıyor",
      "status.protected": "Güvende",
      "status.disconnecting": "Kesiliyor",
      "btn.connect": "Bağlan",
      "btn.disconnect": "Bağlantıyı Kes",
      "btn.cancel": "Vazgeç",

      "arch.eyebrow": "Mimari ve Güvenlik",
      "arch.title": "İki sürüm. Tek sakin arayüz.",
      "arch.sub": "Her sürüm gerçek bir yerel tünel üzerinde çalışır — taklit katman yok, gizli aktarım sunucusu yok. Profiller ve kimlik bilgileri cihazda, uygulama korumalı alanında kalır.",
      "arch.s1": "AIDL durum geri çağrılarıyla çalışan ayrı tünel süreci.",
      "arch.s2": "Tünel, arayüz durumuyla değil ConnectivityManager ile doğrulanır.",
      "arch.s3": "Sabit bağlantı zaman aşımı; gerçek hata doğrudan size gösterilir.",
      "arch.s4": "Telemetri olayı, analiz SDK'sı ve üçüncü taraf izleyici.",

      "android.title": "Android Sürümü",
      "android.desc": "Kotlin ve Material Design 3 üzerine kurulu yerel uygulama. Tünel, ayrı bir süreçte OpenVPN 3 çekirdeğiyle Android'in kendi VpnService altyapısı üzerinden kurulur.",
      "android.f1": "libovpn3.so üzerinden OpenVPN 3 (OVPN3) çekirdeği, VpnService'e bağlı.",
      "android.f2": "Canlı kronometre ve hızlı bağlantı kesme aksiyonu içeren kalıcı foreground bildirimi.",
      "android.f3": "Süreç öldürüldükten sonra durum geri yükleme — uygulama önbellekteki bayrağı değil, açık tüneli doğrular.",
      "android.f4": "allowBackup=false ile özel depolama; içe aktarılan profiller korumalı alandan çıkmaz.",

      "win.title": "Windows x64 Sürümü",
      "win.desc": "Hafif ve taşınabilir bir masaüstü uygulaması. Kurulum yok, yönetilecek servis yok — MDC-VPN.exe dosyasına çift tıklayın, Windows istediğinde yönetici izni verin.",
      "win.f1": "Wintun sürücüsüyle birlikte gelen OpenVPN Community ve yerel WireGuard for Windows desteği.",
      "win.f2": "UAC yönetici izni yalnızca tünel gerçekten ihtiyaç duyduğunda istenir.",
      "win.f3": "Geçici kimlik dosyaları yalnızca oturum için yazılır ve bağlantı kesilince silinir.",
      "win.f4": "Tek taşınabilir klasör — USB bellekten çalıştırın, iz bırakmadan kaldırın.",

      "feat.eyebrow": "Özellikler",
      "feat.title": "Tünelin ihtiyacı olan her şey. Fazlası yok.",
      "feat.sub": "Kendi VPN sunucularını işleten ve yolundan çekilen bir istemci isteyen ekipler için.",
      "feat.f1.title": "Çoklu protokol desteği",
      "feat.f1.desc": ".ovpn (OpenVPN) ve .conf (WireGuard) profillerini doğrudan dosya seçiciden içe aktarın. Dönüştürme adımı yok, buluta yükleme yok.",
      "feat.f2.title": "Tek dokunuşla kontrol ve anlık ölçümler",
      "feat.f2.desc": "Anında bağlanın veya bağlantıyı kesin; oturum süresi sayacını takip edin, indirme ve yükleme hızlarını gerçek zamanlı izleyin.",
      "feat.f3.title": "Eski ve kurumsal sunucu uyumluluğu",
      "feat.f3.desc": "BF-CBC, ns-cert-type, tls-remote, LZO, TLS 1.0 ve auth-user-pass için tam destek — eski altyapınız çalışmaya devam eder.",
      "feat.f4.title": "Akıllı güvenlik ağı ve teşhis",
      "feat.f4.desc": "Sonsuza kadar dönen bir yükleme animasyonu yerine 45 saniyelik zaman aşımı ve anlaşılır hata teşhisi.",
      "feat.f5.title": "İz bırakmayan yerel gizlilik",
      "feat.f5.desc": "Profiller allowBackup=false ile özel uygulama alanında tutulur. Telemetri yok; geçici kimlik dosyaları bağlantı kesilirken silinir.",
      "feat.f6.title": "Tamamen açık kaynak (AGPL-3.0)",
      "feat.f6.desc": "GitHub Actions ile şeffaf otomatik derlemeler — kaynağı okuyun, iş akışını inceleyin, çıktıyı kendiniz doğrulayın.",

      "dl.eyebrow": "İndir",
      "dl.title": "Platformunuza uygun sürümü edinin.",
      "dl.sub": "İki sürüm de aynı sürümden yayınlanır. Kendi .ovpn veya .conf sunucu profilinizi getirin — MDC VPN trafiğinizi satmaz veya yönlendirmez.",
      "dl.android.req": "APK · Android 7.0+ (SDK 24+)",
      "dl.android.i1": "En son sürümden .APK dosyasını indirin.",
      "dl.android.i2": "Tarayıcı veya dosya yöneticisi istediğinde bilinmeyen kaynak kurulumuna izin verin.",
      "dl.android.i3": ".ovpn veya .conf profilinizi uygulama içinde içe aktarın, ardından bağlanın.",
      "dl.android.cta": "APK indir",
      "dl.win.req": "Taşınabilir ZIP · Windows 10/11",
      "dl.win.i1": "Taşınabilir .ZIP arşivini indirip çıkarın.",
      "dl.win.i2": "MDC-VPN.exe dosyasını çalıştırın ve UAC yönetici iznini onaylayın.",
      "dl.win.i3": ".ovpn veya .conf profilinizi uygulama penceresinden açın.",
      "dl.win.cta": "ZIP indir",
      "dl.note": "MDC VPN yalnızca bir istemcidir. Kendi altyapınızdan veya sağlayıcınızdan aldığınız bir OpenVPN ya da WireGuard sunucu profiline ihtiyacınız vardır — uygulama abonelik veya varsayılan sunucu içermez.",
      "dl.all": "Tüm sürümleri görüntüle",

      "log.eyebrow": "Sürüm notları",
      "log.title": "Sürüm Geçmişi",
      "log.sub": "Her derleme bir GitHub Release olarak yayınlanır. En yeni kayıtlar doğrudan depodan alınarak burada listelenir.",
      "log.live": "GitHub'dan canlı",
      "log.loading": "Sürüm notları yükleniyor…",
      "log.error": "Sürüm notları şu anda yüklenemedi. Notları doğrudan GitHub üzerinden okuyabilirsiniz.",
      "log.empty": "Henüz yayınlanmış bir sürüm yok.",
      "log.emptyBody": "Bu sürüm not eklenmeden yayınlanmış.",
      "log.latest": "En son",
      "log.all": "GitHub'da tüm sürümler",

      "footer.tagline": "Android ve Windows x64 için açık kaynak OpenVPN ve WireGuard istemcisi.",
      "footer.repo": "Depo",
      "footer.releases": "Sürümler",
      "footer.issues": "Hatalar",
      "footer.license": "AGPL-3.0 Lisansı",
      "footer.rights": "AGPL-3.0 ile lisanslanmıştır · Olduğu gibi, garanti verilmeden sunulur."
    }
  };

  var STORAGE_KEY = "mdcvpn.lang";
  var listeners = [];
  var current = "en";

  function detect() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "tr" || saved === "en") return saved;
    } catch (e) {}
    var list = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || "en"];
    for (var i = 0; i < list.length; i++) {
      if (String(list[i]).toLowerCase().indexOf("tr") === 0) return "tr";
    }
    return "en";
  }

  function t(key) {
    var dict = STRINGS[current] || STRINGS.en;
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : (STRINGS.en[key] || key);
  }

  function apply(lang) {
    current = (lang === "tr") ? "tr" : "en";
    var dict = STRINGS[current];

    document.documentElement.lang = current;
    document.title = dict["page.title"];
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", dict["page.desc"]);

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", dict["page.title"]);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", dict["page.desc"]);
    var twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", dict["page.title"]);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n")];
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n-html")];
      if (typeof value === "string") el.innerHTML = value;
    });

    var menuBtn = document.querySelector("[aria-controls='nav-links']");
    if (menuBtn) menuBtn.setAttribute("aria-label", dict["a11y.menu"]);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === current;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    listeners.forEach(function (fn) { fn(current); });
  }

  window.MDCi18n = {
    t: t,
    apply: apply,
    get lang() { return current; },
    onChange: function (fn) { listeners.push(fn); },
    set: function (lang, persist) {
      apply(lang);
      if (persist) {
        try { localStorage.setItem(STORAGE_KEY, current); } catch (e) {}
      }
    },
    init: function () { apply(detect()); }
  };
})();
