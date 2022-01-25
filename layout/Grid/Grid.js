import { cn } from 'utils/helpers';

import styles from './Layout.module.scss'

export default function Grid ({ children, theme }) {
  const classes = cn(styles.grid, 'dtm--grid', theme && `container ${theme}`)
  return(
    <div className={classes}>{children}</div>
  )
}
