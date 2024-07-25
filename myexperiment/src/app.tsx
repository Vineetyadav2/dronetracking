//app.tsx
import React from 'react';

const App: React.FC = () => {
    return (
        <div>
            <h1>Drone Simulation App</h1>
            <button id="start-btn">Start Simulation</button>
            <button id="stop-btn">Stop Simulation</button>
            <button id="reset-btn">Reset Simulation</button>
        </div>
    );
};

export default App;
