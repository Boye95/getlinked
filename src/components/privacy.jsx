import humankey from "../assets/webps/humankey.webp";
import checkmark from "../assets/svgs/check.svg";

import purplestar from "../assets/svgs/purplestar.svg";
import star from "../assets/svgs/star.svg";

import purpleflareoverview from "../assets/webps/purpleflareoverview.webp";

export default function Privacy() {
  return (
    <div className="relative flex items-center px-60 py-32 font-montserrat text-sm bxl:px-20 xl:px-14 ham:flex-col ham:items-center ham:gap-16 ham:py-14 xs:px-8">
      <img
        src={purpleflareoverview}
        alt=""
        className="absolute -bottom-[15rem] -left-40 z-10 w-[50rem] xs:bottom-[25rem] "
      />
      <div className="relative z-10 flex w-1/2 flex-col gap-6 text-white ham:w-[70%] ham:items-center ham:text-center md:w-full">
        <div className="relative flex flex-col gap-2 ">
          <img
            src={star}
            alt=""
            className="absolute left-[60%] w-4 opacity-30 "
          />
          <h3 className="flex flex-col font-clashbold text-[32px] leading-tight ham:text-center ham:text-[28px] sm:text-[20px] ">
            <span className="">Privacy Policy and</span>
            <span className="text-[#D434FE]">Terms</span>
          </h3>
          <p className="opacity-75  ">Last updated on September 12, 2023</p>
        </div>
        <p className=" text-sm">
          {`Below are our privacy & policy, which outline a lot of goodies. it's
          our aim to always take of our participant`}
        </p>

        <div
          className=" relative mt-7 flex flex-col items-center justify-center gap-7 rounded-md border border-[#D434FE] bg-[#D9D9D9]/5
        p-10 xs:p-4 xs:text-sm
        "
        >
          <img
            src={purplestar}
            alt=""
            className="absolute -left-11 top-[70%] w-5 "
          />
          <p className="leading-loose xs:text-sm">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>

          <div className="flex flex-col gap-4 font-bold">
            <h4 className="text-[20px] font-bold text-[#D434FE] xs:text-[18px]  ">
              Licensing Policy
            </h4>
            <p className="text-[17px] xs:text-base">
              Here are terms of our Standard License:
            </p>

            <div className="flex flex-col gap-3 font-semibold ">
              <p className="flex items-start gap-3">
                <img src={checkmark} alt="" className="pt-1.5" />
                <span className="leading-loose xs:text-left xs:text-sm">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </span>
              </p>
              <p className="flex items-start gap-3">
                <img src={checkmark} alt="" className="pt-1.5" />
                <span className="leading-loose xs:text-left xs:text-sm">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </span>
              </p>
            </div>

            <button className="register mx-auto">Read More</button>
          </div>
        </div>
      </div>
      <div className="w-1/2 ham:flex ham:w-full ham:justify-center ">
        <img src={humankey} alt="" className="w-[35rem] blend:w-[24rem]" />
      </div>
    </div>
  );
}
