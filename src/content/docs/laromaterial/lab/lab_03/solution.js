/**
 * This is a lab where the intention is that you implement the body to all
 * functions below.
 */

/**
 * Create an empty object using the object literal and return it.
 * @returns {object} An empty object.
 */
export function createEmptyObject () {
  // TODO: Write your code here.
  return {}
}

/**
 * Create an object with the property name and the property age where 
 * name = 'Doe' and property age = 42.
 * @returns {object} Object with properties with values.
 */
export function getDoeObject () {
  // TODO: Write your code here.
  return {
    name: 'Doe',
    age: 42,
  }
}

/**
 * Get an object with the property age and increment the age with 1,
 * then return the resulting object. If the property age does not exists, then 
 * set it to 1.
 * @param {object} doe - Object with (at least) age as properties.
 * @returns {object} The object with age incremented with 1.
 */
export function incrementAgeOfObject (doe) {
  // TODO: Write your code here.
  if (doe.age === undefined) {
    doe.age = 0
  } 
  doe.age += 1
  return doe
}

/**
 * You get two objects as parameters and you should merge those two objects
 * into one object and return it.
 * @param {object} object1 - The first object.
 * @param {object} object2 - The second object.
 * @returns {object} The resulting merged object.
 */
export function mergeTwoObjects (object1, object2) {
  // TODO: Write your code here.
  return {...object1, ...object2}
}

/**
 * Count the number of properties in the object.
 * @param {object} obj - Object with properties to count.
 * @returns {number} The number of properties in the object.
 */
export function countAllProperties (obj) {
  // TODO: Write your code here.
  return Object.keys(obj).length
}

/**
 * Sum all values in the object, but only if the value is a number.
 * @param {object} obj - Object with properties with values.
 * @returns {number} Sum of the (number) values.
 */
export function sumAllValues (obj) {
  // TODO: Write your code here.
  let sum = 0

  for (const property in obj) {
    const value = obj[property]
    if (typeof value == 'number') {
      sum += value
    }
  }

  return sum
}

/**
 * Create an object with the properties 'name' and 'age' and set their values
 * to the matching incoming parameters.
 * @param {string} name - The name of the person.
 * @param {number} age - The age of the person.
 * @returns {object} A new object with properties and matching values.
 */
export function createPersonObject (name, age) {
  // TODO: Write your code here.
  return {name, age}
}


/*
return keys
return values
return entries

asValue
asString
*/



/**
 * Modify the object by adding the property "add: 1" and remove the property "del".
 * @param {object} obj - The object to modify.
 * @returns {object} An updated object with added and removed property.
 */
export function modifyProperties (obj) {
  // TODO: Write your code here.
  delete obj.del
  obj.add = 1
  return obj
}

/**
 * Return all the keys from the object obj.
 * @param {object} obj - Incoming object.
 * @returns {[]} An array with all the keys (property names) in the object.
 */
export function getObjectKeys (obj) {
  // TODO: Write your code here.
  return Object.keys(obj)
}

/**
 * Return all the values from the object obj.
 * @param {object} obj - Incoming object.
 * @returns {[]} An array with all the values in the object.
 */
export function getObjectValues (obj) {
  // TODO: Write your code here.
  return Object.values(obj)
}

/**
 * Return the first entry (key:value pair) as an array with the [key, value],
 * use some built-in function to accomplish this.
 * @param {object} obj - Incoming object.
 * @returns {[]} An array with the first key:value pair.
 */
export function getFirstObjectEntry (obj) {
  // TODO: Write your code here.
  return Object.entries(obj)[0]
}
