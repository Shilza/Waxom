import React from "react";
import styles from './footer.module.scss';
import users from './users.svg';
import coffee from './coffee.svg';
import post from './post.svg';
import like from './like.svg';
import rocket from './rocket.svg';
import Card from "./Card";

const cards = [
    {
        image: users,
        count: 3587,
        text: 'SATISFIED CLIENTS'
    },
    {
        image: coffee,
        count: 207,
        text: 'CUPS OF COFFEE'
    },
    {
        image: post,
        count: 2500,
        text: 'BLOG POSTS'
    },
    {
        image: like,
        count: 873,
        text: 'LIKES'
    },
    {
        image: rocket,
        count: 900,
        text: 'WE LAUNCHED'
    }
];

const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.container}>
            {
                cards.map(card => <Card {...card}/>)
            }
        </div>
    </div>
);

export default Footer;
