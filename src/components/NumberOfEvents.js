// src/components/NumberOfEvents.js

import { useState } from "react"

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const [number, setNumber] = useState(32)

    const handleInputChanged = (e) => {
        let value = e.target.value
        setNumber(value)

        let errorText;
        if (isNaN(value) || parseFloat(value) < 0) {
            errorText = 'Please enter a valid number'
        } else {
            errorText = ''
        }
        setCurrentNOE(value)
        setErrorAlert(errorText)
    }
    return (
        <div id="numberOfEvents">
            <label htmlFor="number" id="number">
                Number of Events:
            <input
                type="text"
                className="number"
                value={number}
                onChange={handleInputChanged}
            />
            </label>
        </div>
    )
}

export default NumberOfEvents;