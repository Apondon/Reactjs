var Header = require('./header');
var Content = require('./content');
var Footer = require('./footer.js');



var Root = React.createClass({
  render:function(){
    return(
      <div className="root">
        <div className="router" id="router">
          <Header />
          <Content />
        </div>
        <Footer />
      </div>
    )
  }
})

ReactDOM.render(<Root />,document.getElementById('app'));
