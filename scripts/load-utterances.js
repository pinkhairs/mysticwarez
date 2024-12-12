function loadUtterances(theme) {
  const container = document.getElementById('utterances-container');
  container.innerHTML = ''; // Clear the container

  const script = document.createElement('script');
  script.src = 'https://utteranc.es/client.js';
  script.setAttribute('repo', 'pinkhairs/mysticwarez'); // Replace with your repo
  script.setAttribute('issue-term', 'title');
  script.setAttribute('theme', theme);
  script.setAttribute('crossorigin', 'anonymous');
  script.async = true;

  container.appendChild(script);
}

// Function to switch themes based on the system color scheme
function switchTheme() {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  if (darkModeMediaQuery.matches) {
    loadUtterances('github-dark'); // Use the dark theme
  } else {
    loadUtterances('github-light'); // Use the light theme
  }
}

// Set up an event listener for changes in the color scheme
window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
  switchTheme(); // Re-load utteranc.es with the new theme
});

// Initial theme setup
switchTheme();