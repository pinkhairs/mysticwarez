const nav = document.querySelector('.site-navigation');
let value = '';

const pathname = window.location.pathname;

if (pathname === '/' || pathname === '/index.html' || pathname === '') {
  value = 'community';
} else if (pathname.includes('courses')) {
  value = 'courses';
} else if (pathname.includes('newsletter')) {
  value = 'newsletter';
}

if (value) {
  nav.classList.add(`current-page-${value}`);
}