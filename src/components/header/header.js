import React from 'react';

function Header() {
    return (
        <div className="container">
            <div className="row App-header header">
                <div className="col-10" style={{ textAlign: "right" }}><a className="active" aria-current="page" href="/">Reset</a></div>
                <div className="col-2" style={{ textAlign: "right" }}><a className="active" aria-current="page" href="https://www.geektrust.in">Geek Trust Home</a></div>
            </div>
            <div rowSpan="3" className="page-Header" style={{ textAlign: "center", fontSize: "16px" }}><b>Finding Falcoin!</b></div>

            <div className="row" >
                <div className="col-11" style={{ textAlign: "center", fontSize: "16px" }}>
                    Select which planet you want to search in
            </div>
            </div>
        </div>
    )
}

export default Header; 