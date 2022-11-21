import React from "react";
import CoinItem from "./CoinItem/CoinItem";
import './Coins.css';

const Coins = ({ coins }) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Market cap</p>
        </div>
        {coins.map((coins) => (
          <CoinItem coins={coins}  key={coins.id} />
        ))}
      </div>
    </div>
  );
};

export default Coins;
