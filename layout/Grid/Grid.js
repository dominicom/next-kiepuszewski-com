import { cn } from 'utils/helpers';

import styles from './Layout.module.scss'

export default function Grid ({ children, id, theme }) {
  const classes = cn(styles.grid, 'dtm--grid', theme && `container ${theme}`)
  return(
    <div id={id} className={classes}>{children}</div>
  )
}
