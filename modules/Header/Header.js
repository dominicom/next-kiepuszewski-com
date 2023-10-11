import { useState, useEffect, useCallback } from 'react';
// import { useHover } from 'utils/hooks';

import { cn } from 'utils/helpers';
// import { HomeButton } from './HomeButton';
// import { MenuItem } from 'components/Menu';

import { HomeButton } from 'components/HomeButton';
import { HeaderItem } from 'modules/Header';

import styles from './Header.module.scss';

const Header = ({ 
    children,
    global, 
    // inactive,
    // active,
    // released,
    changeGlobal, 
    changePage, 
    mobile, 
    // menu, 
    toggleMenu,
    isHover,
    isHoverHomeButton 
  }) => {
    
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(event => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
       window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, []);
  // const [hoverRef, isHovered] = useHover();

  // useEffect(
  //    () => {
  //        isHoverHomeButton(isHovered)
  //    },
  //    [isHovered]
  // );

  const classes = {
    root: cn(styles.module, 'Header-module'), // ToDo -> context and possible classes: isHover.homeButton && !global && "hovered", "Header", "Header-container"
    navigationModule: cn(styles.container, 'Header--navigation-module')
  }

  const handleHomeButtonClick = global => {
    if (!global) return changeGlobal("released")
    // if (!global && !mobile) return changeGlobal("released")
    if (global !== null && !mobile) {
      changeGlobal(null)
      changePage("home");
    }

    // if (!global && mobile) {
    //   changeGlobal("released")
    //   toggleMenu();
    // }
    // if (released && mobile && !menu) {
    //   changeGlobal(!global)
    //   toggleMenu();
    // }
    // if (mobile && !menu) {
    //   changeGlobal("released")
    //   toggleMenu();
    // }


    // if (mobile && menu) {
    //   changeGlobal(null)
    //   toggleMenu();
    // }

    if (mobile) {
      toggleMenu();
    }
  }
  
  return(
    <header className={classes.root} >
      <div className={styles.home}>
        <HeaderItem>
          <HomeButton />
        </HeaderItem>
      </div>


      <HeaderGlobalModule />

        {!global && (
          <div 
            className="FocusArea" 
            // ref={hoverRef} 
            // onClick={() => handleHomeButtonClick(global)} 
          />)}

        {/* {mobile && <div><MenuItem hash={'work'} /></div>} */}

        <div className={classes.navigationModule}>
          {children}
        </div>


    </header>
  )
}

export default Header;

// const HeaderItem = ({ children }) => (
//   <div className={styles.item}>
//     {children}
//   </div>
// )


const HeaderGlobalModule = () => (
  <div className={styles.globalModule} />
)