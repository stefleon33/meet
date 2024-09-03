// src/App.js

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';
import { getEvents } from './api';
import { useEffect, useState } from 'react';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState([32]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
  }

  useEffect(() => {
    fetchData();
  }, []);

 return (
   <div className="App">
     <CitySearch />
     <EventList events={events}/>
     <NumberOfEvents setCurrentNOE={setCurrentNOE}/>
   </div>
 );
}

export default App;