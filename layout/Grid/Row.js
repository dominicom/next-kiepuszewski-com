import { cn } from 'utils/helpers';

// import styles from './Layout.module.scss'

export default function Row (props) {
  const { children, className } = props;
  const classes = cn(className, 'fbr--row')
  return(
    <div className={classes}>{children}</div>
  )
}