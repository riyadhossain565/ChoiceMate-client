import axios from "axios";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const QueryDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);
  const { id } = useParams();
  const [recommendationsList, setRecommendationsList] = useState([]);

  useEffect(() => {
    fetchAllQuery();
    //fetch recommendation data to update the list
    fetchRecommendations(id);
  }, [id]);

  const fetchAllQuery = async () => {
    const { data } = await axios.get(`https://choice-mate-server.vercel.app/query/${id}`);
    setQueries(data);
    // console.log(data);
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

      // 0. Check bid permissions validation
      if (user?.email === queryCreator?.email)
        return toast.error("Action not premitted!");
  

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
      recommender: {
        email: user?.email,
        name: user?.displayName,
      },
      currentDate: new Date(Date.now()).toISOString(),
    };

    console.log(recommendData);

    try {
      // 1. make a post request
      await axios.post("https://choice-mate-server.vercel.app/add-recommend", recommendData);
      // 2. reset form
      form.reset();
      // 3. show toast
      toast.success("Recommendation Added Successfully");
      // 4. Refetch recommendations to update the list
      fetchRecommendations(queryId);
      navigate('/my-recommendations')
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const fetchRecommendations = async (queryId) => {
    const { data } = await axios.get(
      `https://choice-mate-server.vercel.app/recommendtion/${queryId}`
    );
    setRecommendationsList(data);
    console.log(data);
  };

  return (
    <div className="bg-base-200 min-h-screen py-10">
      <div className="w-10/12 mx-auto py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            Query Details
          </h1>
          <p className="text-gray-600 text-lg">
            View all the details of the selected query and add your
            recommendations.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
        <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
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
                required
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
                required
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
                required
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
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="flex justify-end lg:col-span-2 mt-6">
              <button className="btn text-white px-6 py-2 rounded-lg bg-[#ff7361] transition-all hover:bg-[#2f3239]">
                Add Recommendation
              </button>
            </div>
          </form>
        </div>

        {/* All Recommendations Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            All Recommendations For This Query
          </h2>
          {recommendationsList.length > 0 ? (
            <div className="space-y-4">
              {recommendationsList.map((recommendation) => (
                <div
                  key={recommendation._id}
                  className="p-4 border rounded-lg shadow-sm bg-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={recommendation.recommendedImgUrl}
                      alt="Recommended Product"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-bold text-lg">
                        {recommendation.recommendationTitle}
                      </h3>
                      <p className="text-sm text-gray-600">
                        <strong>Product Name: </strong>{" "}
                        {recommendation.recommendedName}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Reason: </strong>{" "}
                        {recommendation.recommendationReason}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        <strong>By: </strong>
                        {format(new Date(recommendation.currentDate), "P")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              No recommendations found for this query.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
