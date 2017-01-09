module.exports = {
	entry:__dirname + '/src/app.js',

	output:{
		path: __dirname + '/prd/',
		filename:'bundle.js'
	},

	devtool:'source-map',

	devServer:{
		contentBase:__dirname + '/prd',
		port:80,
		host:'localhost',
		inline:true,
		// proxy:{
		// 	'/api':{
		// 		target:'http://localhost:3000',
		// 		pathRewrite:{
		// 			'^/api':''
		// 		}
		//
		// 	}
		// }
	},
	// module:{
	// 	loaders:[
	// 		{
	// 			test:/\.css$/,
	// 			loader:'style-loader!css-loader'
	// 		},
  //
	// 		{
	// 			test:/\.js$/,
	// 			loader:'babel-loader?presets[]=es2015'
	// 		},
  //
	// 		{
	// 			test:/\.scss$/,
	// 			// loader:'style!css!sass-loader'
	// 			loader:ET.extract('style-loader','css!sass')
	// 		},
  //
	// 		{
	// 			test:/\.string$/,
	// 			loader:'string'
	// 		},
  //
	// 		{
	// 			test:/\.vue$/,
	// 			loader:'vue'
	// 		}
  //
	// 	]
	// },
}
