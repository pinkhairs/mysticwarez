document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.newsletter-subscribe');
  
  if (form) {
      form.addEventListener('submit', async (event) => {
          event.preventDefault();
          
          const emailField = form.querySelector('#email');
          const email = emailField.value;

          const formData = new FormData(form);

          try {
              const response = await fetch(form.action, {
                  method: 'POST',
                  body: formData,
              });

              if (response.ok) {
                  emailField.value = '';

                  // Create a thank-you message and append it below the form
                  let thankYouMessage = form.querySelector('.thank-you-message');
                  if (!thankYouMessage) {
                      thankYouMessage = document.createElement('p');
                      thankYouMessage.className = 'thank-you-message';
                      thankYouMessage.textContent = 'Thank you! You are now subscribed.';
                      form.insertAdjacentElement('afterend', thankYouMessage);
                      setTimeout(() => {
                          thankYouMessage.remove();
                      }, 3333);
                  }
              } else {
                  console.error('Error submitting form:', response.statusText);
              }
          } catch (error) {
              console.error('An error occurred while submitting the form:', error);
          }
      });
  } else {
      console.error('Form not found!');
  }
});
