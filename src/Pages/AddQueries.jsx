import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const AddQueries = () => {
  const { user } = useContext(AuthContext);

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

    // console.log(formData);

    try {
      // 1. make a post request
      await axios.post('http://localhost:5000/add-query', formData)
      // 2. reset form
      form.reset()
      // 3. show toast 
      toast.success("Query Added Successfully")
      console.log("added")
    }catch(err){
      console.log(err)
      toast.error(err.message)
    }
  };

  return (
    <div className="bg-base-200 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Add a Query</h1>
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
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label font-semibold">Product Brand*</label>
          <input
            type="text"
            name="productBrand"
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
            placeholder="Explain why you don't want this product..."
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>
        <div className="form-control">
          <button className="btn text-white bg-[#ff7361] w-full transition-all hover:bg-[#2f3239]">
            Add Query
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddQueries;
