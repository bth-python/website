/**
 * This is the main file that executes all test cases to assert that the
 * functions in the module.js are implemented as expected.
 */
import * as lab from './lab.js'
import * as module from './module.js'

console.log("Ready to go to work! Lets make it all green!\n" + "=".repeat(50))
console.log(lab.assert(module.hello, [], "Hello world"))

console.log(lab.assert(module.magicNumber, [], 42))

console.log(lab.assert(module.stringNumber, [42], "42"))

console.log(lab.assert(module.stringLength, ["Hello world"], 11))
console.log(lab.assert(module.stringLength, ["cactus"], 6))

console.log(lab.assert(module.product, [7, 6], 42))

console.log(lab.assert(module.sumValues, [42.2, 34.5], 76.7))

console.log(lab.assert(module.sumFloatRoundedLower, [42.2345, 34.55452], 76))

console.log(lab.assert(module.sumFloatRoundedHigher, [245.567, 124.6543], 371))

console.log(lab.assert(module.diffFloatRoundedActual, [76.887585, 42.543265], 34.34))

console.log(lab.assert(module.roundPI, [], 3.1416))

console.log(lab.assert(module.concatinateString, ["Hello", "everyone"], "Hello everyone"))

console.log(lab.assert(module.charAtPosition, ["JavaScript"], "S"))
console.log(lab.assert(module.charAtPosition, ["programmering"], "r"))

console.log(lab.assert(module.upper, ["programming"], "PROGRAMMING"))
console.log(lab.assert(module.upper, ["webtec"], "WEBTEC"))

console.log(lab.assert(module.upperFirst, ["programming"], "Programming"))
console.log(lab.assert(module.upperFirst, ["javaScript"], "JavaScript"))

console.log(lab.assert(module.substring, ["Polarbear"], "ear"))

console.log(lab.assert(module.wordIncludes, ["Polarbear"], true))
console.log(lab.assert(module.wordIncludes, ["Lemon"], false))

console.log(lab.done())
