userAgents = [
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.34 Safari/534.24",
  "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko",
  "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; TAJB; rv:11.0) like Gecko",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B350 Safari/8536.25",
  "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; BOIE9;ENUSMSE; rv:11.0) like Gecko",
  "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko",
  "Mozilla/5.0 (Windows NT 5.1; rv:28.0) Gecko/20100101 Firefox/28.0"
]
var useragent = require('useragent');
var platform = require('platform');
var UAParser = require('ua-parser-js');

var uaParserFactory = {
  useragent: function(testUserAgent){
    var agent = useragent.parse(testUserAgent);
    return agent.toJSON();
  },
  platform: function(testUserAgent){
    var info = platform.parse(testUserAgent);
    return info;
  },
  "ua-parser-js": function(testUserAgent){
    var parser = new UAParser();
    return parser.setUA(testUserAgent).getResult();
  }
}


var allUa = function (testUserAgent) {
  for(var parser in uaParserFactory){
    console.log(parser + "  ========================================================================");
    console.log(uaParserFactory[parser](testUserAgent));
    console.log(parser + "  ========================================================================");
    console.log("\n");
  }
}

// allUa(userAgents[0])


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
