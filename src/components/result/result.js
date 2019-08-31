import React from 'react';


export default function Result(props) {
    //console.log("Props from Result===>", props);
    return (

        <div className="row text-center ">

            <div className="col-6"><h1>{props.result.planet_name}</h1> </div>
            <div className="col-6"> <h1>{props.result.status}</h1></div>


        </div>
    )
}