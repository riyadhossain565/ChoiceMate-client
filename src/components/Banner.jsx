import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full h-[350px] flex flex-col items-center justify-center bg-[#ff7361] text-white">
      {/* Heading and Button */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
        Manage Your <span className="text-[#2f3239]">Queries</span>
      </h1>
      <p className="text-lg md:text-xl mb-8 font-medium">
        Track, edit, and add new product-related queries to find the answers you
        need.
      </p>

      <Link
        to="/add-queries"
        className="px-5 py-1 bg-[#2f3239] text-white font-bold text-lg rounded-lg shadow-md transition-all hover:bg-[#44474d] hover:scale-105"
      >
        Add Queries
      </Link>
    </div>
  );
};

export default Banner;
