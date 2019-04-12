import React from "react";
import styles from './navigation.module.scss';
import search from './search.svg';
import cart from './cart.svg';

const Navigation = () => (
    <nav>
        <ul className={styles.navigation}>
            <li>Home</li>
            <li>About us</li>
            <li>Portfolio</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Shortcodes</li>
            <li>Contact</li>
            <li>
                <img className={styles.icon} src={cart} alt={'cart'}/>
                <img className={styles.icon} src={search} alt={'search'}/>
            </li>
        </ul>
    </nav>
);

export default Navigation;