import React from 'react';
import { Link } from 'react-router-dom';
import "./button.css";


export default function Button(props) {
    return (

        <div className={'row text-center btnMargin'}>
            <div className="col-sm-12 text-center">
                <Link onClick={props.onclick}
                    className={"btn btn-submit  font-weight-bolder " + (props.link === "/result" ? "background" : "color")}
                    to={props.link}
                    style={{ "border": "1px solid ghostWhite" }}
                >
                    {props.children ? props.children : "Find falcone!"}
                </Link>
            </div>
        </div>

    )
}
