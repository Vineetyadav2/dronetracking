 // droneMotionSimulator.tsx
import { updateFutureTrajectory } from '../../utilities/trajectory/futureTrajectory';
import { checkCollisions } from '../../features/collision/collisionHandler';
import { Location } from './droneLocationModel';
import * as L from 'leaflet';
import { droneColors } from './droneColors';
import map from '../map/mapSetup';
import { locations } from './droneManager';

 export const simulateMovement = (location: Location, path: [number, number][], speed: number) => {
    let index = 0;

    const currentPath = L.polyline(path, { color: droneColors[+location.number - 1], weight: 5 }).addTo(map);

    const move = () => {
        if (location.inCollision) {
            clearTimeout(location.timeout!); // Stop movement if in collision
            return;
        }

        if (index < path.length) {
            location.locationCoordinates = path[index];
            location.marker!.setLatLng(location.locationCoordinates);
            location.circle!.setLatLng(location.locationCoordinates);
            updateFutureTrajectory(location, path, index);
            checkCollisions(locations); // Check for collisions with all drones
            index++;
            location.timeout = window.setTimeout(move, speed);
        } else {
            index = 0; // Loop back or stop based on your requirement
            window.setTimeout(move, speed);
        }
    };
    move();
}; 

 




