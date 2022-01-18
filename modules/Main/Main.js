import { cn } from 'utils/helpers';


const defaultTheme = "g10"

export default function Main(props) {
  const { children, theme } = props

  // ToDo
  // container--g10 - external style function
  const classes = cn('Main-container', theme && theme || defaultTheme )

  return(
    <main className={classes}>
      {children}
    </main>
  )
}