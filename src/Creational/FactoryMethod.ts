interface Interviewer {
  askQuestions(): void;
}
class Developer implements Interviewer {
  askQuestions() {
    console.log("デザインパターンについて尋ねる");
  }
}
class ComunityExecutive implements Interviewer {
  askQuestions() {
    console.log("コミュニティ育成について尋ねる");
  }
}
abstract class HiringManager {
  //Factory method
  protected abstract makeInterviewer(): Interviewer;
  takeInterview() {
    let interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}
export class DevelopmentManager extends HiringManager {
  makeInterviewer() {
    return new Developer();
  }
}
export class MarketingManager extends HiringManager {
  makeInterviewer() {
    return new ComunityExecutive();
  }
}
