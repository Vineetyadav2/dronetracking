//startSimulation.tsx
import { simulateMovement } from '../../ui/drone/droneMotionSimulator';
import { calculatePaths } from '../../utilities/trajectory/trajectoryPlanner';
import { droneIcon } from '../../ui/drone/droneIcon';
import { Location } from '../../utilities/location/dronePosition';

export const startSimulation = (locations: Location[], newDroneIndex: number) => {
    calculatePaths(locations);

    // Start simulation for all drones
    locations.forEach((location, index) => {
        if (location.marker) {
            location.marker.setIcon(droneIcon);

            if (newDroneIndex === -1 || index === newDroneIndex) {
                simulateMovement(location, location.path, index * 500 + 1000);
            }
        }
    });
};

