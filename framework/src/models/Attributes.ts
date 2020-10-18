import { IModelAttributes } from "../interfaces/ModelAttributes";

export class Attributes<T> implements IModelAttributes<T>{
    constructor(public data:T) {  }
    get<K extends keyof T>(attr:K):T[K]{
      return this.data[attr];
    }
    set(data:T):void{
    Object.assign(this.data,data);
    }
    getAll():T{
        return this.data;
    }

}