import React, { useState, useEffect } from "react";
import { Rating } from "@material-tailwind/react";
import FilterComponent from "./FilterComponent";


function FilterCategory() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };
  
  return (
    <div>
     <FilterComponent/>
      <section className="w-fit mx-auto grid  grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-3  gap-x-2   md:gap-y-5 md:gap-x-4 lg:gap-y-10 lg:gap-x-7 mt-5 mb-5">
        {products.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="w-44 lg:w-72  bg-white shadow-md rounded-xl duration-500 hover:scale-70 lg:hover:scale-105 hover:shadow-xl"
          >
            <a href="#">
              <img
                src={product.image}
                alt={product.model}
                className="h-48 w-44 lg:w-72  object-contain rounded-t-xl"
              />
              <div className="px-4 py-3  w-44 lg:w-72 ">
                <span className="text-gray-500 mr-3 uppercase text-lg font-medium">
                  {product.brand}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.model}
                </p>
                <p>{product.size}</p>
                <div className="pt-3 flex flex-row ">
                  <div className="badge badge-success">{product.rating}</div>
                  <Rating className="w-5 h-5" value={Math.ceil(product.rating)} readonly  />
                </div>
                <p className="underline text-sm">{product.reviews} Reviews</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-2">
                    ₹{product.price}
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      ₹{product.originalPrice}
                    </p>
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
      {visibleCount < products.length && (
        <div className="text-center mt-8">
          <button
            className="btn btn-outline px-10 btn-accent"
            onClick={handleViewMore}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}

export default FilterCategory;