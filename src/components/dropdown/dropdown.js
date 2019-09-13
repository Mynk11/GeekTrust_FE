import React from 'react';
import { NUMBER_OF_PLANETS } from '../../config/config';
import Timer from '../time/time';
var uniqid = require('uniqid');


export default function DropDown(props) {
    var countryVal = props.selectedPlanets || [];
    var selected = props.selectePlanetObj || {};
    var objDistance = props.distanceObj || {};

    //Checkin Whether planet is  selected or not to meet the requirement 
    const changeSel = (e) => {
        var timeObj = props.time || {};
        var vehicle = "";
        var changeSel = "";
        var currentsel = e.target.name;
        var value = e.target.value;
        var distance = e.nativeEvent.target.selectedOptions[0].getAttribute("distance");
        if (objDistance[currentsel]) {
            if (objDistance[currentsel] === distance) {
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

        } else {

            if (value !== "select") {
                selected[currentsel] = value;
                objDistance[currentsel] = distance;
            }
            else {
                delete selected[currentsel];
                delete objDistance[currentsel];
            }
            vehicle = props.selVehicles;
            delete vehicle[currentsel];
            props.setselVehicles(vehicle);
            countryVal = Object.values(selected);
            delete timeObj[currentsel];
            props.setTime(timeObj);
        }
        props.selectedPlanet(countryVal);
        props.selectedVehicles(Object.values(props.selVehicles));
        props.setSelectePlanetObj(selected);
        props.setDistanceObj(objDistance);

    }




    return (
        <>
            <div className="row pt-2" key={uniqid()}>
                <div className="col-sm-1"></div>
                {props.option.map(function (obj, i) {
                    if (i < NUMBER_OF_PLANETS) {

                        return (
                            <div className="col-sm-2" key={uniqid()}>
                                <div className="text-center"><b>Destination {i + 1}</b></div>
                                <select
                                    value={(selected.hasOwnProperty("country" + i) && selected["country" + i] !== "null") ? selected["country" + i] : ""}
                                    onChange={(e) => { changeSel(e) }}
                                    typeof="select"
                                    className="form-control dropdown" aria-labelledby="dropdownMenuButton" name={"country" + i} placeholder="Country">
                                    <option value="select">Select</option>
                                    {props.option.map((key) => {
                                        return (
                                            <option distance={key.distance} value={key.name} disabled={countryVal.includes(key.name) ? true : false} key={uniqid()}>
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


                {/* Timer component */}
                <div className="col-sm-2">

                    <Timer Time={props.totalTime}></Timer>
                </div>

            </div>

        </>
    )
}




