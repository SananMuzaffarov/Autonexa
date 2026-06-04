document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const themeText = document.getElementById("themeText");

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

  const savedTheme = localStorage.getItem("autonexa-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(savedTheme || (prefersDark ? "dark" : "light"));

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      localStorage.setItem("autonexa-theme", nextTheme);
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeIcon && themeText) {
      themeIcon.textContent = theme === "dark" ? "☾" : "☀";
      themeText.textContent = theme === "dark" ? "Dark" : "Light";
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
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 5, 4) * 0.05}s`;
    revealObserver.observe(element);
  });
});
