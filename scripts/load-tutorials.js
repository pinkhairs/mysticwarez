import loadList from '/scripts/load-list.js';

const tutorials = [
  'how-to-join-mysticwarez',
];
document.addEventListener('DOMContentLoaded', () => {
  loadList(tutorials, '/tutorials', '#tutorials');
});