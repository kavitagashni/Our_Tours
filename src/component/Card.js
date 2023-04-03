import './Card.css';
import { useState } from 'react';

function Card(props) {

    const [showMore, setShowMore] = useState(true);

    const ToggleSwitch = (id) => {
        for (let i = 0; i < props.data.length; i++) {
            if (id == i) {
                setShowMore(!showMore);
            } else{
                console.log("else")
                setShowMore(showMore)
            }
        }
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
                            <p className="reed_more" onClick={() => ToggleSwitch(index)}>{showMore ? "...Reed More" : "...Reed Less"}</p>
                            <button className='notInterested' onClick={() => props.ClickOnNotInterested(index)}>Not Interested</button>
                        </div>
                    </div>)
            })}
        </div>);
}

export default Card;
