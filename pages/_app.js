// import { MDXProvider } from '@mdx-js/react'
import { MDXProvider } from 'components/MDXProvider'

import { 
  Header, 
  // Main,
  Menu, 
  Footer 
} from 'modules';

import Container from 'containers/Container'

// import { Grid, Row, Column } from 'layout/Grid'
// import { Card, ImageCard, Tile } from 'components'
// import Image from 'next/image'

import 'styles/globals.scss'
import 'styles/components.scss'
import 'styles/modules.scss'
import 'styles/layout.scss'
import 'styles/typography.scss'

// This example make job!
// https://github.com/vercel/next.js/tree/canary/examples/blog-starter
// as here @Docs
// https://nextjs.org/blog/markdown#sharing-layout

// Pre-rendered pages layouts
// https://nextjs.org/docs/basic-features/pages#static-generation-with-data

// Layouts
// https://nextjs.org/docs/basic-features/layouts

// Slugs in Link List
// https://nextjs.org/docs/api-reference/next/link

// https://www.smashingmagazine.com/2021/06/client-side-routing-next-js/

function App({ Component, pageProps }) {
  return (
    <>
      <Header>
        <Menu />
      </Header>

      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>

      <Footer />
    </>
  )
}

export default App
