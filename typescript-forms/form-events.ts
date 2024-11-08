function handleFocus(event: Event): void {
  console.log('focus event was fired');
  const eventTarget = event.target as HTMLInputElement;
  console.log(eventTarget);
}

function handleBlur(event: Event): void {
  console.log('blur event was fired');
  const eventTarget = event.target as HTMLInputElement;
  console.log(eventTarget);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement;
  console.log(eventTarget.name, eventTarget.value);
}

const $input = document.querySelectorAll('input');
const $textarea = document.querySelector('textarea');
if (!$input) throw new Error('$input query failed');
if (!$textarea) throw new Error('$textarea query failed');

for (let i = 0; i < $input.length; i++) {
  $input[i].addEventListener('focus', handleFocus);
  $input[i].addEventListener('blur', handleBlur);
  $input[i].addEventListener('input', handleInput);
}

$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('blur', handleBlur);
$textarea.addEventListener('input', handleInput);
