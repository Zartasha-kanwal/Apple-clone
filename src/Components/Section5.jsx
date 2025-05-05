import React from "react";
import Macimg from "../Images/promo_mac_does_that__ckozfqcs65w2_medium_2x.jpg";
import TradeinImg from "../Images/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg";

export default function Section5() {
  return (
    <div>
      <section className="border border-t-8 border-white grid lg:grid-cols-2 grid-cols-1 gap-2 bg-[#f4f3f3] ">
        <div
          style={{
            backgroundImage: `url(${Macimg})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[500px] px-4"
        >
          <div className="pt-12">
               <h4 className="text-4xl font-bold">
                 Mac does <span className="bg-[#3fea3f]">that.</span>
               </h4>
               <h5 className="text-xl mt-2 font-normal">
                  See how easy it is to switch to mac.
                </h5>
                <button className="text-white bg-blue-600 transition duration-300 hover:bg-blue-500 px-4 py-2 rounded-3xl text-center text-sm mt-3">
                 Learn more
                 </button>
          </div>
        </div>




        <div
         style={{
            backgroundImage: `url(${TradeinImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[500px] w-full p-0"
          >
            <div className="lg:pt-12">
                <h4 className="text-4xl font-bold"><i className="fa-brands fa-apple "></i> Trade In</h4>
                <h5 className="text-xl  font-normal">
                 Get $170-$630 in credit when you<br/> tarde in iphone 12 or higher.
                </h5>
                <button className="text-white bg-blue-600 transition duration-300 hover:bg-blue-500 px-4 py-2 rounded-3xl text-center text-sm mt-3">
                 Get your estimate
                 </button>
            </div>


        </div>
      </section>
    </div>
  );
}
