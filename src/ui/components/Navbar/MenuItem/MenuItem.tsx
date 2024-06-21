import { IoIosArrowDown } from 'react-icons/io';
import styles from './menuItem.module.css';

interface Props {
  text: string;
  isInOverlay?: boolean;
}

export const MenuItem = ({ text, isInOverlay }: Props) => {
  return (
    <li className={`${isInOverlay ? styles['overly-item'] : styles['item']}`}>
      <p
        className={`${
          isInOverlay ? styles['overly-item-text'] : styles['item-text']
        }`}
      >
        <span>{text}</span>
        <span>
          <IoIosArrowDown className={styles['item-icon']} />
        </span>
      </p>
    </li>
  );
};
