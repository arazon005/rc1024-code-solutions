/* exported ransomCase */
/**
 * Pseudocode:
 *
 * define a function 'ransomCase' with one argument 'string' of type string, which returns a string
 *  define an empty string to the variable 'ransom'
 *  loop through the characters in 'string', incrementing the index by two every loop
 *    lowercase the value held at the index and append it to 'ransom'
 *    capitalize the value held at the index plus one and append it to 'ransom'
 *  return the value of 'ransom'
 */

function ransomCase(string: string): string {
  let ransom: string = '';
  for (let i = 0; i < string.length; i += 2) {
    if (string[i]) {
      ransom += string[i].toLowerCase();
    }
    if (string[i + 1]) {
      ransom += string[i + 1].toUpperCase();
    }
  }
  return ransom;
}
