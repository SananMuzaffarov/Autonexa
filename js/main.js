// AutoNexa Website Script
// Simple interactions only: navigation, smooth scroll, reveal animation.



document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // Change navbar style after scrolling
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Mobile navigation toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Smooth scroll and close mobile menu
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      event.preventDefault();
      navLinks?.classList.remove('open');

      const offset = 78;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Active navigation link
  const sections = document.querySelectorAll('section[id], header[id]');
  const links = document.querySelectorAll('.nav__links a');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    });
  }, { threshold: 0.35 });

  sections.forEach(section => sectionObserver.observe(section));

  // Reveal elements on scroll
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 0.04, 0.24)}s`;
    revealObserver.observe(element);
  });

  console.log('%cAutoNexa website loaded', 'color: #c8102e; font-weight: 700;');
});
