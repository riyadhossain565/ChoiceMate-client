import { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import MyQuery from "../components/Myquery";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetchAllQuery();
  }, [user]);

  const fetchAllQuery = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/queries/${user?.email}`
    );
    setQueries(data);
    // console.log(data);
  };

  // Delete Functionality
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`http://localhost:5000/query/${id}`);
      fetchAllQuery();
      toast.success("Delete successfully")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-base-200">
      {/* Banner */}
      <Banner />
      {/* My Queries */}
      <div className="w-11/12 mx-auto px-6 py-10">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-6">My Queries</h1>

        {/* If no queries are found */}
        {queries.length === 0 ? (
          <div>
            <h2 className="text-3xl text-center font-bold my-5">
              No queries found. Start by adding one!
            </h2>
            <div className="flex justify-center">
              <Link
                to="/add-queries"
                className="px-5 py-1 bg-[#ff7361] text-white font-bold text-lg rounded-lg shadow-md transition-all hover:bg-[#2f3239] hover:scale-105"
              >
                Add Queries
              </Link>
            </div>
          </div>
        ) : (
          // display queries
          <div className="w-5/6 mx-auto py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {queries
              .sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)) // Descending order
              .map((query) => (
                <MyQuery
                  key={query._id}
                  query={query}
                  handleDelete={handleDelete}
                ></MyQuery>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyQueries;
