export {};

let profile: (string | number)[] = ['Ham', 43];
profile = [53, 'hoge'];
// ⬆️エラーにならない。ユニオン型は配列の順序を気にしない

let profile2: [string, number] = ['Ham', 43];
// profile2 = [50, 'Ham'];
// ⬆️エラーなる。配列の順序を気にする。
