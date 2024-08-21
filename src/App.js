// src/App.js

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';
import { getEvents } from './api';
import { useEffect, useState } from 'react';

const App = () => {
 return (
   <div className="App">
     <CitySearch />
     <EventList />
     <NumberOfEvents />
   </div>
 );
}

export default App;