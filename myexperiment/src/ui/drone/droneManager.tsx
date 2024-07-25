//droneManager.tsx
import { Location } from '../../utilities/location/dronePosition';
import { initializeLocations } from '../../utilities/location/initializeLocations';
import { setupMapEventListener } from '../../utilities/location/setupMapEventListener';
import { checkCollisions } from '../../features/collision/collisionHandler';


export const locations: Location[] = initializeLocations();// Initialize existing locations

setupMapEventListener(locations);

checkCollisions(locations);//check initial collision
