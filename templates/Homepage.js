import Head from 'next/head'




export default function Homepage() {
  return(
    <div>
      <Head>
        <title>title from database</title>
        <meta name="description" content="tu jakis opis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}