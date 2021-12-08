export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

// 呼び元に戻ってこないような関数の戻り値のアノテーション　never
// voidとneverの違い
// void: リターンされる値がないけど呼び元に戻る
// never 呼び元に戻らない

let foo: void = undefined;
let bar: never = error('only me!');
