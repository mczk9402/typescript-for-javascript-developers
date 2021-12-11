export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// type Profile2 = {
//   name?: string;
//   age?: number;
// };

// Partial<> 全てのキーをオプショナルにして複製
type PartialType = Partial<Profile>;
// Required<> 全てのキーを必須項目にして複製
type requiredType = Required<Profile>;
