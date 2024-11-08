'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('$taskList query failed');
function clickButton(event) {
  const eventTarget = event.target;
  console.log('event target:', eventTarget);
  console.log('event target tag name:', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    console.log(eventTarget.closest('.task-list-item'));
    eventTarget.closest('.task-list-item')?.remove();
  }
}
$taskList.addEventListener('click', clickButton);
