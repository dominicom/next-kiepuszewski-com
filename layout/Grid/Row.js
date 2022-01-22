import { cn } from 'utils/helpers';

import styles from './Layout.module.scss'

export default function Row ({ children }) {
  const classes = cn(styles.row, 'dtm--row')
  return(
    <div className={classes}>{children}</div>
  )
}