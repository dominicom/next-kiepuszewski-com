import { Defaultpage } from 'templates/Defaultpage'
import { Grid } from 'layout'
import Markdown from 'containers/Markdown'

import * as everything from 'contents/test.mdx' // Assumes an integration is used to compile MDX -> JS.
console.log(everything) // {Thing: [Function: Thing], default: [Function: MDXContent]}

// @SEE Docs MDX
// https://mdxjs.com/docs/using-mdx/#how-mdx-works
// https://mdxjs.com/docs/using-mdx/#mdx-content

export default function Portfolio() {

  return(
    
    <Defaultpage theme="g20">
      <Grid>
        <h1 style={{ color: `blue` }}>Portyfolio pejdz</h1>
      </Grid>
      {/* <Markdown>
        <Content />
      </Markdown> */}

      <Markdown theme="g100" filename='portfolio.mdx' />
    </Defaultpage>

  )
}