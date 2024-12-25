import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const QueryDetails = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchAllQuery();
  }, [id]);

  const fetchAllQuery = async () => {
    const { data } = await axios.get(`http://localhost:5000/query/${id}`);
    setQueries(data);
    console.log(data);
  };

  const {
    _id,
    queryTitle,
    productName,
    productBrand,
    avoidReason,
    queryCreator,
    productImage,
  } = queries || {};

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const recommendationTitle = form.recommendationTitle.value;
    const recommendedName = form.recommendedName.value;
    const recommendedImgUrl = form.recommendedImgUrl.value;
    const recommendationReason = form.recommendationReason.value;
    const queryId = _id;

    const recommendData = {
      recommendationTitle,
      recommendedName,
      recommendedImgUrl,
      recommendationReason,
      queryId,
      queryTitle,
      productName,
      queryCreator: {
        email: queryCreator?.email,
        name: queryCreator?.name,
      },
      Recommender: {
        email: user?.email,
        name: user?.displayName
      },
      currentDate: new Date(Date.now()).toISOString(),
    };

    console.log(recommendData);

    try {
      // 1. make a post request
      await axios.post('http://localhost:5000/add-recommend', recommendData)
      // 2. reset form
      form.reset()
      // 3. show toast 
      toast.success("Recommendation Added Successfully")
      console.log("added")
    }catch(err){
      console.log(err)
      toast.error(err.message)
    }
  };

  return (
    <div className="bg-base-200 min-h-screen py-10">
      {/* Page Header */}
      <div className="w-10/12 mx-auto text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Query Details
        </h1>
        <p className="text-gray-600 text-lg">
          View all the details of the selected query and add your
          recommendations.
        </p>
      </div>

      {/* Main Content */}
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Information Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Query-Creator Information:
          </h2>
          <div className="flex items-center gap-4">
            <img
              src={queryCreator?.photo}
              alt="User Profile"
              className="w-16 h-16 rounded-full border-2 border-primary"
            />
            <div>
              <p className="font-bold text-lg text-gray-700">
                {queryCreator?.name}
              </p>
              <p className="text-sm text-gray-500">{queryCreator?.email}</p>
            </div>
          </div>
        </div>

        {/* Query Details Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Query Information
          </h2>
          <div className="space-y-3">
            <p>
              <strong>Query Title:</strong> {queryTitle}
            </p>
            <p>
              <strong>Product Name:</strong> {productName}
            </p>
            <p>
              <strong>Product Brand:</strong> {productBrand}
            </p>
            <p>
              <strong>Boycotting Reason:</strong> {avoidReason}
            </p>
          </div>
          <div className="mt-6">
            <img
              src={productImage}
              alt="Product"
              className="rounded-md shadow-md w-full"
            />
          </div>
        </div>
      </div>

      {/* Recommendation Section */}
      <div className="w-10/12 mx-auto mt-12 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Add Your Recommendation
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Recommendation Title */}
          <div className="form-control">
            <label className="label font-semibold text-gray-600">
              Recommendation Title
            </label>
            <input
              type="text"
              name="recommendationTitle"
              placeholder="Enter recommendation title"
              className="input input-bordered w-full"
            />
          </div>
          {/* Recommended Product Name */}
          <div className="form-control">
            <label className="label font-semibold text-gray-600">
              Recommended Product Name
            </label>
            <input
              type="text"
              name="recommendedName"
              placeholder="Enter product name"
              className="input input-bordered w-full"
            />
          </div>
          {/* Recommended Product Image */}
          <div className="form-control lg:col-span-2">
            <label className="label font-semibold text-gray-600">
              Recommended Product Image URL
            </label>
            <input
              type="text"
              name="recommendedImgUrl"
              placeholder="Paste the image URL here"
              className="input input-bordered w-full"
            />
          </div>
          {/* Recommendation Reason */}
          <div className="form-control lg:col-span-2">
            <label className="label font-semibold text-gray-600">
              Recommendation Reason
            </label>
            <textarea
              name="recommendationReason"
              placeholder="Explain why you recommend this product..."
              className="textarea textarea-bordered w-full h-24"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="flex justify-end col-span-2 mt-6">
            <button className="btn text-white px-6 py-2 rounded-lg bg-[#ff7361] transition-all hover:bg-[#2f3239]">
              Add Recommendation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QueryDetails;
