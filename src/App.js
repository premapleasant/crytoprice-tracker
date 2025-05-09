import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
        console.log(res.data);  // Check API response structure
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <form action="">
          <input
            type="text"
            className="coin-input"
            placeholder="Provide the coin name"
            onChange={handleChange}
          />
        </form>
      </div>

      {filteredCoins.length === 0 ? (
        <p>No results found</p>  // Display message if no coins match the search
      ) : (
        filteredCoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap || 0}  // Default to 0 if market cap is undefined
              price={coin.current_price || 0}    // Default to 0 if price is undefined
              pricechange={coin.price_change_percentage_24h || 0}  // Default to 0 if price change is undefined
            />
          );
        })
      )}
    </div>
  );
}

export default App;
