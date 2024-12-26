import React, { useEffect, useState } from "react";
import axios from "axios";
import RecentQueriesCard from "./RecentQueriesCard";

const RecentQueries = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetchAllQuery();
  }, []);

  const fetchAllQuery = async () => {
    const { data } = await axios.get(`http://localhost:5000/queries/home`);
    setQueries(data);
    // console.log(data);
  };
  return (
    <div className="w-10/12 mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Recent Queries</h1>
      <h2 className="text-2xl font-bold text-center mb-6">
        Explore. Recommend. Empower.
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {queries.map((query) => (
          <RecentQueriesCard key={query._id} query={query}></RecentQueriesCard>
        ))}
      </div>
    </div>
  );
};

export default RecentQueries;
