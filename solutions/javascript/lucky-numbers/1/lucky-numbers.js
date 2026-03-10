// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  
  let number1 = array1.join('');
  let number2 = array2.join('');

  return Number(number1) + Number(number2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let palindromicNumber = Number(String(value).split('').reverse().join(''));

  return value === palindromicNumber;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(!input) {
    return 'Required field';
  }

  let isNumber = Number(input);

  if(!isNumber > 0) {
    return 'Must be a number besides 0';
  }

  return '';
}
