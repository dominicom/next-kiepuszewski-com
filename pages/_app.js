import { 
  Header, 
  Menu, 
  Footer 
} from 'modules';



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

// https://www.smashingmagazine.com/2021/06/client-side-routing-next-js/

function App({ Component, pageProps }) {
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default App
