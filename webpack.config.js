var path = require('path');
var config = {
	entry: path.resolve(__dirname, 'todo.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
			}
		]
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.common.js'
		}
	}

};
module.exports = config;
