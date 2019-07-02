var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Dotenv = require('dotenv-webpack');

var webpackConfig = {
	entry: {
		bundle: './src/index.js'
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
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								ident: 'postcss',
								plugins: [
									require('autoprefixer')({ browsers: 'last 5 versions' })
								]
							}
						}
					]
				})
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new Dotenv({
      path: './.env'
    }),
		new ExtractTextPlugin({ filename: '[name].css' })
	]
};

module.exports = webpackConfig;
