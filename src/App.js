import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StockCardContainer from './components/StockCardContainer';
import './App.css';

function App() {
  

  const [searchInput, setSearchInput] = useState("");

  const fetchStock = async (searchInput) => {
    const API_Key = 'FJOVNCNCVRYXKXQS';
    const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${searchInput}&outputsize=compact&apikey=${API_Key}`;
  
    const res = await fetch(API_Call);
    const resJson = await res.json();

    //Will result in the searched stock information to be logged to the console
    console.log(resJson);
  
    
  }

  useEffect(() => {
    fetchStock(searchInput);
  }, [searchInput]);


  return (
    <div className="app">
      <Header 
        className="search-box-component"
          searchInput = { searchInput } 
          setSearchInput = { setSearchInput }
      />
      <div>
        <StockCardContainer></StockCardContainer>
      </div>
      
    </div>
  );
}

export default App;
