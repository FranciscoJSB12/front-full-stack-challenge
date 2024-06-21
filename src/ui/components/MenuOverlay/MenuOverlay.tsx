import styles from './menuOverly.module.css';

interface Props {
  isOverlayMenuOpen: boolean;
}

export const MenuOverlay = ({ isOverlayMenuOpen }: Props) => {
  return (
    <div
      className={`${styles['overlay-container']} ${
        isOverlayMenuOpen ? styles['overlay-container--active'] : ''
      }`}
    ></div>
  );
};
