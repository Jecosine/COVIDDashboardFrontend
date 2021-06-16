import BaseModel from "./BaseModel";

export default class Subscription extends BaseModel<Subscription> {
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
    super(obj);
  }

}