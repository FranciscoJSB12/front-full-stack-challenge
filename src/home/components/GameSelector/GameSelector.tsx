import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { GiBroadsword } from 'react-icons/gi';
import styles from './gameSelector.module.css';

const games = [
  {
    value: 'Game 1',
  },
  {
    value: 'Game 2',
  },
  {
    value: 'Game 3',
  },
  {
    value: 'Game 4',
  },
  {
    value: 'Game 5',
  },
];

export const GameSelector = () => {
  const [seletedOption, setSetSelectedOption] = useState('Select a game');
  const [isOptionListOpen, setIsOptionListOpen] = useState(false);

  const selectOptionHandler = (option?: string) => {
    setIsOptionListOpen(prev => !prev);
    if (!option) {
      return;
    }
    setSetSelectedOption(option);
  };

  return (
    <div>
      <div className={styles['select-menu']}>
        <div
          className={styles['select']}
          onClick={() => selectOptionHandler()}
        >
          <p>
            <span>
              <GiBroadsword className={styles['select-sword']} />
            </span>
            <span className={styles['select-text']}>{seletedOption}</span>
          </p>
          <p>
            <IoMdArrowDropdown
              className={`${
                isOptionListOpen
                  ? `${styles['select-arrow']} ${styles['select-arrow--rotated']}`
                  : styles['select-arrow']
              }`}
            />
          </p>
        </div>
        <div
          className={`${
            isOptionListOpen
              ? `${styles['options-list']} ${styles['options-list--active']}`
              : styles['options-list']
          }`}
        >
          {games.map(game => (
            <p
              key={game.value}
              className={styles['option']}
              onClick={() => selectOptionHandler(game.value)}
            >
              {game.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
