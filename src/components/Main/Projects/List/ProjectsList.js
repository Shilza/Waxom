import React from "react";
import Card from "./Card/Card";
import project1 from './project-1.jpg';
import project2 from './project-2.jpg';
import project3 from './project-3.jpg';
import project4 from './project-4.jpg';
import project5 from './project-5.jpg';
import project6 from './project-6.jpg';
import styles from './list.module.scss';

const cards = [
    {
        title: 'Claritas Etiam Processus',
        text: 'Photography. Nature',
        image: project1
    },
    {
        title: 'Quam Nutamus Farum',
        text: 'Graphic Design, Mock-Up',
        image: project2
    },
    {
        title: 'Usus Legentis Videntur',
        text: 'Photography. Holiday',
        image: project3
    },
    {
        title: 'Claritas Etiam Processus',
        text: 'Photography. Nature',
        image: project4
    },
    {
        title: 'Quam Nutamus Farum',
        text: 'Graphic Design, Mock-Up',
        image: project5
    },
    {
        title: 'Usus Legentis Videntur',
        text: 'Photography. Holiday',
        image: project6
    }
];

const ProjectsList = () => (
    <article className={styles.container}>
        {
            cards.map(card => <Card {...card}/>)
        }
    </article>
);

export default ProjectsList;