var React = require('react');

var Footer = React.createClass({
  getInitialState:function(){
    return{
      "res":[
        {
          "title":"推荐",
          "icon":"\ue60c"
        },
        {
          "title":"爱VR",
          "icon":"\ue7b1"
        },
        {
          "title":"我的",
          "icon":"\ue62f"
        }
      ]
    }
  },
  render:function(){
    var arrFooter = [];
    var result = this.state.res;
    var rlen = result.length;
    for(var i = 0;i < rlen;i++){
      arrFooter.push(<FooterBox FooterTip={result[i]}/>)
    }
    return(
      <div className="footer">
        {arrFooter}
      </div>

    )
  }
});

var FooterBox = React.createClass({
  render:function(){
    return(
      <div>
        <span className="yo-ico">{this.props.FooterTip.icon}</span>
        <i>{this.props.FooterTip.title}</i>
      </div>
    )
  }
})


module.exports = Footer;
