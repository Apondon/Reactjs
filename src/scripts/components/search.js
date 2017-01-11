var React = require('react');

var Search = React.createClass({
  render:function(){
    return(
      <div>
        <input type="text" placeholder="搜索"/>
      </div>
    )
  }
})

module.exports = Search;
