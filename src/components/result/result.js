import React from 'react';
import { Link } from 'react-router-dom';

export default function Result(props) {
    //console.log("Props from Result===>", props);
    if (props.result.status !== "false") {
        return (
            <>
                <div className="row">

                    <div className="col-sm-12 text-center">

                        <h4>falcone is hiding in {props.result.planet_name} & caught by us {props.result.status}fully</h4>
                        <div>Time taken:{props.time}</div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <a href="/" exact >Try Again</a>
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
                        <a href="/" exact >Try Again</a>
                    </div>
                </div>
            </>
        )
    }
}