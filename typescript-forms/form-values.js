'use strict';
const $contactForm = document.querySelector('#contact-form');
if (!$contactForm) throw new Error('$contactForm query failed');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $FormElements = $contactForm.elements;
  const object = {
    name: $FormElements.name.value,
    email: $FormElements.email.value,
    message: $FormElements.message.value,
  };
  console.log(object);
  $contactForm.reset();
});
