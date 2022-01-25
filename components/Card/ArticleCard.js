import React from 'react';
import { Column } from 'layout/Grid';
import Tile from 'components/Tile';

import { cn } from 'utils/helpers';

import styles from './ArticleCard.module.scss'



export default function ArticleCard(props) {

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
  const tileProps = {
    // ratio: props.ratio,
    dark: props.dark,
  }

  const aspectRatio = cn(`aspect--ratio`, ratio !== true ? `aspect--ratio--${ratio}` : 'aspect--ratio--1x1')

  const classes = {
    card: cn('Card', dark && 'dark', ratio && aspectRatio, !nospacing && 'card--spacing'),
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

ArticleCard.defaultProps = {
  ratio: true,
  noGutter: true,
  //gutter: false
};