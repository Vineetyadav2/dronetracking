// pathUtils.tsx
export const calculateDynamicPath = (startCoordinates: [number, number], speed: number, direction: number): [number, number][] => {
    const path: [number, number][] = [];
    const distance = speed * 0.0001; 

    for (let i = 0; i < 10; i++) { // Create a path of 10 points
        const newLat = startCoordinates[0] + (distance * Math.cos(direction * Math.PI / 180) * i);
        const newLng = startCoordinates[1] + (distance * Math.sin(direction * Math.PI / 180) * i);
        path.push([newLat, newLng]);
    }

    return path;
};
