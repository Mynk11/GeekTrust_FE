import React, { useEffect, useState } from 'react';
import usePlanetState from '../hooks/usePlanetState.js';
import GetVehicleDetails from '../vehicles/vehicle';
import Timer from '../time/time';
import './dropdown.css';
var uniqid = require('uniqid');


export default function DropDown(props) {
    var countryVal = props.selectedPlanets || [];
    var selected = props.selectePlanetObj || {};
    var objDistance = props.distanceObj || {};
    useEffect(() => {
        console.log("props from drop==>", props);

    }, []);

    const changeSel = (e) => {
        var timeObj = props.time || {};
        var vehicle = "";
        var changeSel = "";
        var currentsel = e.target.name;
        var value = e.target.value;
        var distance = e.nativeEvent.target.selectedOptions[0].getAttribute("distance");
        if (objDistance[currentsel]) {
            if (objDistance[currentsel] == distance) {
                changeSel = true;
            } else {
                changeSel = false;
            }
        } else {
            changeSel = true;
        }
        if (value !== "select" && changeSel) {

            selected[currentsel] = value;
            countryVal = Object.values(selected);
            objDistance[currentsel] = distance;
            props.selectedPlanet(countryVal);
            props.setSelectePlanetObj(selected);
            props.setDistanceObj(objDistance);
        } else {

            if (value !== "select") {
                vehicle = props.selVehicles;
                delete vehicle[currentsel];
                props.setselVehicles(vehicle);
                selected[currentsel] = value;
                countryVal = Object.values(selected);
                objDistance[currentsel] = distance;
                props.selectedPlanet(countryVal);
                props.setSelectePlanetObj(selected);
                props.setDistanceObj(objDistance);
                props.selectedVehicles(Object.values(props.selVehicles));
                delete timeObj[currentsel];
                props.setTime(timeObj);

            }
            else {
                delete selected[currentsel];
                delete objDistance[currentsel];
                vehicle = props.selVehicles;
                delete vehicle[currentsel];
                props.setselVehicles(vehicle);
                countryVal = Object.values(selected);
                props.selectedPlanet(countryVal);
                props.selectedVehicles(Object.values(props.selVehicles));
                props.setSelectePlanetObj(selected);
                props.setDistanceObj(objDistance);
                delete timeObj[currentsel];
                props.setTime(timeObj);
            }
        }


    }




    return (
        <div>
            <div className="row" key={uniqid()}>
                <div className="col-sm-1" key={uniqid()}></div>
                {props.option.map(function (obj, i) {
                    //console.log('Obj====>', obj);

                    if (i < 4) {

                        return (
                            <div className="col-sm-2 .dropdown" key={uniqid()}>
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



                <div className="col-sm-2">

                    <Timer Time={props.totalTime}></Timer>
                </div>




            </div>

            <div className="row pt-2">
                <div className="col-sm-1"></div>
                <GetVehicleDetails
                    totalTime={props.totalTime}
                    setTotalTime={props.setTotalTime}
                    time={props.time}
                    setTime={props.setTime}
                    objDistance={objDistance}
                    key={uniqid()}
                    vehicles={props.vehicles}
                    selectedVehcle={props.selectedVehcle}
                    selectedVehicles={props.selectedVehicles}
                    selectedPlanet={Object.keys(selected)}
                    selVehicles={props.selVehicles}
                    setselVehicles={props.setselVehicles}

                >

                </GetVehicleDetails>
            </div>
        </div >
    )
}




