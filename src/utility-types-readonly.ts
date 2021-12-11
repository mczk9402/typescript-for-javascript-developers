export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 43,
};

me.age++;

console.log(me.age);

type PersonarDataType = Readonly<Profile>;

const friend: PersonarDataType = {
  name: 'Shigeru',
  age: 40,
};

// friend.age++

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
