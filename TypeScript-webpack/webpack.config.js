const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
  },
  devServer: {
    static: __dirname, // 정적파일(index.html) 위치
    port: 9000,
  },
  devtool: "inline-source-map", // 소스맵이 생성되어, 추출하고 생성한 번들에 정확히 연결되야한다고 전달
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
};

// ts.config.json 활성화
// "outDir": "./dist" <-- output-path
// "sourceMap": true <-- devtool : 'inline-source-map'
