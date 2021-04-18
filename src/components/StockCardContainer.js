import React from 'react';
import HighStockCard from './HighStockCard';
import LowStockCard from './LowStockCard';
import '../css/StockCardContainer.css';


const StockCardContainer = () => {
    return (
        <div className="card-container">
           <div className="high-container">
               <h6 className="title-high">Last 100 Days' 3 Daily Highs</h6>
               <HighStockCard />
           </div>

           <div className="low-container">
               <h6 className="title-low">Last 100 Days' 3 Daily Highs</h6>
               <LowStockCard />
           </div>
        </div>
    )
}
export default StockCardContainer;
