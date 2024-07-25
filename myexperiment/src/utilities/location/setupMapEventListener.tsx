 // setupMapEventListener.tsx
import map from '../../ui/map/mapSetup';
import { addNewDrone } from '../../ui/drone/addNewDrone';
import { Location } from './dronePosition';
export const setupMapEventListener = (locations: Location[]) => {
    map.on('contextmenu', (event) => {
        const latitude = event.latlng.lat;
        const longitude = event.latlng.lng;

        const speedPrompt = prompt("Enter speed:");
        const directionPrompt = prompt("Enter direction (0-360 degrees):");

        if (speedPrompt === null || directionPrompt === null) {
            return; 
        }

        const speed = parseInt(speedPrompt) || 1000; // Default speed
        const direction = parseInt(directionPrompt) || 0; // Default direction

        // Add the new drone
        addNewDrone(locations, latitude, longitude, speed, direction);
    });
};
 


