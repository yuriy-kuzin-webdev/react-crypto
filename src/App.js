import React, { useState, useEffect } from "react";
import axios from "axios";
import {Routes, Route} from 'react-router-dom'
import Coin from './routes/Coin'

import Coins from "./components/Coins";
import Navbar from "./components/Navbar";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=10&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />}/>
        <Route path='/coin' element={<Coin/>}>
          <Route path=':coinId' element={<Coin/>}/>
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
