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
import Token from './components/getData/token';
import FindFalcone from './components/getData/findFalApi';
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
  const [token, setToken] = useState();
  const [link, setLink] = useState();


  /* Method to reset the state */
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
      {/* Component for fetching data calling plants and vehicles api*/}
      <GetData setVehicles={setVehicles} setPlanets={setPlanets} ></GetData>


      <BrowserRouter>
        {/* Component for Header */}
        <Header setAllNull={setAllNull}></Header>
        {/* Component for creatin token */}
        {selectedVehicles.length === 4 ? <Token setLink={setLink} vehicles={vehicles} setToken={setToken}></Token> : ""}
        {/* Component for calling find falcone API */}
        {token ? <FindFalcone token={token} planets={selectedPlanets} vehicles={selectedVehicles} setResult={setResult} /> : ""}
        <Route path="/" exact component={() => {
          return (
            <>
              {/* Component  for static text  */}
              <TextContent props={result}></TextContent>
              <ErrorBoundary>
                {/* Container component for generaing planets dropdown and vehicles option */}
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

                {/* Button component  */}
                <SearchButton link={link} />



              </ErrorBoundary>
            </>
          )
        }}>

        </Route>

        <ErrorBoundary>
          {/* Result continer it has two compnent one for success and other for retry */}
          <Route path="/result" component={() => <Result
            setAllNull={setAllNull}
            time={totalTime}
            result={result}
            setLink={setLink}
          ></Result>}></Route>
        </ErrorBoundary>
        <Footer>
        </Footer>
      </BrowserRouter>
      {/* Static footer component */}
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
