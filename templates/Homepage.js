import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { Main } from 'modules'
import { store } from 'context/store.js';



export const Homepage = (props) => {
  const { children, hero, theme } = props

  const { state, dispatch } = useContext(store);

  const mainProps = { 
    hero: hero,
    theme: theme,
  }

  useEffect(() => {
    dispatch({ type: 'set header active' });
  }, []);

  return(
    <Main {...mainProps}>
      <Head>
        <title>title from database</title>
        <meta name="description" content="tu jakis opis" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </Main>
  )
}