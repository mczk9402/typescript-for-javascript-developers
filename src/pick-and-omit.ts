export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// 指定した型だけ継承する
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
type SmallProfile = Omit<DetailedProfile, 'height'>;

/*
  type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };
*/

/*
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
*/

/*
  type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
  type MaySmallProfile = MyOmit<DetailedProfile, 'height'>;
*/
type MyOmit = Pick<DetailedProfile, Exclude<'name' | 'height' | 'weight', 'height'>>;
type MaySmallProfile = MyOmit;
