import styles from "./section.module.css"

export const section = (props) => {
    return (
        <div className={styles.section}>
            <div>
                <div className={styles.sectionName}></div>
                {props.children}
            </div>
            <div className={styles.sectionContent}>

            </div>
        </div>
    )
}