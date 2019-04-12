import React from "react";
import styles from './card.module.scss';
import link from './link.svg';
import search from './search.svg';

const Card = ({title, text, image}) => (
    <section className={styles.card}>
        <div className={styles.thumb}>
            <img src={image} alt="main"/>
        </div>
        <div className={styles.cardInfo}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
        <div className={styles.icons}>
            <img src={link} alt="link"/>
            <img src={search} alt="search"/>
        </div>
    </section>
);

export default Card;