import React, { useEffect } from 'react';
import Loader from '../loader/loader';
var uniqid = require('uniqid');
function getVehiclesDetails(props) {
    var time = props.time || {};
    var values = props.selectedVehcle || [];
    var spaceVehicle = {};


    useEffect(() => {
        var timeArr = [];

        timeArr = Object.values(props.time);
        if (timeArr.length > 0) {
            props.setTotalTime(timeArr.reduce((sum, num) => { return sum + num }));
        } else {
            props.setTotalTime(0);
        }

    })


    const changeRadio = (e) => {

        var currentsel = e.currentTarget.name;
        var value = e.target.value;
        var remainingTime = "";
        //var reachable = e.target.getAttribute("maxdistance");
        var speed = e.target.getAttribute("speed");
        if (props.selVehicles[currentsel]) { }
        remainingTime = props.objDistance[currentsel] / speed;

        if ((value !== null || value !== "null") && props.objDistance[currentsel] !== "null") {


            spaceVehicle = props.selVehicles;
            time[currentsel] = remainingTime;
            spaceVehicle[currentsel] = value;
            props.setTime(time);
            props.setselVehicles(spaceVehicle);
            values = Object.values(spaceVehicle);
            props.selectedVehicles(values);

        }


    }

    if (props.vehicles.length > 0) {
        return props.vehicles.map((obj, index) => {
            return (
                <div key={uniqid()} className="col-2" style={{ visibility: props.selectedPlanet.includes("country" + index) ? "block" : "hidden" }}>
                    {props.vehicles.map((key, i) => {

                        return (<div key={uniqid()}>
                            <input
                                speed={key.speed}
                                maxdistance={key.max_distance}

                                defaultChecked=
                                {(props.selVehicles.hasOwnProperty("country" + index) && key.name === props.selVehicles["country" + index]) ? true : false}


                                disabled={props.selectedVehcle.includes(key.name) || key.max_distance < props.objDistance["country" + index]}
                                onChange={(e) => {
                                    changeRadio(e)
                                }} type="radio" name={"country" + index} key={uniqid()} value={key.name} />

                            <label htmlFor={key.name} key={uniqid()} style={{ paddingLeft: "10px" }}>{key.name}</label>
                        </div>)
                    })}
                </div>)

        })
    }
    else {
        return (<Loader />)
    }
}
export default getVehiclesDetails;