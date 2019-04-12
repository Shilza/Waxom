import React from "react";
import styles from './ideas.module.scss';
import background from './ideasBackground.jpg';
import Button from "../../common/Button";

const Ideas = () => (
    <section className={styles.container}>
        <div className={styles.sectionTitle}>
            <h2>Waxom is Realization of your Ideas</h2>
            <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
                <br/>
                etiam processus dynamicus, qui sequitur mutationem consuetudium</p>
        </div>
        <img src={background} alt="background"/>
        <div className={styles.footer}>
            <Button>purchase now</Button>
        </div>
    </section>
);

export default Ideas;