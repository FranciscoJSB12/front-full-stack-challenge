import { useState, useCallback } from 'react';
import { BurgerMenu } from './BurgerMenu';
import { MenuOverlay } from './MenuOverlay';
import { NavbarItems } from './NavbarItems';
import { NavbarLogo } from './NavbarLogo';
import { SignInBtn } from './SignInBtn';
import { MenuItem } from './MenuItem';
import { ShoppingCart } from './ShoppingCart';
import { NAVLINKS } from '../../../constants/navlinks';
import styles from './navbar.module.css';

export const Navbar = () => {
  const [isMenuOverlyOpen, setIsMenuOverly] = useState(false);

  const clickMenuHandler = () => {
    setIsMenuOverly(prev => !prev);
  };

  const renderNavItems = useCallback((isInOverlay?: boolean) => {
    return NAVLINKS.map(navlink => (
      <MenuItem
        key={navlink.name}
        text={navlink.name}
        isInOverlay={isInOverlay}
      />
    ));
  }, []);

  return (
    <>
      <nav className={styles['navbar']}>
        <div className={styles['blocks-container']}>
          <div className={styles['blocks-inner-container-left']}>
            <BurgerMenu clickMenuHandler={clickMenuHandler} />
            <NavbarLogo />
            <NavbarItems>{renderNavItems()}</NavbarItems>
          </div>
          <div className={styles['blocks-inner-container-right']}>
            <ul className={styles['most-inner-container']}>
              <MenuItem text='USD' />
              <ShoppingCart text='Cart (5)' />
            </ul>
            <SignInBtn />
          </div>
        </div>
        <MenuOverlay isOverlayMenuOpen={isMenuOverlyOpen}>
          <ShoppingCart
            text='Cart (5)'
            isInOverlay
          />
          <MenuItem
            text='USD'
            isInOverlay
          />
          {renderNavItems(true)}
        </MenuOverlay>
      </nav>
    </>
  );
};
