import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TimeComponent from '../components/time/time';
import ButtonComponent from '../components/button/button';
import { TOKEN_API, GET_VEHICLES, GET_PLANETS } from '../.env/config';
import App from '../App';




configure({ adapter: new Adapter() });


const mockTime = "230 sec";


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



    it("#App Mounted Succesfully", () => {
        expect(<App />).toMatchSnapshot();
    });


    it("#Timer Component Mounted Successfully", () => {
        expect(shallow(<TimeComponent time={mockTime}></TimeComponent>)).toMatchSnapshot();
    })

    it("#Button Component Mounted Successfully", () => {
        expect(shallow(<ButtonComponent link={"/"}></ButtonComponent>).length).toEqual(1);
    });


    it('renders an Button', () => {
        var container = shallow(<ButtonComponent link={"/"} />);

        //console.log("===========>", container.debug());
        expect(container.debug()).toMatchSnapshot();;
    });

});



