import React from "react";
import styles from './Cards.module.css';

function Cards() {
    return (
        <div className={styles.titleContainer}>
            <h3>My Latest Work</h3>
            <h2>I&apos;m looking to expand my portfolio while I&apos;m on top and while I&apos;m young</h2>
            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <img src="/images/mld.png" alt="card image" className={styles.cardImage} />
                    <div className={styles.text}>
                        <h4>MLD.COM</h4>
                        <p>MLD.COM is a comprehensive website I developed for a luxury showroom specializing in high-end appliances, plumbing, and hardware. 
                            The site features a dynamic and responsive design, integrating a custom CMS to empower the content team with seamless control over product displays, 
                            showroom information, and customer engagement.</p>
                        <a href="https://mld-website.vercel.app/" className={styles.button}>Explore the Site!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;
