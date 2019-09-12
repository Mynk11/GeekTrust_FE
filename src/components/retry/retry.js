import React from "react";
import { Link } from 'react-router-dom';


export default function Failure(props) {

    return (
        <>
            <div className="row">

                <div className="col-sm-12 text-center">

                    <h4>We failed to find Falcone King shah is going to kill us!!</h4>
                    <div>Time taken : <b>{props.time}</b></div>
                </div>

            </div>
            <div className="row pt-3">
                <div className="col-sm-12 text-center">
                    <Link to="/" className="ResultButton" onClick={() => { props.setAllNull() }}>Try Again</Link>
                </div>
            </div>
        </>
    )

}