import React from 'react';
import { Column } from 'layout/Grid';

import { cn } from 'utils/helpers';



export default function Tile(props) {

  const { className, children, subtitle, title, dark, col, noGutter, gutter, gutterLeft, gutterRight, ratio } = props;

  const columnProps = {
    col: col,
    noGutter: noGutter,
    gutter: gutter,
    gutterLeft: gutterLeft,
    gutterRight: gutterRight
  }


  const classes = {
    tile: cn('Tile', dark && 'dark' ), // ratio && 'aspect--ratio'
    container: 'Tile-container'
  }

  const Element = 
    <div className={classes.tile}>
      <div className={classes.container}>
        {subtitle && <Subtitle content={subtitle} />}
        {title && <Title content={title} />}
        {children}
      </div>
    </div>

  if (col) {
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

Tile.defaultProps = {
  ratio: true,
  noGutter: true,
  //gutter: false
};


const Subtitle = props => {
  const { content } = props;
  return(
    <h4 className="Tile-subtitle">{content}</h4>
  )
}
const Title = props => {
  const { content } = props;
  return(
    <h3 className="Tile-title">{content}</h3>
  )
}