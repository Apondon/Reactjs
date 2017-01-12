var React = require('react');

var Footer = React.createClass({
  getInitialState:function(){
    return{
      "res":[
        {
          "key":1,
          "title":"推荐",
          "icon":"\ue60c",
          "class":"active"
        },
        {
          "key":2,
          "title":"爱VR",
          "icon":"\ue7b1"
        },
        {
          "key":3,
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
        arrFooter.push(<FooterBox key={result[i].key} FooterTip={result[i]}/>)
      }
      return(
        <div className="footer">
          {arrFooter}
        </div>
      )
    },

    componentDidMount:function(){
      $('.footer').delegate('div','click',function(){
        $(this).addClass('active').siblings().removeClass('active');
      })
    }
  });

var FooterBox = React.createClass({
  render:function(){
    return(
      <div onClick={this.props.changeAttr} className={this.props.FooterTip.class}>
        <span className="yo-ico">{this.props.FooterTip.icon}</span>
        <i>{this.props.FooterTip.title}</i>
      </div>
    )
  }
})


module.exports = Footer;
