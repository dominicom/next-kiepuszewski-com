// import { MDXProvider } from '@mdx-js/react'
import { MDXProvider } from 'components/MDXProvider'
import { StateProvider } from 'context/store.js'
// import { GeistSans, GeistMono } from 'geist/font'
import ReactGA from 'react-ga4'



import { 
  Header, 
  // Main,
  Menu, 
  Footer 
} from 'modules';

// import Container from 'containers/Container'

// import { Grid, Row, Column } from 'layout/Grid'
// import { Card, ImageCard, Tile } from 'components'
// import Image from 'next/image'

import 'styles/global.scss';
import 'styles/components.scss'
import 'styles/modules.scss'
import 'styles/layout.scss'
import 'styles/typography.scss';
// import 'styles/internal.scss'



// import 'components/Button/button.scss';
// import 'components/Card/card.scss';
// import 'components/Menu/Menu.scss';
// import 'components/Tile/Tile.scss';



// import 'modules/Menu/menu.scss';
// import 'modules/Header/header.scss';

// Problem with SASS loader
// https://stackoverflow.com/questions/66716218/error-compiling-nextjs-sass-global-stylesheets-when-deploying-to-vercel

// Absolue paths
// https://dev.to/olaj/import-and-use-from-absolute-paths-in-nextjs-e1m

// Mixins tutorial
// https://www.freecodecamp.org/news/how-to-use-sass-with-css-modules-in-next-js/

// import 'styles/components.scss'
// import 'styles/modules.scss'
// import 'styles/layout.scss'
// import 'styles/typography.scss'

// This example make job!
// https://github.com/vercel/next.js/tree/canary/examples/blog-starter
// as here @Docs
// https://nextjs.org/blog/markdown#sharing-layout

// Pre-rendered pages layouts
// https://nextjs.org/docs/basic-features/pages#static-generation-with-data



// https://nextjs.org/docs/basic-features/layouts

// Slugs in Link List
// https://nextjs.org/docs/api-reference/next/link

// https://www.smashingmagazine.com/2021/06/client-side-routing-next-js/

// GA
// https://www.npmjs.com/package/nextjs-google-analytics

// ReactGA.initialize('G-635CBZ242W');
// ReactGA.send({ hitType: "pageview", page: "/portfolio", title: "**NEW_PAGE** Clicked portfolio (ie. from Resume)" });
// ReactGA.send({ hitType: "pageview", page: "/#work", title: "**NEW_PAGE** Read section <Work />" });
// ReactGA.send({ hitType: "pageview", page: "/#about", title: "**NEW_PAGE** Read section <About />" });
// ReactGA.send({ hitType: "pageview", page: "/#contact", title: "**NEW_PAGE** Read section <Contact />" });

function App({ Component, pageProps }) {
  return (
    <StateProvider>
      <Header>
        <Menu />
      </Header>

      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>

      <Footer />
    </StateProvider>
  )
}

export default App
