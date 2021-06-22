const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
  })

module.exports={
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en-US',  'pt-BR'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'pt-BR',},
        pageExtensions: ['js', 'jsx', 'mdx']
}