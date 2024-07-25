//collisionIcon.tsx
import L from 'leaflet';
import { DroneIconOptions } from '../../ui/drone/droneIconAttribute';

const createIcon = (options: DroneIconOptions) => L.icon(options);

export const collisionIcon = createIcon({
    iconUrl: 'images/drone_red.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});
