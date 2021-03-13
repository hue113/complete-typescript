import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Liverpool");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
