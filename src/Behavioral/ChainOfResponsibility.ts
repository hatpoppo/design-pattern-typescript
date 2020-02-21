abstract class Account {
  constructor(name: string) {
    this.balance = 0;
    this.name = name;
  }
  protected successor: Account | undefined;
  protected balance: number;
  protected name: string;
  public setNext(acount: Account) {
    this.successor = acount;
  }
  public pay(amountToPay: number) {
    if (this.canPay(amountToPay)) {
      console.log(`${this.name}で${amountToPay}ドル支払われました。`);
    } else if (this.successor) {
      console.log(`${this.name}で支払い出来ません。`);
      this.successor.pay(amountToPay);
    } else {
      throw new Error("残高が十分なアカウントはありません。");
    }
  }
  public canPay(amount: number) {
    return this.balance >= amount;
  }
}

export class Bank extends Account {
  protected balance: number;
  constructor(name: string, balance: number) {
    super(name);
    this.balance = balance;
  }
}
export class Paypal extends Account {
  protected balance: number;
  constructor(name: string, balance: number) {
    super(name);
    this.balance = balance;
  }
}
export class BitCoin extends Account {
  protected balance: number;
  constructor(name: string, balance: number) {
    super(name);
    this.balance = balance;
  }
}
