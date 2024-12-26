import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import MyRecommendsTable from "../components/MyRecommendsTable";
import toast from "react-hot-toast";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetchAllRecommendation();
  }, [user]);

  const fetchAllRecommendation = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/recommendations/${user?.email}`
    );
    setRecommendations(data);
    console.log(data);
  };

  // Delete Functionality
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/recommendations/${id}`
      );
      fetchAllRecommendation();
      toast.success("Delete successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-10/12 mx-auto py-12">
      <div className="overflow-x-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          My Recommendations
        </h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Product</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.length === 0 ? (
              <p className="text-xl">No recommendations found.</p>
            ) : (
              recommendations.map((recommendation) => (
                <MyRecommendsTable
                  key={recommendation._id}
                  recommendation={recommendation}
                  handleDelete={handleDelete}
                ></MyRecommendsTable>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRecommendations;
