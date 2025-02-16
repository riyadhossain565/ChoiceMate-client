import { format } from "date-fns";
import { Link } from "react-router-dom";

const QueryCard = ({ query }) => {
  const {
    _id,
    productName,
    productBrand,
    productImage,
    dateCreated,
    recommendationCount,
  } = query || {};
  return (
    <div className="card bg-base-100 shadow-md p-4 border rounded-md">
      <figure>
        <img src={productImage} alt="Product Image" className="h-52 w-full" />
      </figure>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold my-2">{productName}</h2>
        <p className="text-sm mb-1">Brand: {productBrand}</p>
        <p className="text-sm mb-3">
          Query-Date: {format(new Date(dateCreated), "P")}
        </p>
        <p className="font-bold mb-3">
          Recommendations: {recommendationCount}
        </p>
        <Link
          to={`/query/${_id}`}
          className="btn text-white bg-[#ff7361] w-full transition-all hover:bg-[#2f3239]"
        >
          Recommend
        </Link>
      </div>
    </div>
  );
};

export default QueryCard;
