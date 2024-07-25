// droneMarkerInitializer.tsx
import map  from '../map/mapSetup';
import { droneIcon } from './droneIcon';
import { Location } from './droneLocationModel';
import * as L from 'leaflet';

export const initializeLocations = (locations: Location[]) => {
    locations.forEach((location) => {
        location.marker = L.marker(location.locationCoordinates, { icon: droneIcon }).addTo(map);
        location.circle = L.circle(location.locationCoordinates, { radius: 50 }).addTo(map);
        location.marker.bindTooltip(location.number).openTooltip();
    });
};

