import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { store } from 'context/store.js';

import { Main } from 'modules'
import { Grid } from 'layout'




export const Projectpage = props => {
  const { children, hero, theme } = props

  const { state, dispatch } = useContext(store);

  const mainProps = { 
    hero: hero,
    theme: theme,
  }

  useEffect(() => {
    dispatch({ type: 'set header global' });
  }, []);


  // TODO: variables props to HEAD

  return(
    <Main {...mainProps}>
      <Head>
        <title>Project Page | [name here]</title>
        <meta name="description" content="Projekt | tu jakis opis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid className="Markdown-module Project-page">
        {children}
      </Grid>
    </Main>
  )
}