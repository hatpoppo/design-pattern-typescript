export class Sheep {
  constructor(protected _name: string, protected _category: string = "おおつのひつじ") {}
  set name(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set category(category: string) {
    this._category = category;
  }
  get category() {
    return this._category;
  }
  clone(): this {
    const clone = Object.create(this);
    return clone;
  }
}
