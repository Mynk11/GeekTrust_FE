import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';
import { isUndefined } from 'util';
export default function Result(props) {
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
                        <h6>falcone is hiding in <i>{props.result.planet_name}</i> & caught by us {props.result.status}fully</h6>
                        <div>Time taken : {props.time}</div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <Link to="/" props={null} >Catch him again</Link>
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
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <Link to="/">Try Again</Link>
                    </div>
                </div>
            </>
        )
    }
}