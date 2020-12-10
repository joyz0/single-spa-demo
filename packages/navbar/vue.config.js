module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      disableHostCheck: true,
      sockPort: 9001,
      sockHost: "localhost",
    },
    externals: ["vue", "vue-router", /^@zhuzy-mf\/.+/],
  },
  filenameHashing: false,
};
