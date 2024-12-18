// Asynchronously fetch the contents of post.html
async function loadPostContent() {
  try {
      // Fetch the content from the same directory
      const response = await fetch('post.html');
      
      // Throw an error if the fetch was not successful
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Get the text content of the response
      const html = await response.text();

      // Find the #post-content element
      const postContentElement = document.getElementById('post-content');

      // Replace the outerHTML of the post content element with the fetched HTML
      if (postContentElement) {
          postContentElement.outerHTML = html;
          const title = document.querySelector('h2').textContent;
          document.title = 'Mysticwarez - ' + title;
      } else {
          console.error('The element #post-content was not found on the page.');
      }
  } catch (error) {
      console.error('Failed to load post content:', error);
  }
}

// Call the function when the document is fully loaded
document.addEventListener('DOMContentLoaded', loadPostContent);
