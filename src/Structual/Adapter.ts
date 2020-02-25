interface Lion {
  roar(): void;
}
class AfricanLion implements Lion {
  roar() {}
}
class AsianLion implements Lion {
  roar() {}
}
export class Hunter {
  hunt(_lion: Lion) {
    console.log("狩りが成功");
  }
}
export class WildDog {
  bark() {}
}
export class WildDogAdapter implements Lion {
  constructor(protected _dog: WildDog) {}
  roar() {
    this._dog.bark();
  }
}
