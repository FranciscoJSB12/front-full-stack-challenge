import { FaShoppingCart } from 'react-icons/fa';
import styles from './shoppingCart.module.css';

interface Props {
  text: string;
  isInOverlay?: boolean;
}

export const ShoppingCart = ({ text, isInOverlay }: Props) => {
  return (
    <li className={`${isInOverlay ? styles['overly-item'] : styles['item']}`}>
      <p
        className={`${
          isInOverlay ? styles['overly-item-text'] : styles['item-text']
        }`}
      >
        <span>
          <FaShoppingCart className={styles['item-icon']} />
        </span>
        <span>{text}</span>
      </p>
    </li>
  );
};
