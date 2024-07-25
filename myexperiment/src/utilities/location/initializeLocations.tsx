//initializeLocations.tsx
import { Location } from './dronePosition';
import map from '../../ui/map/mapSetup';
export const initializeLocations = (): Location[] => {
    const locations: Location[] = [
        new Location('Amer Fort', 26.996471, 75.876472, '1'),
        new Location('Nahargarh Fort', 26.943628, 75.916417, '2'),
        new Location('Jal Mahal', 26.929744, 75.804768, '3'),
        new Location('Hawa Mahal', 26.925195, 75.819444, '4')
    ];

    locations.forEach(location => {
        location.initializeMarker(map);
    });

    return locations;
};
