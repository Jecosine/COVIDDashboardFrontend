import BaseModel from "./BaseModel";

export default class Subscription extends BaseModel {
  id?: string;
  subscribeList?: string[];
  subscriber?: string;
  /**
   *
   */
  constructor(obj: {
    id: string,
    subscribeList: string[],
    subscriber: string
  }) {
    super();
    Object.assign(this, obj);
  }

  public testFunction(): string {
    return '';
  }
}