import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const NewsLetter = () => {
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
    <section className="w-10/12 mx-auto pt-10 pb-24">
      
      <div className="bg-gray-100 py-12 px-6 text-center rounded-2xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800">Subscribe to Our Newsletter</h2>
      <p className="text-gray-600 mt-2">
        Get the latest updates on pet adoptions, tips, and special offers!
      </p>
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-[#ff7361]"
        />
        <button className="bg-[#ff7361] text-white px-6 py-3 rounded-lg hover:bg-[#2f3239]">
          Subscribe
        </button>
      </div>
    </div>
    </section>
  );
};

export default NewsLetter;
