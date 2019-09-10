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
import TextContent from './components/textContent/textContent';
import ErrorBoundary from './components/errorBoundary/errorBondary';
import { GET_PlANETS, GET_VEHICLES } from './config/config';
function App() {
  const [totalTime, setTotalTime] = useState(0);
  const [distanceObj, setDistanceObj] = useState({});
  const [selectePlanetObj, setSelectePlanetObj] = useState({})
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [planets, setPlanets] = usePlanetState([]);
  const [vehicles, setVehicles] = useVehicleState([]);
  const [result, setResult] = useState({});
  const [time, setTime] = useState({});
  const [selVehicles, setselVehicles] = useVehicleState({});
  useEffect(() => {
    Promise.all([
      fetch(GET_PlANETS),
      fetch(GET_VEHICLES)
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
    <div className="App container-fluid">

      <Header props={result}></Header>


      <BrowserRouter>
        <Route path="/" exact component={() => {
          return (
            <>
              <TextContent props={result}></TextContent>
              <ErrorBoundary>
                <GetPlanetsDetails
                  totalTime={totalTime}
                  setTotalTime={setTotalTime}
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
              </ErrorBoundary>
            </>
          )
        }}>

        </Route>

        <ErrorBoundary>
          <Route exact path="/result" component={() => <Result

            totalTime={totalTime}
            setTotalTime={setTotalTime}
            selectedPlanet={setSelectedPlanets}
            selectedVehicles={setSelectedVehicles}
            setTime={setTime}
            setselVehicles={setselVehicles}
            setSelectePlanetObj={setSelectePlanetObj}
            setDistanceObj={setDistanceObj}
            setResult={setResult}
            time={totalTime}
            result={result}>{result}</Result>}></Route>
        </ErrorBoundary>
        <Footer>
        </Footer>
      </BrowserRouter>

      <Footer>
      </Footer>
    </div>
  );
}

export default App;
