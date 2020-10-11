import { Summary } from "./composition/Summary";
import {MatchReader} from './composition/classes/MatchReader'
import { CsvFileReader } from "./composition/classes/CsvFileReader";

const reader=new MatchReader(new CsvFileReader('football.csv'));
const summary=Summary.winsAnalysisWithHtmlReport('Man United');

reader.load();

summary.buildAndPrintReport(reader.matches);
