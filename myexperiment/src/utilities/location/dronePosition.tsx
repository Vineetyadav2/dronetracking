//dronePosition.tsx
import * as L from 'leaflet';
import { DroneIconOptions } from '../../ui/drone/droneIconAttribute';
import { droneIcon } from '../../ui/drone/droneIcon';

export class Location {
    public name: string;
    public locationCoordinates: [number, number]; 
    public number: string;
    public marker: L.Marker | null;
    public circle: L.Circle | null;
    public inCollision: boolean;
    public path: [number, number][];
    public originalCoordinates: [number, number];
    public timeout: number | null;
    public futureTrajectory: L.Polyline | null;


    constructor(name: string, latitude: number, longitude: number, number: string) {
        this.name = name;
        this.locationCoordinates = [latitude, longitude];
        this.number = number;
        this.marker = null;
        this.circle = null;
        this.inCollision = false;
        this.path = [];
        this.originalCoordinates = [latitude, longitude];
        this.timeout = null;
        this.futureTrajectory = null;
    }

    initializeMarker(map: L.Map) {
        this.marker = L.marker(this.locationCoordinates, { icon: droneIcon }).addTo(map); 
        this.circle = L.circle(this.locationCoordinates, { radius: 50 }).addTo(map);  
        this.marker.bindTooltip(this.number).openTooltip();
    }
}
