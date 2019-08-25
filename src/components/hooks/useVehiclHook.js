import React, { useState } from 'react';




export const VehicleContext = React.createContext([]);


export default function useVehicleState(initialVal = "") {

    //<VehicleContext.Provider value={vehicles}></VehicleContext.Provider>
    const [vehicles, setVehicles] = useState(initialVal);
    return [vehicles, setVehicles];

}