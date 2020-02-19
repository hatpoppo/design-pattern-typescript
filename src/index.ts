import { Bank, Paypal, BitCoin } from "./ChainOfResponsibility";
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
