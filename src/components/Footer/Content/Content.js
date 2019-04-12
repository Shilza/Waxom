import React from "react";
import styles from './content.module.scss';
import RecentPosts from "./RecentPosts";
import Twitter from "./Twitter";
import Dribble from "./Dribble/Dribble";
import Company from "./Company";

const Content = () => (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <Company/>
            <RecentPosts/>
            <Twitter/>
            <Dribble/>
        </div>
    </div>
);

export default Content;