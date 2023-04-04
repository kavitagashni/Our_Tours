import './Tours.css';
import React, { useState } from 'react';


const Tours = ({ id, index, image, info, name, price, ClickOnNotInterested }) => {
  
  const [showMore, setShowMore] = useState(true);

  return (
    <div className="card" key={id}>
      <div className='imgBox'>
        <img src={image} />
        <p className='price'>{price}</p>
      </div>

      <div className='infoBox'>
        <h2>{name}</h2>
        <p className='info'>{!showMore ? info : `${info.substring(0, 200)}`}
          <button className='showMoreOrLess' onClick={() => setShowMore(!showMore)}>
            {showMore ? '...read more' : '...show less'}
          </button>
        </p>
        <button className='notInterested' onClick={() => ClickOnNotInterested(index)}>Not Interested</button>
      </div>
    </div>
  );
};

export default Tours;
