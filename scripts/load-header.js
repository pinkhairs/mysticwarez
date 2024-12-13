function loadHeader() {
  // load site header
  var header = document.querySelector('.site-header');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/includes/site-header.html', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      header.outerHTML = xhr.responseText;
      loadLogo();
      loadCommunityIcon();
      loadTutorialsIcon();
      loadNewsletterIcon();
      loadScript('/scripts/mobile-menu.js');
      loadScript('/scripts/highlight-current-page-in-nav.js');
    }
  }
  xhr.send();
}

function loadLogo() {
  // load logo
  var logo = document.querySelector('.logo');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/images/logo.svg', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      logo.innerHTML = xhr.responseText;
    }
  }
  xhr.send();
}

function loadCommunityIcon() {
  // load community-icon
  var communityIcon = document.querySelector('.community-icon');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/images/community-icon.svg', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      communityIcon.innerHTML = xhr.responseText;
    }
  }
  xhr.send();
}

function loadTutorialsIcon() {
  // load tutorials-icon
  var tutorialsIcon = document.querySelector('.tutorials-icon');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/images/tutorials-icon.svg', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      tutorialsIcon.innerHTML = xhr.responseText;
    }
  }
  xhr.send();
}

function loadNewsletterIcon() {
  // load newsletter-icon
  var newsletterIcon = document.querySelector('.newsletter-icon');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/images/newsletter-icon.svg', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      newsletterIcon.innerHTML = xhr.responseText;
    }
  }
  xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {
  loadHeader();
})

function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.head.appendChild(script);
}