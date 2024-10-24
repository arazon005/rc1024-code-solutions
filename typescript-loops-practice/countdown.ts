/* exported countdown */
function countdown(num: number): number[] {
  const cd: number[] = [];
  for (let i = num; i >= 0; i--) {
    cd.push(i);
  }
  return cd;
}
