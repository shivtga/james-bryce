const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
const yearEl = document.getElementById('year');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    navToggle.classList.toggle('active');
  });
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const spans = navToggle.querySelectorAll('span');
    if (navToggle.classList.contains('active')) {
      spans.forEach((span, idx) => {
        span.style.transform =
          idx === 0
            ? 'translateY(8px) rotate(45deg)'
            : idx === 1
            ? 'scaleX(0)'
            : 'translateY(-8px) rotate(-45deg)';
        span.style.opacity = idx === 1 ? '0' : '1';
      });
    } else {
      spans.forEach((span) => {
        span.style.transform = 'none';
        span.style.opacity = '1';
      });
    }
  });
}

if (siteNav) {
  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      if (navToggle) {
        navToggle.classList.remove('active');
        navToggle.querySelectorAll('span').forEach((span) => {
          span.style.transform = 'none';
          span.style.opacity = '1';
        });
      }
    });
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const cookieBanner = document.getElementById('cookie-banner');
const cookieAccept = document.getElementById('cookie-accept');
const cookieConsentKey = 'jk_cookie_consent';

if (cookieBanner && cookieAccept) {
  let hasConsent = null;

  try {
    hasConsent = window.localStorage.getItem(cookieConsentKey);
  } catch (err) {
    hasConsent = null;
  }

  if (!hasConsent) {
    cookieBanner.classList.add('is-visible');
  }

  cookieAccept.addEventListener('click', () => {
    try {
      window.localStorage.setItem(cookieConsentKey, 'accepted');
    } catch (err) {
      // Ignore storage errors and simply hide the banner.
    }
    cookieBanner.classList.remove('is-visible');
  });
}
