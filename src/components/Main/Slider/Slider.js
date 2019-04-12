import React, {useEffect, useRef} from "react";
import styles from './section.module.scss';
import SliderNavigator from "./Navigator/SliderNavigator";
import Slide from "./Slide/Slide";
import scrollSnapPolyfill from 'css-scroll-snap-polyfill';
import MediaQuery from "react-responsive";

const Slider = () => {
    let sliderRef = useRef();

    useEffect(() => {
        if(document.body.clientWidth < 768)
            scrollSnapPolyfill();
    }, []);

    const scroll = options => {
        sliderRef.current.scrollBy({[options.direction]: options.width, behavior: 'smooth'});
    };

    const getSliderWidth = () => parseInt(getComputedStyle(sliderRef.current).width);

    const left = () => {
        scroll({direction: 'left', width: -getSliderWidth()});
    };

    const right = () => {
        scroll({direction: 'left', width: getSliderWidth()});
    };

    return (
        <div className={styles.sliderContainer}>
            <MediaQuery minWidth={768}>
                <SliderNavigator onLeft={left} onRight={right}/>
            </MediaQuery>
            <section ref={sliderRef} className={styles.slider}>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
            </section>
        </div>
    );
};

export default Slider;