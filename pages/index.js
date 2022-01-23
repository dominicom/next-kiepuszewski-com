import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Grid } from 'layout'
import { Defaultpage } from 'templates/Defaultpage'
import styles from 'styles/Home.module.css'

import Intro from 'components/Intro'

export default function Home() {
  return (
    <Defaultpage hero theme="g90">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Intro />


      <Grid>
        <h1 className={styles.title}>
          Welcome, Welcome!
        </h1>
        <h2>Everybody is welcome!</h2>
      </Grid>



      <Grid>
        <div className={styles.grid}>
          <Link href="/work">
            <a className={styles.card}>
              <h2>See what i&#39;m doing &rarr;</h2>
              <p>Find in-depth information about my work.</p>
            </a>
          </Link>

          <Link href="/about">
            <a className={styles.card}>
              <h2>About me &rarr;</h2>
              <p>Learn more about me, get unique information!</p>
            </a>
          </Link>

          <Link href="/contact">
            <a className={styles.card}>
              <h2>Get in touch &rarr;</h2>
              <p>Professional in IT Industry, what to design something? So what are you waiting for?</p>
            </a>
          </Link>

          <Link href="/test">
            <a className={styles.card}>
              <h2>Test page &rarr;</h2>
              <p>This tets page with markdown dynamically loaded.</p>
            </a>
          </Link>
        </div>
      </Grid>
      
    </Defaultpage>
  )
}
