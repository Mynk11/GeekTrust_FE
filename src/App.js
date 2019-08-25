import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import GetPlanetsDetails from './components/planets/planets';
import SearchButton from './components/button/button';

function App() {
  const [p, setP] = useState({});
  const [v, setV] = useState({});
  console.log("App .js", p, v);
  return (
    <div className="App" >
      <Header></Header>
      <GetPlanetsDetails p={setP} v={setV}></GetPlanetsDetails>
      <SearchButton planets={p} vehicles={v}></SearchButton>
      <Footer></Footer>
    </div>
  );
}

export default App;
