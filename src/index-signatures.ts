export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

// interfaceにある物は初期化が必要
let profile: Profile = { name: 'Ham', underTwenty: false };

// How to write index signatures
// { [ index: typeforIndex ]: typeForValue }

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';
