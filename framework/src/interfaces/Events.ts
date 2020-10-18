export interface IEvents{
    on(event:string,callback:()=>void):void;
    trigger(event:string):void;
}