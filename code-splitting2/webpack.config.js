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
        // css-loader는 css가 webpack 안에 들어갈 수 있게 하는 역할이고,
        // style-loader는 css 코드를 <head> 태그 안쪽에 inline으로 들어갈 수 있게 해주는 역할이다.
        // 따라서 css-loader가 먼저 실행이 된 후에 style-loader가 두번째로 실행되어야 한다.
        // build 시 우측부터 우선적으로 실행되므로 위 순서대로 작성해야 한다.
        // 만일 sass를 사용하는 환경이라면 ['style-loader', 'css-loader', 'sass-loader'] 순서가 될 것이다.
      }
    ]
  },
}