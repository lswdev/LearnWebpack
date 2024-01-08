var path = require('path');

module.exports = {
  mode: 'none',   // production(베포할 때에는 production 모드로 변환해야한다.), development(개발), none(교육목적)
  entry: './index.js',    // 대상 파일의 경로, 주소
  output: {
    filename: 'bundle.js',    // [name], [id], [chunkhash].js 등등 다양한 형태가 있다.
    path: path.resolve(__dirname, 'dist')
  },
  module: {   // Loader
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
}