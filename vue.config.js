module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/assignment2/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/styles/global.scss";
        `,
      },
    },
  },
};
