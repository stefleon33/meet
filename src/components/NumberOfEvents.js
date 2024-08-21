// src/components/NumberOfEvents.js

import { useState } from "react"

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const [number, setNumber] = useState(32)

    const handleInputChanged = (e) => {
        let value = e.target.value
        setNumber(value)
        let errorText;
        if(value === isNaN || value.length <= 0) {
            errorText = 'Please enter a valid number'
        } else {
            errorText = ''
        }
        setCurrentNOE(value)
        setErrorAlert(errorText)
    }

export default NumberOfEvents;