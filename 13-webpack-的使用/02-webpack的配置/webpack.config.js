//需要使用npm init 命令生成package.json
const path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
}
