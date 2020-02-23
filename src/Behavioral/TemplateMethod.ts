abstract class Builder {
  //Template method
  build() {
    this.test();
    this.lint();
    this.assemble();
    this.deploy();
  }
  abstract test(): void;
  abstract lint(): void;
  abstract assemble(): void;
  abstract deploy(): void;
}
export class AndroidBuilder extends Builder {
  test() {
    console.log("Androidのテストを実行");
  }
  lint() {
    console.log("Androidコードのlintを実行");
  }
  assemble() {
    console.log("Androidビルドのアセンブリを実行");
  }
  deploy() {
    console.log("Androidビルドをサーバにデプロイ");
  }
}
export class IOSBuilder extends Builder {
  test() {
    console.log("iOSのテストを実行");
  }
  lint() {
    console.log("iOSコードのlintを実行");
  }
  assemble() {
    console.log("iOSビルドのアセンブリを実行");
  }
  deploy() {
    console.log("iOSビルドをサーバにデプロイ");
  }
}
