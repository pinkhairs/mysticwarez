import loadList from '/scripts/load-list.js';

const courses = [
  // pinned courses
  'how-to-join-mysticwarez',

  // all other courses
];
document.addEventListener('DOMContentLoaded', () => {
  loadList(courses, '/courses', '#courses');
});