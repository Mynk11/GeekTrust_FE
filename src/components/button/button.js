import React, { Component } from 'react';
import "./button.css";




export default class Button extends Component {
    state = {
        result: false,
        data: null,
        href: ""
    }

    check() {
        console.log("Check is called", this.state.href);
        this.setState({ href: '/result' })
    }

    onclick = (e) => {
        console.log("this=====>", this.props);
        var token = "";
        if (this.props.planets.length !== 4 && this.props.vehicles.length !== 4) {
            this.setState({ result: false })
        }
        else {
            this.setState({ result: true });
            fetch('https://findfalcone.herokuapp.com/token', {
                "method": "POST",
                "headers": {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                "body": ""
            }).then((suc) => {
                suc.json().then((data) => {
                    console.log("Data is", data);
                    token = data.token;
                    this.setState({ data: '/result' });
                    //console.log("Sel is::;", sel);
                    fetch("https://findfalcone.herokuapp.com/find", {
                        "method": "POST",
                        "headers": {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        "body": JSON.stringify({
                            "token": token,
                            "planet_names": this.props.planets,
                            "vehicle_names": this.props.vehicles
                        })
                    }).then(res => {
                        console.log("Response", res.ok, res.json().then(data => {
                            console.log('Data  is--', data);
                            if (res.ok) {
                                this.props.setResult(data);

                                //this.props.setResult(data);
                                //alert(`Congratulations you find the Falcone on planet ${data.planet_name}`);
                            } else {
                                alert(`Your prediction  to find Falcone is ${data.status}`);
                            }
                        }));
                    }).catch((err) => {
                        console.log(`Error from find Api ${err}`);
                    })

                });
                return suc.json();
            }, (fail) => {
                console.log("Attempt filed", fail);
            }).catch((err) => {
                console.log("Find falcone API call failed");
            })

        }
    }

    render() {
        console.log("Data=========>", this.state.data)
        return (

            <div className={'user row text-center mt-5 may'}>
                <button onMouseEnter={() => { this.check() }}
                    disabled={this.props.planets.length < 4 ? true : false}
                    onClick={() => {
                        this.onclick();
                    }} className="user btn btn-submit mt-5" style={{ border: "1px solid grey" }}>

                    <a href={this.props.planets.length < 4 ? null : this.state.href}>find falcone!</a>

                </button>


            </div>

        )
    }
}