import { Defaultpage } from 'templates/Defaultpage'
import { Grid, Row } from 'layout'
import Markdown from 'containers/Markdown'
import { Card } from 'components';

import * as everything from 'contents/test.mdx' // Assumes an integration is used to compile MDX -> JS.


// @SEE Docs MDX
// https://mdxjs.com/docs/using-mdx/#how-mdx-works
// https://mdxjs.com/docs/using-mdx/#mdx-content

export default function Portfolio() {

  console.log(everything) // {Thing: [Function: Thing], default: [Function: MDXContent]}

  return(
    
    <Defaultpage theme="g20">
      <Grid>
        <h1 style={{ color: `blue` }}>Portyfolio pejdz</h1>

        <Row>
          <Card
            title="UX / UI Case studies" 
            href="/portfolio/ux-ui/" 
          />
        </Row>
        
      </Grid>


      
      {/* <Markdown>
        <Content />
      </Markdown> */}



      <Markdown theme="g100" filename='portfolio.mdx' />
    </Defaultpage>

  )
}