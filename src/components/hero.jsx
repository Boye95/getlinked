import { Link } from "react-router-dom";

import underline from "../assets/svgs/underline.svg";
import chain from "../assets/webps/chain.png";
import spark from "../assets/webps/spark.png";
import manhero from "../assets/webps/manhero.png";
import star from "../assets/svgs/star.svg";
import bulb from "../assets/webps/bulb.png";

export default function Hero() {
  return (
    <div className="w-full flex flex-col text-white pt-3 px-32 border-b border-[#ffffff2d]">
      <h2 className="self-end font-montserrat italic text-[28px] font-bold">
        <span className="">Igniting a Revolution in</span>{" "}
        <span className="relative">
          HR Innovation
          <img src={underline} alt="" className="absolute right-0 -bottom-3" />
        </span>
      </h2>
      <div className="flex items-center relative">
        <img src={star} alt="" className="absolute top-0 left-10 w-5" />
        <img
          src={star}
          alt=""
          className="absolute right-1/2 top-16 w-5 opacity-30"
        />
        <div className="flex flex-col gap-6 relative">
          <img
            src={star}
            alt=""
            className="absolute bottom-16 right-10 w-5 opacity-30"
          />
          <div className="font-clashbold text-[60px] leading-tight">
            <span className="">
              <span className="">getlinked</span>{" "}
              <span className="relative">
                <span className="">Tech</span>
                <img src={bulb} alt="" className="w-9 absolute right-7 -top-8" />
              </span>
            </span>
            <div className="flex">
              <span className="">Hackathon</span>{" "}
              <span className="text-[#D434FE]">1.0</span>
              <div className="flex items-center ml-2">
                <img src={chain} alt="" className="w-12 h-12" />
                <img src={spark} alt="" className="w-12 h-12" />
              </div>
            </div>
          </div>
          <p className="font-montserrat w-4/6">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <Link to="register" className="register">
            Register
          </Link>

          <div className="flex gap-4 font-unica">
            <span className="font-bold">
              <span className="text-[50px]">00</span>
              <span className="text-xs">H</span>
            </span>

            <span className="font-bold">
              <span className="text-[50px]">00</span>
              <span className="text-xs">M</span>
            </span>

            <span className="font-bold">
              <span className="text-[50px]">00</span>
              <span className="text-xs">S</span>
            </span>
          </div>
        </div>
        <div className="">
          <img src={manhero} alt="" className="w-[40rem]" />
        </div>
      </div>
    </div>
  );
}
