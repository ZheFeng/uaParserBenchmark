
var useragent = require('useragent');
var platform = require('platform');
var UAParser = require('ua-parser-js');

var uaParserFactory = module.exports = exports = {
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
