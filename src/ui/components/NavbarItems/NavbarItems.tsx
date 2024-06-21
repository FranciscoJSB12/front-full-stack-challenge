import { ReactNode } from 'react';
import styles from './navbarItems.module.css';

interface Props {
  children: ReactNode;
}

export const NavbarItems = ({ children }: Props) => {
  return <ul className={styles['items-container']}>{children}</ul>;
};
