import React from 'react';

const Bookmarkeditem = ({singleitem}) => {
   
    return (
        <div>
             <h6 className="bg-white rounded p-2 mb-4">
             {singleitem.details}
        </h6>
        </div>
    );
};

export default Bookmarkeditem;