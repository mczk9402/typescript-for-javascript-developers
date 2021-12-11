export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (srg: string): string => {
//   return arg;
// };

// 抽象的な型 ジェネリクス型
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('Hello'));
console.log(echo<boolean>(true));

// 型の変数のようなもの
class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('hallo').echo());
console.log(new Mirror<boolean>(true).echo());

// 引数の前に抽象的な型の指定をする？
// const echo2 = <T, Y>(arg: T, hoge: Y): T => {
//   console.log(hoge);
//   return arg;
// };

// console.log(echo2<number, string>(1, 'a'));
