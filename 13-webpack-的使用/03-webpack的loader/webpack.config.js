const path = require('path')

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			//使用多个loader时，从右向左
			use: ['style-loader','css-loader']
		}]
	}
}
