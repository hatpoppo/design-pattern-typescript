//キャッシュされるものはすべてflyweight
//お茶の種類をflyweightにする
class KarakTea {
  constructor(protected _type: string) {}
  get type() {
    return this._type;
  }
}
export class TeaMaker {
  protected _availableTea: { [key: string]: KarakTea } = <any>{};
  make(preference: string) {
    if (this._availableTea[preference] === undefined) {
      this._availableTea[preference] = new KarakTea(preference);
    }

    return this._availableTea[preference];
  }
}

export class TeaShop {
  protected _orders: KarakTea[] = [];
  constructor(protected _teaMaker: TeaMaker) {}
  takeOrder(teaType: string, table: number) {
    this._orders[table] = this._teaMaker.make(teaType);
  }
  server() {
    this._orders.forEach((tea, index) => {
      console.log(`テーブル#${index}に${tea.type}のお茶を出す`);
    });
  }
}
