/**
 * This is the main file that executes all test cases to assert that the
 * functions in the module.js are implemented as expected.
 */
import * as lab from './lab.js'
import * as module from './module.js'

console.log('Ready to go to work! Lets make it all green!\n' + '='.repeat(50))

console.log(lab.assert(module.createEmptyObject, [], {}))

console.log(lab.assert(module.getDoeObject, [], {name: 'Doe', age: 42}))

console.log(lab.assert(module.incrementAgeOfObject, [{name: 'Doe', age: 42}], {name: 'Doe', age: 43}))
console.log(lab.assert(module.incrementAgeOfObject, [{age: 42}], {age: 43}))
console.log(lab.assert(module.incrementAgeOfObject, [{agge: 42}], {agge: 42, age: 1}))

console.log(lab.assert(module.mergeTwoObjects, [{}, {}], {}))
console.log(lab.assert(module.mergeTwoObjects, [{prop1: 42}, {prop2: 43}], {prop1: 42, prop2: 43}))
console.log(lab.assert(module.mergeTwoObjects, [{prop1: 42}, {prop1: 43}], {prop1: 43,}))


console.log(lab.assert(module.countAllProperties, [{}], 0))
console.log(lab.assert(module.countAllProperties, [{a:0, b:0, c:0}], 3))
console.log(lab.assert(module.countAllProperties, [{a:null, b:null}], 2))

console.log(lab.assert(module.sumAllValues, [{}], 0))
console.log(lab.assert(module.sumAllValues, [{a:1, b:2, c:3}], 6))
console.log(lab.assert(module.sumAllValues, [{a:1, b:null, c:3}], 4))

console.log(lab.assert(module.createPersonObject, [], {}))
console.log(lab.assert(module.createPersonObject, ['Doe', 42], {name: 'Doe', age: 42}))
console.log(lab.assert(module.createPersonObject, ['Doe'], {name: 'Doe'}))

console.log(lab.assert(module.modifyProperties, [{}], {add: 1}))
console.log(lab.assert(module.modifyProperties, [{del: 1}], {add: 1}))

console.log(lab.assert(module.getObjectKeys, [{}], []))
console.log(lab.assert(module.getObjectKeys, [{a:1,b:1,c:1}], ['a','b','c']))

console.log(lab.assert(module.getObjectValues, [{}], []))
console.log(lab.assert(module.getObjectValues, [{a:1,b:2,c:3}], [1,2,3]))

console.log(lab.assert(module.getFirstObjectEntry, [{}], undefined))
console.log(lab.assert(module.getFirstObjectEntry, [{a:1}], ['a', 1]))
console.log(lab.assert(module.getFirstObjectEntry, [{a:1,b:2,c:3}], ['a', 1]))

console.log(lab.done())