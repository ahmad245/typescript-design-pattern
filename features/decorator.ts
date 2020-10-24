@classDecorator
class Test {
    color: string = 'red';
    get formattedColor(): string {
        return this.color;
    }

    @testDecorator('oops error')
    pilot(@parameterDecorator speed:string): void {
      throw new Error('error');
        console.log('pilot');
    }
}
function classDecorator(target:any){
 console.log(target);
 
}

function parameterDecorator(target:any,key:string,index:number){
    console.log(target,key,index);
    
}
function testDecorator(err:string){
 return function (target:any,key:string,desc:PropertyDescriptor){
    const method=desc.value;
    desc.value=function(){
      try {
          method();
      } catch (error) {
          console.log(err);
          
      }
    }
}
}


//new Test().pilot('fast')