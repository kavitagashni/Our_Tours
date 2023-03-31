import './App.css';
import TourData from'./Data.json'
import './component/Card'
import Card from './component/Card';
import { useState } from 'react';

function App() {
const [data, setData]= useState(TourData);


function ClickOnNotInterested (){
  setData([]);
 
}


  return (
    <div className="App">
      <h1>Our Tours</h1>
      <hr/>
      <Card data={data} ClickOnNotInterested={ClickOnNotInterested}/>
    </div>
  );
}

export default App;
