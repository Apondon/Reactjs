var Header = require('./header');
var Content = require('./content');
var Footer = require('./footer.js');



var Root = React.createClass({
  render:function(){
    return(
      <div className="root">
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
})

ReactDOM.render(<Root />,document.getElementById('app'));
