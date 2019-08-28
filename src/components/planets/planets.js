import React from 'react';
import DropDown from '../dropdown/dropdown';

import GetVehicleDetails from '../vehicles/vehicle';

var uniqid = require('uniqid');

function getPlanetsDetails(props) {
    console.log("props from planets", props);

    if (props.planets.length > 0) {
        var planetArray = props.planets.map(key => { return key.name })

        return (
            <div key={uniqid()}>
                <DropDown key={uniqid()}
                    option={planetArray}
                    // vehicles={props.vehicles} 
                    selectedPlanet={props.selectedPlanet}
                    vehicles={props.vehicles}
                    selectedVehicles={props.selectedVehicles}
                    selectedPlanets={props.selectedPlnts}
                >

                </DropDown>

                <div className="row" key={uniqid()}>
                    <div className="col-1" key={uniqid()}></div>


                    {/*  <GetVehicleDetails
                        key={uniqid()}
                        vehicles={props.vehicles}
                        selectedVehicles={props.selectedVehicles}
                        selectedPlanet={props.selectedPlnts}
                    >

                    </GetVehicleDetails> */}





                </div>
            </div>
        )
    }
    else {
        return (<ul><li key={Math.random()}>Planets  list coming soon</li></ul>)
    }
}
export default getPlanetsDetails;