interface Door {
  open(): void;
  close(): void;
}

export class LabDoor implements Door {
  open() {
    console.log("研究室のドアを開く");
  }
  close() {
    console.log("研究室のドアを閉じる");
  }
}
export class Security {
  constructor(protected _door: Door) {}
  open(password: string) {
    if (this.authenticate(password)) {
      this._door.open();
    } else {
      console.log("認証出来ません");
    }
  }
  authenticate(password: string) {
    return password === "$ecr@t";
  }
  close() {
    this._door.close();
  }
}
