import { Layout } from '../../../ui/components';
import { GameSelector, SearchInput, CardItem } from '../../components';
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
        <div>
          <CardItem />
        </div>
      </div>
    </Layout>
  );
};
