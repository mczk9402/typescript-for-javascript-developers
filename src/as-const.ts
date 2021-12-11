export {};

let name = 'Atsushi';
name = 'Ham';

let nickname = 'Ham' as const;
// nickname = 'Hamtaro';

// readonlyにする
let profile = {
  name: 'Atsushi',
  height: 178,
} as const;

// 許可しなくなる
// profile.name = 'Ham';
// profile.height = 180;
