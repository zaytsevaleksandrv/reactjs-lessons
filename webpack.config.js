const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: { //собранное приложение
    path: path.resolve(__dirname, '.', 'dist'),
    filename: 'index-bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/, //проверить все файлы .js в проекте
        exclude: /node_modules/, // исключение, конвертация файлов в этой папке не требуется
        use: ["babel-loader"] //для конвертации JS-файла, написанного на ES6, в совместимый с браузером ES5
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html" //путь до index.html
    })
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
  }
};
