import React from "react";

const TireBrandCard = ({ brand }) => {
  return (
    <div className="group relative m-1 rounded-lg shadow-lg shadow-white">
      <div className="w-40 h-24 p-4 bg-white rounded-lg  overflow-y-hidden transition-all duration-300 hover:border-gradient-to-r hover:from-green-400 hover:to-blue-500"
       
      >
        <div className="flex flex-col items-center justify-center h-full " >
          <div className="top-0 relative " >
          <img
            src={brand.logo}
            alt={brand.name}
            className="w-full h-full  object-contain transition-transform duration-300 transform group-hover:scale-110"
          />
          </div>
          <div className="bottom-0  pt-2 absolute">
          {/* <h3 className="text-base  text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-blue-500">
            {brand.name}
          </h3> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { TireBrandCard };
