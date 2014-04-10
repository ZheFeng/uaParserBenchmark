var seed = require("./seed")
var uaParserFactory = require("./uaParserFactory")
var allUa = function (testUserAgent) {
  for(var parser in uaParserFactory){
    console.log(parser + "  ========================================================================");
    console.log(uaParserFactory[parser](testUserAgent));
    console.log(parser + "  ========================================================================");
    console.log("\n");
  }
}
allUa(seed[0])
