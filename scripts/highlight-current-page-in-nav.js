const nav = document.querySelector('.site-navigation');
let value = '';

const pathname = window.location.pathname;

if (pathname === '/' || pathname === '/index.html' || pathname === '') {
  value = 'community';
} else if (pathname.includes('tutorials')) {
  value = 'tutorials';
} else if (pathname.includes('about')) {
  value = 'about';
}

if (value) {
  nav.classList.add(`current-page-${value}`);
}