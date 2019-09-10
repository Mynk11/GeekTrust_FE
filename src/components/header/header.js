import React from 'react';
import './header.css'
function Header(props) {

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

        </div>
    )
}

export default Header; 