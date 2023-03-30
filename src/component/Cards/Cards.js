import React, { useEffect, useState } from 'react';
import Singlecard from '../Singlecard/Singlecard';

const Cards = () => {
    const [card, setCard] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCard(data))
    },[]);
console.log(card)
    return (
        <div>
            {card.map(card => <Singlecard card={card}></Singlecard>)}
        </div>
    );
};

export default Cards;