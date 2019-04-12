import styles from './sliderNavigator.module.scss';
import React from "react";
import leftArrow from './left-arrow.svg';
import rightArrow from './right-arrow.svg';

const SliderNavigator = ({onLeft, onRight}) => (
    <div className={styles.container}>
        <button onClick={onLeft} className={styles.arrowButton}>
            <img src={leftArrow} alt='left arrow'/>
        </button>
        <button onClick={onRight} className={styles.arrowButton}>
            <img src={rightArrow} alt='right arrow'/>
        </button>
    </div>
);

export default SliderNavigator;