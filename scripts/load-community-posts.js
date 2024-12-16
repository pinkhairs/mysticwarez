import loadList from '/scripts/load-list.js';

const posts = [
  'welcome',
];

document.addEventListener('DOMContentLoaded', () => {
  loadList(posts, '/posts', '#posts');
  loadScript('/scripts/load-post-permalink.js');
});

function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.body.appendChild(script);
}