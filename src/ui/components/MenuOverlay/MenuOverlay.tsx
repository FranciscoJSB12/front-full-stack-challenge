import { ReactNode } from 'react';
import styles from './menuOverly.module.css';

interface Props {
  isOverlayMenuOpen: boolean;
  children: ReactNode;
}

export const MenuOverlay = ({ isOverlayMenuOpen, children }: Props) => {
  return (
    <ul
      className={`${styles['overlay-container']} ${
        isOverlayMenuOpen ? styles['overlay-container--active'] : ''
      }`}
    >
      {children}
    </ul>
  );
};
