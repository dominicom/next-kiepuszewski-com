import React, { useState } from 'react'
import { cn } from 'utils/helpers'

import styles from './Image.module.scss'

// @See Docs
// https://github.com/FormidableLabs/react-progressive-image/blob/master/src/index.js

// @See this package, modernized this from FormidableLabs
// https://www.npmjs.com/package/react-progressive-graceful-image

const omit = (obj, omitKey) =>
  Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key]
    }
    return result
  }, {})

const overlayStyles = {
  position: 'absolute',
  top: 0, 
  left: 0,
  filter: 'blur(8px)',
  transition: 'opacity ease-in 1000ms',
  clipPath: 'inset(0)'
};

export default function Image(props) {
  const [state, setState] = useState({ highResImageLoaded: false });
  const { overlaySrc, src } = props;
  const { highResImageLoaded } = state;
  let filteredProps = omit(props, 'overlaySrc')
  console.log(filteredProps)
  let fgh = highResImageLoaded && { opacity: '0' } // ToDo parameter name to change!

  const classes = {
    root: cn(styles.module, 'image-wrapper'),
    image: cn(props.className)
  }

  return (
    <div className={classes.root}>
      <img
        {...filteredProps}
        onLoad={() => {
          setState({ highResImageLoaded: true });
        }}
        src={src}
      />

      {!highResImageLoaded && (
        <img
          {...filteredProps}
          className={props.className}
          // {...(highResImageLoaded && { style: { opacity: '0' } })}
          style={{ ...overlayStyles, ...fgh}}
          src={overlaySrc}
        />
      )}
    </div>
  );
}


