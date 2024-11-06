/* exported isLowerCased */
/**
 * PSEUDOCODE:
 *
 * define a function 'isLowerCased', with one argument 'word' of type string, and returns boolean.
 *  return the result of a conditional that checks if word is strictly equal to word when all lowercase.
 */

const isLowerCased = (word: string): boolean => word === word.toLowerCase();
