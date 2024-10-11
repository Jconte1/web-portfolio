"use client"

import React, { useState } from 'react';
import styles from './AllBrands.module.css';
import AnimateHeight from 'react-animate-height';
import Calendar from './calendar';

const AllBrands = () => {
    const [height, setHeight] = useState(0); // State to control the visibility of the brand list

    const toggleBrands = () => {
        setHeight(height === 0 ? 'auto' : 0); // Toggle between 'auto' and '0'
    };

    // Create a sorted data structure grouped by the first letter
    

    return (
        <div className={styles.main}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    onClick={toggleBrands}
                    aria-expanded={height !== 0}
                    className={`brandsButton ${styles.brandsButton}`}
                >
                    {height === 0 ? 'EXPAND RESUME ⇓' : 'SHRINK RESUME ⇔'}
                </button>
            </div>
            
            <AnimateHeight
                duration={1000}
                height={height}
            >
                <Calendar />
            </AnimateHeight>
        </div>
    );
};

export default AllBrands;
