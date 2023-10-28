import React from 'react';
import { Column } from 'layout/Grid';

import Link from 'next/link';

import { cn } from 'utils/helpers';



export default function Tile(props) {

  const { 
    className, 
    children,
    href, 
    subtitle, 
    title, 
    dark, 
    col, 
    noGutter, 
    gutter, 
    gutterLeft, 
    gutterRight, 
    ratio 
  } = props;

  const columnProps = {
    col: col,
    noGutter: noGutter,
    gutter: gutter,
    gutterLeft: gutterLeft,
    gutterRight: gutterRight
  }

  let isLink;
  if (href !== undefined) {
    isLink = href.charAt(0) === '/';
  }

  const classes = {
    tile: cn('Tile', dark && 'dark' ), // ratio && 'aspect-ratio'
    container: 'Tile-container'
  }

  const TileContainer = (
    <>
      {subtitle && <Subtitle content={subtitle} />}
      {title && <Title content={title} />}
      {children}
    </>
  )

  let TileComponent;
  if (isLink === true) {
    TileComponent = (
      <Link href={href}>
        <a className={classes.tile}>
          {TileContainer}
        </a>
      </Link>
    );
  } else {
    TileComponent = (
      <a className={classes.tile}>
        {TileContainer}
      </a>
    );
  }

  if (col) {
    return(
      <Column {...columnProps}>
        {TileComponent}
      </Column>
    );
  } else {
    return(
      <>{TileComponent}</>
    );
  }
}

Tile.defaultProps = {
  ratio: true,
  noGutter: true,
  //gutter: false,
  subtitle: 'Subtitle',
  title: 'Title',
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