import { useState } from "react";
import "./App.css";
import Cards from "./component/Cards/Cards";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
 const [readtime, setReadtime] = useState(0);
 const [bookmark, setBookmark] = useState(0);

 
//  watchtime
  const addwatchTime = (time) =>{
  setReadtime(readtime + time)
  }


  // bookmarks
 const addbookmark = (card)=>{
  console.log(card)
  setBookmark(card)
 }
  return (
    <div className="App container">
      <Navbar></Navbar>
      <div className="main row">
        <div className="col-12 col-md-8">
          <Cards addbookmark={addbookmark} addwatchTime={addwatchTime}></Cards>
        </div>
        <div className="col-12 col-md-4">
          <Sidebar bookmark={bookmark} readtime={readtime}></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
