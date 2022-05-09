

module.exports={
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['pt-BR','en-US',],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'pt-BR',},
        webpack: function (config) {
            config.module.rules.push({test:  /\.mdx$/, use: 'raw-loader'})
            config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
            return config
          }
        
}