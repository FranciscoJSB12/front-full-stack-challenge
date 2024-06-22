import { IoSearchSharp } from 'react-icons/io5';
import styles from './searchInput.module.css';

export const SearchInput = () => {
  return (
    <label className={styles['container']}>
      <IoSearchSharp className={styles['search-icon']} />
      <input
        type='text'
        placeholder='Search'
        className={styles['input']}
      />
    </label>
  );
};
