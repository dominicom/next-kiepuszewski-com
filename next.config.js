module.exports = {
  reactStrictMode: true,
}


// NOTE: deactive this config when project will handle dynamic nested routing



const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
})
