import React from 'react';
import { Column } from 'layout/Grid';
import Tile from 'components/Tile';

import { cn } from 'utils/helpers';



export default function Card(props) {

  const { children, dark, ratio, nospacing } = props;

  const columnProps = {
    colSm: props.colSm,
    colMd: props.colMd,
    colLg: props.colLg,
    col: props.col,
    noGutter: props.noGutter,
    gutter: props.gutter,
    gutterLeft: props.gutterLeft,
    gutterRight: props.gutterRight
  }


  const classes = {
    card: cn('Card', dark && 'dark', ratio && 'aspect--ratio', !nospacing && 'card--spacing'),
    container: 'Card-container'
  }

  const Element = 
    <div className={classes.card}>

      {/* <div className={classes.container}>
        {children}
      </div> */}
      
      <div className={classes.container}>
        <Tile ratio={false} dark={dark} >
          {children}
        </Tile>
      </div>
    </div>

  if (props.col) {
    return(
      <Column {...columnProps}>
        {Element}
      </Column>
    );
  } else {
    return(
      <>{Element}</>
    );
  }
}

Card.defaultProps = {
  ratio: true,
  noGutter: true,
  //gutter: false
};