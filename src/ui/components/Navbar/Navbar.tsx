import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { NavbarItems } from '../NavbarItems';
import { NavbarLogo } from '../NavbarLogo';
import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <>
      <nav className={styles['navbar']}>
        <div className={styles['blocks-container']}>
          <NavbarLogo />
          <BurgerMenu />
          <NavbarItems />
        </div>
      </nav>
    </>
  );
};
