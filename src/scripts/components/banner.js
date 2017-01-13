var Banner = React.createClass({
  render:function(){
    var imgUrl = this.props.name.img;
    return(
      <div className="swiper-slide">
        <img src={imgUrl}/>
      </div>
    )
  },
  componentDidMount:function(){
    swiperOne = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            autoplay : 2000
         });
  }
});
module.exports = Banner;
