import Head from 'next/head'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Grid } from 'layout'
import { Defaultpage } from 'templates/Defaultpage'


const filePath = 'contents/test.mdx'

export default function Markdown({ source }) {
  console.log("Source MDX/path:", source)
  const Content = dynamic(() => import(source))
  return (
    <Defaultpage theme="g10">
      <Head>
        <title>Contact | Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid>
        <h6>
          Markdown content from wrapper component
        </h6>
      </Grid>
      <Grid>
        <Content />
      </Grid>

    </Defaultpage>
  )
}

