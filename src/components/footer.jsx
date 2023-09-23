import { Link } from "react-router-dom";

import purplestar from "../assets/svgs/purplestar.svg";
import star from "../assets/svgs/star.svg";

import facebook from "../assets/svgs/facebook.svg";
import instagram from "../assets/svgs/instagram.svg";
import linkedin from "../assets/svgs/linkedin.svg";
import x from "../assets/svgs/x.svg";
import phone from "../assets/svgs/phone.svg";
import location from "../assets/svgs/location.svg";

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center gap-16 bg-[#100B20] px-32 py-16 font-montserrat text-sm text-white bxl:px-20 xl:px-14 ham:items-center ham:gap-16 ham:py-14 xs:px-8">
      <img src={star} alt="" className="absolute left-12 top-[20%] w-3 " />
      <img
        src={star}
        alt=""
        className="absolute bottom-[20%] right-[20%] w-3 "
      />
      <img
        src={purplestar}
        alt=""
        className="absolute bottom-[25%] left-[45%] w-3 "
      />
      <img
        src={purplestar}
        alt=""
        className="absolute left-[60%] top-[20%] w-3 "
      />
      <div className="flex justify-between md:flex-col md:gap-9 ">
        <div className="flex w-1/2 flex-col gap-12 md:w-full md:gap-8">
          <div className=" flex flex-col gap-6">
            <Link to={`/`} className="font-clashbold text-[36px]">
              <span className="text-white">get</span>
              <span className="text-[#D434FE]">linked</span>
            </Link>
            <p className="w-[70%] text-sm sm:w-full ">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>

          <p className="divide-x divide-[#D434FE] ">
            <span className="pr-3">Terms of Use</span>
            <span className="pl-3">Privacy Policy</span>
          </p>
        </div>

        <div className="flex w-1/2 gap-20 md:w-full md:flex-col md:gap-10">
          <div className="flex flex-col gap-5">
            <h4 className="font-semibold text-[#D434FE] ">Useful Links</h4>
            <ul className="flex flex-col gap-5">
              <li className="">
                <a href="#overview" className="">
                  Overview
                </a>
              </li>
              <li className="">
                <a href="#timeline" className="">
                  Timeline
                </a>
              </li>
              <li className="">
                <a href="#faqs" className="">
                  FAQs
                </a>
              </li>
              <li className="">
                <Link to="register" className="">
                  Register
                </Link>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-[#D434FE] ">Follow Us</span>
                <div className="flex items-end gap-2">
                  <a href="" className="">
                    <img src={instagram} alt="" className="" />
                  </a>
                  <a href="" className="pb-0.5">
                    <img src={x} alt="" className="" />
                  </a>
                  <a href="" className="">
                    <img src={facebook} alt="" className="" />
                  </a>
                  <a href="" className="">
                    <img src={linkedin} alt="" className="" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-semibold text-[#D434FE] ">Contact Us</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-2">
                <img src={phone} alt="" className="w-4" />
                <a href="tel:+234 679 81819">+234 679 81819</a>
              </li>
              <li className="flex items-start gap-2">
                <img src={location} alt="" className="w-4" />
                <a
                  href="https://www.google.com/maps/place/27+Alara+St,+Sabo+yaba+101245,+Lagos/@6.5077727,3.3818753,17z/data=!3m1!4b1!4m6!3m5!1s0x103b8cf3fae871f1:0x33fc1ca3c387cf64!8m2!3d6.5077674!4d3.3844502!16s%2Fg%2F11h2dm_gnm?entry=ttu"
                  target="_blank" rel="noreferrer"
                >
                  27,Alara Street
                  <br /> Yaba 100012
                  <br /> Lagos State
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-sm font-semibold ">
        All rights reserved. © getlinked Ltd.
      </p>
    </div>
  );
}
