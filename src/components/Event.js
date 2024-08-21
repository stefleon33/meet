// src/components/Event.js

import React, { useState } from "react";

const Event = ({event}) => {
    return (
      <li className="event">
        <span className="eventSummary">
          <h2>{event.summary}</h2>
          <p className="location">{event.location}</p>
          <p className="originalStartTime">{event && (new Date(event.originalStartTime.dateTime)).toUTCString()}</p>
        </span>
      </li>
    );
  }
  
  export default Event;
  