var Header = require('./header.js');
var Content = require('./content.js');
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
