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
  const classes = cn(styles.item, 'MenuItem', 'menu-link', 'themed-color', props.activeClassName);  // , selected ? "selected" : "", hash, selected  && "selected"
  return( 

      <Link {...props}>
        <a className={classes}>
          <MenuNavElement label={props.label} />
        </a>
        {/* <div>
          <a className={props.className} onClick={props.onClick}>{props.name}</a>
        </div> */}
      </Link>

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

/*
export const MenuItem = props => {
  const {
    path,
    hash,
    // selected,
    page,
    global,
  } = props;

  const location = useLocation();

  const selected = `#${hash}` === location.hash ? true : false;
  // console.log(hash, location.hash)
  // console.log(selected)
  const classes = cn("MenuItem", "menu-link", "themed-color", hash, selected  && "selected");  // , selected ? "selected" : ""
  // const classes = cn("MenuItem", "menu-link", "themed-color", page, selected === page && "selected");  // , selected ? "selected" : ""
  return (
    <NavLink
      // strict
      smooth
      // scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
      // to={path}
      to={{ 
        hash: hash,
        pathname: path, 
        // pathname: `${path}#${hash}`, 
        state: { page: page, global: global }
      }}
      className={classes}
      activeClassName="selected"
      aria-label={page}
      onMouseEnter={props.onMouseEnter}
      onClick={props.onClick}
    >
      <MenuNavElement label={hash || page} />
    </NavLink>
  );
}
*/

// TO-DO or DELETE

// eslint-disable-next-line
const Label = () => {
};


