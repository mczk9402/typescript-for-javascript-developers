export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
// ユニオン型から除去する型 Exclude<ユニオンタイプ, 除去する型>
type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;
// Function 関数の型の総称
// extract ユニオン型から指定の型を継承する
type FunctionTypeExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
// すべての関数は引き継ぐ
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>; //nullを取る
