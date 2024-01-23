var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),    // dist 폴더 하위에 bundle.js 파일로 output을 정의
  },
  devServer: {
    port: 9000,
  },
  plugins: [
      new HtmlWebpackPlugin({   // index.html 템플릿을 기반으로 별도 결과물을 추가해준다.  new HtmlWebpackPlugin()만 쓸 경우에는 index.html 번들링(빌드)된 파일을 새로 생성해준다.
        template: 'index.html',
      }),
  ],
}
