/* exported capitalizeWord */
/**
 * Pseudocode:
 *
 * define a function 'capitalizeWord' which takes one argument 'word' of type string, and returns
 * 'word' with its first letter capitalized and the rest lowercased
 *  define a variable 'capitalized' of type string with no value
 *  check if 'word' is 'javascript' without accounting for capitalization
 *    if so, return the value 'JavaScript'
 *  take the first letter of 'word' and capitalize it, then append to 'capitalized'
 *  take the rest of 'word' and lowercase it, then append to 'capitalized'
 *  return the value of 'capitalized'
 */
function capitalizeWord(word: string): string {
  let capitalized: string = '';
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return capitalized;
}
