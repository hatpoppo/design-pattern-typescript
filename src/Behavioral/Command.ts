//レシーバ
export class Bulb {
  turnOn = () => {
    console.log("電球が付きました");
  };
  turnOff = () => {
    console.log("電球が消えました");
  };
}
interface Command {
  execute(): void;
  undo(): void;
  redo(): void;
}

//コマンド
export class TurnOn implements Command {
  protected bulb: Bulb;
  constructor(bulb: Bulb) {
    this.bulb = bulb;
  }
  execute = () => {
    this.bulb.turnOn();
  };
  undo = () => {
    this.bulb.turnOff();
  };
  redo = () => {
    this.execute();
  };
}
export class TurnOff implements Command {
  protected bulb: Bulb;
  constructor(bulb: Bulb) {
    this.bulb = bulb;
  }
  execute = () => {
    this.bulb.turnOff();
  };
  undo = () => {
    this.bulb.turnOn();
  };
  redo = () => {
    this.execute();
  };
}
//Invoker
export class RemoteControl {
  submit = (command: Command) => {
    command.execute();
  };
}
