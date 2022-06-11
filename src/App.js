import "./App.css";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Restaurants from "./components/Restaurants";
import userInfo from "./data/userInfo.json";
import offers from "./data/offers.json";
import restaurants from "./data/restaurants.json";
import { useEffect, useState } from "react";


const filters = {
  0: "Cost high to low",
  1: "Cost low to high",
  2: "Ratings",
  3: "Delivery time",
  4: "Relevance",
};

function App() {
  const [filterBy, setFilterBy] = useState("");
  const [data, setdata] = useState(restaurants);
  const [datacopy, setdatacopy] = useState(restaurants);
  
  const updateFilter = (newFilter) => {
    switch (newFilter) {
      case "0": {
        setFilterBy(2);
        data.sort((a, b) => b.costForTwo - a.costForTwo);
        setdata([...data]);
        console.log(0)
        break;
      }
      case "1": {
        setFilterBy(1);
        data.sort((a, b) => a.costForTwo - b.costForTwo);
        setdata([...data]);
        break;
      }
      case "3": {
        data.sort((a, b) => a.deliveryTimings - b.deliveryTimings);
        setdata([...data]);
        console.log(3)
        break;
      }
      case "4": {
        console.log(4)
        break;
      }
      case "R5":{
        let data1 = datacopy.filter((item)=> { return item.rating>=5;})
        setdata([...data1]);
        // console.log(data1)
        break;


      }
      case "R4":{
        let data1 = datacopy.filter((item)=>item.rating>=4)
        setdata([...data1]);
        // console.log('R4')
        break;


        
      }
      case "R3":{
        let data1=datacopy.filter((item)=>item.rating>=3)
        setdata([...data1]);
        // console.log('R3')
        break;
        
      }
      case "R2":{
        let data1 = datacopy.filter((item)=>item.rating>=2)
        setdata([...data1]);
        // console.log('R2')
        break;

        
      }
      case "R1":{
        let data1 = datacopy.filter((item)=>item.rating>=1)
        setdata([...data1]);
        // console.log('R1')
        break;
        
      }
      default: {
        setdata(restaurants);
        break;
      }
    }
  };
  return (
    <div>
      <Navbar {...userInfo.location} />
      
      <Offers offers={offers} />
      <section className="near-you">
        <Filters
          filters={filters}
          updateFilter={updateFilter}
          currentFilterBy={filterBy}
        />
        <Restaurants restaurants={data} />
      </section>
    </div>
  );
}

export default App;
