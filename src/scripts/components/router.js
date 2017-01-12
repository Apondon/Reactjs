var Router = (function(){
	var unCompMount = function( arr ){
		for( var i=0;i<arr.length;i++ ){
			ReactDOM.unmountComponentAtNode( document.getElementById(arr[i]) );
		}
	}

	//拉入组件的方法
	var onCompMount = function( obj ){
		for( var attr in obj ){
			var req = require(obj[attr]);
			ReactDOM.render(React.createElement(req),document.getElementById(attr));
		}
	}
	var map_key = {
		"/index" : {
			"unmount" : ["header","content"],
			"onmount" : {
				"header" : "./header.js",
        "content" : "./content.js"
			}
		},
		"/video" : {
			"unmount" : ["header","content"],
			"onmount" : {
				"header" : "./header"
			}
		},
		"/user" : {
			"unmount" : ["header","content"],
			"onmount" : {
				"content" : "./content"
			}
		}
	}
	var route = function(ev){
		var _href = ev.target.parentNode.getAttribute("href");
		for( var attr in map_key ){
			if( _href == attr ){
				//卸载组件
				var mount = map_key[attr];
				var unmount = mount.unmount;
				unCompMount( unmount );
				//拉入组件
				var onmount = mount.onmount;
				onCompMount( onmount )
			}
		}
	}

	return{
		router : route
	}
})();

module.exports = Router;
