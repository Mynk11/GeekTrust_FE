import { useState } from 'react';

export default function useVehicleState(initialVal = "") {

    const [vehicles, setVehicles] = useState(initialVal);
    return [vehicles, setVehicles];

}