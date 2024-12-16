async function loadList(folders, basePath, tutorialsContainerId) {
  const tutorialsContainer = document.getElementById(tutorialsContainerId.slice(1)); // Remove the '#' for ID selection
  const paginationContainer = document.getElementById('pagination'); // Remove the '#' for ID selection

  let currentPage = getCurrentPageFromURL();
  
  async function displayTutorials(page) {
      const pageOffset = (page - 1) * 10; // items per page set statically as 10
      const foldersToLoad = folders.slice(pageOffset, pageOffset + 10);

      let html = '';
      for (const folder of foldersToLoad) {
          const url = `${basePath}/${folder}/post.html`;
          try {
              const response = await fetch(url);
              html += await response.text();
          } catch (error) {
              console.error('Failed to load tutorial content:', error);
          }
      }
      tutorialsContainer.innerHTML = html;
      updatePagination(page, folders.length);
  }

  function updatePagination(currentPage, totalItems) {
      paginationContainer.innerHTML = ''; // Clear existing
      const totalPages = Math.ceil(totalItems / 10); // Calculating total pages

      if (totalPages <= 1) return; // No pagination if one page or less

      if (currentPage > 1) {
          const prevLink = createPaginationLink(currentPage - 1, 'Previous');
          paginationContainer.appendChild(prevLink);
      }

      if (currentPage < totalPages) {
          const nextLink = createPaginationLink(currentPage + 1, 'Next');
          paginationContainer.appendChild(nextLink);
      }
  }

  function createPaginationLink(page, text) {
      const link = document.createElement('a');
      link.href = `?page=${page}`;
      link.textContent = text;
      link.addEventListener('click', function(event) {
          event.preventDefault();
          window.history.pushState({}, '', `${window.location.pathname}?page=${page}`);
          displayTutorials(page);
      });
      return link;
  }

  function getCurrentPageFromURL() {
      const params = new URLSearchParams(window.location.search);
      if (params.get('page') === '1') {
          window.history.pushState({}, '', window.location.pathname);
      }
      return params.get('page') ? parseInt(params.get('page'), 10) : 1;
  }

  displayTutorials(currentPage);
}

export default loadList;
