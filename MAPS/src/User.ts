import faker from 'faker';
import {IMappable} from './IMappable';

export class User implements IMappable{
    name:string;
    color:'red';
    location:{
        lat:number,
        lon:number
    }
    constructor(){
        this.name=faker.name.findName();
        this.location={
        lat:parseFloat(faker.address.latitude()),
        lon:parseFloat(faker.address.longitude())
        }
    }
    markerContent(): string {
        return `user name: ${this.name}`;
    }
    

}


