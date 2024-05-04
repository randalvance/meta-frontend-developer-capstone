import styles from './Main.module.css';


import { AppRoutes } from '../../routes';

export function Main() {
  return (
    <main className={styles.main}>
      <AppRoutes />
    </main>
  );
}