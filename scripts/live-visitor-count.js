if (window.location.hostname !== '127.0.0.1') {
  updateVisitorCount();
} else {
  document.getElementById('visitor-count').textContent = '1 online now';
}

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