export {};

let name: any = 'Ham';
// let length = (name as string).length; jsxの関係で非推奨
let length = (<string>name).length;
length = 'aaa';
