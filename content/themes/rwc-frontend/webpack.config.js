var path = require('path');

var config = {
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
	}
};

module.exports = config;
