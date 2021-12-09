export {};

// enum型 列挙型 物が複数が前提
enum Manths {
  January = 1,
  Fabruary,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Manths.January);
console.log(Manths.Fabruary);
console.log(Manths.December);

// enumを使わない場合の書き方
const ManthsJs = {
  January: 0,
  February: 1,
  //  ~~~~
};

// 文字列の列挙型

enum COLORS {
  RED = '#ff0000',
  WHITE = '#ffffff',
  GREEN = '#008000',
  BLUE = '#0000ff',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log(green);

// enum型の追加の仕方
enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}

COLORS.YELLOW;
