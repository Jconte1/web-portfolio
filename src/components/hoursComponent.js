import React from 'react';
import styles from './HoursComponent.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

function HoursComponent() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Contact Details</h2>
            <div className={styles.gridContainer}>
                <div className={styles.gridWrapper}>

                    <div className={`${styles.gridWrapperText} ${styles.infoBox}`}>
                        <h3 className={styles.infoText}>James J. Conte<br />Millcreek, UT<br />(801)833-5923</h3>
                    </div>

                    <div className={`${styles.gridWrapperText} ${styles.infoBox}`}>
                        <h3 className={styles.infoText}>james1conte@hotmail.com<br /><br />jamesconte.com</h3>
                    </div>

                    <div className={`${styles.gridWrapperText} ${styles.infoBox}`}>
                        <h3 className={styles.infoText}>
                            <Link href="/">View Resume</Link><br /><br />
                            <Link href="/">Download Resume</Link>
                        </h3>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HoursComponent;
