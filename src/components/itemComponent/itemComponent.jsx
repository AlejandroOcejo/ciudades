import React, { useState } from 'react';
import styles from './itemComponent.module.css';

export default function ItemComponent(props) {
    const [open, setOpen] = useState(false);
    const iconArray = ["x", "□"];
    const [iconDisplay, setIconDisplay] = useState(iconArray[0]);

    const onClickHandler = () => {
        setOpen(!open);
        setIconDisplay(open ? iconArray[0] : iconArray[1]);
    }

    const contentStyle = {
        display: open ? 'none' : 'block',
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.componentHeader}>
                <div className={styles.closeButton} onClick={onClickHandler}>{iconDisplay}</div>
            </div>
            <div style={contentStyle}>{props.children}</div>
        </div>
    );
}
