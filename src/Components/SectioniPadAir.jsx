import React from "react";
import HeroIpadLg from "../Images/hero_ipadpro_avail__d6ddfjws77ue_medium_2x.jpg";
import HeroIpadMd from "../Images/hero_ipadpro_avail__d6ddfjws77ue_small_2x.jpg";

export default function SectioniPadAir() {
  return (
    <div>
      {/* Section for Dektop screens */}
      <section
        style={{
          backgroundImage: `url(${HeroIpadLg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="border border-t-8 border-white border-x-0 h-svh lg:flex items-center  flex-col hidden"
      >
        <h4 className="text-white text-6xl font-semibold mt-12 ">iPad Pro</h4>
        <h5 className="text-white text-3xl font-semibold mt-2">
          Unbelievable thin.Incredibly powerful
        </h5>
        <div className="flex gap-3 mt-4">
          <button className="text-white bg-blue-600 transition duration-300 hover:bg-blue-500 px-6 py-2 rounded-3xl text-center text-lg">
            Learn more
          </button>
          <button className="px-6 py-2 text-blue-600 border border-blue-600 rounded-3xl text-lg font-normal transition duration-300 hover:bg-blue-600 hover:text-white">
            Buy
          </button>
        </div>
        <div className=" translate-y-72">
          <h4 className=" text-xl font-semibold bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent  ">Built for Apple Intelligence</h4>
        </div>
      </section>


     {/* Section for Small screens */}
      <section
        style={{
          backgroundImage: `url(${HeroIpadMd})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="border border-t-8 border-white border-x-0 h-svh flex items-center  flex-col lg:hidden"
      >
        <h4 className="text-white text-4xl font-semibold mt-12 ">iPad Pro</h4>
        <h5 className="text-white text-lg font-semibold mt-2">
          Unbelievable thin.Incredibly powerful
        </h5>
        <div className="flex gap-3 mt-4">
          <button className="text-white bg-blue-600 transition duration-300 hover:bg-blue-500 px-6 py-2 rounded-3xl text-center text-md">
            Learn more
          </button>
          <button className="px-6 py-2 text-blue-600 border border-blue-600 rounded-3xl text-md font-normal transition duration-300 hover:bg-blue-600 hover:text-white">
            Buy
          </button>
        </div>
        <div className=" translate-y-[23rem]">
          <h4 className=" text-xl font-semibold bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent  ">Built for Apple Intelligence</h4>
        </div>
      </section>
    </div>
  );
}
