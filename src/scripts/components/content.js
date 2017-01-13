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
          this is list
        </div>
      </div>

    )
  },
  componentDidMount:function(){
    console.log(document.getElementsByClassName('swiper-pagination'))
    swiperOne = new Swiper('.swiper-container', {
                      pagination: '.swiper-pagination',
                      autoplay : 2000,
                   });
  }
})

module.exports = Content;
