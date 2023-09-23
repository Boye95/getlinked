import liberty from "../assets/logos/liberty.png";
import libertypay from "../assets/logos/libertypay.png";
import paybox from "../assets/logos/paybox.png";
import vizualplus from "../assets/logos/vizualplus.png";
import whispersm from "../assets/logos/whispersm.png";
import winwise from "../assets/logos/winwise.png";

import star from "../assets/svgs/star.svg";
import purplestar from "../assets/svgs/purplestar.svg";

import purpleflareoverview from "../assets/webps/purpleflareoverview.webp";

export default function Sponsors() {
  return (
    <div className="relative flex flex-col items-center gap-12 border-b border-[#ffffff2d] px-32 py-16 bxl:px-20 xl:px-14 ham:flex-col ham:items-center ham:gap-16 ham:py-14 xs:px-8">
      <img
        src={purpleflareoverview}
        alt=""
        className="ham:-left absolute -bottom-16 -left-16 z-0 w-[50rem] ham:bottom-44 ham:w-[30rem] "
      />
      <img
        src={purpleflareoverview}
        alt=""
        className="absolute -bottom-[15rem] -right-[24rem] z-0 w-[50rem] rotate-180 xs:-bottom-[10rem] xs:-right-[10rem]"
      />
      <div className="flex flex-col items-center gap-2 leading-tight text-white">
        <h3 className="relative font-clashbold text-[32px] ham:text-center ham:text-[28px] sm:text-[20px]">Partners and Sponsors</h3>
        <p className="relative text-center font-montserrat text-sm xss:text-xs">
          Getlinked Hackathon 1.0 is honored to have the following major
          <br />
          companies as its partners and sponsors event.
        </p>
      </div>

      <div className="relative flex w-[50rem] items-center justify-center rounded-md border border-[#D434FE] p-8 ham:w-[33rem]  xs:w-fit xs:p-4 ">
        <img src={purplestar} alt="" className="absolute -top-7 left-11 w-4" />
        <img src={purplestar} alt="" className="absolute right-[45%] top-6 w-3" />
        <img src={star} alt="" className="absolute bottom-6 right-[45%] w-3" />
        <div className="relative flex flex-col ">
          <div className="flex xs:justify-between ">
            <div className="flex items-center justify-center p-4">
              <img src={liberty} alt="" className="w-24 xs:w-14" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src={libertypay} alt="" className="w-32 xs:w-14" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src={winwise} alt="" className="w-24 xs:w-14" />
            </div>
          </div>

          <div className="absolute top-[52.5%] h-0.5 w-full bg-[#D434FE]  "></div>
          <div className="absolute left-[29%] h-full w-0.5 bg-[#D434FE]  ">
            <div className="absolute -left-4 top-[53%] h-9 w-9 -translate-y-1/2 rounded-full bg-[#150E28]"></div>
          </div>
          <div className="absolute left-[65%] h-full w-0.5 bg-[#D434FE]  ">
            <div className="absolute -left-4 top-[53%] h-9 w-9 -translate-y-1/2 rounded-full bg-[#150E28]"></div>
          </div>

          <div className="flex">
            <div className="flex items-center justify-center p-4">
              <img src={whispersm} alt="" className="w-24 xs:w-14" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src={paybox} alt="" className="w-32 xs:w-14" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src={vizualplus} alt="" className="w-32 xs:w-14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
