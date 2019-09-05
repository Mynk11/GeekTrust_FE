import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';
import { isUndefined } from 'util';
import './result.css';
export default function Result(props) {
    useEffect(() => {


    }, [])
    const setAllNull = () => {
        props.setTotalTime(0);
        props.selectedPlanet([]);
        props.selectedVehicles([]);
        props.setDistanceObj({});
        props.setTime({});
        props.setselVehicles({});
        props.setSelectePlanetObj({});
        props.setResult({});
        console.log(`Set all null is called:==> ${props}`);
    }
    console.log("Props from Result===>", props.result);
    if (isUndefined(props.result.status)) {
        console.log("Props from Result=========>", props.result);
        return <Loader></Loader>
    }

    else if (props.result.status !== "false") {
        return (
            <>
                <div className="row">

                    <div className="col-sm-12 text-center">
                        <h3>Success! Congratultion on Finding Falcone King Shah is mighty pleased</h3>
                        <h5>falcone is hiding in <i>{props.result.planet_name}</i> & caught by us {props.result.status}fully</h5>
                        <div>Time taken : {props.time}</div>
                    </div>

                </div>
                <div className="row pt-3">
                    <div className="col-sm-12 text-center">
                        <Link to="/" className="ResultButton" props={null} onClick={() => { setAllNull() }}>Catch him again</Link>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="row">

                    <div className="col-sm-12 text-center">

                        <h4>We failed to find Falcone King shah is going to kill us!!</h4>
                        <div>Time taken:{props.time}</div>
                    </div>

                </div>
                <div className="row pt-3">
                    <div className="col-sm-12 text-center">
                        <Link to="/" className="ResultButton" onClick={() => { setAllNull() }}>Try Again</Link>
                    </div>
                </div>
            </>
        )
    }
}