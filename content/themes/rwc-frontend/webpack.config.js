var path = require('path');
var NODE_ENV = process.env.NODE_ENV || 'development';

var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var webpackConfig = {
	entry: {
		'bundle': './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'babel-loader', options: { presets: ['react', 'es2015'] } }
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify( NODE_ENV )
			}
		})
	]
};

// Additional settings to include in production environment.
if ( NODE_ENV === 'production' ) {
	webpackConfig.plugins.push( new UglifyJSPlugin() );
}

module.exports = webpackConfig;
