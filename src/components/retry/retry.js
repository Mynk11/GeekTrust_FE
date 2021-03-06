import React from "react";
import Button from '../button/button';

export default function Failure(props) {

    return (
        <>
            <div className="row text-center" style={{ fontFamily: "cursive" }}>

                <div className="col-sm-12 text-danger">

                    <h2 style={{ "color": "red" }}>We failed to find Falcone King shah is going to kill us!!</h2>
                    <div className="pt-2"><b>Time taken : {props.time} sec</b></div>
                </div>

            </div>
            <div className="row pt-3">
                <div className="col-sm-12 text-center">
                    <Button link={"/"} onclick={props.setAllNull}>Try Again!</Button>
                </div>
            </div>
        </>
    )

}