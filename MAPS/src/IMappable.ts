export interface IMappable{
    location:{
        lat:number,
        lon:number
    },
    markerContent():string;
    color:string;
}