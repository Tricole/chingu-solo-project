import React, { useEffect, useRef } from "react"
import styles from "../styles/modal.module.css"


export const Modal = ({show, handleClose, children}) => {

    const modalRef = useRef(null);

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)){
            handleClose();

        }
    }

    useEffect( ()=> {
        if(show) 
            document.addEventListener('mousedown' , handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },[show, handleClose])

    const showHideClassName = show? `${styles.modal} ${styles.display}` 
                            : `${styles.modal} ${styles.not_display}`;
    

    return (
        <div className={showHideClassName}>
            <section className={styles.modal_main} ref={modalRef}>
                {children}
            </section>
        </div>
    );

};