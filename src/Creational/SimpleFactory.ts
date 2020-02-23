interface Door {
  getWidth(): void;
  getHeight(): void;
}
class WoodenDoor implements Door {
  constructor(protected _width: number, protected _hight: number) {}
  getWidth() {
    return this._width;
  }
  getHeight() {
    return this._hight;
  }
}
export class DoorFactory {
  static makeDoor(width: number, hight: number): Door {
    return new WoodenDoor(width, hight);
  }
}
