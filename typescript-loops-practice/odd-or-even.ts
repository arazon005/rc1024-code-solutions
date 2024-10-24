/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  const results: string[] = [];
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
