'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const results = [];
  for (const i of numbers) {
    switch (i % 2) {
      case 0:
        results.push('even');
        break;
      default:
        results.push('odd');
    }
  }
  return results;
}
