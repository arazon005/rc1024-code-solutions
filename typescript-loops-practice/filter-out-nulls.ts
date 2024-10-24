/* exported filterOutNulls */
function filterOutNulls(values: any[]): any[] {
  const filtered: any[] = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filtered.push(values[i]);
    }
  }
  return filtered;
}
