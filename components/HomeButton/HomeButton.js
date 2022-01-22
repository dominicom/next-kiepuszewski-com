import React from 'react';
import Link from 'next/link';
import { Logo } from 'components/Brand';
import { pages } from 'utils/settings';

// import styles from './HomeButton.module.scss';


const route = pages[0];

// console.log(route);

// ToDo tweaking component type due to context
const Component = ({ children, href, className }) => {
  // if (to) {
  //   return <Link to={to} className={className}>{children}</Link>;
  // } else {
  //   return <div className={className}>{children}</div>;
  // }
  return <Link href={href} className={className}>{children}</Link>;
}

export const HomeButton = ({ onClick, to }) => {
  
  return(
    <Component href={route.href} className="HomeButton-container">
      <a className="Home-button" onClick={onClick} >
        <div className="Logo-container">
          <Logo />
        </div>
      </a>
    </Component>
  );
}
