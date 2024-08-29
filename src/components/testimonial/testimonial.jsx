import React from "react";
import { Rating } from "@material-tailwind/react";

function Testimonial() {
  return (
    <div className="bg-white min-w-full flex justify-center">
      <div className="carousel carousel-center max-w-6xl space-x-4 p-2">
        <div className="carousel-item ">
          <div className="card bg-gray-50 w-96 shadow-xl p-0 m-0">
            <div className="card-body">
             <div className="flex flex-row">
              <div className="avatar">
                <div className="w-16 h-16 rounded-full">
                  <img src="https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo" />
                </div>
              </div>
              <div className="text-center ml-5 py-5">
                <h5 className="text-gray-600 font-bold">Md Nasir</h5>
              </div>
              </div>
              <Rating value={4} readonly />
              <p>
              Excellent service from start to finish. 100% satisfaction with the job,
              professionalism and overall service.We were delighted with..
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className="card bg-gray-50  w-96 shadow-xl">
            <div className="card-body ">
             <div className="flex flex-row">
              <div className="avatar">
                <div className="w-16 h-16 rounded-full">
                  <img src="https://lh3.googleusercontent.com/a/AATXAJxi1FTLTnIbF-wcCFLUqffCFFV07qiTPPBbLVaO=s128-c0x00000000-cc-rp-mo" />
                </div>
              </div>
              <div className="text-center ml-5 py-5">
                <h5 className="text-gray-600 font-bold">Rohit Bhati</h5>
              </div>
              </div>
              <Rating value={4} readonly />
              <p>
              Went for Tyre change . Ultimate service by shoppe boys. 
              Owner behavior very cool. Guide as per ur budget. Highly recommend
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className="card bg-gray-50 w-96 shadow-xl">
            <div className="card-body ">
             <div className="flex flex-row">
              <div className="avatar">
                <div className="w-16 h-16 rounded-full">
                  <img src="https://lh3.googleusercontent.com/a/AATXAJwahszZQxSMoUOJ3FOQwAgtMOeWI7bFaQnSRl1a=s128-c0x00000000-cc-rp-mo" />
                </div>
              </div>
              <div className="text-center ml-5 py-5">
                <h5 className="text-gray-600 font-bold">Pradeep Kumar</h5>
              </div>
              </div>
              <Rating value={4} readonly />
              <p>
              Best tyre shop in Indirapuram. Good dealing with customer. 
              All types tyre available here. Price also responsible.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className="card bg-gray-50  w-96 shadow-xl">
            <div className="card-body ">
             <div className="flex flex-row">
              <div className="avatar">
                <div className="w-16 h-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="text-center ml-5 py-5">
                <h5 className="text-gray-600 font-bold">Mr. John Doe</h5>
              </div>
              </div>
              <Rating value={4} readonly />
              <p>
                Went for Tyre change . Ultimate service by shoppe boys. Owner
                behavior very cool. Guide as per ur budget. Highly recommend
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
