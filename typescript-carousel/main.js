'use strict';
const $progressElements = document.querySelectorAll('.progress');
if (!$progressElements) throw new Error('$progressElements query failed');
const $image = document.querySelector('img');
if (!$image) throw new Error('$image query failed');
const $container = document.querySelector('.container');
if (!$container) throw new Error('$container query failed');
const source = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];
let progressIndex = 0;
let progressTimer = setInterval(startInterval, 2000);
$container.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  if ($eventTarget.hasAttribute('id')) {
    if ($eventTarget.getAttribute('id') === 'right') {
      progressIndex++;
      if (progressIndex === $progressElements.length) {
        progressIndex = 0;
      }
    } else if ($eventTarget.getAttribute('id') === 'left') {
      if (progressIndex === 0) {
        progressIndex = $progressElements.length;
      }
      progressIndex--;
    } else if ($eventTarget.className === 'fa-regular fa-circle progress') {
      progressIndex = Number($eventTarget.id);
    }
    $image.src = source[progressIndex];
    updateProgress(progressIndex);
    clearInterval(progressTimer);
    progressTimer = setInterval(startInterval, 2000);
  }
});
function updateProgress(index) {
  for (let i = 0; i < $progressElements.length; i++) {
    if (i === index) {
      $progressElements[i].setAttribute('class', 'fa-solid fa-circle progress');
    } else {
      $progressElements[i].setAttribute(
        'class',
        'fa-regular fa-circle progress'
      );
    }
  }
}
function startInterval() {
  progressIndex++;
  if (progressIndex === $progressElements.length) {
    progressIndex = 0;
  }
  $image?.setAttribute('src', source[progressIndex]);
  updateProgress(progressIndex);
}
