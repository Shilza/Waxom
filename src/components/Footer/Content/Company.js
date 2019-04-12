import React from "react";
import logo from './logo.png';
import styles from './content.module.scss';

const Company = () => (
    <section>
        <img src={logo} alt="logo"/>
        <p className={styles.logoText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci suscipit lobortis claritatem.</p>
        <span className={styles.readMore}>Read More</span>
    </section>
);

export default Company;