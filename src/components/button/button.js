import React, { Component } from 'react';
import "./button.css";
import Result from '../result/result.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Link } from 'react-router-dom';

export default class Button extends Component {
    state = {
        result: false,
        data: ""
    }

    onclick = (e) => {
        //console.log("this=====>", this.props);
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
                            "planet_names": ["Enchai", "Donlon", "Sapir", "Lerbin"],
                            "vehicle_names": ["Space pod", "Space rocket", "Space rocket", "Space rocket"]
                        })
                    }).then(res => {
                        console.log("Response", res.ok, res.json().then(data => {
                            console.log('Data  is--', data);
                            if (res.ok) {
                                this.setState({ data });
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
        //console.log("from button===>", this.props);
        return (
<Router>
<Link to="../result/result">
            <div className={'user row text-center mt-5 may' + this.props.length}
            >

                <button disabled={this.props.planets.length < 4 ? true : false} onClick={() => {
                    this.onclick();
                }} className="user btn btn-submit mt-5" style={{ border: "1px solid grey" }}>find falcone!
                

                        <Switch>
                            
                            <Route path="../result/result" exact component={Result}>
                                <Result data={this.state.data}></Result>
                            </Route>
                        </Switch>
                    
                </button>
                {/* {this.state.result ? window.open('../result/result') : ""} */}
            </div>
</Link>
</Router>
        )
    }
}