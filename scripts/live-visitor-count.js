updateVisitorCount();

setInterval(updateVisitorCount, 8888);

function updateVisitorCount() {
  fetch('https://server.mysticwarez.com/live-visitors.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
  })
  .then(response => response.json())
  .then(data => {
    if (document.getElementById('visitor-count')) {
      document.getElementById('visitor-count').textContent = data.activeVisitors + ' online now';
    }
  })
  .catch(error => {
    console.error('Error:', error);
    if (document.getElementById('visitor-count')) {
      document.getElementById('visitor-count').textContent = '1 online now';
    }
  });
}