import React from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Head from 'next/head'
import { cn, ucfirst } from 'utils/helpers';
import Hero from 'containers/Layout/Hero';
// import Callout from 'containers/Layout/Callout';
import Footer from 'modules/Footer'

import ScrollBar from 'components/ScrollBar';

import styles from './Page.module.scss';
import './Page.scss';

const theme = "g10";

const PageContainerComponent = ({ children, scroll, className }) => {
  if(scroll) {
    return(
      <ScrollBar 
        className={className} 
        area={{ width: `100%`, height: `100vh` }}
      > 
        {children}
      </ScrollBar>
    );
  } else {
    return <div 
      className={className}
      style={{ overflowY: `auto` }}
      >{children}</div>
  }
}

export const Page = ({ children, title, label, hero, callout }) => {
  const classes = {
    root: cn(`Page-container`, `theme-${theme}`),
    content: cn(`${ucfirst(label ? label : title)}-pageContent`, `Page-content`, styles.root),
  }
  return(
    <>
      {/* <SEO /> */}
      <PageContainerComponent 
        className={classes.root}
        // scroll
      > 
        <div className={classes.content} data-hero={hero}>
          {hero && (
            <Hero>
              {title}
              {/* {`Default page header of ${title ? title : "Untitled"} page.`} */}
            </Hero>
          )}
          {callout}

          {children}
          <Footer />
        </div>
      </PageContainerComponent>
    </>
  );
}
Page.defaultProps = {
  hero: true,
}