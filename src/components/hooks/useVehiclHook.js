import React, { useState } from 'react';




export const VehicleContext = React.createContext([]);


export default function useVehicleState(initialVal = "") {

    const [vehicles, setVehicles] = useState(initialVal);
    return [vehicles, setVehicles];

}