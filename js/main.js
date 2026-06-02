// AutoNexa Website JavaScript

document.addEventListener('DOMContentLoaded', () => {

  // ---- NAV SCROLL EFFECT ----
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // ---- SMOOTH SCROLL FOR NAV LINKS ----
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ---- TABS ----
  const tabBtns = document.querySelectorAll('.tabs__btn');
  const tabPanels = document.querySelectorAll('.tabs__panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const panel = document.getElementById(`tab-${target}`);
      if (panel) panel.classList.add('active');
    });
  });

  // ---- SCROLL REVEAL ----
  const revealEls = document.querySelectorAll(
    '.card, .arch-node, .result-card, .team-card, .stage, .spec, .filter-stage, .loop-step, .bom-table-wrap, .affiliation__block, .sidebar-widget'
  );

  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    // stagger within groups
    el.style.transitionDelay = `${(i % 6) * 0.07}s`;
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealEls.forEach(el => revealObserver.observe(el));

  // ---- ANIMATED COUNTERS ----
  const counters = document.querySelectorAll('.stat__val');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  function animateCounter(el) {
    const text = el.textContent.trim();
    const match = text.match(/^(~?\$?)(\d+\.?\d*)(.*)$/);
    if (!match) return;

    const prefix = match[1];
    const num = parseFloat(match[2]);
    const suffix = match[3];

    if (isNaN(num)) return;

    const duration = 1200;
    const steps = 40;
    const increment = num / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(num, increment * step);

      const display = Number.isInteger(num)
        ? Math.round(current).toString()
        : current.toFixed(num.toString().split('.')[1]?.length || 0);

      el.textContent = prefix + display + suffix;

      if (step >= steps) {
        clearInterval(timer);
        el.textContent = text; // restore original
      }
    }, duration / steps);
  }

  // ---- ACTIVE NAV LINK HIGHLIGHT ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = 'var(--accent)';
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => sectionObserver.observe(s));

  // ---- HOVER EFFECTS ON ARCH NODES ----
  document.querySelectorAll('.arch-node').forEach(node => {
    node.addEventListener('mouseenter', () => {
      node.style.boxShadow = '0 0 20px rgba(0,210,150,0.1)';
    });
    node.addEventListener('mouseleave', () => {
      node.style.boxShadow = '';
    });
  });

  // ---- RESULT CARD HOVER ----
  document.querySelectorAll('.result-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = 'var(--border-accent)';
      card.style.transform = 'translateY(-3px)';
      card.style.transition = 'all 0.25s';
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = '';
      card.style.transform = '';
    });
  });

  // ---- BAR CHART ANIMATION ON SCROLL ----
  const barChartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.bar-chart__bar').forEach((bar, i) => {
          const pct = bar.style.getPropertyValue('--pct');
          bar.style.setProperty('--pct', '0%');
          setTimeout(() => {
            bar.style.setProperty('--pct', pct);
            bar.style.transition = 'width 1s cubic-bezier(0.4,0,0.2,1)';
          }, 100 + i * 80);
        });
        barChartObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.bar-chart').forEach(chart => {
    // init bars to 0
    chart.querySelectorAll('.bar-chart__bar').forEach(bar => {
      const pct = bar.style.getPropertyValue('--pct');
      bar.dataset.pct = pct;
      bar.style.setProperty('--pct', '0%');
    });
    barChartObserver.observe(chart);
  });

  // ---- POWER MODE BARS ANIMATION ----
  const powerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.pmode__bar').forEach((bar, i) => {
          const w = bar.style.getPropertyValue('--w');
          bar.style.setProperty('--w', '0%');
          setTimeout(() => {
            bar.style.cssText += `; transition: --w 0.8s ease;`;
            bar.style.setProperty('--w', w);
          }, 200 + i * 100);
        });
        powerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.power-modes').forEach(el => powerObserver.observe(el));

  // ---- COST BAR ANIMATION ----
  const costObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.cbr__bar').forEach((bar, i) => {
          bar.style.setProperty('--w', '0%');
          const w = bar.dataset.w || bar.style.cssText.match(/--w:\s*([\d.]+%)/)?.[1];
          setTimeout(() => {
            const match = bar.getAttribute('style').match(/--w:\s*([\d.]+%)/);
            if (match) {
              const orig = match[1];
              bar.style.setProperty('--w', '0%');
              setTimeout(() => { bar.style.setProperty('--w', orig); }, 50);
            }
          }, 200 + i * 100);
        });
        costObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.cost-bars').forEach(el => costObserver.observe(el));

  // ---- KEYBOARD NAV FOR TABS ----
  const tabsNav = document.querySelector('.tabs__nav');
  if (tabsNav) {
    tabsNav.addEventListener('keydown', (e) => {
      const btns = [...tabsNav.querySelectorAll('.tabs__btn')];
      const current = btns.indexOf(document.activeElement);
      if (e.key === 'ArrowRight' && current < btns.length - 1) {
        btns[current + 1].focus();
        btns[current + 1].click();
      }
      if (e.key === 'ArrowLeft' && current > 0) {
        btns[current - 1].focus();
        btns[current - 1].click();
      }
    });
  }

  console.log('%cAutoNexa Website Loaded', 'color: #00d296; font-size: 14px; font-weight: bold;');
  console.log('%cEE493/494 · METU EEE · 2026', 'color: #7a8698; font-size: 11px;');
});
