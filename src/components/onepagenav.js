import React, { useState } from "react";
import Link from 'next/link'; // Use Next.js Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './onepagenav.module.css'; // Adjust according to your path

function OnePageNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navContainer}>
            {/* Hamburger Icon for Mobile */}
            <button className={styles.hamburger} onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>

            {/* Conditional rendering for the mobile menu */}
            {isOpen && (
                <>
                    <ul className={`${styles.navList} ${isOpen ? styles.navOpen : ''}`}>
                        <li><Link href="#parallax" scroll={true}>Intro</Link></li>
                        <li><Link href="#hours" scroll={true}>Contact Details</Link></li>
                        <li><Link href="#reviews" scroll={true}>Skills & Expertise</Link></li>
                        <li><Link href="#cards" scroll={true}>Latest Projects</Link></li>
                        <li><Link href="#timeline" scroll={true}>My Timeline</Link></li>
                        <li><Link href="#blog" scroll={true}>About Me</Link></li>
                    </ul>

                    {/* Overlay for mobile when menu is open */}
                    <div className={styles.overlay} onClick={toggleMenu}></div>
                </>
            )}
        </nav>
    );
}

export default OnePageNav;
