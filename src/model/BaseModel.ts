import Request from '../http/index';
import AxiosResponse from 'axios';

export default class BaseModel<T> {
  /**
   *
   */
  private scope?: string;
  constructor(obj: any) {
    Object.assign(this, obj)
  }
  public getById(): T {
    const endPoint = 'getById';
    Request.get(`/${this.scope ? this.scope + '/' : ''}${endPoint}`)
    .then((res: AxiosResponse) => {
      return 
    })
    return
  }
}