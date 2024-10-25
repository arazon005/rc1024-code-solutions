/* exported isUpperCased */
/**
 * PSEUDOCODE:
 *
 * define a function 'isUpperCased', with one argument 'word' of type string, and returns boolean.
 *  return the result of a conditional that checks if word is strictly equal to word when all capitalized.
 */

const isUpperCased = (word: string): boolean => word === word.toUpperCase();
