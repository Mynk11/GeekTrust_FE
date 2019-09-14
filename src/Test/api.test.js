import { TOKEN_API, GET_VEHICLES, GET_PLANETS } from '../config/config';


describe("API teting", () => {
    it("#Token API Testing", () => {

        fetch(TOKEN_API, {
            "method": "POST",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            "body": ""
        }).then((suc) => {
            suc.json().then((data) => {
                data.token.expect(String);

            });

        }, err => {
            console.log(`API Fails to feth ${err}`)
        });
    });



    it("#Planets API Testing", () => {

        Promise.all([
            fetch(GET_PLANETS),
            fetch(GET_VEHICLES)
        ]).then((allResponses) => {
            allResponses[0].json().then((planet) => {

                planet.expect([])

            });
            allResponses[1].json().then((vehicle) => {
                vehicle.expect([])

            });

        }).catch((err) => {
            console.log(`API Fails to fetch ${err}`);
        });
    });

});