'use strict';
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('The $hotButton query failed');
if (!$clickCount) throw new Error('The $clickCount query failed');
let clicks = 0;
function hotButtonClick(event) {
  if (clicks === 0) {
    console.log(event.target);
  }
  clicks++;
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  $clickCount.textContent = 'Clicks: ' + clicks;
  if (clicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (clicks >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}
$hotButton.addEventListener('click', hotButtonClick);
