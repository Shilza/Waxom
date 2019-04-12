import React from "react";
import styles from './footer.module.scss';

const Card = ({image, count, text}) => (
    <div className={styles.card}>
        <img src={image} alt="icon"/>
        <span>{count}</span>
        <p>{text}</p>
        <div className={styles.subline}/>
    </div>
);

export default Card;