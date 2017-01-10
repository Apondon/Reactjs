var React = require('react');

var Footer = React.createClass({
  getInitialState:function(){
    return{
      "res":[
        {
          "title":"推荐",
          "icon":"&#xe60c;"
        },
        {
          "title":"爱VR",
          "icon":"&#xe7b1;"
        },
        {
          "title":"我的",
          "icon":"&#xe62f;"
        }
      ]
    }
  },
  render:function(){
    var arrFooter = [];
    var result = this.state.res;
    var rlen = result.length;
    console.log(result);
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
    console.log(this.props);
    return(
      <div>
        <span className="yo-ico">{this.props.FooterTip.icon}</span>
        <i>{this.props.FooterTip.title}</i>
      </div>
    )
  }
})


module.exports = Footer;
