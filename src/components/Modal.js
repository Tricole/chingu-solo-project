import React, { useEffect, useState } from "react"
import styles from "../styles/modal_form.module.css"

export const Modal = ({show, handleClose, children}) => {

    const showHideClassName = show? `${styles.modal} ${styles.display}` 
                            : `${styles.modal} ${styles.not_display}`;

    // const [showModal, setModal] = useState(false);

    // useEffect = (() => {
    //     setModal(show);

    // }, [show])
    console.log(show);
    console.log(showHideClassName);


    return (
        <div className={showHideClassName}>
            <section className={styles.modal_main}>
                {children}
                <button type="button" onClick={handleClose}>
                    Close
                </button>

            </section>

        </div>

        );

};