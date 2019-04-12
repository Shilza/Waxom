import styles from './slide.module.scss';
import React from "react";
import Button from "../../../common/Button";

const Slide = () => (
    <div className={styles.slide}>
        <h1 className={styles.title}>Unique and modern design</h1>
        <span className={styles.description}>Portfolio PSD Template</span>
        <p>
            Nam liber tempor cum soluta nobis eleifend option congue nihil imper
            <br/>
            diet doming id quod mazim placerat facer possim assum
        </p>
        <Button>Get started</Button>
    </div>
);

export default Slide;