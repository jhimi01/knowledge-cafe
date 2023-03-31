import React from 'react';
// import React, { useEffect, useState } from 'react';
import Singlecard from '../Singlecard/Singlecard';

const Cards = ({addwatchTime, addbookmark, card, bookmarks}) => {
    // const [card, setCard] = useState([]);
    // const[itembook, setItembook] = useState([]);

    //  // bookmarks
    // const bookmarks = (card)=>{
    //     const newbooked = [...itembook, card]
    //     setItembook(newbooked)
    // }
    // console.log(itembook)



    // useEffect(()=>{
    //     fetch('data.json')
    //     .then(res => res.json())
    //     .then(data => setCard(data))
    // },[]);


    return (
        <div>
            {card.map(card => <Singlecard bookmarks={bookmarks} addbookmark={addbookmark} addwatchTime={addwatchTime} card={card} key={card.id}></Singlecard>)}
        </div>
    );
};

export default Cards;