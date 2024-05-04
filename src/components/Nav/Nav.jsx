import styles from './Nav.module.css';

export function Nav() {
    return (
        <nav>
            <ul className={styles.navbar}>
                <li>Home</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    );
}