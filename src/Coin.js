import React from 'react';
import './Coin.css';

const Coin = ({ image, name, price, pricechange, marketcap }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol"></p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Rs.{price}</p>

          {/* Conditional rendering for price change */}
          {pricechange < 0 ? (
            <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
          )}

          {/* Check if marketcap is available before rendering */}
          {marketcap ? (
            <p className="coin-marketcap">
              Mkt Cap: Rs.{marketcap.toLocaleString()}
            </p>
          ) : (
            <p className="coin-marketcap">Market cap data not available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
