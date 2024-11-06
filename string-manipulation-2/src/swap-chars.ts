/* exported swapChars */
/**
 * define a function 'swapChars' with three arguments; 'firstIndex' of type number,
 * 'secondIndex' of type number, and 'string' of type string; this will return a string
 *  define the variable 'newString' as an empty string
 *  define the variable 'firstChar' to the value of the character held at index 'firstIndex' of 'string'
 *  define the variable 'secondChar' to the value of the character held at index 'secondIndex' of 'string'
 *  loop through the characters in 'string'
 *    if the index is equal to 'firstIndex', concatenate the value of 'secondChar' to 'newString'
 *    else if the index is equal to 'secondIndex', concatenate the value of 'firstChar' to 'newString'
 *    else concatenate the value held at the index of 'string' to 'newString'
 *  return newString
 */

function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  const firstChar: string = string[firstIndex];
  const secondChar: string = string[secondIndex];
  let newString: string = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += secondChar;
    } else if (i === secondIndex) {
      newString += firstChar;
    } else newString += string[i];
  }
  return newString;
}
