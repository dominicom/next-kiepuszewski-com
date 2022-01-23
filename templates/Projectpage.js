import Head from 'next/head'
import { Main } from 'modules'




export const Projectpage = props => {
  const { children, hero, theme } = props

  const mainProps = { 
    hero: hero,
    theme: theme,
  }

  return(
    <Main {...mainProps}>
      <Head>
        <title>title from database</title>
        <meta name="description" content="Projekt | tu jakis opis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </Main>
  )
}