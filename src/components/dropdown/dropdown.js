import React, { useEffect, useState } from 'react';
import usePlanetState from '../hooks/usePlanetState.js';
import Timer from '../time/time';

var uniqid = require('uniqid');
var selected = {};
export var countryVal = [];
export default function DropDown(props) {
    console.log("Props from ", props);
    const [sel, setSelected] = usePlanetState([]);
    const [count, setCount] = useState([0])
    useEffect(() => {
        //console.log("Use effect is called");
    }, [sel.length]);

    const changeSel = (e) => {

        var currentsel = e.target.name;
        var value = e.target.value;

        if (value !== "null" || value !== null) {
            selected[currentsel] = value;
            countryVal = Object.values(selected)
            props.p(countryVal)
            setCount(count + 1);
            setSelected(selected);
            console.log("Planet Name", selected, countryVal);
            //console.log("Current select", sel);
        } else {
            console.log("please change the planet");
        }


    }




    return (
        <div className="row" key={uniqid()}>
            <div className="col-1" key={uniqid()}></div>
            {props.option.map(function (obj, i) {
                if (i < 4) {
                    return (
                        <div className="col-2" key={uniqid()}>
                            <div style={{ textAlign: "center" }}><b>Destination {++i}</b></div>
                            <select onChange={(e) => { changeSel(e) }}
                                typeof="select" className="form-control" name={"counrty" + i} placeholder="Country">
                                <option defaultValue="select1" value="null">Select</option>
                                {props.option.map((key, i) => {

                                    return (
                                        <option disabled={countryVal.includes(key) ? true : false}
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
    )
}




