import {
  useEffect,
  useState,
  useRef,
  useContext,
  useMemo,
  Suspense
} from 'react';

import { Row } from 'layout'
import { ClickableTile, StaticTile, Tile } from 'components';

import styles from './BumperSection.module.scss'

/*
  HOC with functional components
  https://www.robinwieruch.de/react-higher-order-components/
*/

const BumperSection = ({ block, children, onClick, href, glyph, spacing, row }) => {
  const bumpRef = useRef(null);
  const [hovered, setHovered] = useState();
  const scrollSettings = {
    behavior: 'smooth',
    block: block // start, center, end, or nearest. Defaults to start
  };
  const executeScroll = () => bumpRef.current.scrollIntoView(scrollSettings);
  // run this function from an event handler or an effect to execute scroll
  const eventHandlers = useMemo(
    () => ({
      onMouseOver() {
        setHovered(true);
      },
      onMouseOut() {
        setHovered(false);
      }
    }),
    []
  );
  useEffect(() => {
    if (hovered) {
      executeScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered]);

  const classes = {
    root: ['BumperSection', row && 'fbr--row', spacing && 'card--spacing', hovered ? 'hover' : ''].join(' ').trim(),
    container: ['BumperSection-container'].join(' ').trim()
  };




  let BumperSectionElement;

  if (!children) {
    BumperSectionElement = (

      <ClickableTile>
        <Glyph type={glyph} />
        {/* <p className="responsive-heading-03">Poor results?</p> */}
        <div>Load more</div>
      </ClickableTile>
    ) 
  } else {
    BumperSectionElement = <>{children}</>
  }

  return (
    <div 
      className={classes.root}
      role="button"
      onClick={onClick}
      {...eventHandlers}
      ref={bumpRef}
    >
      <div className={classes.container}>
        
          {BumperSectionElement}
        
      </div>
    </div>
  );
};

export default BumperSection;

BumperSection.defaultProps = {
  block: 'start',
  glyph: '↓',
  spacing: true,
  row: true
}

const Glyph = ({ type }) => {
  return <div className="glyph">{type || '↑'}</div>;
};
