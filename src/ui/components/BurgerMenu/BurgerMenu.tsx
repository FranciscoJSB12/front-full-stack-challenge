import { RxHamburgerMenu } from 'react-icons/rx';
import styles from './burgerMenu.module.css';

interface Props {
  clickMenuHandler: () => void;
}

export const BurgerMenu = ({ clickMenuHandler }: Props) => {
  return (
    <div
      className={styles['menu-container']}
      onClick={clickMenuHandler}
    >
      <RxHamburgerMenu className={styles['menu-icon']} />
    </div>
  );
};
