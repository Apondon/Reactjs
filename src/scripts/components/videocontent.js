var ChangeTab = require('./changetab');
var VideoContent = React.createClass({
  getDefaultProps:function(){
    return{
      "videoUrl":"/api/video"
    }
  },
  getInitialState:function(){
    return {
      "videolist" : ""
    }
  },
  componentWillMount:function(){
    var This = this;
    console.log('fetch');
    fetch(this.props.videoUrl).then(response => response.json())
    .then(res => {
        This.setState({
					"videolist" : res
				})
    })
    .catch(e => console.log("request, error", e));
  },
  render:function(){
    var arrList = [];
    var listItem = this.state.videolist;
    if(listItem){
      var lenL = listItem.length;
      for(var i = 0;i < lenL;i++){
        arrList.push(<div><img src={listItem[i].img} /></div>)
      }
    }
    return(
      <div className="videocontent">
        <div className="swiper-container" id="video-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide" id="video-scroll">
              <div className="scroll-container">
                {arrList}
              </div>
            </div>
            <div className="swiper-slide">演唱会</div>
            <div className="swiper-slide">舞台剧</div>
            <div className="swiper-slide">麦互动</div>
            <div className="swiper-slide">麦资讯</div>
          </div>
        </div>
      </div>
    )
  },
  componentDidMount:function(){
    swiperTwo = new Swiper('#video-swiper', {
      onSlideChangeEnd:function(swiper){
        console.log(swiper.activeIndex);
      }
		});
    myScroll = new IScroll("#video-scroll",{

    })
  }
})
module.exports = VideoContent;
