const $spanList = document.querySelectorAll('span');
const $incorrectText = document.querySelector('.incorrect-text');
const $accuracy = document.querySelector('.accuracy');
if (!$accuracy) throw new Error('$accuracy query failed');
if (!$incorrectText) throw new Error('$incorrectText query failed');
if (!$spanList) throw new Error('$spanList query failed');
console.log($spanList[0].textContent);
let incorrectCount: number = 0;
let index: number = 0;
let accuracy: number;

$spanList[index].className = 'current';
document.addEventListener('keydown', (event) => {
  if (index < $spanList.length) {
    if (event.key.toLocaleLowerCase() === $spanList[index].textContent) {
      $spanList[index].className = 'correct';
      index++;
      if (index < $spanList.length - 1) {
        $spanList[index].className = 'current';
      }
    } else if (event.key !== 'Backspace') {
      $spanList[index].className = 'current incorrect';
      incorrectCount++;
    }
    accuracy = (index / (index + incorrectCount)) * 100;
    $incorrectText.textContent = 'Incorrect entries: ' + incorrectCount;
    if (index === $spanList.length) {
      $accuracy.textContent = `Accuracy: ${accuracy}%`;
    }
  }
});
