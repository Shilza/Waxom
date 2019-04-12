import React from "react";
import styles from './projects.module.scss';

const topics = [
    'All',
    'Web design',
    'Mobile App',
    'Illustration',
    'Photography'
];

const Navigation = () => (
    <nav>
        <ul className={styles.navigation}>
            {
                topics.map(text => <li><Item text={text}/></li>)
            }
        </ul>
    </nav>
);

const Item = ({text}) => (
    <button className={styles.navigationButton}>{text}</button>
);

export default Navigation;