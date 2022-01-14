import React, { Component } from 'react';
// eslint-disable-next-line
// import { useHover } from 'utils/hooks';

// import { PageContext } from 'Context';
// eslint-disable-next-line
// import { NavLink, Link, useLocation, useHistory } from 'react-router-dom';
// import { useLocation, useHistory } from 'react-router-dom';
import Link from 'next/link';
import { cn } from 'utils/helpers';
import { useRouter } from "next/router";
import { Work, About, Contact } from './Items';

// import { pages } from 'utils/data';



// import './Menu.scss';

const pages = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Work',
    href: '/work',
    as: '/work'
  },
  {
    name: 'About',
    href: '/about',
    as: '/about'
  },
  {
    name: 'Contact',
    href: '/contact',
    as: '/contact'
  },
  // {
  //   name: 'Static generated',
  //   href: '/ssg/[slug]',
  //   as: '/ssg/static-generated'
  // },
  // {
  //   name: 'Hybrid',
  //   href: '/hybrid/[slug]',
  //   as: '/hybrid/hybrid-ssr'
  // },
]

const compactNavigation = pages;

const navigation = pages.filter(item => (item.name !== "Home"));
// const navigation = pages.filter(item => (item.menu !== undefined ));

/*
class Menu extends Component {

  componentDidMount () {
    //this.menuConstructor();
  }

  menuConstructor = state => {
    // if (state) {
    //   return compactNavigation;
    // } else {
    //   return navigation;
    // }
    return navigation;
  }

  handleHomeLink = page => {
    
    //console.log("pejdż from meni", page)
  };

  render () {
    const { Consumer } = PageContext;
    // && context.global === 'active'
    // @Read about ContextAPI: https://www.toptal.com/react/react-context-api
    return (


              <div className="dtm-Menu">
                <>
                  {this.menuConstructor(context.mobile).map(item => 
                    <MenuItem
                      key={`menu-item-key-${item.hash}`}
                      {...item}
                      // selected={context.active}
                      // onMouseEnter={() => context.showTeasePage(item)}
                      showTeasePage={context.showTeasePage}
                      onClick={context.mobile ? () => context.hideMenu() : null}
                    />         
                  )}
                </>
              </div>
            
    );
  }
}
*/


export function Menu(props) {

  const router = useRouter();
  // className={styles.nav}

  // const classes = [styles.link, router.pathname === link.href && 'active']

  return (
    <>
      <nav className="dtm-Menu">

          {/* {navigation.map((link,i) => <NavLink key={i} className={cn(styles.link, router.pathname === link.href && styles.active)} onClick={props.onClick} {...link} />)} */}
          {navigation.map((link,i) => <NavLink key={i} activeClassName={router.pathname === link.href && 'selected'} onClick={props.onClick} {...link} label={link.name} />)}
      </nav>

    </>
  );
}

const NavLink = props => {
  // const {} = props;
  const classes = cn("MenuItem", "menu-link", "themed-color", props.activeClassName);  // , selected ? "selected" : "", hash, selected  && "selected"
  return(
    <>    
      <Link {...props}>
        <div className={classes}>
          <MenuNavElement label={props.label} />
        </div>
        {/* <div>
          <a className={props.className} onClick={props.onClick}>{props.name}</a>
        </div> */}
      </Link>
    </>

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


