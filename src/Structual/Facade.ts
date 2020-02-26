export class Computer {
  getElectricShock() {
    console.log("ビリビリ！");
  }
  makeSound() {
    console.log("ピッ！ポッ！");
  }
  showLoadingScreen() {
    console.log("読込中．．．");
  }
  bam() {
    console.log("準備ができました！");
  }
  closeEverything() {
    console.log("ビーッ！ビーッ！ビビビビッ！");
  }
  sooth() {
    console.log("（シーン）");
  }
  pullCurrent() {
    console.log("プシューッ！");
  }
}

export class ComputerFacade {
  constructor(protected _computer: Computer) {}
  turnOn() {
    this._computer.getElectricShock();
    this._computer.makeSound();
    this._computer.showLoadingScreen();
    this._computer.bam();
  }
  trunOff() {
    this._computer.closeEverything();
    this._computer.pullCurrent();
    this._computer.sooth();
  }
}
