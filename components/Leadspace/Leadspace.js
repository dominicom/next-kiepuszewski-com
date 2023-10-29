import { cn } from 'utils/helpers'
import { Grid, Row, Column } from 'layout'

import { Button, Card } from 'components'

import styles from './Leadspace.module.scss'

export default function Leadspace(props) {
  const { children, heading, paragraph, theme } = props


  const column = {
    left: {
      col: 8, 
      colSm: 4,
      colMd: 8, 
      colLg: 8,
    },
    right: {
      col: 4, 
      colSm: 4,
      colMd: 8, 
      colLg: 4,
    }
  }

  const classes = {
    root: cn(styles.module, 'Leadspace'),
    // container: cn('Leadspace-container', 'Block-container', 'container', theme && theme || defaultTheme),
    container: 'Leadspace-container',
    heading: cn(styles.heading,'Leadspace-heading'),
    paragraph: cn(styles.parapgragh, 'Leadspace-paragraph', 'ExpressiveParagraph')
  }
  // className={styles.root}
  return(
    <section className={classes.root} theme={theme}>
      <Grid className={classes.root}> 
        <Row className={classes.container}>
          <Column {...column.left}> 
            <h1 className={styles.heading}>
              {heading}
            </h1>

          </Column>

          <Column {...column.right}>


          </Column>
        </Row>

        <Row className="--custom-space--">
          <Column {...column.left} >
            <p className={classes.paragraph}>
              {paragraph}
            </p>
            <div>
              <Button kind="primary" /> 
              <Button kind="secontary" />
            </div>
          </Column>
          <Column {...column.right}>
            {/* <Card ratio="2x1" dark />
            <Card ratio="2x1" dark /> */}

            {children}
          </Column>
        </Row>
      </Grid>
    </section>
  )
}

const dummyText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

Leadspace.defaultProps = {
  theme: null,
  heading: `Edit heading and title text`,
  paragraph: dummyText,
}


