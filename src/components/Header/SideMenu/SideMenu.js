import React, {useState} from "react";
import {Drawer} from "react-pretty-drawer";
import Hamburger from "./Hamburger/Hamburger";
import styles from './sideMenu.module.scss';
import Navigation from "../Navigation/Navigation";

const SideMenu = () => {

    let [visible, setVisible] = useState(false);

    const closeDrawer = () => setVisible(false);

    return (
        <>
            <Drawer
                visible={visible}
                onClose={closeDrawer}
            >
                <Body/>
            </Drawer>
            <Hamburger onClick={() => setVisible(true)}/>
        </>
    );
};

const Body = () => (
    <div className={styles.body}>
        <Navigation/>
    </div>
);

export default SideMenu;