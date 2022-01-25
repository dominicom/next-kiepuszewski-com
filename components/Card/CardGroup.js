
import { cn } from 'utils/helpers';
import { Row } from 'layout/Grid;
// import * as styles from './CardGroup.module.scss';

const CardGroup = ({ children, className, ...rest }) => (
  <Row className={cn(className, styles.row)} {...rest}>
    {children}
  </Row>
);

export default CardGroup;