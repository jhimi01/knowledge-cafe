import React from 'react';

const Bookmarkeditem = ({singleitem}) => {
   
    return (
        <div>
             <h5 className="bg-white rounded p-2 mb-4">
             {singleitem.details}
        </h5>
        </div>
    );
};

export default Bookmarkeditem;