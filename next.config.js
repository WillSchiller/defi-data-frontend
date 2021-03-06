/* next.config.js  */
module.exports = {
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
    async redirects() {
      return [
        {
          source: '/cryptocurrencies/[symbol]',
          destination: '/',
          permanent: true,
        },
      ]
    },
  };