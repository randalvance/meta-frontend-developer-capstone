import { Button } from '../Button';
import styles from './styles.module.css';
import imageRestaurantFood from '../../assets/restaurant-food.jpg';

export function CallToAction() {
    return (
        <section className={styles.cta}>
            <div className={styles.innerContent}>
                <div className={styles.upper}>
                    <h1>Little Lemon</h1>
                    <h2 className="inverse">Chicago</h2>
                    <p className="inverse">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Button>Reserve a Table</Button>
                </div>
                <div className={styles.lower}>
                    <img className={styles.restaurantFood} src={imageRestaurantFood} alt="Restaurant Food" />
                </div>
            </div>
        </section>
    );
}