export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

// エラー 型が不明だから計算ができない事を示唆
// let sumUnknown = numberUnknown + 10;

// type gard タイプガード 特定の型かを確認するのをタイプガードという
if (typeof numberUnknown === 'number') {
  // number型なら処理が走る
  let sumUnknown = numberUnknown + 10;
}
