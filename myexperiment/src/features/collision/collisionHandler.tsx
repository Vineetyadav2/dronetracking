//collisionHandler.tsx
import map from '../../ui/map/mapSetup';
import { Location } from '../../ui/drone/droneLocationModel';
import { resetCollisionState } from './resetCollisionState';
import { handleCollision, notifiedCollisions } from '../collision/collisionActions';


export const checkCollisions = (locations: Location[]) => {
    for (let i = 0; i < locations.length; i++) {
        for (let j = i + 1; j < locations.length; j++) {
            const dist = map.distance(locations[i].locationCoordinates, locations[j].locationCoordinates);
            if (dist < 50) {
                const collisionPair = `${locations[i].number}-${locations[j].number}`;
                if (!notifiedCollisions.has(collisionPair)) {
                    handleCollision(locations[i], locations[j]);
                }
            } else {
                resetCollisionState(locations[i], locations[j]);
            }
        }
    }
}; 

