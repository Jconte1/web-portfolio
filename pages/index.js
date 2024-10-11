import React from "react";
import ParallaxIntro from '../src/components/ParallaxComponent';
import HoursComponent from "@/components/hoursComponent";
import Reviews from '../src/components/Reviews';
import Cards from "@/components/Cards";
import OnePageNav from "@/components/onepagenav";
import Timeline from "@/components/timeline";
import styles from "@/components/Home.module.css";  
import BlogWithGallery from "@/components/BlogWithGallery";

export default function Home() {
    return (
        <div>
            <OnePageNav />
             <div id="parallax">
                <ParallaxIntro />
            </div>
            <div id="hours">
                <HoursComponent />
            </div>
            <div id="reviews">
                <Reviews />
            </div>
            <div id="cards">
                <Cards />
            </div>
            <div id="timeline" className={`${styles.pageContainer} sm:${styles.textLarge}`}>
                <Timeline defaultColor="bg-cyan-500" />
            </div>
            <div id="blog" className={styles.blogContainer}>
                <BlogWithGallery />
            </div>
        </div>
    );
}