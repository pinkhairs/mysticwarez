function loadBackHeader() {
  // load site header
  var header = document.querySelector('.site-header');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/includes/back-header.html', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      header.outerHTML = xhr.responseText;
      loadBackLogo();
    }
  }
  xhr.send();
}

function loadBackLogo() {
  // load site logo
  var logo = document.querySelector('.logo');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/images/logo.svg', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      logo.outerHTML = xhr.responseText;
    }
  }
  xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {
  loadBackHeader();
  document.getElementById('back-button').addEventListener('click', function() {
    window.history.back();
  });
})