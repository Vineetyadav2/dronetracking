// geolocation.tsx
export const initGeolocation = () => {
    const getPosition = (position: GeolocationPosition) => {
        console.log("Geolocation success:", position);
        
    };

    const handleError = (error: GeolocationPositionError) => {
        if (error.code === error.PERMISSION_DENIED) {
            console.error("User denied Geolocation.");
        } else {
            console.error(`Geolocation error: ${error.message}`);
        }
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition, handleError, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
};
