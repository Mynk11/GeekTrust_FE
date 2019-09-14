import { useEffect } from "react";
import { TOKEN_API } from '../../.env/config';

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
                props.setToken(data.token);
                props.setLink("/result");
            });

        }, err => {
            alert(`${err}`);
        }).catch((err) => {

            alert(err);
        });
    }, []);

    return null;
}