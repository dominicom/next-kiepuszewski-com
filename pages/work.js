import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Grid } from 'layout'
import { Defaultpage } from 'templates/Defaultpage'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <Defaultpage theme="g90">
      <Head>
        <title>About | Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Grid>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/work.js</code>
        </p>
      </Grid>
      <Grid>
        <div className={styles.grid}>
          <Link href="/work/docu">
            <a className={styles.card}>
              <h2>Docu &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>

          <Link href="/work/zwei">
            <a className={styles.card}>
              <h2>Zwei &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </Link>

          <Link href="/work/ux-ui/zwei">
            <a className={styles.card}>
              <h2>Zwei UX-UI &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </Link>
        </div>
      </Grid>
    </Defaultpage>
  )
}
