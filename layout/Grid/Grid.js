import { cn } from 'utils/helpers';

import styles from './Layout.module.scss'

export default function Grid ({ children }) {
  const classes = cn(styles.grid, 'dtm--grid')
  return(
    <div className={classes}>{children}</div>
  )
}
