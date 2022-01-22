import React, { Component } from 'react';
// eslint-disable-next-line
// import { useHover } from 'utils/hooks';

// import { PageContext } from 'Context';
// eslint-disable-next-line
// import { NavLink, Link, useLocation, useHistory } from 'react-router-dom';
// import { useLocation, useHistory } from 'react-router-dom';
import Link from 'next/link';
import { cn } from 'utils/helpers';
import { pages } from 'utils/settings';
import { useRouter } from "next/router";
import { Work, About, Contact } from './Items';
import { HeaderItem } from 'modules/Header';

import styles from './Menu.module.scss';

// ToDo menu items populatd on mobile devices 
// const compactNavigation = pages;

const navigation = pages.filter(item => (item.name !== "Home"));

export function Menu(props) {

  const router = useRouter();

  const classes = {
    root: styles.module
  }
  // className={styles.nav}

  // const classes = [styles.link, router.pathname === link.href && 'active']

  return (
    <>
      <nav className={classes.root}>

          {/* {navigation.map((link,i) => <NavLink key={i} className={cn(styles.link, router.pathname === link.href && styles.active)} onClick={props.onClick} {...link} />)} */}
          {navigation.map((link,i) => <NavLink key={i} activeClassName={router.pathname === link.href && 'selected'} onClick={props.onClick} {...link} label={link.name} />)}
      </nav>

    </>
  );
}

const NavLink = props => {
  // const {} = props;

  // ToDo aria labels, alt texts
  const classes = cn(styles.item, 'MenuItem', 'menu-link', 'inverted', 'themed-color', props.activeClassName);  // , selected ? "selected" : "", hash, selected  && "selected"
  return( 
    <HeaderItem>
      <Link {...props}>
        <a className={classes} aria-label={props.label}>
          <MenuNavElement label={props.label} />
        </a>
        {/* <div>
          <a className={props.className} onClick={props.onClick}>{props.name}</a>
        </div> */}
      </Link>
    </HeaderItem>
  );
}


const MenuNavElement = props => {

  console.log(props);
  switch (props.label) {
    case 'Home':
      return <Contact />
    case 'Work':
      return <Work />
    case 'About':
      return <About />
    case 'Contact':
      return <Contact />
    default:
      return <small>Unknown element: {props.label}</small>
  }
}

