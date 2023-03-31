import React from "react";

const Sidebar = () => {
  return (
    <>
      <div style={{background:'#a29bfe6b', border:'1px solid #6c5ce7'}} className="rounded mb-3">
        <h4 style={{color:'#6c5ce7'}} className="p-3 rounded">spent time on read : 177 min</h4>
      </div>

      <div className="bg-light rounded p-3 text-start">
        <h3>Bookmarked Blogs : 5</h3>
        <h5 className="bg-white rounded p-2 mb-4">
          Lorem, ipsum Lorem ipsum dolor sit.
        </h5>
        <h5 className="bg-white rounded p-2 mb-4">
          Lorem, ipsum Lorem ipsum dolor sit.
        </h5>
        <h5 className="bg-white rounded p-2 mb-4">
          Lorem, ipsum Lorem ipsum dolor sit.
        </h5>
        <h5 className="bg-white rounded p-2 mb-4">
          Lorem, ipsum Lorem ipsum dolor sit.
        </h5>
        <h5 className="bg-white rounded p-2 mb-4">
          Lorem, ipsum Lorem ipsum dolor sit.
        </h5>
      </div>
    </>
  );
};

export default Sidebar;
