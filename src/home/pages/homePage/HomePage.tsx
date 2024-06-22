import { Layout } from '../../../ui/components';
import { GameSelector } from '../../components';
import { SearchInput } from '../../components/SearchInput';
import styles from './homePage.module.css';

export const HomePage = () => {
  return (
    <Layout>
      <div className={styles['container']}>
        <h1>Condimentum consectetur</h1>
        <div className={styles['inputs-container']}>
          <GameSelector />
          <SearchInput />
        </div>
      </div>
    </Layout>
  );
};
