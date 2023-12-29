import React from "react"
import styles from "../styles/modal_form.module.css"

export const Modal_Form = ({handleSubmit}) => {

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>

                <label>
                    Title:
                    <input type="text" id="title" name="title"/>
                </label>
            </div>
            <br></br>

            <div>
                <label>
                    Start Date:
                    <input type="date" id="start_date" name="start_date"/>
                </label>

                <label>
                    End Date:
                    <input type="date" id="end_date" name="end_date"/>
                </label>
            </div>

            <br></br>

            <div>
                <label>
                    Begins:
                    <input type="time" id="begins" name="begins"/>
                </label>

                <label>
                    Ends:
                    <input type="time" id="ends" name="ends"/>
                </label>
            </div>

            <input type="submit" value="Submit"/>

        </form>
            
    )
}