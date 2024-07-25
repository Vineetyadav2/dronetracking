//resetCollisionState.tsx
import { droneIcon } from '../../ui/drone/droneIcon';
import { Location } from '../../ui/drone/droneLocationModel';

export const resetCollisionState = (drone1: Location, drone2: Location) => {
    if (drone1.inCollision && drone2.inCollision) {
        drone1.inCollision = false;
        drone2.inCollision = false;
        drone1.marker!.setIcon(droneIcon);
        drone2.marker!.setIcon(droneIcon);
    }
};
