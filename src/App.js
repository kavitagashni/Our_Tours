import './App.css';
import TourData from './Data.json';
import { useState } from 'react';
import Tours from './component/Tours';

function App() {

  const [data, setData] = useState(TourData);

  function ClickOnNotInterested(index) {
    setData((item) => {
      return item.filter((_, currentindex) => index !== currentindex );
    })
  }


  return (
    <div className="App">
      <h1>Our Tours</h1>
      <hr />
      <div className='box'>
        {data?.map((tour, index) => {
          return <Tours key={tour.id} {...tour} index={index} ClickOnNotInterested={ClickOnNotInterested} />;
        })}
      </div>


    </div>
  );
}

export default App;
