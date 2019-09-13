import React from 'react';
import { Link } from 'react-router-dom';
import "./button.css";


export default function Button(props) {



    return (

        <div className={'row text-center mt-auto'}>

            <div className="col-sm-12 text-center">
                <Link className={"btn btn-submit  font-weight-bolder " + (props.link === "/result" ? "background" : "color")}
                    to={props.link}
                    style={{ "border": "1px solid ghostWhite" }}
                >
                    Find falcone!
                    </Link>
            </div>



        </div>

    )
}
