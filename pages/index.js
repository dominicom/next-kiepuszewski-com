import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import Image from 'next/image'

import { Grid, Row, Column } from 'layout'
import { Button, Callout, Card, ImageCard, Leadspace } from 'components'
import { Defaultpage } from 'templates/Defaultpage'


import Intro from 'components/Intro'

import Section from 'containers/Section'



export default function Home() {
  const router = useRouter();

  return (
    <Defaultpage hero theme="g90">
      <Head>
        <title>Home - I d I ™</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Intro />

      <Leadspace 
        heading={
          <>
              <p>Welcome, welcome.</p>
              <p><strong>Everybody</strong> is welcome!</p>
              <p>Take a seat and explore.</p>
          </>
        }
      
      />



      <Callout 
        heading={`Designer × Developer`}
        paragraph={
          <>
              Creative <strong>Multi-disciplinary Graphic Designer</strong> with 15+ years{`’`} professional experience in print digital media. 
              Almost 10-years{`’`} professional approach and experience in information technology branch, interactive and advertising, 
              communication and marketing. Experienced in various roles in graphic design{`—`}team member and independent specialist, 
              participated and worked on many corporate projects, long-term B2B solutions and services located on all over the world.
          </>
        }
      >
        <Button
        kind="primary"
        renderIcon="ArrowDown"
        onClick={() => {
            router.push({
              pathname: "/",
              hash: "work"
            });
          }}
        >        
          Static page with hash (good)
        </Button>
        <Button kind="secondary" renderIcon />
        <Button renderIcon="ExternalLink">Click me!</Button> 

      </Callout>





      <Section id="work" hero>
        {/* <h1 className={styles.title}>
          Welcome, Welcome!
        </h1>
        <h2>Everybody is welcome!</h2> */}
        <Row>
          <ImageCard col={4} colMd={8} colLg={4} image="https://assets2.ello.co/uploads/asset/attachment/6324579/ello-optimized-c67792d8.jpg" ratio="1x1" dark />
          <ImageCard col={4} image="https://assets1.ello.co/uploads/asset/attachment/6324583/ello-optimized-ee700a52.jpg" ratio="2x1" dark />
        </Row>
        
        <Row>
          

          <Column col={4} colMd={8} colLg={4} noGutter>
            <Card ratio="2x1" dark />
            <Card ratio="2x1" dark />
          </Column>
          
          <Card ratio="2x1" col={8} colMd={8} colLg={4} dark />
          <Column col={4} colMd={8} colLg={4} empty />
          

          <Column col={4} colMd={4} colLg={4} noGutter>
            <Card ratio="1x2" dark />
          </Column>
          <Column col={4} colMd={4} colLg={4} noGutter>
            <Card ratio="1x1" dark />
            <Card ratio="1x1" dark />
          </Column>
          <Column col={4} colMd={8} colLg={4} noGutter>
            <Card ratio="2x1" dark />
            <Card ratio="1x1" dark />
          </Column>

          <Card ratio="4x3" col={8} colMd={8} colLg={8} dark />
        </Row>
      </Section>




      <Grid id="work" theme="g20">
        <Row>
            <Card
              title="See what i&#39;m doing &rarr;"
              href="/work"
              subtitle={false}
              col={4} colSm={2} colMd={4} colLg={4}
              ratio="1x1"
              dark
            >
              <p>Find in-depth information about my work.</p>
            </Card>
            <Card
              title="About me &rarr;"
              href="/about"
              subtitle={false}
              col={4} colSm={2} colMd={4} colLg={4}
              ratio="2x1"
            >
              <p>Learn more about me, get unique information!</p>
            </Card>
            <Card
              title="Get in touch &rarr;"
              href="/contact"
              subtitle={false}
              col={4} colSm={2} colMd={4} colLg={4}
              ratio="2x1"
            >
              <p>Professional in IT Industry, what to design something? So what are you waiting for?</p>
            </Card>
            <Card
              title="Test page &rarr;"
              href="/test"
              subtitle={false}
              col={4} colSm={2} colMd={4} colLg={4}
              ratio="2x1"
            >
              <p>This tets page with markdown dynamically loaded.</p>
            </Card>
          </Row>


      </Grid>


      <Grid id="contact">
        <Row>
          <Column col={4} colSm={4} colMd={4} colLg={6}>
            <p className="ExpressiveParagraph">
            {<>
              We welcome all <em>feedback</em>, designs, or ideas in order to produce the best possible experience for our users. 
              If you{`’`}re interested in contributing, check out our contributing guidelines to get started.
            </>}
            </p> 
          </Column>
          <Column col={4} colSm={4} colMd={4} colLg={6}>
            <Card
              title="Test page &rarr;"
              href="/test"
              subtitle={false}
              // col={4} colSm={2} colMd={4} colLg={4}
              ratio="2x1"
            >
              <p>This tets page with markdown dynamically loaded.</p>
            </Card>
          </Column>
        </Row>
      </Grid>


    </Defaultpage>
  )
}
