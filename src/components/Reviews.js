import React from "react";
import styles from "./Reviews.module.css"; // Import the CSS module here

function App() {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FF5733"]; // Define your color array

  const row1 = [
    { index: "1", review: "MICROSOFT OFFICE " },
    { index: "2", review: "NODE.JS" },
    { index: "3", review: "REACT" },
    { index: "4", review: "HTML & CSS" },
  ];

  const row2 = [
    { index: "1", review: "NEXT.JS" },
    { index: "2", review: "JAVASCRIPT" },
    { index: "3", review: "SEO" },
    { index: "4", review: "SANITY.IO (CMS)" },
    { index: "5", review: "VIRTUAL STUDIO" },
  ];

 
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={styles.AppContainer}>
      <div className={styles.Wrapper}>
        <div className={styles.Text}>Skills & Expertise</div>
        <div className={styles.Note}>
          The skills that have helped me become the developer I am today
        </div>
        
        {/* First Marquee */}
        <div className={styles.Marquee}>
          <div className={styles.MarqueeGroup}>
            {row1.map((el, index) => (
              <div key={index} className={styles.ImageGroup}>
                <div className={styles.content}>
                  <div className={styles.reviewDescription}>
                    <p 
                      className={styles.Review}
                      style={{ color: getRandomColor() }} // Apply random color to each <p>
                    >
                      {el.review}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.MarqueeGroup}>
            {row1.map((el, index) => (
              <div key={index} className={styles.ImageGroup}>
                <div className={styles.content}>
                  <div className={styles.reviewDescription}>
                    <p 
                      className={styles.Review}
                      style={{ color: getRandomColor() }}
                    >
                      {el.review}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee for row2 */}
        <div className={styles.Marquee}>
          <div className={styles.MarqueeGroup2}>
            {row2.map((el, index) => (
              <div key={index} className={styles.ImageGroup}>
                <div className={styles.content}>
                  <div className={styles.reviewDescription}>
                    <p 
                      className={styles.Review}
                      style={{ color: getRandomColor() }}
                    >
                      {el.review}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.MarqueeGroup2}>
            {row2.map((el, index) => (
              <div key={index} className={styles.ImageGroup}>
                <div className={styles.content}>
                  <div className={styles.reviewDescription}>
                    <p 
                      className={styles.Review}
                      style={{ color: getRandomColor() }}
                    >
                      {el.review}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;