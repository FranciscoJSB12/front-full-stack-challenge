import styles from './cardItem.module.css';

export const CardItem = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <div>
          <p>
            <span className={styles['green-ball']}></span>
            &nbsp;
            <span className={styles['on-sale-text']}>ON SALE</span>
          </p>
          <p className={styles['in-stock-text']}>In Stock</p>
        </div>
        <input
          className={styles['amount-input']}
          type='number'
          step={1}
          min='1'
          placeholder='1'
        />
      </div>
      <div>
        <img
          src='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/132.png'
          alt='Pokemon-Ditto'
          className={styles['image']}
        />
        <p className={styles['character-name']}>Pokemon</p>
        <p className={styles['price']}>
          <span>{'$350'}</span>&nbsp;&nbsp;
          <span className={styles['old-amount']}>{'$500'}</span>
        </p>
        <p className={styles['description']}>
          Lorem ipsum dolor sit amet consectetur, adipisicing
        </p>
      </div>
    </div>
  );
};
