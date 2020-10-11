import { IAnalyzer } from "./Interfaces/Analyzer";
import { IOutputTarget } from "./Interfaces/OutputTarget";
import { MatchType } from "./Type/MatchType";
import { WinsAnalysis } from "./classes/analyzers/WinsAnalysis";
import { HtmlReport } from "./classes/reportTargets/HtmlReport";
import { ConsoleReport } from "./classes/reportTargets/ConsoleReport";

export class Summary {
    constructor(public analyzer: IAnalyzer, public outputTarget: IOutputTarget) { }
    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new ConsoleReport())
    }
    buildAndPrintReport(matches: MatchType[]): void {
        this.outputTarget.print(this.analyzer.run(matches));
    }
}