'use strict';
const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('$clickButton does not exist');
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
$clickButton.addEventListener('click', handleClick);
const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('$hoverButton does not Exist');
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
$hoverButton.addEventListener('mouseover', handleMouseover);
const $doubleClick = document.querySelector('.double-click-button');
if (!$doubleClick) throw new Error('$doubleClick does not exist');
function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log(event);
  console.log(event.target);
}
$doubleClick.addEventListener('dblclick', handleDoubleClick);
