export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;

  constructor(name: string, speed: number) {
    // 親Classの同名のメソッド
    super(name);
    this.speed = speed;
  }

  run(): string {
    return `${super.run()} ${this.speed}km/h`;
  }
}

console.log(new Animal('Mickey').run());
console.log(new Lion('Shimba', 80).run());

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());
