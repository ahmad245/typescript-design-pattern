import faker from 'faker';
import {IMappable} from './IMappable';

export class Company implements IMappable{
    companyName:string;
    color:'red';
    location:{
        lat:number,
        lon:number
    }
    constructor(){
        this.companyName=faker.company.companyName();
        this.location={
        lat:parseFloat(faker.address.latitude()),
        lon:parseFloat(faker.address.longitude())
        }
    }
    markerContent(): string {
        return `company name: ${this.companyName}`;
    }
}
