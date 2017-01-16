var Videoheader = React.createClass({
  clickHandle:function(e){
    // console.log(e.target.getAttribute('data-key'));
    this.props.name(e.target.getAttribute('data-key'));
    // console.log(this.props.name(e.target.getAttribute('data-key')));
    this.setState({
      index:e.target.getAttribute('data-key')
    })
  },
  render:function(){
    // console.log(this.props.target);
    return(

        <div className="VideoHeader">
          <span onClick={this.clickHandle} className="active" data-key="0">麦影视</span>
          <span onClick={this.clickHandle} data-key="1">演唱会</span>
          <span onClick={this.clickHandle} data-key="2">舞台剧</span>
          <span onClick={this.clickHandle} data-key="3">麦互动</span>
          <span onClick={this.clickHandle} data-key="4">麦资讯</span>
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
