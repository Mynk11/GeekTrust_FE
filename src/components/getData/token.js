import React, { useEffect } from "react";
import { TOKEN_API } from '../../config/config';
import { NUMBER_OF_PLANETS } from '../../config/config';

export default function GetToken(props) {

    useEffect(() => {

        fetch(TOKEN_API, {
            "method": "POST",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            "body": ""
        }).then((suc) => {
            suc.json().then((data) => {
                console.log("Token====>", data.token);

                props.setToken(data.token);
            });

        }, err => {
            alert(`${err}`);
        }).catch((err) => {
            console.log("From catch=========>", err);
            alert(err);
        });
        console.log("TOken Api is===========>", TOKEN_API);
    }, []);
    return null;
}