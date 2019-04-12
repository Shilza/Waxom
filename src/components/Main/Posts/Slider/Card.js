import React from "react";
import styles from './slider.module.scss';

const Card = ({ image }) => (
    <div className={styles.card}>
        <img src={image} alt="post"/>
        <h3 className={styles.cardTitle}>Lorem ipsum dolor sit amet</h3>
        <p className={styles.description}>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium</p>
        <span className={styles.readMore}>Read More</span>
        <div className={styles.data}>
            <div className={styles.day}>30</div>
            <div className={styles.month}>Sep.</div>
        </div>
    </div>
);

export default Card;