

// import Content from 'contents/test.mdx'
import { Defaultpage } from 'templates/Defaultpage'
import { Grid } from 'layout'
import dynamic from 'next/dynamic'


// @SEE Docs MDX
// https://mdxjs.com/docs/using-mdx/#mdx-content

export default function Test() {
  const Content = dynamic(() => import('contents/test.mdx'))
  return(
    
    <Defaultpage>
    
      <Grid>
      <h1 style={{ color: `blue` }}>Testpage</h1>
        <Content />
      </Grid>
    </Defaultpage>

  )
}