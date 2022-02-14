
import React from 'react';

import * as FeatherIconPack from 'react-feather'

const IconComponent = ({ type, settings }) => {
  return React.createElement(FeatherIconPack[type], settings);
}

export default function Icon({ name = 'Circle', className, size, stroke }) {

  const attributes = {
    class: className || '',
    strokeWidth: stroke || 2,
    color: "currentColor",
    size: size || 24
  }

  return <IconComponent type={name} settings={attributes} /> 
}
