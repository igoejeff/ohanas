/* =============================================
   OHANA'S ISLAND BISTRO — JAVASCRIPT
   ============================================= */

// ---- Navbar scroll (deepen shadow + border on scroll) ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });
// Always start as scrolled so logo is always on navy
navbar.classList.add('scrolled');

// ---- Mobile nav ----
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  const s = navToggle.querySelectorAll('span');
  if (open) {
    s[0].style.transform = 'translateY(7px) rotate(45deg)';
    s[1].style.opacity   = '0';
    s[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    s[0].style.transform = s[2].style.transform = '';
    s[1].style.opacity = '';
  }
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.querySelectorAll('span').forEach(s => {
      s.style.transform = ''; s.style.opacity = '';
    });
  });
});

// ---- Smooth scroll ----
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ---- Menu Tab Switching ----
document.querySelectorAll('.menu-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs & panels
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));

    // Activate clicked tab
    tab.classList.add('active');
    const targetId = 'tab-' + tab.dataset.tab;
    const panel = document.getElementById(targetId);
    if (panel) {
      panel.classList.add('active');
      // Re-trigger animations for newly visible cards
      panel.querySelectorAll('.menu-card, .side-card').forEach((el, i) => {
        el.classList.remove('visible');
        el.style.transitionDelay = (i * 60) + 'ms';
        setTimeout(() => el.classList.add('visible'), 30);
      });
    }
  });
});

// ---- Scroll-triggered fade-up animations ----
document.addEventListener('DOMContentLoaded', () => {
  const animTargets = document.querySelectorAll(
    '.music-feat, .drink-card, .review-featured, .reviews-summary, .gallery-item, .contact-card, .pillar, .about-image, .about-content, .atmo-content, .atmo-image, .section-header, .drinks-hero, .video-wrap, .menu-card, .side-card, .music-stats, .music-calendar, .tripp-bio, .tripp-video-main, .tripp-mini-card'
  );

  animTargets.forEach(el => el.classList.add('fade-up'));

  // Stagger delays for grid children
  const staggerSets = [
    '.music-features .music-feat',
    '.drinks-grid .drink-card',
    '.gallery-grid .gallery-item',
    '.contact-cards .contact-card',
    '.about-pillars .pillar',
    '.menu-grid-uniform .menu-card',
    '.sides-grid .side-card',
  ];
  staggerSets.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.style.transitionDelay = (i * 80) + 'ms';
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  animTargets.forEach(el => observer.observe(el));

  // ---- Lightbox ----
  const overlay  = document.createElement('div');
  const lbImg    = document.createElement('img');
  const closeBtn = document.createElement('button');

  overlay.id = 'lightbox';
  overlay.style.cssText = 'display:none;position:fixed;inset:0;z-index:9999;background:rgba(8,15,30,.96);cursor:pointer;align-items:center;justify-content:center;backdrop-filter:blur(10px);';

  lbImg.style.cssText = 'max-width:90vw;max-height:88vh;border-radius:12px;box-shadow:0 24px 80px rgba(0,0,0,.6);object-fit:contain;transform:scale(.9);transition:transform .3s ease;';

  closeBtn.innerHTML = '&#215;';
  closeBtn.style.cssText = 'position:absolute;top:1.5rem;right:2rem;background:rgba(201,168,76,.15);border:1px solid rgba(201,168,76,.4);color:#C9A84C;font-size:2rem;width:48px;height:48px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;';

  overlay.appendChild(lbImg);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  document.querySelectorAll('.gallery-item, .drink-card, .dish-card, .fav-card, .fav-hero, .mhd-img, .burger-hero-img').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (!img) return;
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      setTimeout(() => { lbImg.style.transform = 'scale(1)'; }, 10);
    });
  });

  const closeLB = () => {
    lbImg.style.transform = 'scale(.9)';
    setTimeout(() => { overlay.style.display = 'none'; document.body.style.overflow = ''; }, 260);
  };

  overlay.addEventListener('click', e => { if (e.target === overlay || e.target === closeBtn) closeLB(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });

  // ---- Reviews Carousel ----
  const carousel = document.getElementById('reviewsCarousel');
  const dotsWrap = document.getElementById('carouselDots');

  if (carousel && dotsWrap) {
    const cards      = Array.from(carousel.querySelectorAll('.review-card'));
    const totalCards = cards.length;
    let autoTimer;

    // Build dots
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Review ' + (i + 1));
      dot.addEventListener('click', () => scrollToCard(i));
      dotsWrap.appendChild(dot);
    });

    function getDots() { return Array.from(dotsWrap.querySelectorAll('.carousel-dot')); }

    function scrollToCard(index) {
      const card   = cards[index];
      const offset = card.offsetLeft - carousel.offsetLeft;
      carousel.scrollTo({ left: offset, behavior: 'smooth' });
      getDots().forEach((d, i) => d.classList.toggle('active', i === index));
    }

    function getVisibleIndex() {
      let closest = 0, minDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.getBoundingClientRect().left - carousel.getBoundingClientRect().left);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      return closest;
    }

    function startAuto() {
      stopAuto();
      autoTimer = setInterval(() => {
        const next = (getVisibleIndex() + 1) % totalCards;
        scrollToCard(next);
      }, 4000);
    }

    function stopAuto() { clearInterval(autoTimer); }

    // Update dots on manual scroll
    carousel.addEventListener('scroll', () => {
      const idx = getVisibleIndex();
      getDots().forEach((d, i) => d.classList.toggle('active', i === idx));
    }, { passive: true });

    // Drag-to-scroll (mouse)
    let isDragging = false, dragStartX = 0, scrollStartX = 0;
    carousel.addEventListener('mousedown', e => {
      isDragging  = true;
      dragStartX  = e.pageX;
      scrollStartX = carousel.scrollLeft;
      carousel.classList.add('dragging');
      stopAuto();
    });
    document.addEventListener('mousemove', e => {
      if (!isDragging) return;
      carousel.scrollLeft = scrollStartX - (e.pageX - dragStartX);
    });
    document.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      carousel.classList.remove('dragging');
      startAuto();
    });

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);

    startAuto();
  }
});
