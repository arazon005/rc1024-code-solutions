/* exported numVowels */
/**
 * Pseudocode:
 *
 * define a variable 'numVowels' with one argument 'string' of type string which returns a number
 *  define the variable 'vowelCount' with a value of the number zero
 *  loop through the letters in 'string'
 *    if the letter at the current index is a vowel, increment 'vowelCount' by one
 *  return the value of 'vowelCount'
 */

function numVowels(string: string): number {
  let vowelCount: number = 0;
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  for (const char of string) {
    for (const index of vowels) {
      if (char.toLowerCase() === index) {
        vowelCount++;
        break;
      }
    }
  }
  return vowelCount;
}
