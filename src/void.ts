export {};

// void型 何もデータが存在しない時にvoid型を指定する。

// 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。
// 関数から返り値がない事を期待する型
function returnNothing(): void {
  console.log('I dont` return anything!');
}

console.log(returnNothing());
