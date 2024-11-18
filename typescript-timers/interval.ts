const $countdown = document.querySelector('.countdown-display');
if (!$countdown) throw new Error('$countdown query failed');
let timer: number = 4;
setInterval(() => {
  if (timer === 0) {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
  } else {
    $countdown.textContent = String(timer);
    timer--;
  }
}, 1000);
