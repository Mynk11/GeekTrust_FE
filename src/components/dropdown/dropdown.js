import React, { useEffect, useState } from 'react';
import usePlanetState from '../hooks/usePlanetState.js';
import GetVehicleDetails from '../vehicles/vehicle';
import Timer from '../time/time';
import './dropdown.css';

var uniqid = require('uniqid');
var selected = {};
export var countryVal = [];
var objDistance = {};
export default function DropDown(props) {
    const [sel, setSelected] = usePlanetState({});
    const [count, setCount] = useState([0]);


    useEffect(() => {
        //console.log("Time is====>", props.time);
    }, [count]);

    const changeSel = (e) => {
        var currentsel = e.target.name;
        var value = e.target.value;
        var distance = e.nativeEvent.target.selectedOptions[0].getAttribute("distance");
        //console.log("Value============>", value);
        if (value !== "select") {
            console.log("Planet is selected", value);
            selected[currentsel] = value;
            countryVal = Object.values(selected);
            objDistance[currentsel] = distance;
            props.selectedPlanet(countryVal);

            setSelected(selected);
            setCount(count + 1);
        } else {
            console.log("please change the planet", selected, currentsel);
            delete selected[currentsel];
            delete objDistance[currentsel];
            console.log("remove null cntry==>", selected);
            setSelected(selected);
            countryVal = Object.values(selected);

            console.log("====>", objDistance);
            props.selectedPlanet(countryVal);

        }


    }




    return (
        <div>
            <div className="row" key={uniqid()}>
                <div className="col-1" key={uniqid()}></div>
                {props.option.map(function (obj, i) {
                    //console.log('Obj====>', obj);

                    if (i < 4) {

                        return (
                            <div className="col-2 .dropdown" key={uniqid()}>
                                <div style={{ textAlign: "center" }}><b>Destination {i + 1}</b></div>
                                <select

                                    value={(selected.hasOwnProperty("country" + i) && selected["country" + i] !== "null") ? selected["country" + i] : ""}
                                    onChange={(e) => { changeSel(e) }}
                                    typeof="select" className="form-control dropdown-toggle" aria-labelledby="dropdownMenuButton" name={"country" + i} placeholder="Country">
                                    <option value="select">Select</option>
                                    {props.option.map((key) => {
                                        return (
                                            <option
                                                distance={key.distance}
                                                value={key.name}
                                                disabled={countryVal.includes(key.name) ? true : false}
                                                key={uniqid()}
                                            >
                                                {key.name}
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

                    <Timer Time={props.time}></Timer>
                </div>




            </div>

            <div className="row pt-2">
                <div className="col-1"></div>
                <GetVehicleDetails
                    speed={props.speed}
                    setSpeed={props.speed}
                    time={props.time}
                    setTime={props.setTime}
                    objDistance={objDistance}
                    key={uniqid()}
                    vehicles={props.vehicles}
                    selectedVehicles={props.selectedVehicles}
                    selectedPlanet={Object.keys(selected)}
                >

                </GetVehicleDetails>
            </div>
        </div >
    )
}




