// Higher order functions

// A higher order function is any function that does at least one of the following
//   1. Accepts a function as an argument
//   2. Returns a new function

/*****************************************************/
/*****************************************************/
/*****************************************************/

// const withCount = fn => {
//   let count = 0;
//   return (...rest) => {
//     console.log(rest);
//     console.log(`call Count: ${++count}`);
//     return fn(...rest);
//   };
// };

// const add = (x, y) => x + y;

// const counterFn = withCount(add);

// console.log(counterFn(1, 2));
// console.log(counterFn(3, 2));
// console.log(counterFn(9, 2));

/*****************************************************/
/*****************************************************/
/*****************************************************/

const register = fn => {
  let count = 0;
  let lastRegistedGender = undefined;
  return (name, age, sex) => {
    lastRegistedGender = sex;
    console.log(name, age, lastRegistedGender);
    console.log(`call Count: ${++count}`);
    return fn(name, age);
  };
};

const say = (name, age) => `${name} is ${age} years old.`;

const regUser = register(say);

console.log(regUser('Gaurav', 21, 'M'));
console.log(regUser('Saurav', 23, 'M'));
console.log(regUser('Sarita', 26, 'F'));
console.log(regUser('Sangeeta', 26, 'F'));
