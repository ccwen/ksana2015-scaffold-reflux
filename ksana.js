jsonp_handler({
"version": "1",
"build": 1,
"title":"_%name%_",
"minruntime": 1 ,
"baseurl":"_%rawgit%_",
"description":"",
 "browserify": {
  "external": [
   "react",
   "react/addons",
   "ksana-search",
   "ksana-jsonrom",
   "ksana-database",
   "ksana-analyzer"
  ]
 },
"files":
  ["index.html","index.css","react-bundle.js","bundle.js","jquery.js","ksana.js"]
})