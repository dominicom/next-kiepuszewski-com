import React from 'react';
import { cn } from 'utils/helpers';



import * as grid from 'styles/renderColumns';


import styles from './Layout.module.scss';
// import './Column.scss';



export default function Column(props) {
  
  // TODO
  // Styles
  // no-gutters/gutters, no-gutters/gutters on left/right for Lg Md breaks!
  // Consider Sm

  const {
      id, 
      children, 
      empty,
      flex, 
      col, 
      colLg, 
      colMd, 
      colSm, 
      gutter,
      noGutter, 
      gutterLeft, 
      gutterRight 
  } = props;
  
  /*
      This calculate numbers columns global (col) and at breakpoints (colLg and so far)  
  */

  const colNum = grid.renderColumns(col);
  const colLgNum = grid.renderLargeColumns(colLg);
  const colMdNum = grid.renderMediumColumns(colMd);
  const colSmNum = grid.renderMediumColumns(colSm);

  if (id) {
    console.log(`id check ${id}`, col, colSm, colMd, colLg);
    console.log(`id check ${id} numbsy`, colNum, colSmNum, colMdNum, colLgNum);
  }



  const classes = 
    cn(
      'dtm--column',
      flex && 'dtm--row',
      styles.column, 
      empty && 'column__empty', 
      colNum && `col-${colNum}`,

      // colLgNum ? `col-lg-${colLgNum}` : `col-lg-4`,
      // colMdNum ? `col-md-${colMdNum}` : `col-md-4`,
      // colSmNum ? `col-sm-${colSmNum}` : `col-sm-4`, 

      // colLgNum ? `col-lg-${colLg}` : `col-lg-${colLg || 4}`,
      // colMdNum ? `col-md-${colMd}` : `col-md-${colMd || 4}`,
      // colSmNum ? `col-sm-${colSm}` : `col-sm-${colSm || 4}`, 

      colLgNum && `col-lg-${colLgNum}`,
      colMdNum && `col-md-${colMdNum}`,
      colSmNum && `col-sm-${colSmNum}`, 

      !empty && !noGutter && 'gutter',

      !empty && (gutter && 'gutter'), 
      !empty && (gutterLeft && 'gutter__left'), 
      !empty && (gutterRight && 'gutter__right')
    );

  return(
    <div className={classes} data-id={id ? id : null}>
      {children}
    </div>
  );
}

Column.defaultProps = {
  noGutter: false,
  // gutter: true,
};