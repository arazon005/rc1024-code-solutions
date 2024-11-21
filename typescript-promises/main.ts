import { takeAChance } from './take-a-chance.js';
takeAChance('Abraham')
  .then((win) => console.log(win))
  .catch((lose) => console.error(lose.message));
