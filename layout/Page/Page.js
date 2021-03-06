import React from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Head from 'next/head'
import { cn, ucfirst } from 'utils/helpers';
// import Hero from 'containers/Layout/Hero';
// import Callout from 'containers/Layout/Callout';
import Footer from 'modules/Footer'

// import ScrollBar from 'components/ScrollBar';

import styles from './Page.module.scss';


const theme = "g10";

const PageContainerComponent = ({ children, scroll, className }) => {
  // if(scroll) {
  //   return(
  //     <ScrollBar 
  //       className={className} 
  //       area={{ width: `100%`, height: `100vh` }}
  //     > 
  //       {children}
  //     </ScrollBar>
  //   );
  // }
  return (
    <div 
      className={className}
      style={{ overflowY: `auto` }}
    >{children}</div>
  )
}

export const Page = ({ children, title, label, hero, callout }) => {
  const classes = {
    root: cn(`Page-container`, `theme-${theme}`),
    content: cn(title && `${ucfirst(label ? label : title)}-pageContent`, `Page-content`, styles.root),
  }
  return(
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainerComponent 
        className={classes.root}
        // scroll
      > 
        <div className={classes.content} data-hero={hero}>

          {callout}

          {children}
          <Footer />
        </div>
      </PageContainerComponent>
    </>
  );
}
Page.defaultProps = {
  hero: false,
}

/*

{hero && (
  <Hero>
    {title}
    {`Default page header of ${title ? title : "Untitled"} page.`}
  </Hero>
)}

*/