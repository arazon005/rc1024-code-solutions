const $bulb = document.querySelector('.bulb');
const $body = document.querySelector('body');
if (!$bulb) throw new Error('$bulb query failed');
if (!$body) throw new Error('$body query failed');

$bulb.addEventListener('click', () => {
  if ($bulb.className === 'bulb on') {
    $bulb.className = 'bulb off';
    $body.className = 'bg-off';
  } else {
    $bulb.className = 'bulb on';
    $body.className = '';
  }
});
