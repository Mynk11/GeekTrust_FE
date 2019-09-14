import { useEffect } from "react";
import { GET_PLANETS, GET_VEHICLES } from '../../.env/config';
export default function GetData(props) {

    useEffect(() => {

        Promise.all([
            fetch(GET_PLANETS),
            fetch(GET_VEHICLES)
        ]).then((allResponses) => {
            allResponses[0].json().then((planet) => {

                props.setPlanets(planet);

            });
            allResponses[1].json().then((vehicle) => {
                props.setVehicles(vehicle);

            });

        }).catch((err) => {
            console.log(err);
        });

    }, []);

    return null;
} 