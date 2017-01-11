var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');

module.exports = {
	entry:__dirname + '/src/app.js',

	output:{
		path: __dirname + '/prd/',
		filename:'bundle.js'
	},

	devtool:'source-map',

	devServer:{
		contentBase:__dirname + '/prd',
		port:7777,
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
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},

			{
				test:/\.js$/,
				loader:'jsx-loader'
			},

			{
				test:/\.scss$/,
				loader:ET.extract('style-loader','css!sass')
			},

			{
				test:/\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
				loader:'file-loader?name=[name].[ext]'
			}
		]
	},

	plugins: [
		//new webpack.optimize.UglifyJsPlugin(),
		new ET('bundle.css')

	]
}
