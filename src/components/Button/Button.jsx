import PropTypes from 'prop-types';
import styles from './styles.module.css';

export function Button({ children }) {
    return (
        <button className={styles.button}>{children}</button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
};
