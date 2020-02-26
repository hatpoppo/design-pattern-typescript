abstract class WebPage {
  constructor(theme: Theme) {}
  abstract getContent(): void;
}
interface Theme {
  getColor(): void;
}
export class About extends WebPage {
  constructor(protected _theme: Theme) {
    super(_theme);
  }
  getContent() {
    return this._theme.getColor() + "のAboutページです。";
  }
}
export class Careers extends WebPage {
  constructor(protected _theme: Theme) {
    super(_theme);
  }
  getContent() {
    return this._theme.getColor() + "のCareersページです。";
  }
}
export class DarkTheme implements Theme {
  getColor() {
    return "Dark Black";
  }
}
export class LightTheme implements Theme {
  getColor() {
    return "Off White";
  }
}
export class AquaTheme implements Theme {
  getColor() {
    return "Light Blue";
  }
}
