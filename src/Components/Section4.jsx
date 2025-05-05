import React from "react";
import Grid1img from "../Images/Mothersday.png";
import Grid2Lg from "../Images/MacbookLg.jpg";
import Grid2imgMd from "../Images/macbook.jpg";

export default function Section4() {
  return (
    <div>
      {/* Grid-1 */}

      <section className="border border-t-8 border-white grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div
          style={{
            backgroundImage: `url(${Grid1img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className=" h-[500px] flex justify-center items-end pb-5"
        >
          <div className=" ">
            <h4 className="text-4xl font-bold">Mother's Day</h4>
            <h5 className=" text-xl text-[#232323]">
              Find the perfect gift for Mom.
            </h5>
            <button className="px-4 py-2 text-sm text-white font-medium bg-blue-600 rounded-3xl mt-4">
              Shop
            </button>
          </div>
        </div>


        
        {/* Grid-2 for desktop */}
        <div
          style={{
            backgroundImage: `url(${Grid2Lg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className=" lg:flex hidden flex-col "
        >
          <h4 className="text-black text-4xl font-semibold mt-12 ">
            MacBook Air
          </h4>
          <h5 className="text-black text-xl mt-2">Sky blue color.</h5>
          <h5 className="text-black text-xl ">Sky high performance with M4.</h5>
          <div className="flex justify-center gap-3 mt-4">
            <button className="text-white bg-blue-600 transition duration-300 hover:bg-blue-500 px-4 py-2 rounded-3xl text-center text-sm">
              Learn more
            </button>
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-3xl text-sm font-normal transition duration-300 hover:bg-blue-600 hover:text-white">
              Buy
            </button>
          </div>

          <div className=" lg:translate-y-[15rem]">
            <h4 className=" text-md font-semibold bg-gradient-to-r from-blue-600 via-pink-600 to-orange-500 bg-clip-text text-transparent  ">
              Built for Apple Intelligence
            </h4>
          </div>
        </div>



        {/* Grid-2 for small screens */}
        <div
          style={{
            backgroundImage: `url(${Grid2imgMd})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[500px] flex lg:hidden flex-col "
        >
          <h4 className="text-black text-4xl font-semibold mt-8 ">
            MacBook Air
          </h4>
          <h5 className="text-black text-xl mt-2">Sky blue color.</h5>
          <h5 className="text-black text-xl ">Sky high performance with M4.</h5>
          <div className="flex justify-center gap-3 mt-4">
            <button className="text-white bg-blue-600 transition duration-300 hover:bg-blue-500 px-4 py-2 rounded-3xl text-center text-sm">
              Learn more
            </button>
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-3xl text-sm font-normal transition duration-300 hover:bg-blue-600 hover:text-white">
              Buy
            </button>
          </div>

          <div className=" translate-y-[17rem]">
            <h4 className=" text-md font-semibold bg-gradient-to-r from-blue-600 via-pink-600 to-orange-500 bg-clip-text text-transparent  ">
              Built for Apple Intelligence
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
}
