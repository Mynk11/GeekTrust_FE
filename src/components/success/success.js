import React from "react";
import Button from '../button/button';

export default function Success(props) {

    return (
        <>
            <div className="row">

                <div className="col-sm-12 text-center text-success">
                    <h3>Success! Congratultion on Finding Falcone King Shah is mighty pleased</h3>
                    <h5>falcone is hiding in <b>{props.result.planet_name}</b> & caught by us {props.result.status}fully</h5>
                    <div className='pt-2'><b>Time taken : {props.time} sec</b></div>
                </div>

            </div>
            <div className="row pt-3">
                <div className="col-sm-12 text-center">
                    <Button link={"/"} onclick={props.setAllNull}>Catch Him Again</Button>
                </div>
            </div>
        </>
    )

}