import { cn } from 'utils/helpers'
import { Grid, Row, Column } from 'layout'

import { Button, Card } from 'components'

const defaultTheme = ""

export default function Callout(props) {
  const { children, heading, theme } = props
  const classes = cn('Block-container', 'container', theme && theme || defaultTheme)

  // className={styles.root}
  return(
    <Grid> 
      <Row className={classes}>
        <Column col={4} colMd={8} colLg={6}>
          <h2>{heading ? heading : `Edit heading and title text`}</h2>

        </Column>
        <Column col={8} colMd={8} colLg={6}>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

        </Column>
      </Row>
      <Row className={classes}>
        <Column col={4} colMd={8} colLg={6} empty />
        <Column col={8} colMd={8} colLg={6} noGutter>
          <Card ratio="2x1" dark />
          <Card ratio="2x1" dark />

          {children}
        </Column>
      </Row>
    </Grid>
  )
}