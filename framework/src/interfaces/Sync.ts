export interface ISync<T>{
    fetch(id:number):any;
    save(data:T):any;
}