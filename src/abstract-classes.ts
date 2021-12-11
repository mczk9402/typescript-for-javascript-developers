export {};

// 抽象メソッドは抽象クラスでしかつかえない。抽象クラスは継承が前提
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrr';
  }
}
