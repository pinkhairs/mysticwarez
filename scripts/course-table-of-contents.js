const tableOfContents = () => {
  const headers = document.querySelectorAll('h2');
  const toc = document.querySelector('#table-of-contents');
  if (toc && window.location.pathname.includes('/courses/')) {
      const ul = document.createElement('ul');

      headers.forEach(header => {
          const slug = header.innerText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
          header.id = slug;

          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = `#${slug}`;
          a.innerText = header.innerText;
          li.appendChild(a);
          ul.appendChild(li);
      });

      toc.appendChild(ul);
  }
};

export default tableOfContents;