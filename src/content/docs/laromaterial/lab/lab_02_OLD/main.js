/**
 * This is the main file that executes all test cases to assert that the
 * functions in the module.js are implemented as expected.
 */
import * as lab from './lab.js'
import * as module from './module.js'

console.log('Ready to go to work! Lets make it all green!\n' + '='.repeat(50))
console.log(lab.assert(module.hello, [], 'Hello world', 0))

console.log(lab.assert(module.createNumberArrayUpToN, [0], []))
console.log(lab.assert(module.createNumberArrayUpToN, [1], [1]))
console.log(lab.assert(module.createNumberArrayUpToN, [3], [1,2,3]))

console.log(lab.assert(module.createNumberArrayDownToN, [0], [0]))
console.log(lab.assert(module.createNumberArrayDownToN, [-1], [0,-1]))
console.log(lab.assert(module.createNumberArrayDownToN, [-3], [0,-1,-2,-3]))

console.log(lab.assert(module.countAllOddNumbers, [[]], 0))
console.log(lab.assert(module.countAllOddNumbers, [[1, 2, 3, 4, 5]], 3))
console.log(lab.assert(module.countAllOddNumbers, [[1, 1, 1]], 3))
console.log(lab.assert(module.countAllOddNumbers, [[2, 2, 2]], 0))

console.log(lab.assert(module.getTypeOf, [42], 'number'))
console.log(lab.assert(module.getTypeOf, [3.14], 'number'))
console.log(lab.assert(module.getTypeOf, ["42"], 'string'))
console.log(lab.assert(module.getTypeOf, [true], 'boolean'))
console.log(lab.assert(module.getTypeOf, [[]], 'object'))

console.log(lab.assert(module.countAllOddOnlyNumbers, [[]], 0))
console.log(lab.assert(module.countAllOddOnlyNumbers, [[1, 2, 3, 4, 5]], 3))
console.log(lab.assert(module.countAllOddOnlyNumbers, [["1", 1]], 1))
console.log(lab.assert(module.countAllOddOnlyNumbers, [[true, 1]], 1))

console.log(lab.assert(module.createNewArrayAndAddItem, [[]], [42], 2))
console.log(lab.assert(module.createNewArrayAndAddItem, [[1,2,3]], [1,2,3,42]))

console.log(lab.assert(module.createNewArrayAndRemoveLastItem, [[42]], [], 2))
console.log(lab.assert(module.createNewArrayAndRemoveLastItem, [[1,2,3]], [1,2]))

console.log(lab.assert(module.createNewArrayAndRemoveFirstItem, [[42]], [], 2))
console.log(lab.assert(module.createNewArrayAndRemoveFirstItem, [[1,2,3]], [2,3]))

console.log(lab.assert(module.sortArray, [[3,2,1]], [1,2,3], 2))
console.log(lab.assert(module.sortArray, [[3,2,1,0,-1,100]], [-1,0,1,100,2,3]))
console.log(lab.assert(module.sortArray, [[3,-1,20,1]], [-1,1,20,3]))

console.log(lab.assert(module.sortArrayNumber, [[3,2,1]], [1,2,3], 2))
console.log(lab.assert(module.sortArrayNumber, [[3,2,1,0,-1,100]], [-1,0,1,2,3,100]))
console.log(lab.assert(module.sortArrayNumber, [[3,-1,20,1]], [-1,1,3,20]))

console.log(lab.assert(module.filterArrayNumber, [[100,20,3]], [3,20,100], 2))
console.log(lab.assert(module.filterArrayNumber, [[1,"1",true]], [1]))
console.log(lab.assert(module.filterArrayNumber, [[NaN,3,"2",1,false]], [NaN,1,3]))

console.log(lab.done())