/**
 * This module contains lab specific code to assert the functions of the lab
 * and to calculate the result.
 */

const level = {
  pass: 9,
  honour: 11,
}

const feedback = {
  0: `Try to earn 1 point to get started... 😏`,
  1: `Nice work, lets go, do another! 😉`,
  5: `Great, you are on fire and progress is made. 😋`,
  9: `Just one more to PASS. Lets go. 😅`,
  //10: `Excellent, you have PASSED. 😁`,
  9: `Excellent, you have PASSED. Lets try one more? 😁`,
  11: `That is the way, you PASSED WITH HONOUR! 😍`,
  //15: `What can I say. You impress me. 🙌`,
}

const stats = {}

/**
 * Format a value to its string represenation.
 * @param {Object} args - A value to parse and format as a string.
 * @returns {string} A string representation of the value.
 */
function argsAsString (args) {
  let argStr = ''
  for (let arg of args) {
    if (typeof arg === 'string') {
      argStr += `'${arg}', `
    } else if (typeof arg === 'object' && Array.isArray(arg)) {
      argStr += `[${arg}], `
    } else if (typeof arg === 'object' && !Array.isArray(arg) && arg !== null) {
      argStr += JSON.stringify(arg) + `, `
    } else {
      argStr += `${arg}, `
    }
  }

  return argStr.slice(0, -2)
}


/**
 * Execute the testcase and assert that it was corrent or not and return a
 * status string the can be written out.
 * @param {Function} func - The function to test.
 * @param {Object} expected - The expected result from the function call.
 * @param {Object} args - The arguments to send to the function.
 * @param {number} point - The number of points that this functions is worth in total.
 * @returns {string} A string representation of the test case success or failure.
 */
export function assert (func, args, expected, point=1) {
  let argStr = argsAsString(args)
  const result = func(...args)
  let success = '❌'
  
  if (typeof expected === 'object' && Array.isArray(expected)) {
    if (JSON.stringify(expected) === JSON.stringify(result)) {
      success = '✅'
    } 
  } else if (typeof expected === 'object' && !Array.isArray(expected) && expected !== null) {
    if (JSON.stringify(expected) === JSON.stringify(result)) {
      success = '✅'
    }
  } else if (isNaN(expected) && isNaN(result)) {
    success = '✅'
  } else {
    success = expected === result ? '✅' : '❌'
  }

  // Calculate the stats
  if (!(func.name in stats)) {
    stats[func.name] = {
      run: 0,
      passed: 0,
      failed: 0,
      point,
    }
  }
  stats[func.name].run++
  if (success === '✅') {
    stats[func.name].passed++
  } else {
    stats[func.name].failed++
  }

  // Prepare the argument string
  let expectedStr = argsAsString([expected])
  let resultStr = argsAsString([result])

  return `${success} ${stats[func.name].point}p ${func.name}(${argStr}), expected: ${expectedStr} (${typeof expected}), actual: ${resultStr} (${typeof result})`
}

/**
 * Print out the results when the execution is done.
 * @returns {string} A string representation of the results.
 */
export function done (func, expected, args) {
  let points = 0
  let passed = 0
  let failed = 0
  let total = 0
  let result = 0
  let str = ''
  for (const func of Object.keys(stats)) {
    points += stats[func].point
    passed += stats[func].passed
    failed += stats[func].failed
    total += stats[func].passed + stats[func].failed
    result += stats[func].point * Math.floor(stats[func].passed / (stats[func].passed + stats[func].failed), 1)
  }

  let msg = feedback[0]
  for (const key of Object.keys(feedback)) {
    if (result < key) {
      break
    }
    msg = feedback[key]
  }

  str += `Passed: ${passed}, Failed: ${failed}, Total: ${total}`
  str += `\nYou have ${result} points out of total ${points} points.`
  str += `\nYou need ${level.pass} points to PASS`
  str += level.honour !== undefined ? ` and ${level.honour} points to PASS WITH HONOUR.` : '.'
  str += `\n${msg}`
  return str
}
