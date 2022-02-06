import { SWMIcon } from 'react-swm-icon-pack';

const Icon = ({ name, color, set }) => {
  return  <SWMIcon 
            name={name || 'Circle'} 
            color={color || 'currentColor'} 
            set={set || 'oultine'} 
          />
};

export default Icon;