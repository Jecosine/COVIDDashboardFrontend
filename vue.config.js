/*
 * @Date: 2021-06-18 05:47:32
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-18 09:14:43
 */
module.exports = {
  devServer: {
    proxy: {
      '^/countryAgg': {
        target: 'https://covid.jecosine.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/countryAgg": "/countryAgg",
        }
      },
      '^/nationDaily': {
        target: 'https://covid.jecosine.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/nationDaily": "/nationDaily",
        }
      }

    }
  }
}