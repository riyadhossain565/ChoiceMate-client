import React from "react";

const Slide = ({ image, title, subtitle }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[75vh]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {title}
          </h1>
          <p className="text-xl text-white">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
