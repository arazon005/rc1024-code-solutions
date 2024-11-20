/* eslint-disable @typescript-eslint/no-unused-vars */
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const sale = prices.map((current) => {
  return { price: current, sale: current / 2 };
});

const formatted = prices.map((current) => {
  return current.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
});
console.log('price objects:', sale);
console.log('formatted:', formatted);
