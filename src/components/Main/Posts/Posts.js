import React from "react";
import styles from './posts.module.scss';
import Slider from "./Slider/Slider";

const Posts = () => (
    <section className={styles.container}>
        <div className={styles.sectionTitle}>
            <h2>Recent Posts</h2>
            <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam
                <br/>
                processus dynamicus, qui sequitur mutationem consuetudium</p>
        </div>
        <Slider />
    </section>
);

export default Posts;