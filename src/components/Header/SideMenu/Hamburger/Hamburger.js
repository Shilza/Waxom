import React from "react";
import styles from './hamburger.module.scss';

const Hamburger = ({ onClick }) => (
    <div className={styles.menu} onClick={onClick}>
        <div/>
        <div/>
        <div/>
    </div>
);

export default Hamburger;