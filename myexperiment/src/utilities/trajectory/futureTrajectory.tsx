// futureTrajectory.tsx
import L from 'leaflet';
import { Location } from '../../ui/drone/droneLocationModel';
import map  from '../../ui/map/mapSetup';

export const extendFuturePath = (location: Location) => {
    //console.log(`Extending future path for ${location.name}`);
};

export const updateFutureTrajectory = (location: Location, path: [number, number][], currentIndex: number) => {
    if (location.futureTrajectory) {
        map.removeLayer(location.futureTrajectory);
    }

    let futurePath = path.slice(currentIndex);

    if (futurePath.length > 1) {
        const lastPoint = futurePath[futurePath.length - 1];
        const secondLastPoint = futurePath[futurePath.length - 2];
        const directionLat = lastPoint[0] - secondLastPoint[0];
        const directionLng = lastPoint[1] - secondLastPoint[1];
        const extendFactor = 5;

        for (let i = 0; i < extendFactor; i++) {
            futurePath.push([
                lastPoint[0] + directionLat * (i + 1),
                lastPoint[1] + directionLng * (i + 1)
            ]);
        }
    }

    location.futureTrajectory = L.polyline(futurePath, { color: 'purple', dashArray: '5, 10', weight: 3 }).addTo(map);
};



