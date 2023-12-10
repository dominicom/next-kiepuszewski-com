// eslint-disable-next-line
// import { useHover } from 'utils/hooks';

// import { PageContext } from 'Context';
// eslint-disable-next-line
// import { NavLink, Link, useLocation, useHistory } from 'react-router-dom';
// import { useLocation, useHistory } from 'react-router-dom';
import Link from 'next/link';

import { cn } from 'utils/helpers';
import { pages, routes } from 'utils/settings';
import { useRouter } from 'next/router'
import { Work, About, Contact } from './Items';
import { HeaderItem } from 'modules/Header';

import styles from './Menu.module.scss';

// ToDo menu items populatd on mobile devices 
// const compactNavigation = pages;

const navigation = routes.filter(item => (item.name !== "Home"));

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
          {navigation.map((link,i) => (
            <NavLink 
              key={i} 
              href={link.href}
              activeClassName={router.pathname === link.href && 'selected'} 
              onClick={props.onClick} 
              {...link} 
              label={link.name} 
            />
          ))}
      </nav>

    </>
  );
}

const NavLink = props => {
  const {
    href
  } = props;

  const router = useRouter();

  // let isHash;
  // if (href !== undefined) {
  //   isHash = href.charAt(1) === '#';
  // }

  let url = href;
  const hash = url.split('#')[1];
  const pathname = url.split('#')[0];
  
  const isHash = (url) => {
    if (url.indexOf('#') !== -1) {
      return true;
    } else {
      return false;
    }
  }

  // console.log("pathname:", pathname, "hash:", hash, ": is #  :", isHash(url));


  // ToDo aria labels, alt texts
  const classes = cn(styles.item, props.label, 'MenuItem', 'menu-link', 'inverted', 'themed-color', props.activeClassName);  // , selected ? "selected" : "", hash, selected  && "selected"


  // onClick={() => {
  //   router.push({
  //     pathname: "/",
  //     hash: "work"
  //   });
  // }}
  let LinkElement;

  if (isHash) {
    LinkElement = (
      <a className={classes} aria-label={props.label}>
        <MenuNavElement label={props.label} />
      </a>
    );
  } else {
    LinkElement = (
      <Link {...props}>  
        <a className={classes} aria-label={props.label}>
          <MenuNavElement label={props.label} />
        </a>
      </Link>
    );
  }
  return( 
    <HeaderItem>
      <Link {...props}>  
        <a className={classes} aria-label={props.label}>
          <MenuNavElement label={props.label} />
        </a>
      </Link>
    </HeaderItem>
  );
}


const MenuNavElement = props => {

  // console.log(props);
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

