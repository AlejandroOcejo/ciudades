import styles from "./section.module.css"

export const section = (props) => {
    return (
        <div className={styles.section}>
            {props.children}
        </div>
    )
}