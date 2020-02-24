class Burger {
  protected _size: number;
  protected _cheese: boolean = false;
  protected _pepperoni: boolean = false;
  protected _lettuce: boolean = false;
  protected _tomato: boolean = false;

  constructor(builder: BurgerBuilder) {
    this._size = builder._size;
    this._cheese = builder._cheese;
    this._pepperoni = builder._pepperoni;
    this._lettuce = builder._lettuce;
    this._tomato = builder._tomato;
  }
}
export class BurgerBuilder {
  public _cheese = false;
  public _pepperoni = false;
  public _lettuce = false;
  public _tomato = false;
  constructor(public _size: number) {}
  addChese() {
    this._cheese = true;
    return this;
  }
  addPepperoni() {
    this._pepperoni = true;
    return this;
  }
  addLettuce() {
    this._lettuce = true;
    return this;
  }
  addTomato() {
    this._tomato = true;
    return this;
  }
  build(): Burger {
    return new Burger(this);
  }
}
