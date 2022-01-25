import React from 'react';
import { Column } from 'layout/Grid';
import Tile from 'components/Tile';

import { cn } from 'utils/helpers';



export default function Card(props) {

  const { children, dark, ratio, nospacing, minicard } = props;

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
  const tileProps = {
    // ratio: props.ratio,
    dark: props.dark,
  }

  
  const aspectRatio = cn(`aspect--ratio`, ratio !== true ? `aspect--ratio--${ratio}` : '')

  const classes = {
    card: cn('Card', dark && 'dark', ratio && aspectRatio, !nospacing && 'card--spacing', minicard && 'minicard-style'),
    container: cn('Card-container', ratio && 'aspect-ratio--object')
  }

  const Element = 
    <div className={classes.card}>
      <div className={classes.container}>
          <Tile {...tileProps} >
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
  ratio: false,
  noGutter: true,
  //gutter: false
};