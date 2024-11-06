/* exported isVowel */
/**
 * define a function 'isVowel', that accepts one argument 'char' of type string', that returns a boolean.
 *  define an array of vowels
 *  loop through the array of vowels
 *    comparison on each loop to the value at the index of the array and the value of char
 *      return true if true
 *  return false if the loop completes
 */
function isVowel(char: string): boolean {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  char = char.toLowerCase();
  for (const index of vowels) {
    if (index === char) {
      return true;
    }
  }
  return false;
}
