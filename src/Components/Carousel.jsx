import React from "react";
import img1 from "../Images/img-1.jpg";
import img2 from "../Images/img-2.jpg";
import img3 from "../Images/img-3.jpg";
import img4 from "../Images/img-4.jpg";
import img5 from "../Images/img-5.jpg";
import img6 from "../Images/img-6.jpg";

export default function Carousel() {
  return (
    <div>
      <div className="overflow-hidden w-full pt-[4rem] pb-[4rem]">
        <div className="flex w-max animate-scroll space-x-4 cursor-pointer">
          
          {/* Images (Duplicate for seamless loop) */}
          <div className="relative group flex flex-row items-center justify-start bg-[#f451ae] lg:w-[450px] w-[350px] ">
            <img
              src={img1}
              alt="img1"
              className="lg:h-[230px] h-[200px] object-contain rounded-2xl lg:p-3 p-1"
            />
            <h4 className="text-start text-lg text-white font-semibold lg:px-6 px-2 ml-3">
              A list Pop
            </h4>
            <button class="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-4 py-2 rounded-3xl">
              Listen now
            </button>
          </div>

          <div className="relative group flex flex-row items-center justify-center bg-[#292929] lg:w-[450px] w-[350px]">
            <img
              src={img2}
              alt="img2"
              className=" lg:h-[230px] h-[200px] object-contain rounded-2xl lg:p-3 p-1"
            />
            <h4 className="text-start lg:text-md text-sm text-white font-semibold px-2">
              Seth rogen: The Zane lowe <br></br> interview
            </h4>
            <button class="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-4 py-2 rounded-3xl">
              Listen now
            </button>
          </div>

          <div
            style={{
              backgroundImage: `url(${img3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="relative group lg:w-[450px] lg:h-[230px] w-[350px] h-[200px] object-cover  flex items-end justify-between text-white font-semibold"
          >
            <h4 className="px-5 py-5">Best mindful colldowns for atheletes</h4>
            <h4 className="px-5 py-5">
              <i className="fa-brands fa-apple mr-1"></i>Fitness+
            </h4>
            <button class="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-4 py-2 rounded-3xl">
              Watch now
            </button>
          </div>

          <div
            style={{
              backgroundImage: `url(${img4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="relative group lg:w-[450px] lg:h-[230px] w-[350px] h-[200px] object-cover flex items-end justify-between text-white font-semibold"
          >
            <h4 className="px-5 py-5">PGA Tour Pro Golf</h4>
            <h4 className="px-5 py-5">
              <i className="fa-brands fa-apple mr-1"></i>Arcade
            </h4>
            <button class="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-4 py-2 rounded-3xl">
              Play now
            </button>
          </div>

          <div
            style={{
              backgroundImage: `url(${img5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className=" relative group lg:w-[450px] lg:h-[230px] w-[350px] h-[200px] object-cover flex items-end justify-between text-white font-semibold"
          >
            <h4 className="px-5 py-5">Blatro+</h4>
            <h4 className="px-5 py-5">
              <i className="fa-brands fa-apple mr-1"></i>Arcade
            </h4>
            <button class="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-4 py-2 rounded-3xl">
              Play now
            </button>
          </div>

          <div
            style={{
              backgroundImage: `url(${img6})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="relative group lg:w-[450px] lg:h-[230px] w-[350px] h-[200px] object-cover flex items-end justify-between text-white font-semibold"
          >
            <h4 className="px-5 py-5">Strength with Gregg</h4>
            <h4 className="px-5 py-5">
              <i className="fa-brands fa-apple mr-1"></i>Fitness+
            </h4>
            <button class="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-4 py-2 rounded-3xl">
              Watch now
            </button>
          </div>

          {/* Duplicate images for infinite loop */}
          <div className="relative group flex flex-row items-center justify-start bg-[#f451ae] lg:w-[450px] w-[350px] ">
            <img
              src={img1}
              alt="img1"
              className="lg:h-[230px] h-[200px] object-contain rounded-2xl lg:p-3 p-1"
            />
            <h4 className="text-start text-lg text-white font-semibold lg:px-6 px-2 ml-3">
              A list Pop
            </h4>
            <button class="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-4 py-2 rounded-3xl">
              Listen now
            </button>
          </div>

          <div className="relative group flex flex-row items-center justify-center bg-[#292929] lg:w-[450px] w-[350px]">
            <img
              src={img2}
              alt="img2"
              className=" lg:h-[230px] h-[200px] object-contain rounded-2xl lg:p-3 p-1"
            />
            <h4 className="text-start lg:text-md text-sm text-white font-semibold px-2">
              Seth rogen: The Zane lowe <br></br> interview
            </h4>
            <button class="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-4 py-2 rounded-3xl">
              Listen now
            </button>
          </div>

          <div
            style={{
              backgroundImage: `url(${img3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="relative group lg:w-[450px] lg:h-[230px] w-[350px] h-[200px] object-cover  flex items-end justify-between text-white font-semibold"
          >
            <h4 className="px-5 py-5">Best mindful colldowns for atheletes</h4>
            <h4 className="px-5 py-5">
              <i className="fa-brands fa-apple mr-1"></i>Fitness+
            </h4>
            <button class="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-4 py-2 rounded-3xl">
              Watch now
            </button>
          </div>

          <div
            style={{
              backgroundImage: `url(${img4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="relative group lg:w-[450px] lg:h-[230px] w-[350px] h-[200px] object-cover flex items-end justify-between text-white font-semibold"
          >
            <h4 className="px-5 py-5">PGA Tour Pro Golf</h4>
            <h4 className="px-5 py-5">
              <i className="fa-brands fa-apple mr-1"></i>Arcade
            </h4>
            <button class="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-4 py-2 rounded-3xl">
              Play now
            </button>
          </div>

          <div
            style={{
              backgroundImage: `url(${img5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="relative group lg:w-[450px] lg:h-[230px] w-[350px] h-[200px] object-cover flex items-end justify-between text-white font-semibold"
          >
            <h4 className="px-5 py-5">Blatro+</h4>
            <h4 className="px-5 py-5">
              <i className="fa-brands fa-apple mr-1"></i>Arcade
            </h4>
            <button class="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-4 py-2 rounded-3xl">
              Play now
            </button>
          </div>

          <div
            style={{
              backgroundImage: `url(${img6})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className=" relative group lg:w-[450px] lg:h-[230px] w-[350px] h-[200px] object-cover flex items-end justify-between text-white font-semibold"
          >
            <h4 className="px-5 py-5">Strength with Gregg</h4>
            <h4 className="px-5 py-5">
              <i className="fa-brands fa-apple mr-1"></i>Fitness+
            </h4>
            <button class="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-4 py-2 rounded-3xl">
              Watch now
            </button>
          </div>

        </div>

        {/* Tailwind animation styles */}
        <style>
          {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 40s linear infinite;
          }
        `}
        </style>
      </div>
    </div>
  );
}
