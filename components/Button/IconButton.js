
import Button from './Button'


export default function IconButton(props) {
    const { 
       renderIcon,
       ...other 
    } = props

    return (
      <Button
        hasOnlyIcon
        renderIcon={renderIcon}
        {...other}
      />
    )
}