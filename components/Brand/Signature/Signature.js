import React from 'react';


import { cn } from 'utils/helpers';

// import './Signature.scss';

export const Signature = ({ fulfilled }) => {
  return (
    <div
      className={cn('kiepuszewski', 'dtm-Signature', !fulfilled ? 'rest' : 'active')}
      overlayed={fulfilled}
    >
      <Vector />
    </div>
  )
}











const Vector = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    x="0px" 
    y="0px"
    viewBox="0 0 152 56" 
    fill="currentColor"
  >

  <g className="Signature">
          <path className="letter outline" d="M3.9,34c0.8-5.5,2.3-10.8,3.9-16.1c1.6-5,2.9-10.2,5.4-14.9C12.1,2.9,11,2.7,9.8,2.6
            C10.2,4.1,9.6,6,9.4,7.5c-0.3,1.8-0.6,3.5-1,5.3c-0.8,3.5-1.6,7-2.2,10.6C5.5,27,4.8,30.5,3.9,34c-1,3.5-2,7-2.7,10.6
            c-0.5,2.4,2.8,3.2,3.6,1c1.7-4.7,4.1-9.1,6.6-13.4c2.4-4.1,4.8-8.3,8.1-11.8c1.6-1.8-1-4.4-2.7-2.7c-3.5,3.7-6.1,8.1-8.7,12.5
            c-2.7,4.6-5.1,9.3-7,14.3c1.2,0.3,2.4,0.7,3.6,1c0.8-3.7,1.8-7.4,2.8-11c0.9-3.7,1.6-7.4,2.3-11.1c0.7-3.7,1.6-7.3,2.3-11
            c0.4-1.8,0.7-3.7,1-5.6c0.3-1.8,0.7-3.5,0.2-5.3C13,0.1,10.8-0.3,10,1.2C7.5,6,6,11.3,4.4,16.4C2.7,21.9,1.2,27.4,0.3,33
            c-0.1,1,0.3,2,1.3,2.3C2.5,35.6,3.8,35,3.9,34L3.9,34z"/>

          <path className="letter outline" d="M8.2,30.6c-0.1,1.5-0.1,3,0,4.4c0.1,2.1,0.3,4.1,0.8,6.1c0.4,1.7,1,3.7,2.5,4.7c0.8,0.5,1.8,0.6,2.6,0.3
            c1.1-0.4,1.9-1.3,2.6-2.2c0.9-1.2,1.6-2.6,2.2-4c1.1-2.5,2-5.1,2.9-7.7c0.3-0.9-0.4-2.1-1.3-2.3c-1-0.2-2,0.3-2.3,1.3
            c-0.7,2.2-1.5,4.3-2.3,6.4c-0.2,0.4,0.2-0.4,0,0c0,0.1-0.1,0.2-0.1,0.2c-0.1,0.2-0.2,0.4-0.3,0.6c-0.2,0.4-0.3,0.8-0.5,1.1
            c-0.3,0.6-0.6,1.1-0.9,1.7c-0.1,0.2-0.3,0.4-0.4,0.6c-0.1,0.1-0.1,0.2-0.2,0.3c0.4-0.6,0.1-0.2,0,0c-0.1,0.1-0.2,0.3-0.4,0.4
            c-0.1,0.1-0.1,0.1-0.2,0.1c-0.2,0.2,0.5-0.3,0.1-0.1c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.1-0.3,0,0.2-0.1c-0.1,0-0.1,0-0.2,0.1
            c-0.4,0.1,0.4,0,0.3,0c-0.5,0,0.4,0.1,0.2,0c-0.4-0.1,0.5,0.3,0.1,0.1c-0.4-0.2,0.4,0.4,0.1,0.1c-0.1-0.1-0.4-0.4-0.1-0.1
            c0.3,0.4,0,0-0.1-0.1c-0.1-0.1-0.2-0.3-0.2-0.4c0-0.1-0.1-0.1-0.1-0.2c0.3,0.6,0.1,0.4,0.1,0.2c-0.1-0.2-0.1-0.3-0.2-0.5
            c-0.1-0.4-0.2-0.8-0.3-1.1c-0.1-0.4-0.2-0.8-0.3-1.2c0-0.2-0.1-0.4-0.1-0.7c0-0.2-0.1-1.1,0-0.3c-0.1-0.9-0.2-1.8-0.3-2.8
            c-0.1-1.6-0.2-3.2-0.1-4.8c0.1-1-0.9-1.9-1.9-1.9C9,28.8,8.3,29.5,8.2,30.6L8.2,30.6z"/>

          <path className="letter outline" d="M18.2,31.2c-0.6,2.6-1.8,5.2-1.5,7.9c0.2,1.8,0.9,3.3,2.3,4.3c1.3,0.9,3.1,0.9,4.6,0.5
            c2.1-0.6,4-1.7,5.8-2.9c0.8-0.5,1.2-1.7,0.7-2.6c-0.5-0.8-1.7-1.2-2.6-0.7c-0.8,0.5-1.5,1-2.3,1.4c-0.3,0.2-0.7,0.4-1,0.5
            c-0.2,0.1-0.3,0.2-0.5,0.2c0.4-0.2-0.1,0-0.2,0.1c-0.3,0.1-0.6,0.2-0.9,0.3c-0.1,0-0.3,0.1-0.4,0.1c-0.4,0.1,0.3,0-0.1,0
            c-0.1,0-0.3,0-0.4,0c-0.1,0-0.2,0-0.2,0c0,0,0.4,0.1,0.2,0c-0.1,0-0.2-0.1-0.3-0.1c0,0-0.2-0.1-0.2-0.1c0.1,0,0.4,0.2,0.2,0.1
            c-0.1-0.1-0.2-0.1-0.3-0.2c-0.2-0.1,0.2,0.1,0.2,0.1c0,0-0.1-0.1-0.2-0.1c-0.1-0.1-0.3-0.4-0.1-0.1c0.2,0.2-0.1-0.1-0.1-0.2
            c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.2,0.1,0.2,0.1,0.2c0-0.1-0.1-0.3-0.1-0.4c0-0.1-0.1-0.3-0.1-0.4c0-0.2,0.1-0.2,0,0.2
            c0-0.1,0-0.2,0-0.2c0-0.3,0-0.6,0-0.8c0-0.1,0-0.3,0-0.4c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0,0.1c0,0,0,0.2,0,0
            c0-0.1,0-0.2,0-0.3c0-0.1,0.1-0.3,0.1-0.4c0.1-0.3,0.1-0.6,0.2-0.9c0.3-1.2,0.7-2.4,1-3.6c0.2-1-0.3-2.1-1.3-2.3
            C19.5,29.7,18.5,30.2,18.2,31.2L18.2,31.2z"/>

          <path className="letter outline" d="M23.4,26.4c0.8-0.2,1.6-0.4,2.4-0.5c0.2-0.1,0.5-0.2,0.6-0.3c0.2-0.1,0.4-0.3,0.5-0.5
            c0.1-0.2,0.2-0.4,0.2-0.7c0.1-0.2,0-0.5,0-0.7c-0.1-0.5-0.4-0.9-0.9-1.1c-0.1-0.1-0.3-0.1-0.4-0.2c-0.3-0.1-0.7-0.1-1,0
            c-0.8,0.2-1.6,0.4-2.4,0.5c-0.2,0.1-0.5,0.2-0.6,0.3c-0.2,0.1-0.4,0.3-0.5,0.5c-0.1,0.2-0.2,0.4-0.2,0.7c-0.1,0.2,0,0.5,0,0.7
            c0.1,0.5,0.4,0.9,0.9,1.1c0.1,0.1,0.3,0.1,0.4,0.2C22.8,26.5,23.1,26.5,23.4,26.4L23.4,26.4z"/>

          <path className="letter outline" d="M29.3,41c2.5-1.4,5.2-3.4,6.9-5.8c0.9-1.3,1.4-3,0.4-4.4c-1.1-1.7-3.5-2.2-5.3-2c-4.3,0.6-6.5,5.4-6.6,9.2
            c-0.1,2.4,0.8,4.6,2.4,6.3c1.9,2,4.4,2.6,7.1,2.1c2.6-0.5,4.3-2.4,5.6-4.6c1.6-2.8,2.2-6,2.3-9.2c-1.3,0-2.5,0-3.8,0
            c0,6.8-0.7,13.6-0.5,20.5c1.3,0,2.5,0,3.8,0c-0.2-4-0.2-8,1.2-11.8c0.6-1.7,1.7-4.9,3.7-5.3c0,0,0.6,0,0.2,0
            c-0.3,0,0.2,0,0.2,0.1c-0.4-0.2,0.1,0.2-0.1,0c-0.3-0.3,0.3,0.4,0.1,0.1c-0.2-0.2,0.1,0.2,0.1,0.2c0.2,0.3-0.1-0.3,0,0.1
            c0,0.2,0.1,0.3,0.1,0.5c0,0.1,0.1,0.4,0-0.1c0,0.1,0,0.2,0,0.3c0,0.4,0,0.7,0,1c0.1-0.5,0,0.2-0.1,0.3c0,0.2-0.1,0.4-0.2,0.6
            c-0.1,0.4-0.5,0.9-0.8,1.3c0,0-0.3,0.3-0.1,0.1c0.2-0.2-0.2,0.1-0.2,0.1c-0.1,0.1-0.6,0.3-0.2,0.1c-0.2,0.1-0.4,0.1-0.6,0.2
            c0.4-0.1-0.2,0-0.3,0c-0.1,0-0.4,0,0,0c-0.1,0-0.3,0-0.4-0.1c-0.1,0-0.6-0.2-0.5-0.2c-0.6-0.3-1.3-0.7-1.8-1.1
            c-0.8-0.6-1.9-0.8-2.7,0c-0.7,0.7-0.8,2,0,2.7c2.3,1.9,5.4,3.4,8.3,1.7c2.1-1.2,3.2-3.6,3.3-5.8c0.2-2.2-0.7-4.8-3-5.6
            c-3.6-1.2-6.3,2.3-7.7,5.1c-1,2.1-1.8,4.4-2.2,6.7c-0.5,2.9-0.4,5.8-0.3,8.8c0.1,2.4,3.8,2.4,3.8,0c-0.2-6.8,0.5-13.6,0.5-20.5
            c0-2.4-3.7-2.4-3.8,0c0,2-0.3,4-1,5.9c-0.6,1.3-1.4,3.1-2.7,3.8c-2.8,1.7-6-0.8-6.2-3.5c-0.1-2.1,0.7-5.4,2.7-6.2
            c0.5-0.2,0.9-0.2,1.5-0.1c0.3,0,0.6,0.2,0.6,0.2c0.1,0,0.2,0.1,0.3,0.2c0,0,0,0,0,0c0-0.1-0.2-0.4-0.1-0.2
            c0.1,0.2-0.1-0.3,0-0.1c0.1,0.2-0.1-0.2,0-0.1c0,0-0.1,0.3-0.1,0.3c0.2-0.4-0.1,0.2-0.2,0.3c-0.2,0.3-0.3,0.4-0.4,0.5
            c-1.5,1.8-3.3,3.1-5.4,4.2C25.3,38.9,27.2,42.2,29.3,41L29.3,41z"/>

          <path className="letter outline" d="M50,33C50,33.2,49.9,33.6,50,33c0,0.2,0,0.3-0.1,0.5c-0.1,0.4-0.1,0.8-0.2,1.1c-0.2,1-0.3,1.9-0.4,2.9
            c-0.2,1.8-0.3,3.8,0.3,5.5c0.8,2.2,3,3.9,5.5,3.1c2.4-0.8,4-3.3,5-5.5c1.3-2.7,1.6-5.6,1.5-8.6c0-1-0.8-1.9-1.9-1.9
            c-1,0-1.9,0.8-1.9,1.9c0,1.1,0,2.2-0.1,3.3c0,0.6,0-0.2,0,0.1c0,0.1,0,0.2-0.1,0.4c0,0.2-0.1,0.5-0.1,0.7
            c-0.1,0.5-0.3,1-0.5,1.5c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.3,0.1-0.2,0,0.1c-0.1,0.2-0.2,0.5-0.3,0.7c-0.3,0.5-0.5,1-0.8,1.5
            c-0.1,0.2-0.2,0.3-0.4,0.5c-0.1,0.1-0.3,0.3-0.1,0.1c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.2-0.3,0.3-0.5,0.5
            c-0.1,0.1-0.2,0.2-0.2,0.2c-0.3,0.3,0.2-0.1-0.1,0.1c-0.1,0.1-0.6,0.3-0.2,0.2c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0.1-0.3,0,0.1,0
            c-0.1,0-0.3,0,0.1,0c-0.1,0-0.2,0-0.3-0.1c0.4,0.1-0.2,0-0.2-0.2c0,0,0.3,0.4,0.1,0.1c0,0-0.1-0.1-0.1-0.1
            c-0.2-0.2,0.2,0.2,0.1,0.1c0,0-0.1-0.2-0.1-0.2c0,0-0.2-0.4-0.2-0.4c0.1-0.1,0.1,0.4,0.1,0.1c0-0.1-0.1-0.2-0.1-0.3
            c0-0.2-0.1-0.3-0.1-0.5c0,0,0-0.2,0-0.2c0,0,0,0.4,0,0.1c0-0.4-0.1-0.8-0.1-1.2c0-0.8,0.1-1.6,0.2-2.4c0-0.1,0-0.2,0-0.3
            c0.1-0.5-0.1,0.4,0-0.1c0-0.2,0.1-0.5,0.1-0.7c0.1-0.4,0.1-0.8,0.2-1.1c0.1-0.8,0.3-1.6,0.3-2.4c0.1-1-0.9-1.9-1.9-1.9
            C50.8,31.2,50.1,32,50,33L50,33z"/>

          <path className="letter outline" d="M57.5,37.1c-0.4,2-0.8,4.2,0.2,6.1c0.8,1.7,2.7,2.6,4.5,2.9c0.5,0.1,1,0.1,1.4-0.2c0.4-0.2,0.8-0.7,0.9-1.1
            c0.2-0.9-0.3-2.1-1.3-2.3c-0.4-0.1-0.8-0.2-1.2-0.3c-0.1,0-0.1,0-0.2-0.1c-0.4-0.2,0.4,0.2,0.1,0.1c-0.1-0.1-0.3-0.1-0.4-0.2
            c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.1,0.4,0.3,0.2,0.1c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.2-0.3,0.1,0.2c0-0.1-0.1-0.1-0.1-0.2
            c-0.1-0.1-0.1-0.2-0.2-0.4c0.3,0.5,0.2,0.4,0.1,0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.3-0.1-0.4c-0.1-0.4,0,0.5,0,0.2
            c0-0.1,0-0.2,0-0.2c0-0.2,0-0.4,0-0.6c0-0.2,0-0.4,0-0.6c0-0.2,0.1-0.9,0-0.2c0.1-0.5,0.2-0.9,0.3-1.4c0.2-1-0.3-2.1-1.3-2.3
            C58.8,35.5,57.7,36,57.5,37.1L57.5,37.1z"/>

          <path className="letter outline" d="M67.6,30.3c-3.3,0.7-8,3.8-5.7,7.7c0.6,1,1.4,1.7,2.5,2c0.8,0.3,1.6,0.3,2.3,0.4c0.2,0,0.4,0.1,0.5,0.1
            c0.1,0,0.2,0.1,0.3,0.1c-0.1,0-0.3-0.2,0,0c0.1,0,0.1,0.1,0.2,0.1c0.2,0.1-0.2-0.2,0,0c0.1,0.1,0.2,0.2,0.2,0.2
            c-0.1-0.2,0.2,0.3,0.2,0.3c-0.2-0.3,0.1,0.3,0,0.1c0-0.2,0,0.1,0,0.1c0.1-0.3,0-0.1,0,0c-0.1,0.4,0,0.1,0,0.1
            c-0.1,0.1-0.1,0.2-0.2,0.3c0,0,0.1-0.1,0,0c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.3,0.2,0,0c-0.1,0.1-0.2,0.1-0.3,0.2
            c-0.1,0-0.1,0.1-0.2,0.1c0.3-0.2,0,0-0.1,0c-0.2,0.1-0.5,0.1-0.7,0.2c0.4-0.1-0.2,0-0.3,0c-0.3,0-0.5,0-0.8,0
            c-0.1,0-0.8-0.1-0.4,0c-0.5-0.1-1-0.2-1.5-0.3c-1-0.2-2.1,0.3-2.3,1.3c-0.2,1,0.3,2.1,1.3,2.3c1.9,0.4,4,0.7,5.8,0.1
            c2.3-0.8,4.3-3.1,3.7-5.7c-0.3-1.2-1.2-2.3-2.2-3c-0.8-0.5-1.7-0.7-2.6-0.8c-0.4-0.1-0.8-0.1-1.1-0.2c-0.1,0-0.6-0.2-0.2,0
            c-0.1,0-0.2-0.1-0.3-0.1c-0.3-0.2,0.2,0.1,0,0c-0.2-0.1,0.1,0.2,0,0c0-0.1-0.1-0.1-0.1-0.2c-0.2-0.3,0,0,0,0
            c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.3,0.1,0.1,0,0.1c0,0,0-0.3,0-0.3c0,0-0.1,0.4,0,0.2c0-0.1,0.1-0.2,0.1-0.3
            c-0.1,0.4-0.1,0.2,0,0.1c0,0,0.2-0.4,0.1-0.1c-0.1,0.2,0,0,0.1-0.1c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.1,0.2-0.2
            c0.3-0.2-0.2,0.1,0,0c0.2-0.1,0.4-0.3,0.6-0.4c0.2-0.1,0.4-0.2,0.6-0.3c0.1,0,0.2-0.1,0.3-0.1c-0.3,0.2,0,0,0.1,0
            c0.4-0.2,0.9-0.3,1.3-0.4c1-0.2,1.6-1.4,1.3-2.3C69.6,30.6,68.6,30.1,67.6,30.3L67.6,30.3z"/>

          <path className="letter outline" d="M73.1,34.4c0.6-0.1,1.2-0.1,1.8-0.1c0.1,0,0.2,0,0.4,0c0.1,0,0.4,0,0.1,0c-0.4,0,0,0,0.1,0
            c0.1,0,0.2,0.1,0.3,0.1c0.3,0.1-0.1,0-0.2-0.1c0,0,0.1,0.1,0.2,0.1c0.3,0.1-0.4-0.3-0.2-0.1c0.1,0.1,0.2,0.3-0.1-0.2
            c0.2,0.3-0.2-0.5,0-0.1c0.1,0.4,0-0.6,0-0.1c0,0.4,0.1-0.6,0,0c0,0.1-0.1,0.3-0.1,0.4c-0.1,0.3,0.2-0.4,0.1-0.2
            c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.2-0.2,0.4-0.3,0.5c-0.4,0.7-0.9,1.4-1.4,2.1c-1,1.3-2.1,2.6-2.7,4.1c-0.5,1.1-0.7,2.2-0.5,3.4
            c0.3,1.4,1.5,2.2,2.9,2.3c1.4,0.1,2.8-0.5,4-1.1c1.7-0.9,3.3-2,4.8-3.2c0.8-0.6,0.7-2,0-2.7c-0.8-0.8-1.8-0.7-2.7,0
            c-0.1,0.1-0.2,0.1-0.2,0.2c-0.3,0.2,0.2-0.1-0.1,0.1c-0.2,0.1-0.3,0.2-0.5,0.3c-0.3,0.3-0.7,0.5-1,0.7c-0.6,0.4-1.2,0.8-1.9,1.1
            c-0.3,0.1-0.7,0.2-0.9,0.4c0,0,0.3-0.1,0.1-0.1c-0.1,0-0.1,0-0.2,0.1c-0.2,0.1-0.3,0.1-0.5,0.2c-0.2,0.1-0.4,0.1-0.7,0.2
            c-0.3,0.1,0.2,0,0.1,0c-0.1,0-0.2,0-0.3,0c-0.3,0,0.2,0.1,0.2,0c0,0-0.2-0.1-0.2-0.1c0.1,0,0.5,0.2,0.2,0.1
            c0.6,0.4,0.3,0.3,0.2,0.2c-0.2-0.2,0.2,0.2,0.2,0.2c-0.1-0.1-0.2-0.4,0,0c0.1,0.3,0,0.1,0,0c0-0.2,0,0.4,0,0.3c0,0,0-0.1,0-0.2
            c0-0.1,0-0.2,0-0.3c0-0.2,0,0.2,0,0.2c0-0.1,0-0.2,0-0.2c0-0.1,0-0.2,0.1-0.2c0-0.1,0.1-0.3,0.1-0.4c-0.2,0.6-0.1,0.2,0-0.1
            c0.1-0.2,0.2-0.3,0.3-0.5c0.9-1.4,1.9-2.7,2.9-4.1c1-1.4,2-3.1,1.7-4.8c-0.5-2.7-3.8-2.7-5.9-2.5c-1,0.1-1.9,0.8-1.9,1.9
            C71.3,33.4,72.1,34.5,73.1,34.4L73.1,34.4z"/>

          <path className="letter outline" d="M81.6,42.7c2.1-1,4.2-2.4,5.7-4.2c1.4-1.6,2.7-3.6,2.3-5.8c-0.5-2.5-3.1-3.6-5.4-3.1
            c-2.1,0.5-4.1,2.1-5.2,4c-1.3,2.2-1.5,4.9-0.6,7.2c0.7,1.7,1.8,3,3.3,4c1.9,1.4,4.3,1.5,6.3,0.3c1.5-0.9,2.7-2.4,3.7-3.9
            c1.5-2.3,2.7-4.9,3.7-7.5c0.4-0.9-0.4-2.1-1.3-2.3c-1.1-0.3-1.9,0.4-2.3,1.3c-0.7,1.9-1.6,3.7-2.6,5.5c-0.4,0.7-0.8,1.3-1.3,2
            c-0.1,0.2,0.1-0.1,0.1-0.1c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.2-0.4,0.4-0.6,0.6
            c-0.1,0.1-0.2,0.2-0.3,0.3c-0.4,0.3,0,0,0,0c0,0.1-0.5,0.4-0.6,0.4c-0.1,0-0.2,0.1-0.3,0.1c-0.3,0.2,0.4-0.1,0.1,0
            c-0.2,0.1-0.4,0.1-0.6,0.2c-0.1,0-0.2,0-0.3,0c0.3-0.2,0.5,0,0.1,0c-0.2,0-0.4,0-0.5,0c-0.1,0,0.5,0.1,0.2,0
            c-0.1,0-0.2,0-0.2-0.1c-0.2,0-0.3-0.1-0.5-0.2c0.5,0.1,0.4,0.2,0.1,0c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.1-0.3-0.2-0.4-0.3
            c-0.4-0.3,0.3,0.3-0.1-0.1c-0.1-0.1-0.3-0.3-0.4-0.4c-1.1-1.1-1.6-2.2-1.5-3.6c0-0.1,0-0.2,0-0.4c0,0.1-0.1,0.3,0-0.1
            c0-0.2,0.1-0.4,0.2-0.6c0-0.1,0.2-0.6,0.1-0.4c0.1-0.2,0.2-0.5,0.4-0.7c0.1-0.1,0.1-0.2,0.2-0.3c0,0,0.2-0.3,0-0.1
            c-0.2,0.2,0.2-0.2,0.2-0.2c0.1-0.1,0.2-0.3,0.4-0.4c0.1-0.1,0.6-0.5,0.3-0.3c0.3-0.2,0.7-0.4,1-0.6c0,0,0.3-0.1,0.1,0
            c-0.2,0.1,0.1,0,0.2-0.1c0.2-0.1,0.4-0.1,0.6-0.2c0.2-0.1-0.2-0.1,0,0c0.1,0,0.2,0,0.2,0c0.3,0,0,0,0,0c0.1,0,0.2,0,0.2,0.1
            c0.3,0.1-0.3-0.1,0,0c0.1,0,0.1,0.1,0.2,0.1c-0.3-0.2,0,0,0,0c0.2,0.3-0.2-0.3,0-0.1c0.2,0.3,0-0.3,0,0.1c0.1,0.4,0-0.4,0,0.1
            c0,0.1,0,0.2,0,0.2c0,0.1,0.1-0.4,0-0.1c-0.1,0.2-0.1,0.3-0.1,0.5c0,0-0.1,0.3,0,0c0.1-0.3-0.1,0.1-0.1,0.2
            c-0.1,0.2-0.2,0.4-0.3,0.5c-0.1,0.2-0.2,0.4-0.4,0.5c0.2-0.3,0,0,0,0c-0.1,0.1-0.2,0.2-0.3,0.3c-1.5,1.6-3,2.7-5,3.6
            c-0.9,0.4-1.1,1.8-0.7,2.6C79.6,42.9,80.7,43.1,81.6,42.7L81.6,42.7z"/>

          <path className="letter outline" d="M91.9,32.7c-0.4,1.9-1,3.7-1.3,5.6c-0.4,2-0.6,4.3,0.1,6.3C91,45.5,92,46.4,93,46c2.2-0.9,2.6-3.3,3.7-5.2
            c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.3-0.4,0.1-0.1c-0.2,0.3,0,0,0.1-0.1c0.3-0.3,0.1,0.1-0.1,0c0,0,0.5-0.3,0.1-0.1
            c-0.4,0.2,0.3,0-0.2,0.1c-0.1,0-0.2,0-0.4,0c0.2,0.1-0.3-0.2-0.3-0.1c0.2,0.1-0.2-0.2-0.2-0.2c0,0,0.2,0.2,0.2,0.2
            c-0.1,0-0.2-0.4-0.1-0.1c0,0.1,0.2,0.4,0.1,0.1c-0.1-0.3,0,0.1,0.1,0.2c0.2,0.5,0.3,1,0.4,1.5c0.2,1.1,0.4,2.4,1,3.3
            c0.7,0.9,1.5,1.1,2.6,0.7c2.3-1,3.4-3.6,4.2-5.8c0.7-2.1,1-4.3,1.6-6.4c0.3-0.9-0.3-2.1-1.3-2.3c-1-0.2-2,0.3-2.3,1.3
            c-0.5,2-0.9,4-1.5,6c-0.2,0.5-0.4,1-0.6,1.5c-0.1,0.1,0.2-0.3,0,0.1c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.2-0.2,0.5-0.4,0.7
            c0,0.1-0.3,0.6-0.4,0.6c0,0,0.3-0.3,0,0c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.3,0.2c-0.2,0.2,0.3-0.2,0,0
            c-0.2,0.1-0.4,0.2-0.6,0.3c0.9,0.2,1.7,0.4,2.6,0.7c0-0.1-0.1-0.1-0.1-0.2c-0.2-0.3,0.1,0.2,0.1,0.1c-0.1-0.2-0.2-0.5-0.2-0.7
            c-0.1-0.5-0.2-1.1-0.4-1.6c-0.3-1.2-0.6-2.6-1.5-3.5c-1.2-1.2-3-1-4.2,0c-0.8,0.7-1.3,1.8-1.7,2.8c-0.2,0.5-0.5,1.1-0.7,1.6
            c-0.1,0.1-0.1,0.2-0.2,0.4c0,0-0.1,0.1-0.1,0.1c-0.2,0.2-0.1-0.1,0.1-0.1c0,0-0.2,0.2-0.2,0.2c-0.1,0.2,0.4-0.3,0.2-0.2
            c-0.1,0.1-0.3,0.1,0.2-0.1c0.8,0.4,1.5,0.9,2.3,1.3c-0.1-0.2-0.1-0.4-0.2-0.5c0-0.1,0-0.2-0.1-0.3c0,0-0.1-0.5,0-0.2
            c0,0.3,0-0.1,0-0.1c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0-0.6c0-0.5,0-1,0.1-1.4c0-0.2,0-0.2,0,0c0-0.1,0-0.2,0.1-0.3
            c0-0.3,0.1-0.5,0.1-0.8c0.3-1.8,0.8-3.5,1.2-5.2c0.2-1-0.3-2.1-1.3-2.3C93.2,31.2,92.1,31.7,91.9,32.7L91.9,32.7z"/>


          <path className="letter outline" d="M109.3,29.6c-1.4,1.1-3,1.9-4.3,3.2c-0.7,0.7-1.4,1.6-1.6,2.6c-0.2,1.2,0.1,2.5,1.1,3.3
            c0.9,0.8,2,1.1,3.1,1.3c0.4,0.1,0.7,0.1,1.1,0.2c0.1,0,0.2,0,0.3,0c0.5,0.1-0.3,0,0,0c0.4,0.1,0.9,0.1,1.3,0.3
            c0.1,0,0.2,0.1,0.3,0.1c-0.4-0.1-0.1-0.1,0,0c0.1,0.1,0.2,0.1,0.3,0.2c0.3,0.1-0.2-0.1-0.1-0.1c0,0,0.1,0.1,0.1,0.1
            c0.2,0.3-0.2-0.4-0.1-0.1c0.1,0.1,0.1,0.3-0.1-0.2c0.1,0.2,0,0.4,0-0.2c0,0.4,0.1-0.4,0,0c-0.1,0.3,0.1-0.2,0.1-0.2
            c0,0-0.1,0.2-0.1,0.2c0,0-0.1,0.2-0.1,0.2c-0.1-0.1,0.3-0.3,0.1-0.2c-0.1,0.1-0.3,0.3-0.5,0.4c-0.1,0.1-0.1,0.2,0.1-0.1
            c-0.1,0.1-0.2,0.1-0.3,0.2c-0.2,0.1-0.4,0.3-0.6,0.4c-0.2,0.1-0.4,0.2-0.6,0.3c0.5-0.2-0.2,0.1-0.3,0.1
            c-0.2,0.1-0.4,0.1-0.6,0.2c-0.1,0-0.2,0-0.3,0.1c-0.2,0,0.5,0,0.1,0c-0.2,0-0.4,0-0.6,0c-0.3,0,0.2,0,0.2,0c0,0-0.3-0.1-0.4-0.1
            c-0.9-0.3-2.1,0.4-2.3,1.3c-0.2,1,0.3,2,1.3,2.3c1.8,0.6,3.9-0.1,5.5-1c1.6-0.9,3.4-2.7,2.9-4.7c-0.6-2.4-3.3-2.9-5.4-3.2
            c0,0-0.5-0.1-0.2,0c0.3,0-0.2,0-0.2,0c-0.3,0-0.5-0.1-0.8-0.1c-0.2,0-0.5-0.1-0.7-0.2c-0.1,0-0.2-0.1-0.3-0.1c0.4,0.2,0.1,0,0,0
            c-0.4-0.1,0.2,0.3,0,0c-0.1-0.1-0.2-0.3,0.1,0.1c-0.1-0.1-0.3-0.3-0.1-0.1c0.1,0.1,0,0.1,0-0.1c0.1,0.5,0,0.3,0,0.2
            c0-0.4-0.1,0.5,0,0.1c0,0,0.1-0.2,0.1-0.2c-0.1,0.3-0.1,0.3,0,0.1c0,0,0-0.1,0.1-0.1c0.1-0.1,0.1-0.2,0.2-0.3
            c-0.2,0.4-0.1,0.1,0,0c0.2-0.2,0.4-0.4,0.6-0.6c0.2-0.2,0.4-0.3,0.5-0.5c0.4-0.3-0.3,0.2,0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.3
            c0.7-0.5,1.5-1,2.3-1.5c0.8-0.6,1.2-1.6,0.7-2.6C111.4,29.4,110.2,29,109.3,29.6L109.3,29.6z"/>


          <path className="letter outline" d="M115.5,24.5c-0.4,3.8-0.8,7.6-1.5,11.4c-0.2,1.2-0.5,2.4-0.8,3.6c-0.3,1.2-0.5,2.7,0.2,3.8
            c1.3,2.2,3.8,0.8,5.1-0.5c1.5-1.5,2.8-3.2,4-5c1.1-1.5,2.1-3,3.1-4.6c-1.1-0.6-2.2-1.3-3.2-1.9c-1,2-1.4,4.4-1.5,6.6
            c-0.1,2.2,0.6,5.4,3.2,5.8c1,0.2,2-0.3,2.3-1.3c0.2-0.9-0.3-2.2-1.3-2.3c-0.2,0-0.6-0.2-0.2,0c-0.2-0.1-0.1-0.1,0.1,0.1
            c-0.1-0.1-0.1-0.1-0.2-0.2c0.2,0.2,0.2,0.2,0.1,0.1c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.1,0-0.1,0.1,0.1c0-0.1-0.1-0.2-0.1-0.3
            c0-0.2-0.1-0.4-0.1-0.6c0.1,0.4,0-0.3,0-0.4c0-0.4,0-0.9,0-1.3c0.1-0.8,0.2-1.5,0.4-2.5c0.1-0.4,0.2-0.7,0.3-1.1
            c0.1-0.2,0.1-0.3,0.2-0.5c-0.2,0.5,0,0.1,0-0.1c1.1-2.1-2-4-3.2-1.9c-0.7,1.1-1.4,2.2-2.1,3.2c-0.5,0.8-1.1,1.5-1.6,2.3
            c-0.5,0.7-1,1.3-1.6,2c-0.5,0.6-1,1.1-1.6,1.6c-0.3,0.3,0.2-0.1,0,0c-0.1,0.1-0.2,0.1-0.3,0.2c-0.3,0.2,0.3-0.1,0.1,0
            c0.4-0.1,0.9,0,1.3,0.3c0.1,0.2,0.2,0.3,0.3,0.5c0,0,0-0.1,0-0.1c0,0,0,0.5,0,0c0-0.1,0-0.5,0-0.3c0.1-0.5,0.2-1,0.3-1.5
            c0.3-1.2,0.5-2.3,0.7-3.5c0.7-3.9,1.1-7.8,1.5-11.7c0.1-1-0.9-1.9-1.9-1.9C116.3,22.6,115.6,23.5,115.5,24.5L115.5,24.5z"/>

          <path className="letter outline" d="M127.1,35.1c-0.3,1.6-0.7,3.4-0.2,4.9c0.4,1,1,1.9,2,2.4c1.2,0.7,2.5,0.8,3.8,0.6c1.2-0.2,2.3-0.8,3.3-1.5
            c0.4-0.3,0.7-0.6,0.9-1.1c0.1-0.4,0.1-1-0.2-1.4c-0.5-0.8-1.7-1.3-2.6-0.7c-0.5,0.4-1,0.7-1.6,0.9c0.1-0.1,0.3-0.1,0.4-0.2
            c-0.4,0.2-0.9,0.3-1.4,0.4c0.2,0,0.3,0,0.5-0.1c-0.3,0-0.7,0-1,0c0.2,0,0.3,0,0.5,0.1c-0.3,0-0.6-0.1-0.9-0.2
            c0.1,0.1,0.3,0.1,0.4,0.2c-0.2-0.1-0.3-0.2-0.5-0.2c-0.2-0.1-0.3-0.3,0.1,0.1c-0.1-0.1-0.1-0.1-0.2-0.1c-0.1,0-0.1-0.1-0.1-0.2
            c-0.2-0.2,0.3,0.4,0.1,0.2c-0.1-0.1-0.2-0.3-0.2-0.4c0.1,0.1,0.1,0.3,0.2,0.4c-0.1-0.3-0.2-0.5-0.2-0.8c0,0.2,0,0.3,0.1,0.5
            c-0.1-0.6,0-1.1,0.1-1.7c0,0.2,0,0.3-0.1,0.5c0.1-0.5,0.2-1.1,0.3-1.6c0.1-0.5,0.1-1-0.2-1.4c-0.2-0.4-0.7-0.8-1.1-0.9
            C128.5,33.6,127.2,34.1,127.1,35.1L127.1,35.1z"/>

          <path className="letter outline" d="M131.4,27c5.3-1.1,10.7-1.7,15.9-3.5c1-0.3,1.6-1.3,1.3-2.3c-0.3-0.9-1.3-1.6-2.3-1.3
            c-5.1,1.8-10.6,2.3-15.9,3.5c-1,0.2-1.6,1.4-1.3,2.3C129.4,26.7,130.4,27.2,131.4,27L131.4,27z"/>

    </g>
  </svg>
);