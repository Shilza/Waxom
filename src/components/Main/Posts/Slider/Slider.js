import React from "react";
import post1 from './post-1.jpg';
import post2 from './post-2.jpg';
import post3 from './post-3.jpg';
import Card from "./Card";
import styles from './slider.module.scss';

const cards = [post1, post2, post3];

const Slider = () => (
    <div className={styles.slider}>
        {
            cards.map(card => <Card image={card}/>)
        }
    </div>
);

export default Slider;