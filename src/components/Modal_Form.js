import React from "react"
import styles from "../styles/modal_form.module.css"

export const Modal_Form = () => {

    return (
        <form className={styles.form}>
            <label>
                Title:
                <input type="text" id="title" name="title"/>
            </label>
            <br></br>

            <label>
                Start Date:
                <input type="date" id="start_date" name="start_date"/>
            </label>

            <label>
                End Date:
                <input type="date" id="end_date" name="end_date"/>
            </label>

            <br></br>
            <label>
                Begins:
                <input type="time" id="begins" name="begins"/>
            </label>

            <label>
                Ends:
                <input type="time" id="ends" name="ends"/>
            </label>
        </form>
            
    )
}