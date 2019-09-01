import React, { useState } from 'react';
import DropDown from '../dropdown/dropdown';

var uniqid = require('uniqid');

function getPlanetsDetails(props) {

    if (props.planets.length > 0) {


        return (
            <div key={uniqid()} className="container">
                <DropDown key={uniqid()}
                    option={props.planets}
                    time={props.time}
                    setTime={props.setTime}

                    selectedPlanet={props.selectedPlanet}
                    vehicles={props.vehicles}
                    selectedVehicles={props.selectedVehicles}
                    selectedPlanets={props.selectedPlnts}
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