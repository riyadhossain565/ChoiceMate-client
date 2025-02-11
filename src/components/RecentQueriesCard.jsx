import { format } from 'date-fns';
import React from 'react';

const RecentQueriesCard = ({query}) => {
    const {
        _id,
        productName,
        productBrand,
        productImage,
        queryTitle,
        dateCreated,
        avoidReason,
      } = query || {};
    return (
        <div className="card bg-base-100 shadow-md p-4 border rounded-md">
      <figure>
        <img src={productImage} alt="Product Image" className="h-52 w-full"/>
      </figure>
      <div className="flex flex-col">
      <h2 className="text-xl font-semibold my-2">{productName}</h2>
      <p className="text-sm text-gray-600 mb-1"><strong>Brand: </strong> {productBrand}</p>
      <p className="text-sm text-gray-600 mb-1"><strong>Query-Name: </strong> {queryTitle}</p>
      <p className="text-sm text-gray-600 mb-3">
       <strong> Query-Date: </strong> {format(new Date(dateCreated), "P")}
      </p>
      <p className="text-sm text-gray-600 mb-3">
       <strong>Reason: </strong> {avoidReason.substring(0, 70)}...
      </p>
      <button className='w-full bg-[#ff7361] py-2 hover:bg-[#2f3239] hover:text-white transition-all rounded-md'>See More</button>
      </div>
    </div>
    );
};

export default RecentQueriesCard;