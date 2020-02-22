export class JobPost {
  constructor(protected _title: string) {}
  get title() {
    return this._title;
  }
}
interface Observer {
  onJobPosted(job: JobPost): void;
}
export class JobSeeker implements Observer {
  constructor(protected _name: string) {}
  onJobPosted(job: JobPost) {
    console.log(`こんにちは、${this._name}さん。新しい求人が投稿されました。${job.title}`);
  }
}
interface Observable {
  attach(observer: Observer): void;
  notify(jobPost: JobPost): void;
}
export class JobPostings implements Observable {
  constructor(protected _observers: Observer[] = []) {}
  notify(jobPosting: JobPost) {
    this._observers.forEach(observer => {
      observer.onJobPosted(jobPosting);
    });
  }
  attach(observer: Observer) {
    this._observers.push(observer);
  }
  addJob(jobPosting: JobPost) {
    this.notify(jobPosting);
  }
}
