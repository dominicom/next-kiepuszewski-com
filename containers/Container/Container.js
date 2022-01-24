import { cn } from 'utils/helpers'

const defaultTheme = "g10"

export default function Container(props) {
  const { children, hero, theme } = props
  const classes = cn('container', theme && theme || defaultTheme)
  return(
    <div className={classes}>
      {children}
    </div>
  )
}