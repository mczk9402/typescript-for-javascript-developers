export {};

// 既存の型の別名 先頭の文字は大文字
type Mojiretsu = string;

const fooString: string = 'こんにちは';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Ham',
  age: 43,
};

type Profile2 = typeof example1;
