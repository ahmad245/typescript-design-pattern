"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary_1 = require("./composition/Summary");
var MatchReader_1 = require("./composition/classes/MatchReader");
var CsvFileReader_1 = require("./composition/classes/CsvFileReader");
var reader = new MatchReader_1.MatchReader(new CsvFileReader_1.CsvFileReader('football.csv'));
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
reader.load();
summary.buildAndPrintReport(reader.matches);
