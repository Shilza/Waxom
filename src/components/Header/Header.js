import React from "react";
import styles from './header.module.scss'
import logo from './logo.png';
import Navigation from "./Navigation/Navigation";
import MediaQuery from 'react-responsive';
import SideMenu from "./SideMenu/SideMenu";

const Header = () => (
    <header className={styles.wrapper}>
        <div className={styles.header}>
            <a href='/' className={styles.logo}>
                <img src={logo} alt='logo'/>
            </a>
            <div className={styles.navigation}>
                <MediaQuery minWidth={1024}>
                    {(matches) => {
                        return matches ? <Navigation/> : <SideMenu/>
                    }}
                </MediaQuery>
            </div>
        </div>
    </header>
);

export default Header;