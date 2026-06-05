// AutoNexa Website — theme toggle, language toggle, mobile nav, FAQ, reveal animations

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const themeToggle = document.getElementById("themeToggle");
  const themeText = document.getElementById("themeText");
  const langToggle = document.getElementById("langToggle");

  const translations = {
    en: {
      "ui.language": "EN",
      "ui.theme.dark": "Dark",
      "ui.theme.light": "Light",

      "nav.overview": "Overview",
      "nav.demo": "Demo",
      "nav.architecture": "Architecture",
      "nav.results": "Results",
      "nav.resources": "Resources",
      "nav.faq": "FAQ",
      "nav.team": "Team",

      "hero.eyebrow": "METU EE493 / EE494 Project",
      "hero.title": "Autonomous Parking & Recall System",
      "hero.lead": "AutoNexa is a compact autonomous vehicle prototype that maps its surroundings, parks itself, and returns to a selected position through a mobile operator console.",
      "hero.ctaDemo": "Watch Demo",
      "hero.ctaResults": "View Results",
      "hero.logoCaption": "Live mapping, autonomous parking, recall, and mobile control.",

      "overview.label": "Overview",
      "overview.title": "What AutoNexa Does",
      "overview.text": "The system combines sensing, navigation, embedded control, and a mobile app into one small-scale autonomous parking platform.",
      "overview.card1.title": "Autonomous Parking",
      "overview.card1.text": "The vehicle drives to a selected parking slot and performs the maneuver without manual control.",
      "overview.card2.title": "Vehicle Recall",
      "overview.card2.text": "The user can command the robot to return to a saved position from the mobile app.",
      "overview.card3.title": "Live Environment Awareness",
      "overview.card3.text": "LiDAR-based perception helps the robot understand the indoor test area and avoid obstacles.",
      "overview.card4.title": "Mobile Operator Console",
      "overview.card4.text": "The app provides control, navigation commands, system status, and emergency stop access.",

      "demo.label": "Demo",
      "demo.title": "Prototype Video",
      "demo.text": "Add your prototype video here to show autonomous navigation, parking, recall behavior, and mobile app operation.",
      "demo.noteTitle": "Suggested demo content:",
      "demo.noteText": "Mapping → autonomous parking → recall → emergency stop.",

      "architecture.label": "Architecture",
      "architecture.title": "A Simple, Safe Control Chain",
      "architecture.text": "AutoNexa follows a layered structure: sensing first, decision-making next, and actuator commands only after safety checks.",
      "architecture.step1.title": "Sense",
      "architecture.step1.text": "LiDAR scans the indoor test environment.",
      "architecture.step2.title": "Map",
      "architecture.step2.text": "The robot builds and updates a live map.",
      "architecture.step3.title": "Plan",
      "architecture.step3.text": "The navigation stack selects a safe route.",
      "architecture.step4.title": "Check",
      "architecture.step4.text": "Commands pass through software and hardware safety layers.",
      "architecture.step5.title": "Move",
      "architecture.step5.text": "The embedded controller drives the steering and motors.",

      "results.label": "Results",
      "results.title": "Updated Complete-System Results",
      "results.text": "The latest tests evaluate autonomous parking and recall over a large origin-to-destination matrix, showing repeatable system-level performance.",
      "results.card1.title": "Combined Pass Rate",
      "results.card1.text": "250 successful cells out of 288 complete-system test cells.",
      "results.card2.title": "Parking Pass Rate",
      "results.card2.text": "210 successful parking cells out of 240 origin-to-destination cases.",
      "results.card3.title": "Recall Pass Rate",
      "results.card3.text": "40 successful recall cells out of 48 summon cases.",
      "results.card4.title": "Autonomous Runs",
      "results.card4.text": "Repeated trials across parking and recall scenarios.",
      "results.card5.title": "E-STOP Response",
      "results.card5.text": "Emergency stop response stayed within the safety target.",
      "results.card6.title": "Power Endurance",
      "results.card6.text": "Battery endurance exceeded the required test-session duration.",

      "insights.label": "Failure Insight",
      "insights.title": "Most failures were geometric and fixable, not random.",
      "insights.item1": "Localization drift on long routes",
      "insights.item2": "Reverse steering calibration on back-in bays",
      "insights.item3": "Obstacle-adjacent narrow approaches",
      "insights.item4": "Goal-tolerance overshoot from open-loop drive",

      "resources.label": "Resources",
      "resources.title": "Poster & Test Evidence",
      "resources.text": "The poster gives a compact project overview, while the complete test report contains the updated parking and recall result matrices.",
      "resources.posterBtn": "View Poster",
      "resources.testBtn": "View Test Report",
      "resources.preview": "Open full poster",

      "faq.label": "FAQ",
      "faq.title": "Frequently Asked Questions",
      "faq.text": "Quick answers about how AutoNexa works, what it can do, and what will be improved next.",
      "faq.q1": "Does AutoNexa require a pre-saved map?",
      "faq.a1": "No. The prototype can build a live map of the indoor test area using LiDAR-based perception.",
      "faq.q2": "Can it park autonomously?",
      "faq.a2": "Yes. After a command is given from the mobile app, the vehicle navigates and performs the parking maneuver without manual control.",
      "faq.q3": "How strong are the latest test results?",
      "faq.a3": "The complete-system tests achieved 86.8% combined pass rate, with 87.5% parking and 83.3% recall pass rates.",
      "faq.q4": "What happens if communication is lost?",
      "faq.a4": "The system includes timeout-based stopping and emergency stop behavior to keep the robot safe during testing.",
      "faq.q5": "Can the user manually control the vehicle?",
      "faq.a5": "Yes. The mobile app supports manual driving, navigation commands, system status monitoring, waypoint storage, and emergency stop access.",
      "faq.q6": "What is the current main improvement target?",
      "faq.a6": "The next improvements focus on localization robustness, reverse steering calibration, obstacle-adjacent approaches, and closed-loop wheel-speed control.",

      "team.label": "Team",
      "team.title": "AutoNexa Team",
      "team.text": "A six-member engineering team with shared responsibility across the full system.",
      "team.powerTitle": "Power & Electrical",
      "team.powerText": "Battery, power distribution, regulators, and wiring.",
      "team.coreTitle": "Core System",
      "team.coreText": "Embedded software, perception, navigation, mobile app, and integration.",

      "future.label": "Next Steps",
      "future.title": "Future Improvements",
      "future.text": "The next iteration will focus on tighter final parking precision, closed-loop wheel-speed control, and richer app visualization with real prototype media.",

      "footer.text": "Autonomous Parking & Recall System · METU EEE · 2026"
    },

    tr: {
      "ui.language": "TR",
      "ui.theme.dark": "Koyu",
      "ui.theme.light": "Açık",

      "nav.overview": "Genel Bakış",
      "nav.demo": "Demo",
      "nav.architecture": "Mimari",
      "nav.results": "Sonuçlar",
      "nav.resources": "Kaynaklar",
      "nav.faq": "SSS",
      "nav.team": "Ekip",

      "hero.eyebrow": "METU EE493 / EE494 Projesi",
      "hero.title": "Otonom Park ve Araç Geri Çağırma Sistemi",
      "hero.lead": "AutoNexa, çevresini haritalayan, kendi kendine park edebilen ve mobil operatör konsolu üzerinden seçilen bir konuma geri dönebilen kompakt bir otonom araç prototipidir.",
      "hero.ctaDemo": "Demoyu İzle",
      "hero.ctaResults": "Sonuçları Gör",
      "hero.logoCaption": "Canlı haritalama, otonom park, geri çağırma ve mobil kontrol.",

      "overview.label": "Genel Bakış",
      "overview.title": "AutoNexa Ne Yapar?",
      "overview.text": "Sistem; algılama, navigasyon, gömülü kontrol ve mobil uygulamayı küçük ölçekli tek bir otonom park platformunda birleştirir.",
      "overview.card1.title": "Otonom Park",
      "overview.card1.text": "Araç, seçilen park noktasına gider ve manevrayı manuel kontrol olmadan gerçekleştirir.",
      "overview.card2.title": "Araç Geri Çağırma",
      "overview.card2.text": "Kullanıcı, mobil uygulama üzerinden robotun kayıtlı bir konuma geri dönmesini komutlayabilir.",
      "overview.card3.title": "Canlı Ortam Algısı",
      "overview.card3.text": "LiDAR tabanlı algılama, robotun iç mekân test alanını anlamasına ve engellerden kaçınmasına yardımcı olur.",
      "overview.card4.title": "Mobil Operatör Konsolu",
      "overview.card4.text": "Uygulama; kontrol, navigasyon komutları, sistem durumu ve acil durdurma erişimi sağlar.",

      "demo.label": "Demo",
      "demo.title": "Prototip Videosu",
      "demo.text": "Otonom navigasyon, park, geri çağırma davranışı ve mobil uygulama kontrolünü göstermek için prototip videosunu buraya ekleyebilirsiniz.",
      "demo.noteTitle": "Önerilen demo içeriği:",
      "demo.noteText": "Haritalama → otonom park → geri çağırma → acil durdurma.",

      "architecture.label": "Mimari",
      "architecture.title": "Basit ve Güvenli Kontrol Zinciri",
      "architecture.text": "AutoNexa katmanlı bir yapı izler: önce algılama, ardından karar verme ve yalnızca güvenlik kontrollerinden sonra aktüatör komutları.",
      "architecture.step1.title": "Algıla",
      "architecture.step1.text": "LiDAR, iç mekân test ortamını tarar.",
      "architecture.step2.title": "Haritala",
      "architecture.step2.text": "Robot canlı bir harita oluşturur ve günceller.",
      "architecture.step3.title": "Planla",
      "architecture.step3.text": "Navigasyon sistemi güvenli bir rota seçer.",
      "architecture.step4.title": "Kontrol Et",
      "architecture.step4.text": "Komutlar yazılım ve donanım güvenlik katmanlarından geçer.",
      "architecture.step5.title": "Hareket Et",
      "architecture.step5.text": "Gömülü kontrolcü direksiyon ve motorları sürer.",

      "results.label": "Sonuçlar",
      "results.title": "Güncel Tam Sistem Test Sonuçları",
      "results.text": "Son testler, otonom park ve geri çağırma performansını geniş bir başlangıç-hedef matrisi üzerinde değerlendirerek tekrarlanabilir sistem başarısını gösterir.",
      "results.card1.title": "Birleşik Başarı Oranı",
      "results.card1.text": "288 tam sistem test hücresinin 250 tanesi başarılıdır.",
      "results.card2.title": "Park Başarı Oranı",
      "results.card2.text": "240 başlangıç-hedef park durumunun 210 tanesi başarılıdır.",
      "results.card3.title": "Geri Çağırma Başarı Oranı",
      "results.card3.text": "48 geri çağırma durumunun 40 tanesi başarılıdır.",
      "results.card4.title": "Otonom Deneme",
      "results.card4.text": "Park ve geri çağırma senaryolarında tekrarlı denemeler yapılmıştır.",
      "results.card5.title": "Acil Durdurma Tepkisi",
      "results.card5.text": "Acil durdurma tepkisi güvenlik hedefinin içinde kalmıştır.",
      "results.card6.title": "Batarya Dayanımı",
      "results.card6.text": "Batarya dayanımı gerekli test süresini aşmıştır.",

      "insights.label": "Hata Analizi",
      "insights.title": "Hataların çoğu rastgele değil, geometrik ve düzeltilebilir nedenlerden oluştu.",
      "insights.item1": "Uzun rotalarda lokalizasyon kayması",
      "insights.item2": "Geri park noktalarında ters direksiyon kalibrasyonu",
      "insights.item3": "Engel yakınındaki dar yaklaşmalar",
      "insights.item4": "Açık çevrim sürüşten kaynaklı hedef toleransı aşımı",

      "resources.label": "Kaynaklar",
      "resources.title": "Poster ve Test Kanıtları",
      "resources.text": "Poster projeyi kısa ve görsel şekilde özetler; tam test raporu ise güncel park ve geri çağırma sonuç matrislerini içerir.",
      "resources.posterBtn": "Posteri Aç",
      "resources.testBtn": "Test Raporunu Aç",
      "resources.preview": "Tam posteri aç",

      "faq.label": "SSS",
      "faq.title": "Sık Sorulan Sorular",
      "faq.text": "AutoNexa'nın nasıl çalıştığı, neleri yapabildiği ve sonraki geliştirme hedefleri hakkında kısa cevaplar.",
      "faq.q1": "AutoNexa önceden kaydedilmiş bir haritaya ihtiyaç duyar mı?",
      "faq.a1": "Hayır. Prototip, LiDAR tabanlı algılama ile iç mekân test alanının canlı haritasını oluşturabilir.",
      "faq.q2": "Araç otonom olarak park edebilir mi?",
      "faq.a2": "Evet. Mobil uygulamadan komut verildikten sonra araç navigasyon yapar ve park manevrasını manuel kontrol olmadan gerçekleştirir.",
      "faq.q3": "Güncel test sonuçları ne kadar güçlü?",
      "faq.a3": "Tam sistem testlerinde birleşik başarı oranı %86,8; park başarı oranı %87,5 ve geri çağırma başarı oranı %83,3 olarak elde edilmiştir.",
      "faq.q4": "İletişim kaybı olursa ne olur?",
      "faq.a4": "Sistem, test sırasında robotu güvenli tutmak için zaman aşımı tabanlı durdurma ve acil durdurma davranışı içerir.",
      "faq.q5": "Kullanıcı aracı manuel kontrol edebilir mi?",
      "faq.a5": "Evet. Mobil uygulama manuel sürüş, navigasyon komutları, sistem durumu izleme, waypoint kaydı ve acil durdurma erişimi sağlar.",
      "faq.q6": "Şu anki ana geliştirme hedefi nedir?",
      "faq.a6": "Sonraki geliştirmeler lokalizasyon dayanıklılığı, geri direksiyon kalibrasyonu, engel yakınındaki yaklaşımlar ve kapalı çevrim tekerlek hızı kontrolüne odaklanır.",

      "team.label": "Ekip",
      "team.title": "AutoNexa Ekibi",
      "team.text": "Sistemin tamamında ortak sorumluluk alan altı kişilik mühendislik ekibi.",
      "team.powerTitle": "Güç ve Elektrik",
      "team.powerText": "Batarya, güç dağıtımı, regülatörler ve kablolama.",
      "team.coreTitle": "Çekirdek Sistem",
      "team.coreText": "Gömülü yazılım, algılama, navigasyon, mobil uygulama ve entegrasyon.",

      "future.label": "Sonraki Adımlar",
      "future.title": "Gelecek Geliştirmeler",
      "future.text": "Bir sonraki aşama; daha hassas park doğruluğu, kapalı çevrim tekerlek hızı kontrolü ve gerçek prototip medyalarıyla daha zengin uygulama görselleştirmesine odaklanacaktır.",

      "footer.text": "Otonom Park ve Araç Geri Çağırma Sistemi · METU EEE · 2026"
    }
  };

  let currentLanguage = localStorage.getItem("autonexa-language") || "en";
  let currentTheme =
    localStorage.getItem("autonexa-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  });

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      const offset = 78;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  setTheme(currentTheme);
  setLanguage(currentLanguage);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("autonexa-theme", currentTheme);
      setTheme(currentTheme);
    });
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLanguage = currentLanguage === "en" ? "tr" : "en";
      localStorage.setItem("autonexa-language", currentLanguage);
      setLanguage(currentLanguage);
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    updateToggleLabels();
  }

  function setLanguage(language) {
    const dictionary = translations[language] || translations.en;
    document.documentElement.lang = language === "tr" ? "tr" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (dictionary[key]) element.textContent = dictionary[key];
    });

    updateToggleLabels();
  }

  function updateToggleLabels() {
    const dictionary = translations[currentLanguage] || translations.en;

    if (themeText) {
      themeText.textContent =
        currentTheme === "dark"
          ? dictionary["ui.theme.dark"]
          : dictionary["ui.theme.light"];
    }

    if (langToggle) {
      const langText = langToggle.querySelector("[data-i18n='ui.language']");
      if (langText) langText.textContent = dictionary["ui.language"];
    }
  }

  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const isOpen = item.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach((otherItem) => {
        const otherAnswer = otherItem.querySelector(".faq-answer");
        const otherButton = otherItem.querySelector(".faq-question");
        otherItem.classList.remove("active");
        otherAnswer.style.maxHeight = null;
        otherButton.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 5, 4) * 0.05}s`;
    revealObserver.observe(element);
  });
});
