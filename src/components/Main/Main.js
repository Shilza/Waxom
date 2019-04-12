import React from "react";
import Slider from "./Slider/Slider";
import About from "./About/About";
import Ideas from "./Ideas/Ideas";
import Projects from "./Projects/Projects";
import Video from "./Video/Video";
import Mobile from "./Mobile/Mobile";
import Posts from "./Posts/Posts";
import Logos from "./Logos/Logos";

const Main = () => (
    <main>
        <Slider/>
        <About/>
        <Ideas/>
        <Projects/>
        <Video/>
        <Mobile/>
        <Posts/>
        <Logos/>
    </main>
);

export default Main;