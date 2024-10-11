import React from "react";
import styles from './image.module.css';

function Image() {
    return (
        <div className={styles.imageContainer}>
            <img src="/images/spaceman.png" alt="spacemane" className={styles.floating}/>
        </div>
    )
}

export default Image;