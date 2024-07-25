//droneLocationModel.tsx
export interface Location {
    name: string;
    locationCoordinates: [number, number]; 
    number: string;
    marker: L.Marker | null;
    circle: L.Circle | null;
    inCollision: boolean;
    path: [number, number][];
    originalCoordinates: [number, number];
    timeout: number | null;
    futureTrajectory: L.Polyline | null;
}

