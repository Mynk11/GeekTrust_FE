import { useState } from 'react';

export default function usePlanetState(initialVal = "") {
    const [sel, setSelected] = useState(initialVal);

    /* const updatedPlanets = (e) => {
        var currentsel = e.currentTarget.value;

        if (currentsel !== null || currentsel !== "null") {
            if (selected.indexOf(currentsel) === -1) {
                arr.push(currentsel)
                setSelected(arr);
                console.log("Current select", selected);
            } else {
                console.log("please change the planet");
            }

        } else {

            console.log("Current select 1", selected);
        }

    } */

    return [sel, setSelected];

}

