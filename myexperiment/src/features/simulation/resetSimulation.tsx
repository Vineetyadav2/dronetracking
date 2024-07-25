//resetSimulation.tsx
import { locations } from '../../ui/drone/droneManager';
import { notifiedCollisions } from '../collision/collisionActions'; 
import map  from '../../ui/map/mapSetup';
import { droneIcon } from '../../ui/drone/droneIcon';

export const resetSimulation = () => {
    locations.forEach((location) => {
        location.locationCoordinates = [...location.originalCoordinates];
        location.marker!.setLatLng(location.locationCoordinates);
        location.circle!.setLatLng(location.locationCoordinates);
        location.inCollision = false;
        location.marker!.setIcon(droneIcon);
        if (location.futureTrajectory) {
            map.removeLayer(location.futureTrajectory);
        }
    });

    notifiedCollisions.clear();
    const collisionLog = document.getElementById('collision-log')!;
    collisionLog.innerHTML = '';
};
