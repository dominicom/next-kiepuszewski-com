import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.scss';

export const Footer = () => {
  return(
    <footer className={styles.footer}>
      <div className={styles.container}>
        I d I ™ — Place****er for website footer here!
      </div>
      <div className={styles.powered}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </div>
    </footer>
  );
}