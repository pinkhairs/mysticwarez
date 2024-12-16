const tableOfContents = () => {
  const headers = document.querySelectorAll('h2');
  const toc = document.querySelector('#table-of-contents');
  if (toc && window.location.pathname.includes('/tutorials/')) {
      toc.insertAdjacentHTML('afterbegin', '<h3>Table of Contents</h3>');
      const ul = document.createElement('ul');

      headers.forEach(header => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = 'javascript:void(0);'; // Prevent the default link behavior
          a.innerText = header.innerText;
          a.addEventListener('click', (event) => {
              event.preventDefault(); // Prevent the default anchor click behavior
              // Scroll to the header element smoothly
              header.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
          li.appendChild(a);
          ul.appendChild(li);
      });

      toc.appendChild(ul);
  }
};

export default tableOfContents;
