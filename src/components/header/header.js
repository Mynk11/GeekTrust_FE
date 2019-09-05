import React from 'react';
import './header.css'
function Header(props) {
    //console.log("props=============>", props.props.status);
    var result = { status: null };
    if (props.props.status) {
        result.status = props.props.status;
    }
    return (
        <div className="container-fluid">
            <div className="row App-header header">
                <div className="col-sm-9 font-weight-bolder">
                    <span style={{ color: "white" }}>Find  falcone</span>
                </div>


                <div className="col-sm-3 pl-2">
                    <span className=" text-right font-weight-bolder pr-3">
                        <a className="color" aria-current="page" href="/">Reset</a>
                    </span>
                    <span className="text-center"> | </span>

                    <a className="font-weight-bolder color text-left pl-3" aria-current="page" href="https://www.geektrust.in">

                        <span>Geek Trust Home</span>
                    </a>
                </div>
            </div>
            <div rowSpan="3" className={result.status !== null ? "displayNone" : "" + "page-Header pt-2 font-weight-bolder"}
                style={{ textAlign: "center", fontSize: "20px" }}><b>Finding Falcoin!</b></div>

            <div className={result.status !== null ? "displayNone" : " " + "row"}>
                <div className="col-12 font-weight-bold" style={{ textAlign: "center", fontSize: "16px" }}>
                    Select which planet you want to search in
            </div>
            </div>
        </div >
    )
}

export default Header; 