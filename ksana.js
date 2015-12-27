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
   "react-dom",
   "react-addons-update",
   "react-addons-pure-render-mixin",
   "ksana-search",
   "ksana-jsonrom",
   "ksana-database",
   "ksana-analyzer"
  ]
 },
"files":
  ["index.html","index.css","react-bundle.js","bundle.js","ksana.js"]
})