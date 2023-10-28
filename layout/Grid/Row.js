import { cn } from 'utils/helpers';

// import styles from './Layout.module.scss'

export default function Row ({ children, className }) {
  const classes = cn(className, 'fbr--row')
  return(
    <div className={classes}>{children}</div>
  )
}