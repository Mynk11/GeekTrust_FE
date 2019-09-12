import React, { useEffect } from "react";
import { FALCONE_API } from '../../config/config';
export default function GetFindResult(props) {

    useEffect(() => {

        fetch(FALCONE_API, {
            "method": "POST",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            "body": JSON.stringify({
                "token": props.token,
                "planet_names": props.planets,
                "vehicle_names": props.vehicles
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
    })
}