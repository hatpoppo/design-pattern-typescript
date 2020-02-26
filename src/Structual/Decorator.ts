abstract class Coffee {
  abstract get cost(): number;
  abstract get description(): string;
}
export class SimpleCoffee extends Coffee {
  get cost() {
    return 10;
  }
  get description() {
    return "Simple Coffee";
  }
}
export class MilkCoffee extends Coffee {
  constructor(protected _coffee: Coffee) {
    super();
  }
  get cost() {
    return this._coffee.cost + 2;
  }
  get description() {
    return this._coffee.description + "、ミルク";
  }
}

export class WhipCoffee extends Coffee {
  constructor(protected _coffee: Coffee) {
    super();
  }
  get cost() {
    return this._coffee.cost + 5;
  }
  get description() {
    return this._coffee.description + "、ホイップ";
  }
}
export class VanillaCoffee extends Coffee {
  constructor(protected _coffee: Coffee) {
    super();
  }
  get cost() {
    return this._coffee.cost + 3;
  }
  get description() {
    return this._coffee.description + "、バニラ";
  }
}
