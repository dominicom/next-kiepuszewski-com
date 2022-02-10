import { SWMIcon } from 'react-swm-icon-pack';

import parse from "html-react-parser";
import feather from "feather-icons";



// export default function Icon({ name = "circle", className, stroke }) {
//   const iconName = name || "circle";

//   const IconComponent = feather.icons[name].toSvg({
//     class: className || "",
//     "stroke-width": stroke || 1,
//     color: "currentColor",
//     width: 16,
//     height: 16
//   });

//   return parse(IconComponent);
// }




export default function Icon({ className, name, stroke, size, color, set }) {
  return(
    <span className={className || 'icon'}>
      <SWMIcon
        name={name || 'Circle'} 
        strokeWidth={stroke || 1}
        size={size || 24}
        color={color || 'currentColor'} 
        set={set || 'oultine'} 
      />
    </span>

  )  

};
