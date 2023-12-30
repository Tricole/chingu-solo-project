import React from "react"
import styles from "../styles/modal.module.css"

export const Modal = ({show, handleClose, children}) => {

    const showHideClassName = show? `${styles.modal} ${styles.display}` 
                            : `${styles.modal} ${styles.not_display}`;
    

    return (
        <div className={showHideClassName}>
            <section className={styles.modal_main}>
                {children}
            </section>
        </div>
    );

};