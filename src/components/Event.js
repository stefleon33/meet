// src/components/Event.js

import React, { useState } from "react";

const Event = ({event}) => {
  const [showDetails, setShowDetails] = useState(false)
    return (
      <li className="event">
        <span className="eventSummary">
          <h2>{event.summary}</h2>
          <p className="location">{event.location}</p>
          <p className="originalStartTime">{event && (new Date(event.originalStartTime.dateTime)).toUTCString()}</p>
        </span>
        {showDetails ? (
          <div className="details" id="details">
            <p>{event.description}</p>
            <a href={event.htmlLink}>See details</a>
          </div>
        ) : null}
      </li>
    );
  }
  
  export default Event;
  