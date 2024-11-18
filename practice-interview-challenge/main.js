'use strict';
/* eslint-disable @typescript-eslint/no-unused-vars */
function getRangeReport(start, end) {
  let totalSum = 0;
  const oddsArray = [];
  const evensArray = [];
  const rangeArray = [];
  let startValue = start;
  for (startValue; startValue <= end; startValue++) {
    totalSum += startValue;
    rangeArray.push(startValue);
    if (startValue % 2 === 0) {
      evensArray.push(startValue);
    } else {
      oddsArray.push(startValue);
    }
  }
  const rangeReport = {
    total: totalSum,
    odds: oddsArray,
    evens: evensArray,
    range: rangeArray,
    average: totalSum / rangeArray.length,
  };
  return rangeReport;
}
