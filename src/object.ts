export {};

let profile1: object = { name: 'Ham' };
// objectのアノテーションはゆるい 以下でもエラーが起きない。
profile1 = { brithYear: 1976 };

let profile2: { name: string } = { name: 'Ham' };
// 以下だとエラーが起きる アノテーション内で宣言されていないものは許可されない
profile2 = { name: 'hoge' };
// 型宣言というのは変数に対してできるだけ締め付ける型を定義するのが理想的
// 想定外の物が混入するのを回避するため
// 中身が分かっている場合は極力丁寧にアノテーションする。
