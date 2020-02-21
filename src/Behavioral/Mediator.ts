interface ChatRoomMediator {
  showMessage: (user: User, message: string) => void;
}
//mediator
export class ChatRoom implements ChatRoomMediator {
  showMessage(user: User, message: string) {
    let time = sampleDate(new Date(), "YYYY/MM/DD");
    console.log(time, `[${user.getName()}]`, message);
  }
}
export class User {
  constructor(protected name: string, protected chatMediator: ChatRoomMediator) {}
  getName() {
    return this.name;
  }
  send(message: string) {
    this.chatMediator.showMessage(this, message);
  }
}
function sampleDate(date: Date, format: string) {
  format = format.replace(/YYYY/, date.getFullYear().toString());
  format = format.replace(/MM/, (date.getMonth() + 1).toString());
  format = format.replace(/DD/, date.getDate().toString());

  return format;
}
