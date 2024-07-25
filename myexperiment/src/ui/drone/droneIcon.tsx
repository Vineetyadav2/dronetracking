// droneIcon.tsx
import L from 'leaflet';
import { DroneIconOptions } from './droneIconAttribute';

const createIcon = (options: DroneIconOptions) => L.icon(options);

export const droneIcon = createIcon({
    iconUrl: 'images/drone.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});
