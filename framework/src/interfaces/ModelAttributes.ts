export interface IModelAttributes<T>{
    get<K extends keyof T>(attr:K):T[K];
    set(value:T):void;
    getAll():T;
}