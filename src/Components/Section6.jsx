import React from "react";
import CarrierImg from "../Images/promo_carrier__e0izvxwqosgi_medium_2x.jpg";
import AppleCard from "../Images/promo_apple_card_gradient__f2e2582vf1u2_medium_2x.jpg";

export default function () {
  return (
    <div>
      <section className="border border-t-8 border-white grid lg:grid-cols-2 grid-cols-1 gap-2 bg-[#f4f3f3] ">
        <div
          style={{
            backgroundImage: `url(${CarrierImg})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[500px] px-4 flex justify-center items-end pb-[45px]"
        >
          <div className="pt-12">
            <h4 className="lg:text-4xl text-3xl font-bold">Carrier deals at Apple</h4>
            <h5 className="lg:text-xl text-lg mt-2 lg:font-normal font-medium text-wrap px-10 ">
              Get upto $1000 in credit on a new iPhone.
            </h5>
            <h5 className="lg:text-xl text-md lg:font-normal font-medium">Trade-in may be required.</h5>
            <button className="text-white bg-blue-600 transition duration-300 hover:bg-blue-500 px-4 py-2 rounded-3xl text-center text-sm mt-3">
              Find your deal
            </button>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${AppleCard})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[500px] w-full p-0 flex flex-col items-center"
        >
         <div className="pt-12 ">
            <h4 className="text-4xl font-bold">
              <i className="fa-brands fa-apple "></i> Card
            </h4>
            <h5 className="text-xl  font-normal">
              Get up to 3% daily cash back
              <br /> with every purchase.
            </h5>
            <div className="flex gap-3 mt-2">
              <button className="text-white bg-black transition duration-300 hover:bg-[#242424] px-4 py-1 rounded-3xl text-center text-sm">
                Learn more
              </button>
              <button className="px-4 py-2 text-black border border-black rounded-3xl text-sm font-normal transition duration-300 hover:bg-black hover:text-white">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
