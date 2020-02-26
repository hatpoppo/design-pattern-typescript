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

import { StationList, RadioStation } from "./Behavioral/Iterator";
let stationList = new StationList([]);
stationList.addStation(new RadioStation(100));
stationList.addStation(new RadioStation(200));
for (let station of stationList) {
  console.log(station);
}

import { ChatRoom, User } from "./Behavioral/Mediator";
let mediator = new ChatRoom();
let john = new User("John", mediator);
let jane = new User("Jane", mediator);
john.send("こんにちは！");
jane.send("良い天気ね。");

import { Editor } from "./Behavioral/Memento";
let editor = new Editor();

editor.type("最初の文です。");
editor.type("次の文です。");

let saved = editor.save();

editor.type("３番目の文です。");

console.log(editor.content);

editor.restore(saved);
console.log(editor.content);

import { JobSeeker, JobPostings, JobPost } from "./Behavioral/Observer";

let johnDoe = new JobSeeker("John Doe");
let JaneDoe = new JobSeeker("Jane Doe");

let jobPostins = new JobPostings();
jobPostins.attach(johnDoe);
jobPostins.attach(JaneDoe);

jobPostins.addJob(new JobPost("ソフトウェアエンジニア"));

import { Monkey, Lion, Dolphin, Speak, Jump } from "./Behavioral/Visitor";
let monkey = new Monkey();
let lion = new Lion();
let dolphin = new Dolphin();

let speak = new Speak();
monkey.accept(speak);
lion.accept(speak);
dolphin.accept(speak);

let jump = new Jump();
monkey.accept(jump);
lion.accept(jump);
dolphin.accept(jump);

import { Sorter, BubbleSortStrategy, QuickSortStartegy } from "./Behavioral/Strategy";
let dataset = [1, 4, 6, 8, 3];
let sorter = new Sorter(new BubbleSortStrategy());
sorter.sort(dataset);

sorter = new Sorter(new QuickSortStartegy());
sorter.sort(dataset);

import { TextEditor, Default, UpperCase, LowerCase } from "./Behavioral/State";
let state_editor = new TextEditor(new Default());
state_editor.type("First line.");
state_editor.state = new UpperCase();
state_editor.type("Second line.");
state_editor.state = new LowerCase();
state_editor.type("Third line.");

import { AndroidBuilder, IOSBuilder } from "./Behavioral/TemplateMethod";
let androidBuilder = new AndroidBuilder();
androidBuilder.build();

let iosBuilder = new IOSBuilder();
iosBuilder.build();

import { DoorFactory } from "./Creational/SimpleFactory";
let door = DoorFactory.makeDoor(100, 200);
console.log("Width:", door.getWidth());
console.log("Height:", door.getHeight());

import { DevelopmentManager, MarketingManager } from "./Creational/FactoryMethod";
let devManager = new DevelopmentManager();
devManager.takeInterview();

let marketingManager = new MarketingManager();
marketingManager.takeInterview();

import { WoodenDoorFactory, IronDoorFactory } from "./Creational/AbstractFactory";
let woodenFactory = new WoodenDoorFactory();
let doordoor = woodenFactory.makeDoor();
let expert = woodenFactory.makeFittingExpert();
doordoor.getDescription();
expert.getDescription();

let ironFactory = new IronDoorFactory();
doordoor = ironFactory.makeDoor();
expert = ironFactory.makeFittingExpert();
doordoor.getDescription();
expert.getDescription();

import { BurgerBuilder } from "./Creational/Builder";
let burger = new BurgerBuilder(14)
  .addChese()
  .addLettuce()
  .addPepperoni();
console.log(burger);

import { Sheep } from "./Creational/Prototype";
let original = new Sheep("ジョリー");
console.log(original.name);
console.log(original.category);

let cloned = original.clone();
console.log(cloned.name);
cloned.name = "ドリー";
console.log(cloned.name);
console.log(original.name);

import { President } from "./Creational/Singleton";
const president1 = President.getInstance();
const president2 = President.getInstance();
if (president1 === president2) {
  console.log("インスタンスが一致");
}

import { WildDog, WildDogAdapter, Hunter } from "./Structual/Adapter";
let wildDog = new WildDog();
let wildDogAdapter = new WildDogAdapter(wildDog);
let hunter = new Hunter();
hunter.hunt(wildDogAdapter);

import { DarkTheme, About, Careers } from "./Structual/Bridge";
let darkTheme = new DarkTheme();
let about = new About(darkTheme);
let careers = new Careers(darkTheme);
console.log(about.getContent());
console.log(careers.getContent());
