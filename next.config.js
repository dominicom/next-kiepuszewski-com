// const remarkUnwrapImages = require('remark-unwrap-images')
const path = require('path');
const sass = require("sass");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
// module.exports = nextConfig


module.exports = {
  nextConfig,
  experimental: {
    externalDir: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/work': { page: '/work' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/test': { page: '/test' },
    }
  },
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com', 'assets1.ello.co', 'assets2.ello.co', 'images.pexels.com'],
    unoptimized: true,
  },
  sassOptions: {
    additionalData: `@import "styles/variables.scss"; @import "styles/components.scss"; @import "styles/modules.scss"; @import "styles/layout.scss"`,
  },
  // sassOptions: {
  //   implementation: sass,
  //   includePaths: [path.join(__dirname, 'styles/internal/')],
  //   prependData: [`@import "styles/internal/componnts.scss";`, `@import "styles/internal/modules.scss";`],
  // },
  async headers() {
    return [
      {
        source: "/fonts/geist/GeistVF.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
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

