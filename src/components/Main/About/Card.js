import React from "react";
import styles from './about.module.scss'

const Card = ({ icon, title }) => (
    <div className={styles.card}>
        <img src={icon} alt="about"/>
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
        <div className={styles.subline}/>
    </div>
);

export default Card;