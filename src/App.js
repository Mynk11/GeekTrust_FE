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
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [planets, setPlanets] = usePlanetState([]);
  const [vehicles, setVehicles] = useVehicleState([]);
  const [result, setResult] = useState("");
  const [time, setTime] = useState(0);
  useEffect(() => {
    Promise.all([
      fetch("https://findfalcone.herokuapp.com/planets"),
      fetch("https://findfalcone.herokuapp.com/vehicles")
    ]).then((allResponses) => {
      allResponses[0].json().then((planet) => {
        setPlanets(planet);
      });
      allResponses[1].json().then((vehicle) => {
        setVehicles(vehicle);
      });

    }).catch((err) => {
      console.log(err);
    });

  }, []);


  return (
    <div className="App " >
      <Header className="backgroundColor"></Header>

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

        {console.log("Result is====>", result)}
        <Route exact path="/result" component={() => <Result result={result}>{result}</Result>}></Route>
        <Footer>
        </Footer>
      </BrowserRouter>

      <Footer>
      </Footer>
    </div>
  );
}

export default App;
