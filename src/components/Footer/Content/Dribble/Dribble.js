import React from "react";
import styles from '../content.module.scss';
import widget1 from './widget-1.jpg';
import widget2 from './widget-2.jpg';
import widget3 from './widget-3.jpg';
import widget4 from './widget-4.jpg';


const images = [widget1, widget2, widget3, widget4];

const Dribble = () => (
    <section>
        <h3 className={styles.title}>Dribble Widget</h3>
        <div className={styles.dribbleContainer}>
            {
                images.map(image => <img src={image} alt="widget"/>)
            }
        </div>
    </section>
);

export default Dribble;