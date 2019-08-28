import React, { useEffect, useState } from 'react';
import usePlanetState from '../hooks/usePlanetState.js';
import GetVehicleDetails from '../vehicles/vehicle';
import Timer from '../time/time';

var uniqid = require('uniqid');
var selected = {};
export var countryVal = [];
export default function DropDown(props) {


    console.log("Props from Dropdown ::", props);
    const [sel, setSelected] = usePlanetState([]);
    const [count, setCount] = useState([0])
    useEffect(() => {
        //console.log("Use effect is called", selected);
    }, [count]);

    const changeSel = (e) => {

        var currentsel = e.target.name;
        var value = e.target.value;

        if (value !== "null" || value !== null) {
            selected[currentsel] = value;
            countryVal = Object.values(selected)
            props.selectedPlanet(countryVal);
            // console.log("Selected Obj", selected);
            setCount(count + 1);
            setSelected(selected);
            //console.log("Planet Name", selected, countryVal);
            //console.log("Current select", sel);
        } else {
            console.log("please change the planet");
        }


    }




    return (
        <div>
            <div className="row" key={uniqid()}>
                <div className="col-1" key={uniqid()}></div>
                {props.option.map(function (obj, i) {

                    if (i < 4) {

                        return (
                            <div className="col-2 .dropdown" key={uniqid()}>
                                <div style={{ textAlign: "center" }}><b>Destination {i + 1}</b></div>
                                <select

                                    value={(selected.hasOwnProperty("country" + i) && selected["country" + i] !== "null") ? selected["country" + i] : ""}
                                    onChange={(e) => { changeSel(e) }}
                                    typeof="select" className="form-control dropdown-toggle" aria-labelledby="dropdownMenuButton" name={"country" + i} placeholder="Country">
                                    <option value="null">Select</option>
                                    {props.option.map((key) => {
                                        return (
                                            <option
                                                value={key}
                                                disabled={countryVal.includes(key) ? true : false}
                                                key={uniqid()}
                                            >
                                                {key}
                                            </option>)
                                    })}
                                </select>







                            </div>

                        );

                    } else {
                        return null;
                    }


                })}



                <div className="col-2">

                    <Timer Time={"2.00s"}></Timer>
                </div>




            </div>

            <div className="row pt-2">
                <div className="col-1"></div>
                <GetVehicleDetails
                    key={uniqid()}
                    vehicles={props.vehicles}
                    selectedVehicles={props.selectedVehicles}
                    selectedPlanet={Object.keys(selected)}
                >

                </GetVehicleDetails>
            </div>
        </div>
    )
}




