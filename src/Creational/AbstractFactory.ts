interface Door {
  getDescription(): void;
}
class WoodenDoor implements Door {
  getDescription() {
    console.log("私は木のドアです");
  }
}
class IronDoor implements Door {
  getDescription() {
    console.log("私は鉄のドアです");
  }
}

interface DoorFittingExpert {
  getDescription(): void;
}
class Welder implements DoorFittingExpert {
  getDescription() {
    console.log("私が取り付けられるのは鉄のドアだけです");
  }
}
class Carpenter implements DoorFittingExpert {
  getDescription() {
    console.log("私が取り付けられるのは木のドアだけです");
  }
}
interface DoorFactory {
  makeDoor(): Door;
  makeFittingExpert(): DoorFittingExpert;
}
//木製ドアのファクトリーは大工と木製ドアを返す
export class WoodenDoorFactory implements DoorFactory {
  makeDoor(): Door {
    return new WoodenDoor();
  }
  makeFittingExpert(): DoorFittingExpert {
    return new Carpenter();
  }
}
//鉄製ドアのファクトリーは鉄職人と鉄製ドアを返す
export class IronDoorFactory implements DoorFactory {
  makeDoor(): Door {
    return new IronDoor();
  }
  makeFittingExpert(): DoorFittingExpert {
    return new Welder();
  }
}
