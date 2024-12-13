import loadList from '/scripts/load-list.js';

const tutorials = [
  // pinned tutorials
  'how-to-join-mysticwarez',

  // all other tutorials
];
document.addEventListener('DOMContentLoaded', () => {
  loadList(tutorials, '/tutorials', '#tutorials');
});