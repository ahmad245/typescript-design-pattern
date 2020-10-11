import { MatchType } from "../Type/MatchType";

export interface IAnalyzer{
    run(matches:MatchType[]):string;
}