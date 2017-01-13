var Router = require('./router');

var Footer = React.createClass({
    mixins:[Router],
    render:function(){
      return(
        <div className="footer">
          <div className="active" onClick={this.router} href="/index">
            <span className="yo-ico">&#xe60c;</span>
            <i>推荐</i>
          </div>
          <div onClick={this.router} href="/video">
            <span className="yo-ico">&#xe7b1;</span>
            <i>爱VR</i>
          </div>
          <div onClick={this.router} href="/user">
            <span className="yo-ico">&#xe62f;</span>
            <i>我的</i>
          </div>
        </div>
      )
    },

    componentDidMount:function(){
      $('.footer').delegate('div','click',function(){
        $(this).addClass('active').siblings().removeClass('active');
      })
    }

});



module.exports = Footer;
