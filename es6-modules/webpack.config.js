var path = require('path');

module.exports = {
	mode: 'production',
	entry: './js/app.js',
	output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'main.bundle.js'
	},
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
	stats: {
			colors: true
	},
	devtool: 'source-map'   // 빌드된 결과물과 빌드 되기 전 결과물을 연결하는 기능을 가지고 있다.
};
