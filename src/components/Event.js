// src/components/Event.js

import React, { useState } from "react";

const Event = ({event}) => {
  const [showDetails, setShowDetails] = useState(false)
    return (
      <li className="event">
        <span className="eventSummary">
          <h2>{event.summary}</h2>
          <p className="location">{event.location}</p>
          <p className="originalStartTime">{event.created}</p>
        </span>
        {showDetails ? (
          <div className="details" id="details">
            <p>{event.description}</p>
            <a href={event.htmlLink}>See details</a>
          </div>
        ) : null}
        <button
          id="show-details-btn"
          className="details-btn"
          name="Show Details"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </li>
    );
  }
  
  export default Event;
  

  