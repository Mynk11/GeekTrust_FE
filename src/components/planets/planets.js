import React, { useState } from 'react';
import DropDown from '../dropdown/dropdown';
import useVehicleHook from '../hooks/useVehiclHook';
var uniqid = require('uniqid');

function getPlanetsDetails(props) {

    //console.log("planets props===>", props);

    if (props.planets.length > 0) {


        return (
            <div key={uniqid()}>
                <DropDown key={uniqid()}
                    option={props.planets}
                    time={props.time}
                    setTime={props.setTime}
                    selectedPlanet={props.selectedPlanet}
                    vehicles={props.vehicles}
                    selectedVehicles={props.selectedVehicles}
                    selectedPlanets={props.selectedPlnts}
                    selectedVehcle={props.selectedVehcle}
                    selVehicles={props.selVehicles}
                    setselVehicles={props.setselVehicles}
                >

                </DropDown>


            </div>
        )
    }
    else {
        return (<ul><li key={Math.random()}>Planets  list coming soon</li></ul>)
    }
}
export default getPlanetsDetails;