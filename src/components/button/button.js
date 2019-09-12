import React, { Component } from 'react';
import { TOKEN_API, FALCONE_API, NUMBER_OF_PLANETS } from '../../config/config';
import { Link } from 'react-router-dom';
import "./button.css";


export default class Button extends Component {
    state = {
        result: false,
        data: null,
        href: ""
    }

    check() {

        if (this.props.vehicles.length < NUMBER_OF_PLANETS) {
            this.setState({ href: null })
        }
        else {
            this.setState({ href: '/result' })
        }

    }

    onclick = (e) => {

        var token = "";
        if (this.props.planets.length !== NUMBER_OF_PLANETS && this.props.vehicles.length !== NUMBER_OF_PLANETS) {
            this.setState({ result: false })
        }
        else {

            console.log("props from button===>", this.props);
            this.setState({ result: true });
            this.setState({
                data: '/result'
            });


            if (this.props.token) {
                fetch(TOKEN_API, {
                    "method": "POST",
                    "headers": {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    "body": ""
                }).then((suc) => {
                    suc.json().then((data) => {
                        console.log("Data is");
                        token = this.props.token || data.token;


                        fetch(FALCONE_API, {
                            "method": "POST",
                            "headers": {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            "body": JSON.stringify({
                                "token": this.props.token,
                                "planet_names": this.props.planets,
                                "vehicle_names": this.props.vehicles
                            })
                        }).then(res => {

                            res.clone().json().then(data => {
                                console.log('Data  is--', data);

                                if (res.ok) {

                                    this.props.setResult(data);
                                } else {
                                    alert(`${data.error}`);
                                }
                            });
                        }).catch((err) => {
                            console.log(`Error from find Api ${err}`);
                        });
                    });
                }, (fail) => {
                    console.log("Attempt filed", fail);
                }).catch((err) => {
                    console.log("Find falcone API call failed", err);
                })
            }
        }
    }

    render() {
        return (

            <div className={'user row text-center mt-5 may'}>
                <button onMouseEnter={() => { this.check() }}
                    disabled={this.props.planets.length < NUMBER_OF_PLANETS ? true : false}
                    onClick={() => {
                        this.onclick();
                    }} className="user btn btn-submit mt-5" style={{ border: "1px solid grey" }}>

                    <Link className="font-weight-bolder color"
                        to={((this.props.planets.length < NUMBER_OF_PLANETS) && (this.props.vehicles.length < NUMBER_OF_PLANETS)) ? null : this.state.href}>
                        Find falcone!
                    </Link>

                </button>


            </div>

        )
    }
}