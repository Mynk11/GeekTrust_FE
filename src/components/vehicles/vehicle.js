import React, { useEffect } from 'react';
import Loader from '../loader/loader';
import './vehicle.css';

var uniqid = require('uniqid');
function getVehiclesDetails(props) {

    var time = props.time || {};
    var values = props.selectedVehcle || [];
    var spaceVehicle = props.selVehicles || {};
    var vehicles = props.vehicles || [];
    var distanceObject = props.objDistance || {};

    useEffect(() => {
        var timeArr = [];
        timeArr = Object.values(props.time);
        if (timeArr.length > 0) {
            props.setTotalTime(timeArr.reduce((sum, num) => { return sum + num }));
        } else {
            props.setTotalTime(0);
        }
    })

    const ForLabelClick = (e) => {

        var disabled = e.target.getAttribute("disabled");
        if (disabled === "") {

            return true;
        } else {

            changeRadio(e);
        }
    }

    const changeRadio = (e) => {
        var currentsel = e.currentTarget.name || e.target.getAttribute("name");
        var value = e.target.value || e.target.getAttribute("value");
        var remainingTime = "";
        //var reachable = e.target.getAttribute("maxdistance");
        var speed = e.target.getAttribute("speed");
        remainingTime = distanceObject[currentsel] / speed;
        if ((value !== null || value !== "null") && distanceObject[currentsel] !== "null") {

            time[currentsel] = remainingTime;
            spaceVehicle[currentsel] = value;
            props.setTime(time);
            props.setselVehicles(spaceVehicle);
            values = Object.values(spaceVehicle);
            props.selectedVehicles(values);
        }
    }
    if (vehicles.length) {

        return vehicles.map((obj, index) => {
            return (
                <div key={uniqid()} className="col-sm-2" style={{ visibility: props.selectedPlanet.includes("country" + index) ? "block" : "hidden" }}>
                    {vehicles.map((key) => {
                        return (<div

                            className={spaceVehicle["country" + index] !== key.name && distanceObject["country" + index] > 0 && values.includes(key.name) ? "none" : "display"}
                            key={uniqid()}>
                            <input
                                speed={key.speed}
                                maxdistance={key.max_distance}
                                defaultChecked=
                                {(spaceVehicle.hasOwnProperty("country" + index)
                                    && key.name === spaceVehicle["country" + index]) ? true : false}


                                disabled={values.includes(key.name) || key.max_distance < distanceObject["country" + index]}
                                onChange={(e) => {
                                    changeRadio(e)
                                }} type="radio" name={"country" + index} key={uniqid()} value={key.name} />

                            <label
                                disabled={values.includes(key.name) || key.max_distance < distanceObject["country" + index]}
                                speed={key.speed}
                                maxdistance={key.max_distance}
                                value={key.name}
                                name={"country" + index}
                                onClick={(e) => ForLabelClick(e)}
                                htmlFor={key.name}
                                key={uniqid()}
                                style={{ paddingLeft: "10px" }}
                            >{key.name}
                            </label>
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