class EditorMemento {
  constructor(protected _content: string) {}
  get content(): string {
    return this._content;
  }
}
export class Editor {
  constructor(protected _content = "") {}
  type(words: string) {
    this._content = this._content + " " + words;
  }
  save() {
    return new EditorMemento(this._content);
  }
  restore(memento: EditorMemento) {
    this._content = memento.content;
  }
  get content(): string {
    return this._content;
  }
}
