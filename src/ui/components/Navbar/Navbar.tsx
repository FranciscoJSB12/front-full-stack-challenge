import { useState } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { MenuOverlay } from '../MenuOverlay';
import { NavbarItems } from '../NavbarItems';
import { NavbarLogo } from '../NavbarLogo';
import styles from './navbar.module.css';
import { SignInBtn } from '../SignInBtn';

export const Navbar = () => {
  const [isMenuOverlyOpen, setIsMenuOverly] = useState(false);

  const clickMenuHandler = () => {
    setIsMenuOverly(prev => !prev);
  };

  return (
    <>
      <nav className={styles['navbar']}>
        <div className={styles['blocks-container']}>
          <div className={styles['blocks-inner-container']}>
            <BurgerMenu clickMenuHandler={clickMenuHandler} />
            <NavbarLogo />
          </div>
          <NavbarItems />
          <SignInBtn />
        </div>
        <MenuOverlay isOverlayMenuOpen={isMenuOverlyOpen} />
      </nav>
    </>
  );
};
