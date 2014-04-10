var userAgents = require("./seed")
var uaParserFactory = require("./uaParserFactory")
var parserSpeedTest = function(){
  var testTimes = 100;
  for(var i = 0; i < userAgents.length * testTimes; i++){
    testUserAgent = userAgents[i % userAgents.length];
    for(var parser in uaParserFactory){
      usParser = uaParserFactory[parser];
      var start = new Date();
      usParser(testUserAgent)
      var end = new Date();
      var timeSpend = end.getTime() - start.getTime();
      usParser.timeSpend = usParser.timeSpend ? usParser.timeSpend  : [];
      usParser.timeSpend.push(timeSpend)
    }
  }

  for(var parser in uaParserFactory){
    usParser = uaParserFactory[parser];
    usParser.totalTimeSpend = usParser.timeSpend.reduce(function(pv, cv) { return pv + cv; }, 0);
    usParser.avg = usParser.totalTimeSpend / usParser.timeSpend.length;

    // console.log("\n");
    // console.log(parser + " spend: " + usParser.timeSpend);
    // console.log(parser + " total spend: " + usParser.totalTimeSpend);
    console.log(parser + " avg spend: " + usParser.avg);
  }
}
parserSpeedTest()
