import React, { useState } from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import GetPlanetsDetails from './components/planets/planets';
import SearchButton from './components/button/button';
import usePlanetState from './components/hooks/usePlanetState';
import useVehicleState from './components/hooks/useVehiclHook';
import Result from './components/result/result';
import TextContent from './components/textContent/textContent';
import ErrorBoundary from './components/errorBoundary/errorBondary';
import GetData from './components/getData/getData';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

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

  const setAllNull = () => {
    setTotalTime(0);
    setSelectedPlanets([])
    setSelectedVehicles([])
    setDistanceObj({});
    setTime({});
    setselVehicles({});
    setSelectePlanetObj({});
    setResult({});

  }


  return (
    <div className="App container-fluid">
      <GetData setVehicles={setVehicles} setPlanets={setPlanets} ></GetData>
      <BrowserRouter>
        <Header setAllNull={setAllNull}></Header>
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
          <Route path="/result" component={() => <Result
            setAllNull={setAllNull}
            time={totalTime}
            result={result}></Result>}></Route>
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
