import React from 'react';
import DropDown from '../dropdown/dropdown';
import Loader from '../loader/loader';
import { NUMBER_OF_PLANETS } from '../../config/config';
import GetVehicleDetails from '../vehicles/vehicle';
var uniqid = require('uniqid');

function getPlanetsDetails(props) {

    if (props.planets.length > NUMBER_OF_PLANETS) {

        return (
            <div key={uniqid()}>

                {/* Component for planet dropdown */}

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

                <div className="row pt-2 vehicleHeight">
                    <div className="col-sm-1"></div>

                    {/* Component for veicle option */}

                    <GetVehicleDetails
                        totalTime={props.totalTime}
                        setTotalTime={props.setTotalTime}
                        time={props.time}
                        setTime={props.setTime}
                        objDistance={props.distanceObj}
                        key={uniqid()}
                        vehicles={props.vehicles}
                        selectedVehcle={props.selectedVehcle}
                        selectedVehicles={props.selectedVehicles}
                        selectedPlanet={Object.keys(props.distanceObj)}
                        selVehicles={props.selVehicles}
                        setselVehicles={props.setselVehicles}

                    >

                    </GetVehicleDetails>
                </div>

            </div>
        )
    }
    else {
        return (<Loader></Loader>)
    }
}
export default getPlanetsDetails;