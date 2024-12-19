import loadList from '/scripts/load-list.js';

const posts = [
  'free-domain-name',
  'welcome',
];

document.addEventListener('DOMContentLoaded', () => {
  loadList(posts, '/posts', '#posts');
});

function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.body.appendChild(script);
}