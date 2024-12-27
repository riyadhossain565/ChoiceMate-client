import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiGrid2V } from "react-icons/ci";
import { LuGrid2X2X } from "react-icons/lu";
import { MdGrid4X4 } from "react-icons/md";
import QueryCard from "../components/QueryCard";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [gridColumns, setGridColumns] = useState(3);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAllQuery = async () => {
      const { data } = await axios.get(
        `https://choice-mate-server.vercel.app/queries?search=${search}`
      );
      setQueries(data);
    };
    fetchAllQuery();
  }, [search]);

  const handleLayoutChange = (columns) => {
    setGridColumns(columns);
  };

  return (
    <div className="w-10/12 mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">All Queries</h1>
      <h2 className="text-2xl font-bold text-center mb-6">
        Explore Better Options
      </h2>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4">
        <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by product name..."
            aria-label="Enter Product Title"
          />

          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#ff7361] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>
      

      {/* Layout Toggle Buttons */}
      <div className="flex justify-end mb-4 space-x-2">
        <button
          className={`btn ${
            gridColumns === 4 ? "btn bg-[#ff7361]" : "btn-outline"
          }`}
          onClick={() => handleLayoutChange(4)}
          title="column-4"
        >
          <MdGrid4X4 className="w-6 h-6" />
        </button>
        <button
          className={`btn ${
            gridColumns === 2 ? "btn bg-[#ff7361]" : "btn-outline"
          }`}
          onClick={() => handleLayoutChange(2)}
          title="column-2"
        >
          <CiGrid2V className="w-6 h-6" />
        </button>
        <button
          className={`btn ${
            gridColumns === 3 ? "btn bg-[#ff7361]" : "btn-outline"
          }`}
          onClick={() => handleLayoutChange(3)}
          title="column-3"
        >
          <LuGrid2X2X className="w-6 h-6" />
        </button>
      </div>
      </div>

      <div className={`grid gap-6 ${
            gridColumns === 4
              ? "grid-cols-1 md:grid-cols-4"
              : gridColumns === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-3"
          }`}>
        {queries
          .sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)) // Descending order
          .map((query) => (
            <QueryCard key={query._id} query={query}></QueryCard>
          ))}
      </div>
    </div>
  );
};

export default Queries;
