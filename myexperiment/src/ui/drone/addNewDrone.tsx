 // addNewDrone.tsx
import map from '../map/mapSetup';
import { Location } from '../../utilities/location/dronePosition';
import { calculateDynamicPath } from '../../utilities/trajectory/pathUtils';
import { calculatePaths } from '../../utilities/trajectory/trajectoryPlanner';
import { checkCollisions } from '../../features/collision/collisionHandler';
import { startSimulation } from '../../features/simulation/startSimulation';

export const addNewDrone = (locations: Location[], lat: number, lng: number, speed: number, direction: number) => {
    const newLocation = new Location(`New Drone ${locations.length + 1}`, lat, lng, (locations.length + 1).toString());
    newLocation.path = calculateDynamicPath(newLocation.locationCoordinates, speed, direction);
    locations.push(newLocation);

    newLocation.initializeMarker(map);  // Initialize new drone marker
    calculatePaths(locations);  // Recalculate paths for all drones
    checkCollisions(locations); // Recalculate paths for all drones
};
 