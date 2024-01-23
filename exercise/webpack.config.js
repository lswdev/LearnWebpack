var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/   // node_modules라는 폴더에는 라이브러리 관련된 파일도 많기 때문에 조심해야한다. 굳이 이곳의 파일을 변환할 필요 X
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {    // 파일을 해석할 때 파일과 파일간의 연관관계를 해석해나갈 때 해석 방식을 정의하는 것
    alias: {    // vue 내부적으로 'vue$'라고 썼을 때 'vue/dist/vue.esm.js' 라는 파일을 연결 시키겠다는 것
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']   // 따로 뒤에 써 놓은 것과 같은 확장자를 따로 쓰지 않아도 잡아주는 것
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {    // 결과물의 사이즈가 초과가 되면 ( 웹팩에서 제한한 사이즈 )  warning을 주는 속성
    hints: false
  },
  devtool: '#eval-source-map'
}



// 아래 코드는 webpack 버전 4 이상에서는 사용을 안해도 된다.  mode: 'production' 으로 대체

// if (process.env.NODE_ENV === 'production') {      // 노드 환경변수를 production으로 두었을 때(베포를 할 때) 추가적으로 아래의 것들을 포함시키겠다.
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({   // 자바의 용량을 줄이기 위해
//       sourceMap: true,
//       compress: {   // 자바의 용량을 줄이기 위해 
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }
