import React from "react";
import { AiOutlineStar } from "react-icons/ai"

const Filters = ({ filters, updateFilter }, { currentFilterBy }) => {
  return (
    <div className="container restaurants">
      <h1>50 restaurants</h1>
      <div className="restaurant-options">
        <div
          className="restaurant-option"
          onClick={() => {
            updateFilter("0");
            // console.log(0)
          }}
        >
          Cost high to low
        </div>

        <div
          className="restaurant-option"
          onClick={() => {
            updateFilter("1");
            // console.log(1)
          }}
        >
          Cost low to high
        </div> 
        <select
          className="restaurant-option optiobtn"
          onChange={(e) => {
            updateFilter(e.target.value);            
          }}
        >
          <option value="">Ratings</option>
          <option value="R5" >★★★★★</option>
          <option value="R4" >★★★★☆</option>
          <option value="R3" >★★★☆☆</option>
          <option value="R2" >★★☆☆☆</option>
          <option value="R1" >★☆☆☆☆</option>
        </select>
          
        <div
          className="restaurant-option"
          onClick={() => {
            updateFilter("3");
            // console.log(3)
          }}
        >
          Delivery time
        </div>

        <div
          className="restaurant-option"
          onClick={() => {
            updateFilter("4");
            // console.log(4);
          }}
        >
          Relevance
        </div>
      </div>
    </div>
  );
};

export default Filters;
