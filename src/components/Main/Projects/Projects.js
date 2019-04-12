import React from "react";
import styles from './projects.module.scss';
import Navigation from "./Navigation";
import ProjectsList from "./List/ProjectsList";
import Button from "../../common/Button";

const Projects = () => (
    <section className={styles.container}>
        <div className={styles.sectionTitle}>
            <h2>Our Latest Project</h2>
            <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
                <br/>
                etiam processus dynamicus, qui sequitur mutationem consuetudium</p>
            <Navigation/>
            <ProjectsList/>
            <Button>Load more</Button>
        </div>
    </section>
);

export default Projects;