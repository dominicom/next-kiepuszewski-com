import { cn } from 'utils/helpers'

import styles from './Main.module.scss'

const defaultTheme = "g10"

export default function Main(props) {
  const { children, hero, theme } = props

  // ToDo
  // container--g10 - external style function
  // when hero is rendered - padded or not?
  const classes = cn(styles.module, 'Main-container', 'container', theme && theme || defaultTheme, hero && 'container--not-padded' )

  return(
    <main className={classes}>
      {children}
    </main>
  )
}