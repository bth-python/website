/**
 * This is a lab where the intention is that you implement the body to all
 * functions below.
 */

/**
 * Returns the string "Hello world".
 * @returns {string} A welcome message "Hello world".
 */
export function hello () {
  // TODO: Write your code here.
  return 'Hello world'
}

/**
 * Create an array with all numbers from 1 up to and including argument n.
 * @param {number} n - Last value to add.
 * @returns {[number]} Array of numbers between 1 and up to and include n.
 */
export function createNumberArrayUpToN (n) {
  // TODO: Write your code here.
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr
}

/**
 * Create an array with all numbers from (and include) n and start from 0.
 * @param {number} n - Value to en the range.
 * @returns {[number]} Array of numbers between 0 and down to and include n.
 */
export function createNumberArrayDownToN (n) {
  // TODO: Write your code here.
  const arr = []
  for (let i = 0; i >= n; i--) {
    arr.push(i)
  }
  return arr
}

/**
 * Count all occurences of odd numbers in the array.
 * @param {[number]} numbers - Array with numbers.
 * @returns {number} The amount of odd numbers in the array.
 */
export function countAllOddNumbers (numbers) {
  // TODO: Write your code here.
  const counter = numbers.reduce((count, num) => (num % 2 == 1) ? count + 1 : count, 0)
  return counter
}

/**
 * Return the type of a value as a string representation using the operator `typeof`.
 * @param {Object} item - The item that should be checked for its type.
 * @returns {number} Return the typeof value for the item.
 */
export function getTypeOf (item) {
  // TODO: Write your code here.
  return typeof item
}

/**
 * Count all occurences of odd numbers in the array and do check that you only count actual numbers.
 * @param {[number]} numbers - Array with numbers, strings and booleans.
 * @returns {number} The amount of odd numbers in the array.
 */
export function countAllOddOnlyNumbers (numbers) {
  // TODO: Write your code here.
  const counter = numbers.reduce((count, num) => {
    if (typeof num !== 'number') {
      return count
    }
    return (num % 2 == 1) ? count + 1 : count
  }, 0)
  return counter
}

/**
 * Create a new array from the input array and add the number 42 to it, at the end.
 * @param {[]} arr - Array with values.
 * @returns {[]} A new array with 42 added to the end.
 */
export function createNewArrayAndAddItem (arr) {
  // TODO: Write your code here.
  const arr1 = arr.slice()
  arr1.push(42)
  return arr1
}

/**
 * Create a new array from the input array and remove the last value in the array.
 * @param {[]} arr - Array with values.
 * @returns {[]} A new array with last value removed.
 */
export function createNewArrayAndRemoveLastItem (arr) {
  // TODO: Write your code here.
  const arr1 = arr.slice()
  arr1.pop()
  return arr1
}

/**
 * Create a new array from the input array and remove the first value in the array.
 * @param {[]} arr - Array with values.
 * @returns {[]} A new array with first value removed.
 */
export function createNewArrayAndRemoveFirstItem (arr) {
  // TODO: Write your code here.
  const arr1 = arr.slice()
  arr1.shift()
  return arr1
}

/**
 * Create a new array and sort it using the built in sorting function.
 * @param {[]} arr - Array with values.
 * @returns {[]} Sorted array.
 */
export function sortArray (arr) {
  // TODO: Write your code here.
  const arr1 = arr.slice()
  arr1.sort()
  return arr1
}

/**
 * Create a new array and sort it by comparing the items as numbers.
 * @param {[]} arr - Array with values.
 * @returns {[]} Sorted array, compared by numbers.
 */
export function sortArrayNumber (arr) {
  // TODO: Write your code here.
  const arr1 = arr.slice()
  arr1.sort((a, b) => a - b)
  return arr1
}

/**
 * Create a new array and remove all values that are not numbers from it and then sort it.
 * @param {[]} arr - Array with values.
 * @returns {[]} Sorted array, only numbers.
 */
export function filterArrayNumber (arr) {
  // TODO: Write your code here.
  const arr1 = arr.filter(item => typeof item === 'number')
  arr1.sort((a, b) => a - b)
  return arr1
}
