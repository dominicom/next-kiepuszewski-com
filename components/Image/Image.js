import React, { useState } from 'react'
import styles from './Image.module.scss'



const omit = (obj, omitKey) =>
  Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key]
    }
    return result
  }, {})

const overlayStyles = {
  position: 'absolute',
  filter: 'blur(80px)',
  transition: 'opacity ease-in 1000ms',
  clipPath: 'inset(0)'
};

export default function Image(props) {
  const [state, setState] = useState({ highResImageLoaded: false });
  const { overlaySrc } = props;
  const { highResImageLoaded } = state;
  let filteredProps = omit(props, 'overlaySrc')
  return (
    <div className={styles.module}>
      <img
        {...filteredProps}
        onLoad={() => {
          setState({ highResImageLoaded: true });
        }}
        src={props.src}
      />

      {!highResImageLoaded && (
        <img
          {...filteredProps}
          className={`${props.className} ${overlayStyles}`}
          {...(highResImageLoaded && { style: { opacity: '0' } })}
          src={overlaySrc}
        />
      )}
    </div>
  );
}


