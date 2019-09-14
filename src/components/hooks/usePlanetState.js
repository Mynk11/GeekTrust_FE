import { useState } from 'react';
export default function usePlanetState(initialVal = "") {
    const [sel, setSelected] = useState(initialVal);
    return [sel, setSelected];

}

