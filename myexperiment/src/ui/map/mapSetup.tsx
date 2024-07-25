//mapSetup.tsx
import L from 'leaflet';
import { osmTileLayer } from './osmTileLayer';

const map = L.map('map').setView([26.996471, 75.876472], 15);
osmTileLayer.addTo(map);

export default map; 
