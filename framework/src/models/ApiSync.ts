import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { IHasId } from '../interfaces/HasId';
import { ISync } from '../interfaces/Sync';
export class ApiSync<T extends IHasId> implements ISync<T>{
    constructor(public rootUrl:string) {
        
    }
  
    fetch=(id:number):AxiosPromise =>{
      return axios.get(this.rootUrl+'/'+id);
    }
    save=(data:T):AxiosPromise=>{
       const {id}=data;
       if(id){
          return axios.put(this.rootUrl,data);
       }
       else {
        return axios.post(this.rootUrl, data);
      }
    }


}