import { Request, Response } from 'express';
import 'reflect-metadata';

import { MetadataKeys } from './MetadataKeys';

import { AppRouter } from './../../AppRouter';
import { Methods } from './MethodsEnum';
import {validate} from './../../middlewares'

export const router = AppRouter.router();



export function controller(routePrefix: string) {
    return function (target: Function) {
        for (const key in target.prototype) {
            const routeHandler = target.prototype[key];
            console.log(routeHandler);
            
            const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
            const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
            const requiredBodyProps=Reflect.getMetadata(MetadataKeys.validator,target.prototype,key)|| [];
           
            
            const validator=validate(requiredBodyProps);
           
            


            if (path) {
                router[method](`${routePrefix}${path}`, ...middlewares,validator, routeHandler);
            }
        }
    }
}