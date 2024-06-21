import { FaUser } from 'react-icons/fa';
import styles from './signInBtn.module.css';

export const SignInBtn = () => {
  return (
    <a className={styles['sign-in-btn']}>
      SIGN IN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FaUser />
    </a>
  );
};
