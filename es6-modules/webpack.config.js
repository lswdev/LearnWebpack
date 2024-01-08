var path = require('path');

module.exports = {
	mode: 'production',
	entry: './js/app.js',		// entry : build를 할 대상 파일
	output: {		// output : (build를 한 후) webpack으로 변환하고 난 후에 대한 정보를 정의하는 곳
			path: path.resolve(__dirname, 'build'),
			filename: 'main.bundle.js'
	},
	module: {		// module : entry에서 output으로 변환될 때 중간에 개입하는 것 (loader)
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
