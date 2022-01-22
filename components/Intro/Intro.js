import { cn } from 'utils/helpers';
// import Section from 'components/Section/Section';

import { Grid } from 'layout'

import PORTRAIT from './img/portrait.png';

import styles from './Intro.module.scss';

const leadText = [
  "Experienced Designer",
  "IT Specialist",
  "Art Director & Artist",
  "Usability Lover",
  "Hobbyist Front-end Developer",
  "Just myself!"
]

export default () => {

  const classes = {
    root: cn(styles.section, 'dtm-Hero', 'themed-background'),
    image: cn(styles.image, 'dtm-Hero--image'),
    leadText: cn(styles.leadText, 'dtm-Hero--leadText'),
    heading: cn(styles.heading, 'dtm-Hero--leadText--heading'),
  }


  return(

      <section className={classes.root}>
        <Grid>
        <div className={classes.leadText}>
          <div className={classes.heading}>
            <h1>Hello,</h1>
            <h2 className="leadText-changer">
              I'm
              {leadText.map((text, i) => <span key={i}>{text}</span>)}
            </h2>
          </div>
        </div>
        <div 
          className={classes.image}
          style={{ 
            backgroundImage: `url(${PORTRAIT})`
          }}
        />
        </Grid>
        
      </section>
  )
}
