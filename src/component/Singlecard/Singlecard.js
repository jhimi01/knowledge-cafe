import React, { useState } from 'react';

const Singlecard = ({card, addwatchTime, bookmarks}) => {
    const {url, user, user_img, date, details, time} = card;

    const [colorbook, setColorbook] = useState(false);
const handleboolmarl =()=>{
  setColorbook(true)
}

    return (
        <div>
            <div className=" mb-4 w-full">
  <img src={url} className="card-img-top" alt="..."/>
  <div className="card-body">
  <div className='text-start mt-3 d-flex justify-content-between align-items-center'>

  <div className='d-flex gap-3'>
  <img style={{'width':'50px', 'height':'50px', 'borderRadius':'50%'}} src={user_img} alt="user" />
  <div>
  <h5 className='mb-0'>{user}</h5>
    <p className='text-secondary'>{date}</p>
  </div>
  </div>

  <div className='text-secondary d-flex gap-3'>
    <p>{time} min read</p>
    <p onClick={()=>{bookmarks(card)}} style={{width:'20px', cursor:'pointer'}}>{<svg onClick={handleboolmarl} xmlns="http://www.w3.org/2000/svg" fill={colorbook? 'black': 'none'} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-1 h-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>}
</p>
  </div>
  </div>
    <h3 className="card-text text-start">{details}</h3>
    <p className='text-start text-secondary'>#beginners #programming</p>
    <h6 onClick={()=>{addwatchTime(time)}} style={{color:'#6047EC', cursor:'pointer',width:'95px', 'userSelect': 'none'}} className='text-start d-block text-decoration-underline'>Mark as read</h6>
  </div>
</div>
<hr />
        </div>
    );
};

export default Singlecard;<h2>sfddsgfds</h2>