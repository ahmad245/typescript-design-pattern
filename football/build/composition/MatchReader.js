"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var dateToString_1 = require("./../utils/dateToString");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(this.mapResult);
    };
    MatchReader.prototype.mapResult = function (row) {
        return [
            dateToString_1.dateToString(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
