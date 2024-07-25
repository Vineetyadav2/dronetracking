//stopSimulation.tsx
import { locations } from '../../ui/drone/droneManager';

export const stopSimulation = () => {
    locations.forEach((location) => {
        clearTimeout(location.timeout!);
    });
};
