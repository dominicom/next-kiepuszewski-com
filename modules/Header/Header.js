//import { useEffect } from 'react';
// import { useHover } from 'utils/hooks';

// import { cn } from 'utils/helpers';
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
    
  // const [hoverRef, isHovered] = useHover();

  // useEffect(
  //    () => {
  //        isHoverHomeButton(isHovered)
  //    },
  //    [isHovered]
  // );

  const classes = {
    //root: cn("Header", "Header-container", isHover.homeButton && !global && "hovered"),
    navigationModule: 'Header--navigation-module',
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
    <header className={styles.module} >
      <HeaderItem>
        <HomeButton />
      </HeaderItem>
      <HeaderGlobalModule />
{/* 
        <HomeButton 
          

          to={global ? { 
            pathname: `/`, 
            state: { page: `home` }
          } : { 
            pathname: `/content`, 
            state: { page: `content` }
          }}


          to={global ? { 
            pathname: `/`, 
            state: { page: `home` }
          } : null}

          to={global && !mobile ? { 
            pathname: `/`, 
            state: { page: `home` }
          } : null}

          onClick={() => handleHomeButtonClick(global)}
        /> 
*/}

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