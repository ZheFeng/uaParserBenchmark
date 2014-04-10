#Bench mark for browser user-agent nodejs parser


###Init project
```
git clone https://github.com/ZheFeng/uaParserBenchmark.git
cd uaParserBenchmark
npm install
```

###Test the parser result
```
node result.js
```
###Output:
```
useragent  ========================================================================
{ family: 'Chrome',
  major: '11',
  minor: '0',
  patch: '696',
  device: { family: 'Other', major: '', minor: '', patch: '' },
  os: { family: 'Linux', major: '', minor: '', patch: '' } }
useragent  ========================================================================


platform  ========================================================================
{ version: '11.0.696.34',
  name: 'Chrome',
  os:
   { architecture: 64,
     family: 'Linux',
     version: null,
     toString: [Function] },
  description: 'Chrome 11.0.696.34 on Linux 64-bit',
  layout: 'WebKit',
  manufacturer: null,
  prerelease: null,
  product: null,
  ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.34 Safari/534.24',
  parse: [Function: parse],
  toString: [Function: toStringPlatform] }
platform  ========================================================================


ua-parser-js  ========================================================================
{ ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.34 Safari/534.24',
  browser: { name: 'Chrome', version: '11.0.696.34', major: '11' },
  engine: { name: 'WebKit', version: '534.24' },
  os: { name: 'Linux', version: 'x86_64' },
  device: { model: undefined, vendor: undefined, type: undefined },
  cpu: { architecture: 'amd64' } }
ua-parser-js  ========================================================================
```

###Test the parser result
```
node speed.js
```
###Output:
```
useragent avg spend: 0.09714285714285714
platform avg spend: 0.2857142857142857
ua-parser-js avg spend: 0.05857142857142857
```
