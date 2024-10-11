import React, { useState } from "react";
import styles from './calendar.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Calendar = () => {
  
    

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>This is my Resume</h1>
                <h2>a nice little time line for yo bitch ass</h2>
            </div>

            
                    <>
                    <div className={styles.eventWrapper}>
                        <div className={styles.eventDate}>
                            <h5>August</h5> {/* Display the month name only */}
                            <h6>15</h6>
                            <h2>2024</h2>
                        </div>
                        <div className={styles.eventDetails}>
                            <h4>@hello</h4>
                            <h3>web developer engaged</h3>
                            <h4><b className={styles.venue}>what it do bo</b>{' '}in this hizouse</h4>
                            <p>shit went down fr</p>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src="/images/widow.png" alt="event photo" className={styles.eventImage} />
                        </div>
                        
                    </div>
                    <hr className={styles.hr} />
                    </>
             
           
               
      
           
        </div>
    );
};

export default Calendar;

