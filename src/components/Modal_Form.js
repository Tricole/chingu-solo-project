import React, { useEffect, useState } from "react"
import styles from "../styles/modal_form.module.css"

export const Modal_Form = ({show}) => {

    // const [showModal, setModal] = useState(false);

    // useEffect = (() => {
    //     setModal(show);

    // }, [show])

    if (show === true)
        return (
            <div>Show Modal</div>
        )

}