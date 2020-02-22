//Visitee(訪問される側)
interface Animal {
  accept(operation: AnimalOperation): void;
}
//Visitor
interface AnimalOperation {
  visitMonkey(monkey: Monkey): void;
  visitLion(lion: Lion): void;
  visitDolphin(dolphin: Dolphin): void;
}

//Animal
export class Monkey implements Animal {
  shout() {
    console.log("ウキャッ、キャッ");
  }
  accept(operation: AnimalOperation) {
    operation.visitMonkey(this);
  }
}
export class Lion implements Animal {
  roar() {
    console.log("ガオぉぉぉ");
  }
  accept(operation: AnimalOperation) {
    operation.visitLion(this);
  }
}
export class Dolphin implements Animal {
  speak() {
    console.log("キキキ、キキキ");
  }
  accept(operation: AnimalOperation) {
    operation.visitDolphin(this);
  }
}
//Visitor実装
export class Speak implements AnimalOperation {
  visitMonkey(monkey: Monkey) {
    monkey.shout();
  }
  visitLion(lion: Lion) {
    lion.roar();
  }
  visitDolphin(dolphin: Dolphin) {
    dolphin.speak();
  }
}

export class Jump implements AnimalOperation {
  visitMonkey(monkey: Monkey) {
    console.log("２０フィートジャンプして木に登った");
  }
  visitLion(lion: Lion) {
    console.log("７フィートジャンプして着地した");
  }
  visitDolphin(dolphin: Dolphin) {
    console.log("水上を少し進んでから姿を消した");
  }
}
