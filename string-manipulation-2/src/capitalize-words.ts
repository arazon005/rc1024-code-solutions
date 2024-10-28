/* exported capitalizeWords */
/**
 * Pseudocode:
 * define a function 'capitalizeWords' that takes one argument 'string' of type string, which returns a string
 *  define an empty string array to the variable 'words'
 *  define an empty string to the variable 'capitalized'
 *  separate 'string' into multiple strings, separating by the value ' ', and add those values to 'words'
 *  loop through 'words'
 *    capitalize the first letter of the value held at the index of 'words', then concatenate the
 *    value and ' ' to 'capitalized'
 *  return the value of 'capitalized'
 */

function capitalizeWords(string: string): string {
  const words: string[] = string.split(' ');
  let capitalized: string = '';
  for (const word of words) {
    capitalized += capitalizeWord(word) + ' ';
  }
  capitalized = capitalized.slice(0, capitalized.length - 1);
  return capitalized;
}
