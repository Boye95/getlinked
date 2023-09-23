import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import underline from "../assets/svgs/underline.svg";
import chain from "../assets/webps/chain.png";
import spark from "../assets/webps/spark.png";
import manhero from "../assets/webps/manhero.webp";
import star from "../assets/svgs/star.svg";
import bulb from "../assets/webps/bulb.png";
import purpleflarehome from "../assets/webps/purpleflarehome.webp";

export default function Hero() {
  const [hour, setHour] = useState("00");
  const [min, setMin] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    // Set the date we're counting down to
    let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    let x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      // let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      setHour(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMin(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      // If the count down is over, clear the x interval and set the states accordingly
      if (distance < 0) {
        clearInterval(x);
        setHour("00");
        setMin("00");
        setSeconds("00");
      }
    }, 1000);
  }, []);


  return (
    <div className="relative flex w-full flex-col border-b border-[#ffffff2d] px-32 pt-3 text-white bxl:px-20 xl:px-16 ham:gap-16 ham:pt-8 xs:px-8">
      <img
        src={purpleflarehome}
        alt=""
        className="absolute -top-60 left-16 z-0 -rotate-90 ham:-left-11 ham:-top-40 xs:-left-9 xs:-top-20 xs:-rotate-180 "
      />
      <img
        src={purpleflarehome}
        alt=""
        className="absolute -right-2 top-5 z-0 w-[40rem] ham:hidden"
      />
      <h2 className="relative self-end font-montserrat text-[28px] font-bold italic blend:text-[22px]  ham:self-center ham:text-center xs:flex xs:flex-col xs:text-[20px] ">
        <span className="">Igniting a Revolution in</span>{" "}
        <span className="relative">
          HR Innovation
          <img src={underline} alt="" className="absolute -bottom-3 left-0 xs:left-1/2 xs:w-[8rem] xs:-translate-x-1/2" />
        </span>
      </h2>
      <div className="relative flex items-center ham:flex-col ">
        <img src={star} alt="" className="absolute left-10 top-0 w-5 xs:-top-6 xs:left-[80%] xs:w-3 xs:opacity-30 xss:left-[95%] " />
        <img
          src={star}
          alt=""
          className="absolute right-1/2 top-16 w-5 opacity-30 xs:hidden"
        />
        <div className="relative flex flex-col gap-6 blend:gap-4 ham:items-center ">
          <img
            src={star}
            alt=""
            className="absolute bottom-16 right-10 w-5 opacity-30 xs:bottom-24 xs:right-24 xs:w-3 xs:opacity-30 xss:right-8"
          />
          <div className="font-clashbold text-[60px] leading-tight blend:text-[45px] ham:text-center xs:text-[30px] ">
            <span className="">
              <span className="">getlinked</span>{" "}
              <span className="relative">
                <span className="">Tech</span>
                <img
                  src={bulb}
                  alt=""
                  className="absolute -top-8 right-7 w-9 xs:-top-6 xs:right-3 xs:w-6"
                />
              </span>
            </span>
            <div className="flex">
              <span className="">Hackathon</span>{" "}
              <span className="text-[#D434FE]">1.0</span>
              <div className="ml-2 flex items-center">
                <img src={chain} alt="" className="h-12 w-12 xs:h-8 xs:w-8" />
                <img src={spark} alt="" className="h-12 w-12 xs:h-8 xs:w-8" />
              </div>
            </div>
          </div>
          <p className="w-4/6 font-montserrat ham:text-center xs:text-sm xss:w-full ">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <Link to="register" className="register">
            Register
          </Link>

          <div className="flex gap-4 font-unica">
            <span className="font-bold">
              <span className="text-[50px]">{hour}</span>
              <span className="text-xs">H</span>
            </span>

            <span className="font-bold">
              <span className="text-[50px]">{min}</span>
              <span className="text-xs">M</span>
            </span>

            <span className="font-bold">
              <span className="text-[50px]">{seconds}</span>
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
