import React from "react";
import styles from './video.module.scss';
import playButton from './play-button.svg';

const Video = () => (
    <section className={styles.container}>
        <img src={playButton} alt="play"/>
        <h3>Waxom Video Presentation</h3>
        <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt
            <br/>
            saepius, qui sequitur mutationem consuetudium</p>
        <span>03:26</span>
    </section>
);

export default Video;