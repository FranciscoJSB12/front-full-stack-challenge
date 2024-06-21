import { RxHamburgerMenu } from 'react-icons/rx';
import styles from './burgerMenu.module.css';

export const BurgerMenu = () => {
  return (
    <div className={styles['menu-container']}>
      <RxHamburgerMenu className={styles['menu-icon']} />
    </div>
  );
};
