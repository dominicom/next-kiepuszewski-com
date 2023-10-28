import { cn } from 'utils/helpers'
import { Grid, Row, Column } from 'layout'
import { Card } from 'components'

import styles from './Section.module.scss'

const defaultTheme = ""

export default function Section(props) {
  const { 
    id,
    children, 
    hero, 
    theme 
  } = props

  const classes = {
    root: cn(styles.module, 'fbr--grid', theme && theme || defaultTheme), // , 'fbr--grid','Block-container', 'container', theme && theme || defaultTheme
  }

  let SectionHero;
  if (!hero) {
    SectionHero = (
      <Row className="Section-hero">
        <Column col={6} colSm={4} colMd={4} colLg={6}>
          <h1>
            Work Work Work
          </h1>
          <p className="ExpressiveParagraph">
              We welcome all feedback, designs, or ideas in order to produce the best possible experience for our users. 
              If you’re interested in contributing, check out our contributing guidelines to get started.
            </p> 
        </Column>
        <Column col={6} colSm={4} colMd={4} colLg={6}>
          <Card
            title="See all work"
            href="/test"
            subtitle={false}
            // col={4} colSm={2} colMd={4} colLg={4}
            ratio="2x1"
          >
            <p>This tets page with markdown dynamically loaded.</p>
          </Card>
        </Column>
      </Row>
    )

  }


  return(
    <section id={id} className={classes.root}>
      {/* <Grid theme={theme}> */}
        {SectionHero}
        {children}
      {/* </Grid> */}
    </section>
  )
}