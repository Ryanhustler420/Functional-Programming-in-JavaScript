// Currying

function add(x) {
  return function(y) {
    return x + y;
  };
}

add(10)(20); // 30

const addThree = add(3);
addThree(4); // 7
addThree(5); // 8
addThree(99); // 102

// ES2015 arrow function

const add2 = x => (y, tmp) => x + y + (tmp | 0);

const addWith = add2(3);

addWith(4, 5); /*? */
addWith(4); /*? */
addWith(4, 25); /*? */

// Arity

// menaing a number of arrgument a function received. depanding of the number
// it receives there are different word discribe these functions

//  1 - unary
//  2 - binary
//  3 - ternary
//  4 - quaternary
