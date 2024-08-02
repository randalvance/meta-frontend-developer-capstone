import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

export function Nav() {
    return (
        <nav>
            <ul className={styles.navbar}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}