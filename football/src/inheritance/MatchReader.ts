import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "../enums/MatchResult";
import {dateToString} from './../utils/dateToString';

type MatchType=[Date,string,string,number,number,MatchResult,string];

export class MatchReader extends CsvFileReader<MatchType>{
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