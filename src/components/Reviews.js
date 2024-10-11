import React from "react";
import styles from "./Reviews.module.css"; // Import the CSS module here

function App() {
  const row1 = [
    { id: '1', image: '/images/nodejs.png', title: 'Node.js' },
    { id: '2', image: '/images/html.png', title: 'HTML + CSS + JavaScript' },
    { id: '3', image: '/images/react.png', title: 'React.js' },
  ];

  const row2 = [
    { id: '4', image: '/images/microsoft.png', title: 'Microsoft OFfice' },
    { id: '5', image: '/images/vs.png', title: 'Visual Studio' },
    { id: '6', image: '/images/nextjs.png', title: 'Next.js' },
    { id: '7', image: '/images/sanity.png', title: 'Sanity.io (cms)' },
  ];

  return (
    <div className={styles.AppContainer}>
      <div className={styles.Wrapper}>
        <div className={styles.Text}>Skills & Expertise</div>
        <div className={styles.Note}>
          The skills that have helped me become the developer I am today
        </div>
        <div className={styles.Marquee}>
          <div className={styles.MarqueeGroup}>
            {row1.map((el) => (
              <div key={el.id} className={styles.ImageGroup}>
                <img src={el.image} alt={el.title} className={styles.Image} />
                <h2 className={styles.ImageTitle}>{el.title}</h2>
              </div>
            ))}
          </div>
          <div className={styles.MarqueeGroup}>
            {row1.map((el) => (
              <div key={el.id} className={styles.ImageGroup}>
                <img src={el.image} alt={el.title} className={styles.Image} />
                <h2 className={styles.ImageTitle}>{el.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.Marquee}>
          <div className={styles.MarqueeGroup2}>
            {row2.map((el) => (
              <div key={el.id} className={styles.ImageGroup}>
                <img src={el.image} alt={el.title} className={styles.Image} />
                <h2 className={styles.ImageTitle}>{el.title}</h2>
              </div>
            ))}
          </div>
          <div className={styles.MarqueeGroup2}>
            {row2.map((el) => (
              <div key={el.id} className={styles.ImageGroup}>
                <img src={el.image} alt={el.title} className={styles.Image} />
                <h2 className={styles.ImageTitle}>{el.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
