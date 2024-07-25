// trajectoryPlanner.tsx
import { Location } from "../location/dronePosition";
export const calculatePaths = (locations: Location[]) => {
    const path1: [number, number][] = [
        locations[0].locationCoordinates,
        [26.986471, 75.876472],
        [26.984471, 75.883472],
        locations[1].locationCoordinates
    ];

    const path2: [number, number][] = [
        locations[2].locationCoordinates,
        [26.936744, 75.814768],
        [26.935000, 75.818500],
        [26.933500, 75.822500],
        locations[3].locationCoordinates
    ];

    locations[0].path = path1;
    locations[1].path = path1.slice().reverse();
    locations[2].path = path2;
    locations[3].path = path2.slice().reverse();
};

