import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import GetPlanetsDetails from './components/planets/planets';
import SearchButton from './components/button/button';
import usePlanetState from './components/hooks/usePlanetState';
import useVehicleState from './components/hooks/useVehiclHook';
import { BrowserRouter, Route } from 'react-router-dom';
import Result from './components/result/result';

function App() {
  const [distanceObj, setDistanceObj] = useState({});
  const [selectePlanetObj, setSelectePlanetObj] = useState({})
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [planets, setPlanets] = usePlanetState([]);
  const [vehicles, setVehicles] = useVehicleState([]);
  const [result, setResult] = useState({});
  const [time, setTime] = useState(0);
  const [selVehicles, setselVehicles] = useVehicleState({});
  useEffect(() => {
    Promise.all([
      fetch("https://findfalcone.herokuapp.com/planets"),
      fetch("https://findfalcone.herokuapp.com/vehicles")
    ]).then((allResponses) => {
      allResponses[0].json().then((planet) => {
        setPlanets(planet);
        console.log("Planets===>", planets);
      });
      allResponses[1].json().then((vehicle) => {
        setVehicles(vehicle);
        console.log("vehicles===>", vehicles);
      });

    }).catch((err) => {
      console.log(err);
    });

  }, []);


  return (
    <div className="App container-fluid">
      <Header props={result}></Header>

      <BrowserRouter>
        <Route path="/" exact component={() => {
          return (
            <>
              <GetPlanetsDetails
                planets={planets}
                vehicles={vehicles}
                selectedPlanet={setSelectedPlanets}
                selectedVehicles={setSelectedVehicles}
                selectedPlnts={selectedPlanets}
                selectedVehcle={selectedVehicles}
                time={time}
                setTime={setTime}
                selVehicles={selVehicles}
                setselVehicles={setselVehicles}
                selectePlanetObj={selectePlanetObj}
                setSelectePlanetObj={setSelectePlanetObj}
                distanceObj={distanceObj}
                setDistanceObj={setDistanceObj}
              ></GetPlanetsDetails>

              <SearchButton
                planets={selectedPlanets}
                vehicles={selectedVehicles}
                setResult={setResult}
              >
              </SearchButton>
            </>
          )
        }}>

        </Route>


        <Route exact path="/result" component={() => <Result time={time} result={result}>{result}</Result>}></Route>
        <Footer>
        </Footer>
      </BrowserRouter>

      <Footer>
      </Footer>
    </div>
  );
}

export default App;
