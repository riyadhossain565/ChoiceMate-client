import axios from "axios";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const RecommendationsForMe = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetchAllRecommendation();
  }, [user]);

  const fetchAllRecommendation = async () => {
    const { data } = await axios.get(
      `https://choice-mate-server.vercel.app/recommendations/${user?.email}?queryCreator=true`,
      { withCredentials: true } 
    );
    setRecommendations(data);
    console.log(data);
  };
  return (
    <div className="w-10/12 mx-auto py-20">
      <div className="overflow-x-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Recommendations For Me
        </h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Recommender Email</th>
              <th>Product</th>
              <th>Recommendation Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.length === 0 ? (
              <p className="text-xl">No recommendations found.</p>
            ) : (
              recommendations.map((recommendation, index) => (
                <tr className="hover:bg-gray-50">
                  <th>{index + 1}</th>
                  <td>{recommendation.productName}</td>
                  <td>{recommendation.recommender?.email}</td>
                  <td>{recommendation.recommendationTitle}</td>
                  <td>{recommendation.recommendedName}</td>
                  <td>{format(new Date(recommendation.currentDate), "P")}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecommendationsForMe;
