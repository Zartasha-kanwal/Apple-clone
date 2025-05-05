import React from 'react'
import IphoneLg from "../Images/hero_iphone_family__fuz5j2v5xx6y_medium_2x.jpg";
import IphoneMd from "../Images/hero_iphone_family__fuz5j2v5xx6y_small_2x.jpg";

export default function SectioniPhone() {
  return (
    <div>

        {/* Section for Dektop screens */}
        <section
        style={{
          backgroundImage: `url(${IphoneLg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="border border-t-8 border-white border-x-0 h-svh lg:flex items-center  flex-col hidden"
      >
        <h4 className="text-black text-6xl font-semibold mt-12 ">iPhone</h4>
        <h5 className="text-black text-3xl font-semibold mt-2">
          Meet the iPhone 16 family.
        </h5>
        <div className="flex gap-3 mt-4">
          <button className="text-white bg-blue-600 transition duration-300 hover:bg-blue-500 px-6 py-2 rounded-3xl text-center text-lg">
            Learn more
          </button>
          <button className="px-6 py-2 text-blue-600 border border-blue-600 rounded-3xl text-lg font-normal transition duration-300 hover:bg-blue-600 hover:text-white">
          Shop iPhone
          </button>
        </div>
        <div className=" mt-2">
          <h4 className=" text-xl font-semibold bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent  ">Built for Apple Intelligence</h4>
        </div>
      </section>




      {/* Section for Small screens */}
      <section
        style={{
          backgroundImage: `url(${IphoneMd})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="border border-t-8 border-white border-x-0 h-svh flex items-center  flex-col lg:hidden"
      >
        <h4 className="text-black text-4xl font-semibold mt-12 ">iPhone</h4>
        <h5 className="text-black text-lg font-semibold mt-2">
         Meet the iPhone 16 family.
        </h5>
        <div className="flex gap-3 mt-4">
          <button className="text-white bg-blue-600 transition duration-300 hover:bg-blue-500 px-6 py-2 rounded-3xl text-center text-md">
            Learn more
          </button>
          <button className="px-6 py-2 text-blue-600 border border-blue-600 rounded-3xl text-md font-normal transition duration-300 hover:bg-blue-600 hover:text-white">
            Shop iPhone
          </button>
        </div>
        <div className=" mt-2">
          <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent  ">Built for Apple Intelligence</h4>
        </div>
      </section>
    </div>
  )
}
