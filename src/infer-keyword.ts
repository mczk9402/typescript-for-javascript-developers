export {};

// 関数の値を返す型
function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

/*
  infer とは?
  関数の戻り値を感知するため？
  type ReturnType<T extends (...args: any) => any> =
  T extends (...args: any) => infer R ? R : any;
*/
