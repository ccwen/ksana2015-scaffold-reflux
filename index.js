var React=require("react");
var ksanagap=require("ksana2015-webruntime/ksanagap");
ksanagap.boot("_%name%_",function(){
	var Main=React.createElement(require("./src/main.jsx"));
	ksana.mainComponent=React.render(Main,document.getElementById("main"));
});