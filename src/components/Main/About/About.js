import React from "react";
import Card from "./Card";
import webDesign from './edit.svg';
import development from './layers.svg';
import customization from './gear.svg';
import marketing from './money-bag.svg';
import styles from './about.module.scss';

const cards = [
    {
        icon: webDesign,
        title: 'Web & App design'
    },
    {
        icon: development,
        title: 'Development'
    },
    {
        icon: customization,
        title: 'Customization'
    },
    {
        icon: marketing,
        title: 'Marketing'
    },
];

const About = () => (
    <section className={styles.container}>
        {
            cards.map(card => <Card icon={card.icon} title={card.title}/>)
        }
    </section>
);

export default About;