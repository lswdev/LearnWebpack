// webpack.config.js
// `webpack` command will pick up this config setup by default
// nodeJS commonJS의 모듈 문법
var path = require('path');   // 1. 'path' 라고하는 NodeJS path 라이브러리를 들고 와서 로딩해서 path라는 변수에 담는다.

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {   // 3. entry에 있는 파일을 대상으로 웹팩을 돌려서 결과물을 낸다.
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')   // 2. path.resolve() 라고 하는 api를 사용
  }
};