import {useEffect, useState } from "react";
import "./App.css";
import Cards from "./component/Cards/Cards";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import Blog from "./component/Blog/Blog";

function App() {
 const [readtime, setReadtime] = useState(0);
 const [card, setCard] = useState([]);
 const[itembook, setItembook] = useState([]);

  // bookmarks
 const bookmarks = (card)=>{
  const existData = itembook.find(matchData => matchData.id === card.id)
  if (!existData) {
    const newbooked = [...itembook, card]
    setItembook(newbooked)
  }else{
    alert('Booked')
  }
 }
//  console.log(itembook)

 //  watchtime
   const addwatchTime = (time) =>{
   setReadtime(readtime + time)
   }


 useEffect(()=>{
     fetch('data.json')
     .then(res => res.json())
     .then(data => setCard(data))
 },[]);






 

  return (
    <div className="App container">
      <Navbar></Navbar>
      <div className="main row">
        <div className="col-12 col-md-8">
          <Cards card={card} bookmarks={bookmarks} addwatchTime={addwatchTime}></Cards>
        </div>
        <div className="col-12 col-md-4">
          <Sidebar itembook={itembook} readtime={readtime}></Sidebar>
        </div>
      </div>
      <hr />
      <Blog></Blog>
    </div>
  );
}

export default App;
