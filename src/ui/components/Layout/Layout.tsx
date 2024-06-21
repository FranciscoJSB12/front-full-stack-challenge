import { ReactNode } from 'react';
import styles from './layout.module.css';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <main className={styles['main']}>
      <section className={styles['section']}>{children}</section>
    </main>
  );
};
