// const remarkUnwrapImages = require('remark-unwrap-images')


module.exports = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['cdn.pixabay.com'],
  },
}

// NOTE: deactive this config when project will handle dynamic nested routing


// const remarkUnwrapImages = require('remark-unwrap-images')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // mdPlugins: [remarkUnwrapImages],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})
