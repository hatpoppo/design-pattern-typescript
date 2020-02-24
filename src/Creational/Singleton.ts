export class President {
  private static _instance: President;
  private constructor() {}
  public static getInstance(): President {
    if (!President._instance) {
      President._instance = new President();
    }
    return President._instance;
  }
}
