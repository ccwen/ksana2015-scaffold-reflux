var React=require("react");
var Controls=require("./controls.jsx");
var Listview=require("./listview.jsx");

var Maincomponent = React.createClass({
  render: function() {
    return <div>
      <Controls/>
      <Listview/>
    </div>;
  }
});
module.exports=Maincomponent;