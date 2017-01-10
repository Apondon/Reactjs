var React = require('react');

var Header = React.createClass({
  render:function(){
    return(
      <div className="header">
        <p>DamaiVR</p>
        <span className="yo-ico">&#xe672;</span>
      </div>
    )
  }
})

module.exports = Header;
