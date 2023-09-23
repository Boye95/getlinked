import trophy from "../assets/webps/trophy.webp";
import silver from "../assets/webps/silver.png";
import gold from "../assets/webps/gold.webp";
import bronze from "../assets/webps/bronze.png";

import purplestar from "../assets/svgs/purplestar.svg";
import star from "../assets/svgs/star.svg";

import purpleflareoverview from "../assets/webps/purpleflareoverview.webp";

export default function Rewards() {
  return (
    <div className="relative flex bg-[#100B20] bg-cover p-32 text-white bxl:px-20 xl:px-14 ham:flex-col ham:items-center ham:gap-16 ham:py-24 xs:px-8 xs:pb-40">
      <img
        src={purpleflareoverview}
        alt=""
        className="absolute -bottom-5 -left-6 z-0 w-[50rem] ham:hidden "
      />
      <img
        src={purpleflareoverview}
        alt=""
        className="absolute -bottom-24 -right-[15rem] z-0 hidden w-[30rem] ham:flex "
      />
      <img
        src={purpleflareoverview}
        alt=""
        className="absolute -bottom-[10rem] -right-[18rem] z-0 w-[50rem] rotate-180 ham:right-[10rem]  "
      />
      <div className="relative w-1/2 py-11 ham:flex ham:w-full ham:flex-col ham:justify-center ham:gap-5 ">
        <img
          src={purplestar}
          alt=""
          className="absolute -top-10 left-[30%] w-4"
        />
        <img src={star} alt="" className="absolute bottom-0 left-[25%] w-3" />


        <div className="hidden flex-col gap-3 ham:flex">
          <h3 className="relative flex flex-col font-clashbold text-[28px] leading-tight ham:text-center ham:text-[28px] sm:text-[20px] ">
            <span className="">Prizes and</span>{" "}
            <span className="text-[#D434FE]">Rewards</span>
          </h3>
          <p className="text-center font-montserrat text-sm">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <img
          src={trophy}
          alt=""
          className="w-[30rem] min-w-[30rem] blend:w-[24rem] blend:min-w-[24rem] ham:w-[20rem] ham:min-w-[20rem] ham:self-center"
        />
      </div>

      <div className="flex flex-col gap-7 ham:w-[70%] ham:items-center md:w-full">
        <div className="flex flex-col gap-3 ham:hidden">
          <h3 className="relative flex flex-col text-start font-clashbold text-[28px] leading-tight ham:text-[28px] sm:text-[20px] ">
            <span className="">Prizes and</span>{" "}
            <span className="text-[#D434FE]">Rewards</span>
          </h3>
          <p className="text-start font-montserrat text-sm">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>

        <div className="relative mt-36 flex gap-5 xss:gap-3">
          <img src={star} alt="" className="absolute -top-36 left-11 w-4" />
          <img src={star} alt="" className="absolute -right-6 -top-16 w-3" />
          <img
            src={star}
            alt=""
            className="absolute -bottom-11 right-36 w-4 opacity-30"
          />
          <div className="relative flex h-[13rem] w-[9.5rem] flex-col justify-end rounded-md border border-[#D434FE] bg-[#D434FE]/10 pb-8 text-center font-montserrat xs:h-[9rem] xs:w-[6.5rem] xs:pb-2 xss:h-[8rem] xss:w-[5.5rem] ">
            <img
              src={silver}
              alt=""
              className="absolute -top-16 left-1/2 w-[8rem] -translate-x-1/2"
            />
            <div className="leading-tight">
              <h3 className="text-[20px] font-bold xs:text-[18px] ">2nd</h3>
              <p className="text-[18px] font-semibold xs:text-[16px] xss:text-[16px] ">
                Runner
              </p>
              <p className="text-[22px] font-bold text-[#D434FE] xs:text-[18px] xss:text-[16px] ">
                N300,000
              </p>
            </div>
          </div>

          <div className="relative flex h-[14rem] w-[9rem] flex-col justify-end rounded-md border border-[#D434FE] bg-[#903AFF]/10 pb-8 text-center font-montserrat xs:h-[10rem] xs:w-[7rem] xs:pb-2 xss:h-[9rem] xss:w-[6rem]   ">
            <img
              src={gold}
              alt=""
              className="absolute -top-[6.25rem] left-1/2 min-w-[12.5rem] -translate-x-1/2 xs:min-w-[10rem] xss:-top-[5rem] xss:min-w-[8.4rem]"
            />
            <div className="leading-tight">
              <h3 className="text-[20px] font-bold xs:text-[18px] ">1st</h3>
              <p className="text-[18px] font-semibold xss:text-sm ">Runner</p>
              <p className="text-[22px] font-bold text-[#903AFF] xs:text-[18px] xss:text-[16px] ">
                N400,000
              </p>
            </div>
          </div>

          <div className="relative flex h-[13rem] w-[9.5rem] flex-col justify-end rounded-md border border-[#D434FE] bg-[#D434FE]/10 pb-8 text-center font-montserrat xs:h-[9rem] xs:w-[6.5rem] xs:pb-2 xss:h-[8rem] xss:w-[5.5rem] ">
            <img
              src={bronze}
              alt=""
              className="absolute -top-16 left-1/2 w-[8rem] -translate-x-1/2"
            />
            <div className="leading-tight">
              <h3 className="text-[20px] font-bold xs:text-[18px] ">3rd</h3>
              <p className="text-[18px] font-semibold xs:text-[16px] xss:text-[16px] ">
                Runner
              </p>
              <p className="text-[22px] font-bold text-[#D434FE] xs:text-[18px] xss:text-[16px] ">
                N150,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
