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

  const mordernDelete = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p>
            Are you <b>Sure?</b>
          </p>
        </div>
        <div>
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-lg"
            onClick={() => {
              handleDelete(id);
              toast.dismiss(t.id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-400 text-white px-3 py-1 ml-2 rounded-lg"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
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
              recommendations.map((recommendation, index) => (
                <MyRecommendsTable
                  key={recommendation._id}
                  index={index}
                  recommendation={recommendation}
                  mordernDelete={mordernDelete}
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
