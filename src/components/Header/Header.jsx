import logo from '../../assets/Logo.svg';

import  styles from './Header.module.css';

import { Nav } from '../Nav';

export function Header() {
  return (
    <header className={styles.header}>
        <img src={logo} alt="logo" />
        <Nav />
    </header>
  );
}