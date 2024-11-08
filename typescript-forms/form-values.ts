interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;
if (!$contactForm) throw new Error('$contactForm query failed');

$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $FormElements = $contactForm.elements as FormElements;
  const object = {
    name: $FormElements.name.value,
    email: $FormElements.email.value,
    message: $FormElements.message.value,
  };
  console.log(object);
  $contactForm.reset();
});
