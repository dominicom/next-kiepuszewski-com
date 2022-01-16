import React from 'react';


import { cn } from 'utils/helpers';

import styles from './Logo.module.scss';

export const Logo = ({ fulfilled }) => {
  return (
    <div
      className={cn("dtm-Logo", styles.root, !fulfilled ? "rest" : "active")}
      href="/" 
      type="anchor"
      overlayed={fulfilled}
    >
      <Vector />
    </div>
  )
}


export const Vector = () => {
  return (
    <div className="logo-box">
      <svg 
        version="1.1" 
        x="0px" y="0px" 
        viewBox="0 0 60 60"
      >
        <g>
          <path className="logo-color" d="M45,0v39h0c0,8.3-6.7,15-15,15c-8.3,0-15-6.7-15-15s6.7-15,15-15c3.4,0,6.5,1.1,9,3V0H0v60h60V0H45z"/>
          <circle className="logo-color" cx="30" cy="39" r="9"/>
        </g>
      </svg>
      {/* <div className={`logo-gradient ${state}`}></div>
      <div style={{ position: 'absolute', width: 60, height: 60, top: 0, left: 0, background: 'none' }}></div> */}
    </div>
  );
}
