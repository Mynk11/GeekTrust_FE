import React, { PureComponent } from "react";
var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "none",
    textAlign: "center",
    paddingBottom: "5px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "100%",
}

var phantom = {
    display: 'block',
    paddingBottom: '5px',
    height: '40px',
    width: '100%',
}



class Footer extends PureComponent {

    render() {
        return (
            <div className="font-italic">
                <div style={phantom} />
                <div style={style}>


                    <div style={{ paddingTop: "0.7%" }}>
                        <span className="font-weight-bold" style={{ color: "black" }}>Coding problem - </span>
                        <a className="font-weight-bolder" style={{ color: "green" }}
                            href="https://www.geektrust.in/coding-problem/frontend/space"> www.geektrust.in/finding-falcone
                </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;