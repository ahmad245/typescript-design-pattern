import fs from 'fs';
import { IDataReader } from '../Interfaces/DataReader';
export  class CsvFileReader implements IDataReader{

    data:string[][]=[];

    constructor(public filename:string){ }

    read():void{
       this.data= fs.readFileSync(this.filename,{
            encoding:'utf-8'
        }).split('\n')
          .map((el:string):string[]=>{
              return el.split(',')
          });
           
    }
}