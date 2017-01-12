var React = require('react');

var User = React.createClass({
  render:function(){
    return(
      <div className="userBox">
        <div className="userTitle">
          <img/>
          <p></p>
        </div>
        <UserList></UserList>
      </div>
    )
  }
});
