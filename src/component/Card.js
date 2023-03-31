import './Card.css';
import { useState } from 'react';

function Card(props) {

    const [showMore, setShowMore] = useState(true);
    const[text, setText] =useState(true);
     
    const ToggleSwitch=()=>{
        showMore?setShowMore(false):setShowMore(true);
        text? setText(false): setText(true);
    }

    return (
        <div className="box">
            {props.data.map((event, index) => {
                return (
                    <div key={index} className="card">
                        <div className='imgBox'>
                            <img src={event.image} />
                            <p className='price'>{event.price}</p>
                        </div>
                        <div className='infoBox'>
                            <h2>{event.name}</h2>
                            <p className={showMore ? "Show_less" : "Show_more"}>{event.info}</p>
                            <p className="reed_more"  onClick={() => setShowMore(!showMore)}>{showMore? "...Reed More":""}</p>
                            <button className='notInterested' onClick={props.ClickOnNotInterested}>Not Interested</button>
                        </div>
                    </div>)
            })}
        </div>);
}

export default Card;
