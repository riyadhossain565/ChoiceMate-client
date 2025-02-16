import { Link } from "react-router-dom";

const MyQuery = ({ query, mordernDelete }) => {
  const {
    _id,
    productName,
    productBrand,
    productImage,
    queryTitle,
    avoidReason,
  } = query || {};

  return (
    <div className="card rounded-md card-compact bg-base-100 shadow-xl hover:scale-[1.05] transition-all">
      <figure>
        <img className="h-52 w-full" src={productImage} alt="Product Image" />
      </figure>
      <div className="flex flex-col gap-1 items-center text-center">
        <h2 className="text-xl font-semibold my-2">{productName}</h2>
        <p>
          <strong>Brand:</strong> {productBrand}
        </p>
        <p>
          <strong>Query:</strong> {queryTitle}
        </p>
        <p className="px-2">
          <strong>Reason:</strong> {avoidReason.substring(0, 70)}...
        </p>
        <div className="card-actions justify-center my-4">
          <Link
            to={`/query/${_id}`}
            className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all font-bold shadow-lg"
          >
            view details
          </Link>

          <Link
            to={`/update-query/${_id}`}
            className=" bg-yellow-500 text-white px-4 py-2 rounded shadow hover:shadow-lg hover:bg-yellow-600"
          >
            Update
          </Link>
          <button
            onClick={() => mordernDelete(_id)}
            className=" bg-red-500 text-white px-4 py-2 rounded shadow hover:shadow-lg hover:bg-red-600"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyQuery;
