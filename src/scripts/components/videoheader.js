var Videoheader = React.createClass({
  render:function(){
    console.log(this.props.target);
    return(

        <div className="VideoHeader">
          <span className="active">麦影视</span>
          <span>演唱会</span>
          <span>舞台剧</span>
          <span>麦互动</span>
          <span>麦资讯</span>
          <i className="yo-ico">&#xe672;</i>
        </div>
    )
  },
  componentDidMount:function(){
    $('.VideoHeader span').on('click',function(){
      $(this).addClass('active').siblings().removeClass('active');
      console.log($(this).index());
    })
  }
})

module.exports = Videoheader;
