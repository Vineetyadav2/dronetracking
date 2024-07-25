 //index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { initGeolocation } from './ui/map/geolocation'; 
import { locations } from './ui/drone/droneManager';
import { startSimulation } from './features/simulation/startSimulation';
import { stopSimulation } from './features/simulation/stopSimulation';
import { resetSimulation } from './features/simulation/resetSimulation';

ReactDOM.render(<App />, document.getElementById('root'));

initGeolocation();

document.getElementById('start-btn')?.addEventListener('click', () => startSimulation(locations, -1));
document.getElementById('stop-btn')?.addEventListener('click', stopSimulation);
document.getElementById('reset-btn')?.addEventListener('click', resetSimulation);
 


