import React from 'react';
import { Column } from 'layout/Grid';
import Tile from 'components/Tile';
import Icon from 'components/Icon';


import { cn } from 'utils/helpers';



export default function Card(props) {

  const { 
    children, 
    href,
    dark, 
    ratio, 
    nospacing, 
    gutter,
    minicard,
    staticCard
  } = props;

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

  const cardClasses = cn(
    'Card', 
    dark && 'dark', 
    minicard && 'minicard-style'
  )

  const tileProps = {
    subtitle: props.subtitle,
    title: props.title,
    href: props.href,
    dark: props.dark,
  }
  
  const aspectRatio = cn(`aspect-ratio`, ratio !== true ? `aspect-ratio--${ratio}` : 'aspect-ratio--1x1')

  const classes = {
    card: cn('Card', dark && 'dark', minicard && 'minicard-style'),
    aspect: cn(ratio && aspectRatio, !nospacing && 'card--spacing'), // !nospacing && 'card--spacing'
    container: cn('Card-container', ratio && 'aspect-ratio--object'), // 'Card-container',   
    action: cn('Card-action')
  }

  const Action =
    <div className={classes.action}>
      <Icon name="ArrowRight" />
    </div>

  const Element = 
    <div className={classes.card}>
      <div className={classes.aspect}>
        <div className={classes.container}>
            <Tile {...tileProps} clickable>
              {children}
              {Action}
            </Tile>
        </div>
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
  // nospacing: false,
  //gutter: false,
  // subtitle: 'Subtitle',
  title: 'Title',
  ratio: "2x1",
  dark: false
};