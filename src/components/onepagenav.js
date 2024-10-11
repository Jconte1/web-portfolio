import React from "react";
import Link from 'next/link'; // Use Next.js Link
import styles from './onepagenav.module.css';  // Adjust according to your path

function OnePageNav() {
    return (
        <nav className={styles.navContainer}>
            <ul>
                <li><Link href="#parallax" scroll={true}>Intro</Link></li>
                <li><Link href="#hours" scroll={true}>Contact Details</Link></li>
                <li><Link href="#reviews" scroll={true}>Skills & Expertise</Link></li>
                <li><Link href="#cards" scroll={true}>Latest Projects</Link></li>
                <li><Link href="#timeline" scroll={true}>My Timeline</Link></li>
                <li><Link href="#blog" scroll={true}>About Me </Link></li>
            </ul>
        </nav>
    );
}

export default OnePageNav;
