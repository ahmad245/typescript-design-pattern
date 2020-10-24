import 'reflect-metadata';

const plane:{[key:string]:string}={
    color:'red'
}

Reflect.defineMetadata('note','hi',plane);
console.log(Reflect.getMetadata('note',plane));

Reflect.defineMetadata('noteProperty','hi color',plane,'color');
Reflect.getMetadata('noteProperty',plane,'color');




