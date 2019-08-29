import React from 'react';


export default function Result(props) {
    return (

        <div className="row text-center text-dark mt-4">

            <h1>props.data.planet_name</h1>
            <h1>props.data.status</h1>
        </div>
    )
}