import { cn } from 'utils/helpers';

import styles from './Grid.module.scss'

export default function Grid ({ children }) {
  const classes = cn(styles.module, 'dtm--grid')
  return(
    <div className={classes}>{children}</div>
  )
}
