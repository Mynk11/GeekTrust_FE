import React, { useState, useEffect } from 'react';
import DropDown from '../dropdown/dropdown';
import usePlanetState from '../hooks/usePlanetState';
import useVehicleState from '../hooks/useVehiclHook';
import GetVehicleDetails from '../vehicles/vehicle';

var uniqid = require('uniqid');

function getPlanetsDetails(props) {
    console.log("props from planets", props);
    const [planets, setPlanets] = usePlanetState([]);
    const [vehicles, setVehicles] = useVehicleState([]);
    useEffect(() => {
        Promise.all([
            fetch("https://findfalcone.herokuapp.com/planets"),
            fetch("https://findfalcone.herokuapp.com/vehicles")
        ]).then((allResponses) => {
            allResponses[0].json().then((planet) => {
                setPlanets(planet);
            });
            allResponses[1].json().then((vehicle) => {
                setVehicles(vehicle);
            });

        }).catch((err) => {
            console.log(err);
        });



    }, []);
    if (planets.length > 0) {
        var planetArray = planets.map(key => { return key.name })

        return (
            <div key={uniqid()}>
                <DropDown key={uniqid()} option={planetArray} vehicles={vehicles} p={props.p}></DropDown>

                <div className="row" key={uniqid()}>
                    <div className="col-1" key={uniqid()}></div>


                    <GetVehicleDetails key={uniqid()} vehicles={vehicles} v={props.v}></GetVehicleDetails>





                </div>
            </div>
        )
    }
    else {
        return (<ul><li key={Math.random()}>Planets  list coming soon</li></ul>)
    }
}
export default getPlanetsDetails;