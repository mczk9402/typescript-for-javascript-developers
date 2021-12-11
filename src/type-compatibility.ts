export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = barString;
fooString = fooStringLiteral;

let fooNmber: number;
let fooNumberLiteral: 1976 = 1976;
fooNmber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'ハムさん');
