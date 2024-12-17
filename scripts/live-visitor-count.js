const timestamp = Date.now();

updateVisitorCount();

// Regularly fetch the visitor count every 15 seconds to keep the display updated
setInterval(function() {
    updateVisitorCount();
}, 88888);

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
      document.getElementById('visitor-count').textContent = data.activeVisitors + ' online now';
  })
  .catch(error => {
      console.error('Error:', error);
      document.getElementById('visitor-count').textContent = '1 online now';
  });
}