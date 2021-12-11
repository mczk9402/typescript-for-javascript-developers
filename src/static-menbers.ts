export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work() {
    return `Hey, guys! This is ${this.firstName} Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

// 静的メンバーへのアクセス classからインスタンスを生成するコストをなくすためstaticがある
let a = new Me();
console.log(Me.isProgrammer);
Me.isProgrammer = false;
console.log(Me.isProgrammer);
console.log(Me.work());
// Me.work
