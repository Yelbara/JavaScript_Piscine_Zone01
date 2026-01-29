
const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
  
};

let clone1 = {... person}; // method 1
let clone2 = {... person};
let samePerson = person; // reference copy
console.log("before change");
console.log("person | country: " + person.country);
console.log("clone1 | country: " + clone1.country);
console.log("clone2 | country: " + clone2.country);
console.log("samePerson | country: " + samePerson.country);
console.log("-----------change--------------")
person.country = "FR";
person.age++;

console.log("after change");
console.log("person | country: " + person.country);
console.log("clone1 | country: " + clone1.country);
console.log("clone2 | country: " + clone2.country);
console.log("samePerson | country: " + samePerson.country);

/*
// Method 1: Spread syntax { ...obj }
    EXPLANATION:
    // Creates a new top-level object (shallow copy)
    // Primitive values (numbers, strings, booleans) are copied fully
    // Nested objects/arrays/functions are copied by reference (shared)
    // This is NOT a deep copy: modifying nested objects in the copy affects the original

*/
