import React from "react";
import { Link } from 'react-router-dom';


export default function Success(props) {

    return (
        <>
            <div className="row">

                <div className="col-sm-12 text-center">
                    <h3>Success! Congratultion on Finding Falcone King Shah is mighty pleased</h3>
                    <h5>falcone is hiding in <b>{props.result.planet_name}</b> & caught by us {props.result.status}fully</h5>
                    <div>Time taken : <b>{props.time}</b></div>
                </div>

            </div>
            <div className="row pt-3">
                <div className="col-sm-12 text-center">
                    <Link to="/" className="ResultButton" props={null} onClick={() => { props.setAllNull() }}>Catch him again</Link>
                </div>
            </div>
        </>
    )

}