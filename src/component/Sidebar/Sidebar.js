import React from "react";
import './Sidebar.css';
import Bookmarkeditem from "../Bookmarkeditem/Bookmarkeditem";

const Sidebar = ({readtime, itembook}) => {
  return (
    <>
     <div className="sidebar">
     <div style={{background:'#a29bfe6b', border:'1px solid #6c5ce7'}} className="rounded mb-3 ">
        <h4  style={{color:'#6c5ce7'}} className="p-3 rounded">spent time on read : {
          readtime
        } min</h4>
      </div>

      <div className="bg-light rounded p-3 text-start">
        <h3>Bookmarked Blogs :{itembook.length}</h3>
        {
          itembook.map((singleitem, index) =>  <Bookmarkeditem key={index} singleitem={singleitem}></Bookmarkeditem>)
        }
      </div>
     </div>
    </>
  );
};

export default Sidebar;
