import 'reflect-metadata';
import {Methods} from './MethodsEnum';
import {MetadataKeys} from './MetadataKeys';
import { RequestHandler } from 'express';

interface IRouterHandlerDescriptor extends PropertyDescriptor{
  value?:RequestHandler
}

 function method(method:string){
   return   function(path:string) {
        return function (target: any, key: string,dec:IRouterHandlerDescriptor) {
            Reflect.defineMetadata(MetadataKeys.path, path, target,key);
            Reflect.defineMetadata(MetadataKeys.method,method, target,key);
        }
}
}

export const  get=method(Methods.get);
export const  post=method(Methods.post);
export const  remove=method(Methods.delete);
export const  put=method(Methods.put);

