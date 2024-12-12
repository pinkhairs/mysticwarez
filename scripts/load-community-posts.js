import loadList from '/scripts/load-list.js';

const posts = [
  // pinned posts
  'welcome',

  // all other posts
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