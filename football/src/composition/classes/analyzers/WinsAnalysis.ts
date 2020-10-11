import { IAnalyzer } from "../../Interfaces/Analyzer";
import { MatchType } from "../../Type/MatchType";
import { MatchResult } from "../../../enums/MatchResult";

export class WinsAnalysis implements IAnalyzer {
    constructor(public team: string) { }
    run(matches: MatchType[]): string {
        let wins = 0;
        for (const match of matches) {
            if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
                wins++;
            } else if (
                match[2] === this.team &&
                match[5] === MatchResult.AwayWin
            ) {
                wins++;
            }
        } 

        return `Team ${this.team} won ${wins} games`;
    }
}