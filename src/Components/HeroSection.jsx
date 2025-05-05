import React, { useState, useEffect, memo } from "react";
import HeroImgLg from "../Images/hero_apple_watch_series_10_avail_lte__esu66gaw6dci_medium_2x.jpg";
import HeroImgMd from "../Images/hero_apple_watch_series_10_avail_lte__esu66gaw6dci_small_2x.jpg";
import WatchSeries from "../Images/watch-series-10.png";

const HeroSection = () => {
  return (
    <>
      {/* Hero-section for Desktop */}
      <div
        style={{
          backgroundImage: `url(${HeroImgLg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-center lg:flex justify-center items-center flex-col h-svh  hidden"
      >
        <div className="-translate-y-36">
          <img src={WatchSeries} className="max-w-[200px]" alt="Watch Series" />
          <h4 className="text-3xl font-normal mt-2">Thinstant classic</h4>
          <div className="flex gap-3 mt-2">
            <button className="text-white bg-blue-600 transition duration-300 hover:bg-blue-500 px-6 py-2 rounded-3xl text-center text-lg">
              Learn more
            </button>
            <button className="px-6 py-2 text-blue-600 border border-blue-600 rounded-3xl text-lg font-normal transition duration-300 hover:bg-blue-600 hover:text-white">
              Buy
            </button>
          </div>
        </div>
      </div>

      {/* Hero-section for Small screens */}
      <div
        style={{
          backgroundImage: `url(${HeroImgMd})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-center flex justify-center items-center flex-col h-svh  lg:hidden"
      >
        <div className="-translate-y-36">
          <img src={WatchSeries} className="max-w-[200px]" alt="Watch Series" />
          <h4 className="text-2xl font-normal mt-2">Thinstant classic</h4>
          <div className="flex gap-3 mt-2">
            <button className="text-white bg-blue-600 transition duration-300 hover:bg-blue-500 px-6 py-2 rounded-3xl text-center text-md">
              Learn more
            </button>
            <button className="px-6 py-2 text-blue-600 border border-blue-600 rounded-3xl text-md font-normal transition duration-300 hover:bg-blue-600 hover:text-white">
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(HeroSection);
