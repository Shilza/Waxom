import React from "react";
import styles from './copyright.module.scss';

const Copyright = () => (
    <div className={styles.container}>
        <ul className={styles.list}>
            <li>
                <span className={styles.copyright}>Copyright</span>
                © Waxom
            </li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            <li>Support</li>
        </ul>
    </div>
);

export default Copyright;