/* exported capitalize */
/**
 * Pseudocode:
 *
 * Define the function, named 'capitalize', that accepts one string argument, 'word', and returns a string.
 *  Separate the first letter of the word to make it uppercase, and the rest of the word lowercase.
 *  Then, concatenate them together and return the result of that.
 */

/**
 * CODE IMPLEMENTATION
 */
const capitalize = (word: string): string =>
  word[0].toUpperCase() + word.slice(1).toLowerCase();
