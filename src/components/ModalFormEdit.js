import React from "react"
import styles from "../styles/modal_form.module.css"

export const ModalFormEdit = ({submitForm, event}) => {

    const onSubmit = (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {};
        
        data["id"]= event.id;

        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log("new updated data is ");
        console.log(data);
        
        submitForm(data); 
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div>

                <label>
                    Title:
                    <input type="text" id="title" name="title" defaultValue={event.title}/>
                </label>
            </div>
            <br></br>

            <div>
                <label>
                    Start Date:
                    <input type="date" id="start_date" name="start_date" defaultValue={event.start_date}/>
                </label>

                <label>
                    End Date:
                    <input type="date" id="end_date" name="end_date" defaultValue={event.end_date}/>
                </label>
            </div>

            <br></br>

            <div>
                <label>
                    Begins:
                    <input type="time" id="begins" name="begins" defaultValue={event.begins}/>
                </label>

                <label>
                    Ends:
                    <input type="time" id="ends" name="ends" defaultValue={event.ends}/>
                </label>
            </div>

            <div>
                <label>
                    People:
                    <input type="text" id="people" name="people" defaultValue={event.people}/>
                </label>
            
            </div>
            <div>
                <label>
                    Location:
                    <input type="text" id="location" name="location" defaultValue={event.location}/>
                </label>
            
            </div>
            <div>
                <label>
                    Description:
                    <input type="text" id="description" name="description" defaultValue={event.description}/>
                </label>
            
            </div>

            <input type="submit" value="Update"/>

        </form>
            
    )
}