var Videoheader = require('./videoheader');
var VideoContent = require('./Videocontent');

var VideoRoot = React.createClass({
  getDefaultProps:function(){
    return console.log('props')
  },
  getInitialState:function(){
    return {
      "index":0
    }
  },
  render:function(){
    var This = this;
    var index = this.state.index;
    return(<div className="vCont">
      <Videoheader  name={function( res ){
        This.setState({
          "index" : res
        })
      }}/>
      <VideoContent name={index}/>
      </div>)
  }
})
module.exports = VideoRoot;
