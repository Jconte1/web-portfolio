import timelineElements from "@/utils/timelineElements";
import styles from "./timeline.module.css";

export default function Timeline({ defaultColor }) {
    return (
        <div>
            <h3 class={styles.timelineTitle2}> My Timeline</h3>
            <h2 class={styles.timelineTitle}> My Journey Through Time (and Space)</h2>

            {timelineElements.map((element) => {
                const colors = [
                    styles.bgRed,
                    styles.bgBlue,
                    styles.bgYellow,
                    styles.bgPurple,
                    styles.bgOrange,
                ];

                const color = defaultColor || styles[`bg${element.color}`];

                return (
                    <div key={element.id} className={styles.timelineContainer}>


                        <div className={`${styles.timelineDateContainer} sm:flex hidden`}>
                            <div className={styles.dateText}>{element.date}</div>
                            <div className={`${color} ${styles.verticalLine}`}></div>
                            <div className={`${color} ${styles.horizontalLine}`}></div>
                        </div>
                        <div className={`${styles.contentBox} sm:w-96`}>
                            <div className={styles.titleText}>{element.title}</div>
                            <div className={`${styles.locationText} sm:text-xs`}>
                                {element.location}
                                <span className="sm:hidden">| {element.date}</span>
                            </div>
                            <div className={styles.descriptionText}>
                                {element.description}
                            </div>
                            <div className={styles.techContainer}>
                                {element.tech.map((tech, index) => {
                                    return (
                                        <span key={index} className={styles.techItem}>
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                            <a className={`${color} ${styles.button}`}>
                                {element.buttonText}
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
