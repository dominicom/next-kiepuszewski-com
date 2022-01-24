

// import Content from 'contents/test.mdx'
import { Defaultpage } from 'templates/Defaultpage'
import { Grid } from 'layout'
import dynamic from 'next/dynamic'
import Markdown from 'containers/Markdown'

import * as everything from 'contents/test.mdx' // Assumes an integration is used to compile MDX -> JS.
console.log(everything) // {Thing: [Function: Thing], default: [Function: MDXContent]}

// @SEE Docs MDX
// https://mdxjs.com/docs/using-mdx/#how-mdx-works
// https://mdxjs.com/docs/using-mdx/#mdx-content

export default function Test() {
  const Content = dynamic(() => import('contents/test.mdx'))
  return(
    
    <Defaultpage>
      <Markdown>
        <Content />
      </Markdown>
      <Grid>
        <h1 style={{ color: `blue` }}>Testpage</h1>
        <Content />
      </Grid>
    </Defaultpage>

  )
}