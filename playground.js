const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
const trace = msg => x => (console.log(msg, x), x);
const prop = key => obj => obj[key];
const propItr = key => array => array.map(e => e[key]);
const map = fn => xs => xs.map(fn);
const filter = fn => xs => xs.filter(fn);
const reduce = fn => (start = 0) => xs =>
  xs.reduce(
    (acc, x) => (start.length >= 0 ? (acc += fn(x) + ',') : (acc += fn(x))),
    start
  );
const add = x => y => x + y;
const subtract = x => y => x - y;
const multiply = x => y => x * y;
const divide = x => y => x / y;
const split = pattern => str => str.split(pattern);
const join = separator => xs => xs.join(separator);
const lowerCase = str => str.toLowerCase();
const upperCase = str => str.toUpperCase();
const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;
const makeString = x => x.toString();

const functionCallStatus = fn => {
  return (...rest) => {
    return {
      call: fn(...rest),
      age: fn(4),
    };
  };
};

const double = y => y * 2;
const triple = x => x * 3;

functionCallStatus(double)(2); /*? */
functionCallStatus(triple)(2); /*? */
functionCallStatus(triple)(2); /*? */

compose(
  double,
  triple
)(2); /*? */

typeof pipe(
  double,
  triple,
  makeString
)(2); /*? */

trace('on line')(12); /*? */

const users = [
  {name: 'Gaurav'},
  {name: 'Saurav'},
  {name: 'Sangeeta'},
  {name: 'Sarita'},
];

prop('name')(users[0]); /*? */

propItr('name')(users); /*? */

map(triple)([12, 18, 21, 45]); /*? */

const above12 = age => age > 12;

filter(above12)([12, 10, 1, 23, 56, 78]); /*? */

const addTwo = x => x + 2;

reduce(addTwo)([])([1, 2, 3, 4, 5, 6]).split(','); /*? */

reduce(addTwo)(0)([1, 2, 3, 4, 5, 6]); /*? */

function cb(callback) {
  return callback([1, 2, 3, 4, 5, 5].map(addTwo)); /*? */
}

cb(c => {
  compose(
    double,
    triple
  )(5); /*? */
  c; /*? */
});

add(23)(23); /*? */

const api = baseUrl => path => query => `https://${baseUrl}/${path}?${query}`;

const to = api('google.com'); /*? */
let query = to('public'); /*? */
let finish = query('edit=true'); /*? */

finish;

finish = query('edit=false');

finish;

// learn more about regex expression
split(/\.*/g)('hello'); /*? */

join('')(['h', 'e', 'l', 'l', 'o']); /*? */
