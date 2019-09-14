import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TOKEN_API, GET_VEHICLES, GET_PLANETS } from './config/config';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



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
      console.log(err);
    });
  });

});