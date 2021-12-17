const path = require("path");

// 시작전에 dist폴더를 비워주는 플러그인
//설치 npm install --save-dev clean-webpack-plugin
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: __dirname, // 정적파일(index.html) 위치
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};

// ts.config.json 활성화
// "outDir": "./dist" <-- output-path
// "sourceMap": true <-- devtool : 'inline-source-map'
