import React from "react";

const Sidebar = ({readtime, bookmark}) => {
  // const [time, setTime] = useState(0)
  // useEffect(()=>{
  //   const localsoragereadtimee = localStorage.getItem('readtime');
  //   setTime(localsoragereadtimee)
  // },[readtime])
  // if (!bookmark === 0) {
  //   return
  // }
  
  return (
    <>
      <div style={{background:'#a29bfe6b', border:'1px solid #6c5ce7'}} className="rounded mb-3">
        <h4  style={{color:'#6c5ce7'}} className="p-3 rounded">spent time on read : {
          readtime
        } min</h4>
      </div>

      <div className="bg-light rounded p-3 text-start">
        <h3>Bookmarked Blogs : {bookmark}</h3>
        <h5 className="bg-white rounded p-2 mb-4">
          Lorem, ipsum Lorem ipsum dolor sit.{bookmark}
        </h5>
      </div>
    </>
  );
};

export default Sidebar;
