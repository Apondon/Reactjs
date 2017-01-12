var React = require('react');

var VideoHeader = React.createClass({
  render:function(){
    return(
      <div className="VideoHeader">
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="yo-ico">&#xe672;</span>
      </div>
    )
  }
})

module.exports = VideoHeader;
