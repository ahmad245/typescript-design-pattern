import { MatchResult } from "../../enums/MatchResult";
import {dateToString} from '../../utils/dateToString';
import { IDataReader } from "../Interfaces/DataReader";
import { MatchType } from "../Type/MatchType";



export class MatchReader  {

    matches:MatchType[]=[];
    constructor(public reader:IDataReader){
    }
    load(){
        this.reader.read()
       this.matches= this.reader.data.map(this.mapResult);
    }

    mapResult(row: string[]): MatchType {
        return[
           dateToString(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ]
    }

}