import { Menu, Footer } from 'modules';

import 'styles/globals.scss'
import 'styles/modules.scss'
import 'styles/layout.scss'


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

function App({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default App
