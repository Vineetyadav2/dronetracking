// collisionLogger.tsx
import Toastify from 'toastify-js';
import { Location } from '../../ui/drone/droneLocationModel';

export const logCollision = (drone1: Location, drone2: Location) => {
    const collisionLog = document.getElementById('collision-log');
    if (collisionLog) {
        const logItem = document.createElement('div');
        logItem.classList.add('collision-log-item');
        logItem.textContent = `Collision detected between Drone ${drone1.number}  and Drone ${drone2.number})`;
        collisionLog.appendChild(logItem);
    } else {
        console.error('Collision log element not found!');
    }

    Toastify({
        text: `Collision detected between Drone ${drone1.number} and Drone ${drone2.number}`,
        duration: 5000,
        gravity: 'top',
        position: 'right',
        backgroundColor: 'linear-gradient(to right, #ff5f6d, #ffc371)',
        stopOnFocus: true
    }).showToast();
};

export default Toastify