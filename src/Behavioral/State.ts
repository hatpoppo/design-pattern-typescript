interface WritingState {
  write(words: string): void;
}
export class UpperCase implements WritingState {
  write(words: string) {
    console.log(words.toUpperCase());
  }
}
export class LowerCase implements WritingState {
  write(words: string) {
    console.log(words.toLowerCase());
  }
}

export class Default implements WritingState {
  write(words: string) {
    console.log(words);
  }
}

export class TextEditor {
  constructor(protected _state: WritingState) {}
  set state(state: WritingState) {
    this._state = state;
  }
  type(words: string) {
    this._state.write(words);
  }
}
