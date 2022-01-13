import React from 'react';
import Link from 'next/link';
import { cn } from 'utils/helpers';
import { useRouter } from "next/router";
import styles from './Menu.module.scss';



/**
 * Primary UI component for navigation
 * @Sample
 * https://github.com/willemliu/static-next/blob/master/src/components/Menu.tsx
 */

const navigation = [
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


function Menu(props) {

  const router = useRouter();
  // className={styles.nav}

  // const classes = [styles.link, router.pathname === link.href && 'active']

  return (
    <>
      <nav className={styles.nav}>

          {/* {navigation.map((link,i) => <NavLink key={i} className={cn(styles.link, router.pathname === link.href && styles.active)} onClick={props.onClick} {...link} />)} */}
          {navigation.map((link,i) => <NavLink key={i} className={cn('link', router.pathname === link.href && 'active')} onClick={props.onClick} {...link} />)}
      </nav>

    </>
  );
}

export { Menu };

const NavLink = props => {
  // const {} = props;
  return(
    <>
      <style jsx>{`
        .link {
          padding: 1rem 1rem 1rem 0;
          text-decoration: none;
          color: coral;
          transition: 300ms;
        }
        .link:hover {
          color: blue;
        }
        .active {
          color: rebeccapurple;
          text-decoration: underline;
        }
      `}</style>
    
    
      <Link {...props}>
        <div>
          <a className={props.className} onClick={props.onClick}>{props.name}</a>
        </div>
      </Link>
    </>

  );
}


