import React from "react";
import styles from './logos.module.scss';
import logo1 from './logo-01.png';
import logo2 from './logo-02.png';
import logo3 from './logo-03.png';
import logo4 from './logo-04.png';

const logos = [logo1, logo2, logo3, logo4];

const Logos = () => (
    <section className={styles.container}>
        {
            logos.map(logo => <img className={styles.logo} alt="logo" src={logo}/>)
        }
    </section>
);

export default Logos;