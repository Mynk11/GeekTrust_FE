import React, { useState, useEffect } from 'react';
var uniqid = require('uniqid');

function getVehiclesDetails(props) {
    var time = "";
    var values = props.selectedVehcle || [];
    var spaceVehicle = {};
    const [num, setCount] = useState(0);

    useEffect(() => {
        console.log("Vehicle props===>", props);
        /* Object.keys(spaceVehicle).map(function (key) {
            if (spaceVehicle[key]) {
                if (props.objDistance[key]) {
                    time = props.time;
                    props.setTime(time);

                    //console.log("Both have keys", props.objDistance[key], spaceVehicle);
                } else {
                    delete spaceVehicle[key];
                    props.setselVehicles(spaceVehicle);
                    values = Object.values(spaceVehicle);
                    props.selectedVehicles(values);
                }

            }
        }); */


    })


    const changeRadio = (e) => {
        time = props.time;
        var currentsel = e.currentTarget.name;
        var value = e.target.value;
        var remainingTime = "";
        //var reachable = e.target.getAttribute("maxdistance");
        var speed = e.target.getAttribute("speed");
        if (props.selVehicles[currentsel]) { time = 0; }
        remainingTime = props.objDistance[currentsel] / speed + time;

        if ((value !== null || value !== "null") && props.objDistance[currentsel] !== "null") {

            if (props.selVehicles[currentsel]) { time = 0; }
            spaceVehicle = props.selVehicles;
            spaceVehicle[currentsel] = value;
            props.setTime(remainingTime);
            props.setselVehicles(spaceVehicle);
            values = Object.values(spaceVehicle);
            props.selectedVehicles(values);
            setCount(num + 1);
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
        return (<ul><li key={uniqid()}>List coming soon</li></ul>)
    }
}
export default getVehiclesDetails;