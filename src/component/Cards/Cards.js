import React from 'react';
import Singlecard from '../Singlecard/Singlecard';

const Cards = ({addwatchTime, addbookmark, card, bookmarks}) => {

    return (
        <div>
            {card.map(card => <Singlecard bookmarks={bookmarks} addbookmark={addbookmark} addwatchTime={addwatchTime} card={card} key={card.id}></Singlecard>)}
        </div>
    );
};

export default Cards;