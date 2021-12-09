export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  printable && console.log({ bmi });
  return bmi;
};

console.log(bmi(1.69, 77, true));

// bmi(身長、体重、console.logで出力するかどうか)？
// bmi(1.78, 86, true)
