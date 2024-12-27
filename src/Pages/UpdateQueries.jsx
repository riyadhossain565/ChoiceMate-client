import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateQueries = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [query, setQuery] = useState({});

  useEffect(() => {
    fetchAllQuery()
  }, [id]);

  const fetchAllQuery = async () => {
    const { data } = await axios.get(`https://choice-mate-server.vercel.app/query/${id}`);
    setQuery(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const productImage = form.productImage.value;
    const queryTitle = form.queryTitle.value;
    const avoidReason = form.avoidReason.value;

    const formData = {
      productName,
      productBrand,
      productImage,
      queryTitle,
      avoidReason,
      queryCreator: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      dateCreated: new Date(Date.now()).toISOString(),
      recommendationCount: 0,
    };
    console.log(formData);

    try {
      // 1. make a post request
      await axios.put(`https://choice-mate-server.vercel.app/update-query/${id}`, formData);
      // 2. reset form
      form.reset();
      // 3. show toast
      toast.success("Query Updated Successfully");
      navigate("/my-queries");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
      <div className="bg-gray-200 py-8">
       <h1 className="text-3xl font-bold text-center mb-6">Update Query</h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-md"
        >
          <div className="form-control mb-4">
            <label className="label font-semibold">Product Name*</label>
            <input
              type="text"
              name="productName"
              placeholder="Enter Product Name"
              defaultValue={query.productName}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label font-semibold">Product Brand*</label>
            <input
              type="text"
              name="productBrand"
              defaultValue={query.productBrand}
              placeholder="Enter Product Brand"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label font-semibold">Product Image URL*</label>
            <input
              type="text"
              name="productImage"
              defaultValue={query.productImage}
              placeholder="Enter Product Image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label font-semibold">Query Title*</label>
            <input
              type="text"
              name="queryTitle"
              defaultValue={query.queryTitle}
              placeholder="e.g., Is there any better product?"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label font-semibold">
              Reason for Avoiding This Product*
            </label>
            <textarea
              name="avoidReason"
              defaultValue={query.avoidReason}
              placeholder="Explain why you don't want this product..."
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>
          <div className="form-control">
            <button className="btn text-white bg-[#ff7361] w-full transition-all hover:bg-[#2f3239]">
              Update Query
            </button>
          </div>
        </form>
      </div>
    
  );
};

export default UpdateQueries;
