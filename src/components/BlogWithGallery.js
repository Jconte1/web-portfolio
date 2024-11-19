import React from "react";
import styles from './BlogWithGallery.module.css'

const BlogWithGallery = () => {
    return (
        <div className={styles.container}>
            <h2>About Me</h2>
            <p>I consider myself to be a highly creative individual who enjoys finding unique and innovative solutions to challenges. I approach projects with enthusiasm and an open mind, allowing me to think outside the box and deliver something fresh and exciting. Whether it’s designing a new feature or collaborating on a team project, I bring a fun and positive energy that helps create an enjoyable and productive environment for everyone involved.

                Along with my creativity, I pride myself on being hardworking and dedicated to achieving the best results. I understand the importance of clear communication, and I always ensure that ideas and feedback are exchanged effectively, keeping everyone on the same page. My ability to listen, engage, and adapt makes me a strong team player, and I thrive in collaborative settings where my communication skills can truly shine.</p>
            <div className={styles.imageContainer}>
                <img src="/images/port1.jpg" alt="" className={styles.image} />
                <img src="/images/port2.jpg" alt="" className={styles.image} />
                <img src="/images/port3.jpg" alt="" className={styles.image} />
            </div>




          
        </div>
    )
}

export default BlogWithGallery;