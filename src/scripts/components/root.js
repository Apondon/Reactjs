var Header = require('./header');
var Content = require('./content');
var Footer = require('./footer');


var Root = React.createClass({


  render:function(){
    return(
      <div className="root">
        <div className="router" id="router">
          <div id="header"></div>
          <div id="content"></div>
        </div>
        <Footer />
      </div>
    )
  }
})

ReactDOM.render(<Root />,document.getElementById('app'));
ReactDOM.render(<Header />,document.getElementById("header"));
ReactDOM.render(<Content />,document.getElementById('content'));
