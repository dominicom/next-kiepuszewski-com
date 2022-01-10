import React from 'react';
import Link from 'next/link';
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
    name: 'About',
    href: '/about',
    as: '/about'
  },
  {
    name: 'Static generated',
    href: '/ssg/[slug]',
    as: '/ssg/static-generated'
  },
  {
    name: 'Hybrid',
    href: '/hybrid/[slug]',
    as: '/hybrid/hybrid-ssr'
  },
]
function Menu(props) {
    return (
        <nav className={styles.nav}>
            {navigation.map((link,i) => <NavLink key={i} onClick={props.onClick} {...link} />)}
        </nav>
    );
}

export { Menu };

const NavLink = props => {
  // const {} = props;
  return(
    <Link {...props}>
        <a onClick={props.onClick}>{props.name}</a>
    </Link>
  );
}