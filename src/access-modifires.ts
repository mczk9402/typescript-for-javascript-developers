export {};

class Person {
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name} age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // 継承する値　super();
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name} age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');
// let hanako = new Person();

console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
