import React from 'react';

const QueryCard = ({query}) => {
    const {_id, productName, productBrand, productImage, queryTitle, dateCreated, recommendationCount} = query || {}
    return (
        <div
              
              className="card bg-base-100 shadow-md p-4 border rounded-md"
            >
              <h2 className="text-xl font-semibold mb-2">
                {productName}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                Brand: {productBrand}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Timestamp: {format(new Date(dateCreated), 'P')}
              </p>
              <p className="font-bold text-gray-800 mb-3">
                Recommendations: {recommendationCount}
              </p>
              <button
                // onClick={() => navigate(`/query-details/${query.id}`)}
                className="btn btn-primary w-full"
              >
                Recommend
              </button>
            </div>
    );
};

export default QueryCard;