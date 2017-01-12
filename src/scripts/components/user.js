var React = require('react');

var User = React.createClass({
  getInitialState:function(){
    return {
      "list":[
        {
          "key":1,
          "tit":"我的收藏",
          "ico":"\ue635"
        },
        {
          "key":2,
          "tit":"我的钱包",
          "ico":"\ue60d"
        },
        {
          "key":3,
          "tit":"扫码播放",
          "ico":"\ue60e"
        },
        {
          "key":4,
          "tit":"本地视频",
          "ico":"\ue636"
        },
      ]
    }
  },
  render:function(){
    var arrUser = [];
    var list = this.state.list;
    var len = list.length;
    for(var i = 0;i < len;i++){
      arrUser.push(<li key={list[i].key}>
          <span><i className="yo-ico">{list[i].ico}</i></span>
          <p>
          <div>{list[i].tit}</div>
          <i className="yo-ico">&#xe613;</i>
          </p>
        </li>)
    }
    return(
      <div className="userBox">
        <div className="userTitle">
          <div className="userInfo">
            <span className="yo-ico">&#xe62f;</span>
            <p>大麦游客</p>
          </div>
          <span className="yo-ico setting">&#xe647;</span>
        </div>
        <ul>
          {arrUser}
        </ul>
      </div>
    )
  }
});
module.exports = User;
