module.exports = {
  devServer: {
    // 프록시 설정
    proxy: {
      // 프록시 요청을 보낼 api의 시작 부분
      "^/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/api": "/" },
        // logLevel: "debug",
      },
    },
  },
  css: {
    loaderOptions: {
      // scss 글로벌 정의
      sass: {
        additionalData: `
        @use "@/assets/scss/common/_variables.scss" as *;
        @use "@/assets/scss/import/media.scss" as *;
        `,
      },
    },
  },
};

// chainWebpack: (config) => {
//   config.resolve.alias.set("vue$", "vue/dist/vue.esm-bundler.js");
// },
