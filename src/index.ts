import { Bank, Paypal, BitCoin } from "./Behavioral/ChainOfResponsibility";
let bank = new Bank("bank", 100);
let paypal = new Paypal("paypal", 200);
let bitcoin = new BitCoin("bitcoin", 300);
bank.setNext(paypal);
paypal.setNext(bitcoin);
try {
  bank.pay(250);
} catch (e) {
  console.log(e.message);
}

import { Bulb, TurnOff, TurnOn, RemoteControl } from "./Behavioral/Command";
let bulb = new Bulb();
let turnOn = new TurnOn(bulb);
let turnOff = new TurnOff(bulb);

let remote = new RemoteControl();
remote.submit(turnOn);
remote.submit(turnOff);
