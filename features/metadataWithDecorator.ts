import 'reflect-metadata';

@controller
class Plane {
    color: string = 'red';

    @get('/log')
    fly(): void {
        console.log('fly');

    }
}

function get(path: string) {
    return function (target: any, key: string) {
        Reflect.defineMetadata('path', path, target, key);
    }
}

function controller(target:any){
    for (const key in target.prototype) {
       const path=  Reflect.getMetadata('path',target.prototype,key)
      // const middelware=  Reflect.getMetadata('middelware',target.prototype,key)
       console.log(path);

      // route.get(path,middelware,target.prototype[key])
       
    }
    
}




const result = Reflect.getMetadata('path', Plane.prototype, 'fly');

