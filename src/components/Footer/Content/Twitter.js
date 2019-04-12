import React from "react";
import styles from './content.module.scss';

const Twitter = () => (
    <section>
        <h3 className={styles.title}>Our Twitter</h3>
        <div className={styles.postContainer}>
            <p className={styles.postText}>
                <span className={styles.textMark}>@waxon</span>
                Cum soluta nobis eleifend option congue nihil imperdiet doming
            </p>
            <span className={styles.data}>Time</span>
            <div className={styles.subline}/>
        </div>

        <div className={styles.postContainer}>
            <p className={styles.postText}>
                Mirum est <span className={styles.textMark}>#envato</span> notare quam
                littera gothica, quam nunc putamus
                parum anteposuerit litterarum
            </p>
            <span className={styles.data}>Time</span>
            <div className={styles.subline}/>
        </div>

        <div className={styles.postContainer}>
            <p className={styles.postText}>
                Soluta nobis option
            </p>
            <span className={styles.data}>Time</span>
            <div className={styles.subline}/>
        </div>
    </section>
);

export default Twitter;