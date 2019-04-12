import React from "react";
import styles from './mobile.module.scss';
import phone from './prone.jpg';
import Footer from "./Footer/Footer";

const options = [
    'Nam liber tempor cum soluta nobis eleifend option',
    'Option congue nihil imperdiet doming id quod mazim placerat facer',
    'Eodem modo typi, qui nunc nobis videntur parum futurum',
    'Investigationes demonstraverunt lectores'
];

const Mobile = () => (
    <section className={styles.section}>
        <div className={styles.container}>
            <img src={phone} alt="Phone"/>
            <div className={styles.description}>
                <h2>Excellent for Mobile Devices</h2>
                <p>Qisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea
                    commodo consequat. Investigationes demonstraverunt
                    lectores legere me lius quod ii legunt saepius claritas.
                    Eodem modo typi, qui nunc nobis videntur parum clari,
                    fiant sollemnes in futurum.</p>
                <div>
                    {
                        options.map(option => <Option text={option} />)
                    }
                </div>
            </div>
        </div>
        <Footer />
    </section>
);

const Option = ({ text }) => (
    <p className={styles.option}>{text}</p>
);

export default Mobile;