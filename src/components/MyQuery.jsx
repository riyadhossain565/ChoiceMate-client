const MyQuery = ({ query, handleDelete }) => {
  const {_id, productName, productBrand, productImage, queryTitle, avoidReason } =
    query || {};

    
  return (
    <div className="card card-compact bg-base-100 w-80 shadow-xl hover:scale-[1.05] transition-all">
      <figure>
        <img className="h-52 w-full" src={productImage} alt="Product Image" />
      </figure>
      <div className="flex flex-col gap-1 items-center text-center">
        <h2 className="text-xl font-semibold my-2">{productName}</h2>
        <p className="text-gray-600">
          <strong>Brand:</strong> {productBrand}
        </p>
        <p className="text-gray-600">
          <strong>Query:</strong> {queryTitle}
        </p>
        <p className="text-gray-600">
          <strong>Reason:</strong> {avoidReason.substring(0, 70)}...
        </p>
        <div className="card-actions justify-center my-2">
          <button className="btn btn-primary">view details</button>
          <button className="btn btn-primary">update</button>
          <button 
          onClick={()=> handleDelete(_id)} 
          className="btn btn-primary">delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyQuery;
