const $countdown = document.querySelector('.countdown-display');
if (!$countdown) throw new Error('$countdown query failed');
let timer: number = 3;
const countdown = setInterval(() => {
  if (timer === 0) {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdown);
  } else {
    $countdown.textContent = String(timer);
    timer--;
  }
}, 1000);
