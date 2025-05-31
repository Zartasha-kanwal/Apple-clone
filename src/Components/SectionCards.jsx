import { useRef, useEffect } from "react";

import img1 from "../Images/548x1186 (1).jpg";
import img2 from "../Images/548x1186 (2).jpg";
import img3 from "../Images/548x1186 (3).jpg";
import img4 from "../Images/548x1186 (4).jpg";
import img5 from "../Images/548x1186 (5).jpg";
import img6 from "../Images/548x1186 (6).jpg";
import img7 from "../Images/548x1186 (7).jpg";
import img8 from "../Images/548x1186 (8).jpg";
import img9 from "../Images/548x1186 (9).jpg";

export default function SectionCards() {
  return (
    <div>
      <div className="relative overflow-x-auto snap-x snap-mandatory scrollbar-hide pt-3">
        <div className="flex gap-2 w-max py-3">
          {/* Invisible spacing element to create initial 5px gap */}
          <div className="pointer-events-none snap-start shrink-0 w-[5px]"></div>

          {/*scrollable cards */}

          <div className="shrink-0 w-[270px] h-[430px]   snap-start p-1">
            <img src={img1} className="w-[270px] h-[430px]" />
          </div>

          <div className="shrink-0 w-[270px] h-[430px]  p-1 snap-start">
            <img src={img2} className="w-[270px] h-[430px]" />
          </div>

          <div className="shrink-0 w-[270px] h-[430px]  p-1 snap-start">
            <img src={img3} className="w-[270px] h-[430px]" />
          </div>

          <div className="shrink-0 w-[270px] h-[430px]  p-1 snap-start">
            <img src={img4} className="w-[270px] h-[430px]" />
          </div>

          <div className="shrink-0 w-[270px] h-[430px]  p-1 snap-start">
            <img src={img5} className="w-[270px] h-[430px]" />
          </div>

          <div className="shrink-0 w-[270px] h-[430px]  p-1 snap-start">
            <img src={img6} className="w-[270px] h-[430px]" />
          </div>

          <div className="shrink-0 w-[270px] h-[430px]  p-1 snap-start">
            <img src={img7} className="w-[270px] h-[430px]" />
          </div>

          <div className="shrink-0 w-[270px] h-[430px]  p-1 snap-start">
            <img src={img8} className="w-[270px] h-[430px]" />
          </div>

          <div className="shrink-0 w-[270px] h-[430px]  p-1 snap-start">
            <img src={img9} className="w-[270px] h-[430px]" />
          </div>

          <div className="shrink-0 w-[270px] h-[430px]  p-1 snap-start">
            <img src={img5} className="w-[270px] h-[430px]" />
          </div>
          {/* spacing element to create space for ending of 5px*/}
          <div className="pointer-events-none snap-start shrink-0 w-[5px]"></div>
        </div>
      </div>
    </div>
  );
}
