import React from "react";
import styles from './content.module.scss';

const recent = [
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    'Diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
    'Claritas est etiam processus dynamicus, qui sequitur mutationem per seacula quarta decima'
];

const RecentPosts = () => (
    <section>
        <h3 className={styles.title}>Recent Posts</h3>
        {
            recent.map(post => <Post text={post}/>)
        }
    </section>
);

const Post = ({text}) => (
    <div className={styles.postContainer}>
        <p className={styles.postText}>
            <span className={styles.data}>Data</span>
            <span>{text}</span>
        </p>
        <div className={styles.subline}/>
    </div>
);

export default RecentPosts;