// import React from 'react';
import React, { useEffect, useState } from 'react';
import Singlecard from '../Singlecard/Singlecard';

const Cards = ({addwatchTime, addbookmark}) => {
    const [card, setCard] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCard(data))
    },[]);


    return (
        <div>
            {card.map(card => <Singlecard addbookmark={addbookmark} addwatchTime={addwatchTime} card={card} key={card.id}></Singlecard>)}
        </div>
    );
};

export default Cards;