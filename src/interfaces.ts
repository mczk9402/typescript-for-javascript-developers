export {};

type ObjectType = {
  name: string;
  age: number;
};

// 先頭は大文字 interfaseはイコール不要
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'Ham-san',
  age: 43,
};
