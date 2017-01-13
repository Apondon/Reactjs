var Content = React.createClass({
  getDefaultProps:function(){
    return{
      "bannerUrl":"/api/banner",
      "listUrl":"/api/parts"
    }
  },
  getInitialState:function(){
    return{
      "bannerImg" : "",
      "list" : ""
    }
  },
  componentWillMount:function(){
    var This = this;
    fetch(this.props.bannerUrl).then(response => response.json())
    .then(res => {
        This.setState({
					"bannerImg" : res
				})
    })
    .catch(e => console.log("first, error", e));
    fetch(this.props.listUrl).then(response => response.json())
    .then(res => {
        This.setState({
					"list" : res
				})
    })
    .catch(e => console.log("first, error", e));
  },
  render:function(){
    var arrBanner = [];
		var bannerImg = this.state.bannerImg;
		if(bannerImg){
      var lenB = bannerImg.length;
			for( var i = 0;i < lenB;i ++ ){
				arrBanner.push( <div className="swiper-slide"><img src={bannerImg[i].img}/></div>)
			}
		}
    var arrlist = [];
    var listItem = this.state.list;
    if(listItem){
      var lenL = listItem.length;
      for(var i = 0;i < lenL;i++){
        arrlist.push(<div><img src={listItem[i].img} /><p>{listItem[i].tit}</p></div>)
      }
    }
    return(
      <div className="content">
        <div className="bannerBox">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {arrBanner}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <div className="indexBox">
          <div className="indexlist">
            <p className="indexTit">影视剧</p>
            <div className="indexWarp">
              {arrlist}
            </div>
          </div>
          <div className="indexlist">
            <p className="indexTit">演唱会</p>
            <div className="indexWarp">
              {arrlist}
            </div>
          </div>
          <div className="indexlist">
            <p className="indexTit">麦互动</p>
            <div className="indexWarp">
              {arrlist}
            </div>
          </div>
          <div className="indexlist">
            <p className="indexTit">舞台剧</p>
            <div className="indexWarp">
              {arrlist}
            </div>
          </div>
          <div className="indexlist">
            <p className="indexTit">麦资讯</p>
            <div className="indexWarp">
              {arrlist}
            </div>
          </div>
        </div>
      </div>

    )
  },
  componentDidMount:function(){
    swiperOne = new Swiper('.swiper-container', {
                      pagination: '.swiper-pagination',
                      autoplay : 2000
                   });
  }
})

module.exports = Content;
