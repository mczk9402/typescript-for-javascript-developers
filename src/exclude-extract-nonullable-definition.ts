export {};

type MyExclude = DebugType;

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
// ユニオン型から除去する型 Exclude<ユニオンタイプ, 除去する型>
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

type NunFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;
// Function 関数の型の総称
// extract ユニオン型から指定の型を継承する
type FunctionTypeExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
// すべての関数は引き継ぐ
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// nullを抜く
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>; //nullを取る

// type NonNullable<T> = T extends null | undefined ? never : T;
type a =
  | (string extends null | undefined ? never : string) // true string
  | (number extends null | undefined ? never : number) // true number
  | (null extends null | undefined ? never : null) // false never
  | (undefined extends null | undefined ? never : undefined); // never
