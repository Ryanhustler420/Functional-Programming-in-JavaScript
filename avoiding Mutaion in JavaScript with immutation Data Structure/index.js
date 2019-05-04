// Immutable Data

// Mutable = can be changed after creation
// Immutable = can't be changed after creation

const a = [1, 2, 3];
const b = a;

console.log(a); // [1,2,3]
console.log(b); // [1,2,3]

console.log(a === b);

b.push(4);

console.log(a); // [1,2,3,4]
console.log(b); // [1,2,3,4]

console.log(a === b);

const aa = {foo: 'bar'};
const bb = aa;
bb.foo = 'baz';
console.log(aa.foo); // baz

// This is problematic for functional programming because it
// breaks the purety of our functions when we make update for
// data we wanna return brand new data structure that contains
// all the element of the previous state of the data structure
// plus our updates, for instance:

const push = value => array => {
  const clone = [...array];
  clone.push(value);
  return clone;
};

const aaa = [1, 2, 3]; // [1, 2, 3]
const bbb = push(4)(aaa); // [1, 2, 3, 4]
console.log(aaa === bbb);

// an Example

class MutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    this.amount = Math.max(this.amount - value, 0);
    return this;
  }
}

const mg1 = new MutableGlass('water', 100);
const mg2 = mg1.takeDrink(20);

console.log(mg2 === mg1);
console.log(mg1.amount === mg2.amount);

class ImmutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    return new ImmutableGlass(this.content, Math.max(this.amount - value, 0));
  }
}

const ig1 = new ImmutableGlass('water', 100);
const ig2 = ig1.takeDrink(20);
console.log(ig1 === ig2);
console.log(ig1.amount === ig2.amount);
