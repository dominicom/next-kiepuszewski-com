import React from 'react'
// import Image from 'next/image'
import { Logo } from 'components/Brand';
import styles from './Footer.module.scss';

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <div className={styles.container}>
        I d I ™ — Place****er for website footer here!
      </div>
      <div className={styles.powered}>
        <a
          href="https://www.kiepuszewski.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Powered by{' '}</p>
          <span className={styles.logo}>
            <Logo />
          </span>
        </a>
      </div>
    </footer>
  );
}