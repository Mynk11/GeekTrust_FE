import React from 'react';
import DropDown from '../dropdown/dropdown';
var uniqid = require('uniqid');

function getPlanetsDetails(props) {



    if (props.planets.length > 0) {


        return (
            <div key={uniqid()}>
                <DropDown key={uniqid()}
                    totalTime={props.totalTime}
                    setTotalTime={props.setTotalTime}
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
                    selectePlanetObj={props.selectePlanetObj}
                    setSelectePlanetObj={props.setSelectePlanetObj}
                    distanceObj={props.distanceObj}
                    setDistanceObj={props.setDistanceObj}
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