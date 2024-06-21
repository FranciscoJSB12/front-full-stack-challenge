import styles from './navbarLogo.module.css';

export const NavbarLogo = () => {
  return (
    <figure>
      <img
        src='/src/assets/chicks-gold-logo.png'
        alt='Chicks Gold Logo'
        className={styles['logo']}
      />
      <div className={styles['vertical-item']}></div>
    </figure>
  );
};
