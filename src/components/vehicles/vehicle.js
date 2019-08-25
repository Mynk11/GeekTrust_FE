import React, { useState, useEffect } from 'react';
import useVehicleHook from '../hooks/useVehiclHook';
var uniqid = require('uniqid');
var spaceVehicle = {};
export var values = [];
function getVehiclesDetails(props) {
    console.log("props from get", props);
    const [selVehicles, setselVehicles] = useVehicleHook({});
    const [num, setCount] = useState(0)

    useEffect(() => {
        console.log("Use effect is called", selVehicles.length, selVehicles);
    }, [num]);

    const changeRadio = (e) => {

        var currentsel = e.currentTarget.name;
        var value = e.target.value;
        if (value !== null || value !== "null") {
            spaceVehicle[currentsel] = value;
            setselVehicles(spaceVehicle);
            values = Object.values(spaceVehicle);
            props.v(values);
            console.log("spaceVehicle", spaceVehicle, values);
            setCount(num + 1);
        }
    }

    if (props.vehicles.length > 0) {
        return props.vehicles.map((obj, index) => {
            return (
                <div className="col-2 mt-2" key={uniqid()}>
                    {props.vehicles.map((key, i) => {
                        return (<div key={uniqid()}>
                            <input
                                defaultChecked={(spaceVehicle.hasOwnProperty("country" + index) && key.name === spaceVehicle["country" + index]) ? true : false}
                                disabled={values.includes(key.name)}
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