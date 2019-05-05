// Argument Order in Curried Functions

// Believe it or not, the order of arguments in curried functions makes a big
// difference in their usefulness. To understand, let's take a commonly used
// array method, Array.prototype.map(), and turn it into a curried function.
// You might be familiar with this implementation if you have used the
// Underscore or Lodash libraries.

const map = array => func => array.map(func); /*? */

const arr1 = [1, 2, 3, 4, 5]; /*? */

const double = num => num * 2; // name functions which will be consume by functions
const triple = num => num * 3;

const arr1withMap = map(arr1); // first passes the array

// than the function signature for which we wanna convert to
arr1withMap(double); /*? */ // [2, 4, 6, 8, 10]
arr1withMap(triple); /*? */ // [3, 6, 9, 12, 15]

// Our `map` function works, but the partially applied function it creates
// isn't very useful. It has data, but doesn't know what to do with it.
// It would be better if it knew what to do with the data, but was waiting
// to receive it. Then we could pass whatever data we would like to it. Let's
// change the argument order.

const map2 = func => array => array.map(func); /*? */

const listDoubler = map2(triple);

listDoubler(arr1); /*? */ // [2, 4, 6, 8, 10]
listDoubler([3, 4, 8]); /*? */ // [6, 8, 16]
listDoubler([1, -1, 0]); /*? */ // [2, -2, 0]

// Now our partially applied function can be applied to any list of numbers
// which is very useful.

// When creating curried functions, a useful way to think about argument order
// is to place them in the order of most stable to least stable (left to
// right). Arguments that do not need to change such as a callback function
// like `double`, should come before instable arguments, such as data in the
// form of an array or object.

// Let's make a second example and drive this home. Let's make a function that
// picks a value out of an object based on a key.

const pick = key => obj => obj[key];
const pickName = pick('name'); // [λ]

const people = [
  {name: 'Gaurav'},
  {name: 'Saurav'},
  {name: 'Sangeeta'},
  {name: 'Sarita'},
  {name: 'Maya'},
];

const names = map2(pickName)(people); /*? */ // ['Kyle', 'Shirley', 'Kent', 'Sarah', 'Ken']

// Imagine if pick's argument order was the other way. We couldn't pass it to
// the array's map method in a useful way because we'd have no way to declare
// what property name we want it to pick. By setting the argument order the
// way we did, our partially applied function worked beautifully, returning
// the name of each object we gave to it.
