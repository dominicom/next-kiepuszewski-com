import { cn } from 'utils/helpers';


const defaultTheme = "g10"

export default function Main(props) {
  const { children, hero, theme } = props

  // ToDo
  // container--g10 - external style function
  const classes = cn('Main-container', theme && theme || defaultTheme, hero && 'container--not-padded' )

  return(
    <main className={classes}>
      {children}
    </main>
  )
}