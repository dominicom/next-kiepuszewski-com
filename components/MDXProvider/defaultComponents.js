import { 
  Grid, 
  Row, 
  Column 
} from 'layout/Grid'

import { 
  Header,
  Menu, 
  Footer 
} from 'modules';

import Container from 'containers/Container'

import { 
  Card, 
  ImageCard, 
  Tile,
  Image 
} from 'components'

// import Image from 'next/image'

const RowParapraph = ({ children }) => (<Row><p className={styles.paragraph}>{children}</p></Row>)

const components = { 
  Menu, 
  Card, 
  ImageCard, 
  Tile, 
  Grid, 
  Row, 
  Column, 
  Image, 
  Container,
}

export default components;