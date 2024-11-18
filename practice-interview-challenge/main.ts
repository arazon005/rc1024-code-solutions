/* eslint-disable @typescript-eslint/no-unused-vars */

function getRangeReport(start: number, end: number): object {
  let totalSum: number = 0;
  const oddsArray: number[] = [];
  const evensArray: number[] = [];
  const rangeArray: number[] = [];
  let startValue: number = start;
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
