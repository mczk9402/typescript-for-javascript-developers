export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Ham', 43);

type Profile = Parameters<typeof debugProfile>;
const profile: Profile = ['Gloria', 76];

debugProfile(...profile);

/*
  引数の型を取得する
  type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
*/

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any
  ? P
  : never;
