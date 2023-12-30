import React from "react"
import styles from "../styles/modal_form.module.css"

export const Modal_Form = ({submitForm}) => {

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {};
        formData.forEach((value, key) => {
        data[key] = value;
        });
        console.log("$$$$HOW MANY TIMES is form submitted from modal");
        submitForm(data); 
    
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
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

            <input type="submit" value="Add Event"/>

        </form>
            
    )
}