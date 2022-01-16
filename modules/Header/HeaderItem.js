import styles from './Header.module.scss';

const HeaderItem = ({ children }) => (
  <div className={styles.item}>
    {children}
  </div>
)

export default HeaderItem