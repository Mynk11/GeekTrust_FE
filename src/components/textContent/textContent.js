import React from 'react';


export default function TextContet(props) {


    return (
        <>
            <div rowSpan="3"
                style={{ textAlign: "center", fontSize: "20px" }}><b>Finding Falcoin!</b>
            </div>

            <div >
                <div className="col-12 font-weight-bold" style={{ textAlign: "center", fontSize: "16px" }}>
                    Select which planet you want to search in
            </div>
            </div>
        </>
    )
}