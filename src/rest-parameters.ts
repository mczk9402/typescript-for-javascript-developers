export {};

// 総和を返す
const reducer = (previousValue: number, currentValue: number) => {
  console.log({ previousValue, currentValue });
  return previousValue + currentValue;
};

// レストパラメーター 配列で残りの引数を受け取る
const sum: (...values: number[]) => number = (...values: number[]): number => {
  // values.reduce(reducer);
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
