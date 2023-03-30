import React from 'react';

const Navbar = () => {
    return (
        <>
         <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <h1 className="navbar-brand mt-3 fs-1">Knowledge Cafe</h1>
   <div>
    <img style={{width: '60px',height:'60px'}} className='rounded-circle' src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
   </div>
  </div>
</nav>
<hr />
   
        </>
    );
};

export default Navbar;