//collisionAction.tsx
import { collisionIcon } from './collisionIcon';
import { extendFuturePath } from '../../utilities/trajectory/futureTrajectory';
import { logCollision } from './collisionLogger';
import { droneIcon } from '../../ui/drone/droneIcon';
import { Location } from '../../ui/drone/droneLocationModel';

export const notifiedCollisions = new Set<string>();

 export const handleCollision = (drone1: Location, drone2: Location) => {
    notifiedCollisions.add(`${drone1.number}-${drone2.number}`);

    drone1.inCollision = true;
    drone2.inCollision = true;

    clearTimeout(drone1.timeout!);
    clearTimeout(drone2.timeout!);

    drone1.marker!.setIcon(collisionIcon);
    drone2.marker!.setIcon(collisionIcon);

    extendFuturePath(drone1);
    extendFuturePath(drone2);

    logCollision(drone1, drone2);
}; 


