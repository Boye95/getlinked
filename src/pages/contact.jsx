import { useState } from "react";

import { useMutation } from "@tanstack/react-query";
import axiosClient from "../api/axiosclient";
import { useNavigate } from "react-router-dom";

import purplestar from "../assets/svgs/purplestar.svg";
import star from "../assets/svgs/star.svg";

import facebook from "../assets/svgs/facebook.svg";
import instagram from "../assets/svgs/instagram.svg";
import linkedin from "../assets/svgs/linkedin.svg";
import x from "../assets/svgs/x.svg";
import back from "../assets/svgs/back.svg";

import purpleflare from "../assets/webps/purpleflare.webp";

import RegisterConfirmModal from "../components/registerConfirmModal";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState();

  const contactDetails = {
    email: email,
    phone_number: phone,
    first_name: firstName,
    message: message,
  };

  const navigate = useNavigate();

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: (newMessage) => {
      return axiosClient.post("/hackathon/contact-form", newMessage);
    },
    onSuccess: () => {
      setEmail("");
      setPhone("");
      setFirstName("");
      setMessage("");
    },
  });

  const handleContact = (e) => {
    e.preventDefault();
    mutate(contactDetails);
  };

  const popMessage = `Congratulations your mail has been sent`;
  const popSubMessage = `
  Yes, it was easy and you did it!
  We will get back to you in a bit`;

  return (
    <div className="flex h-[89vh] w-screen items-center justify-center overflow-hidden bg-[#150E28] font-montserrat  text-white bxl:overflow-y-scroll ham:h-auto  ham:flex-col ham:gap-5 ham:py-11 ">
      {isSuccess && (
        <RegisterConfirmModal
          popMessage={popMessage}
          popSubMessage={popSubMessage}
        />
      )}
      <img
        src={purpleflare}
        alt=""
        className=" absolute -left-16 -top-44 z-0 ham:-top-8 "
      />
      <img
        src={purpleflare}
        alt=""
        className="absolute -bottom-56 -right-16 z-0 rotate-180"
      />

      <div className="hidden w-[30rem] ham:flex xs:w-full xs:p-2 ">
        <button
          onClick={() => navigate(-1)}
          className="relative w-fit self-start"
        >
          <img src={back} alt="" className="" />
        </button>
      </div>

      <div className="relative flex w-[70%] justify-between xl:w-[80%] blend:w-[90%] ham:w-full ham:flex-col-reverse ham:items-center">
        <img src={purplestar} alt="" className="absolute left-1 top-0 w-5 " />
        <img
          src={star}
          alt=""
          className="absolute -top-16 right-9 w-4 opacity-30  "
        />
        <div className="flex flex-col gap-5 pt-11 font-medium">
          <h3 className="font-clashbold text-[32px] text-[#D434FE] ham:hidden ">
            Get in touch
          </h3>
          <span className=" ham:hidden ">
            Contact
            <br /> Information
          </span>
          <p className=" ham:hidden ">
            <a
              href="https://www.google.com/maps/place/27+Alara+St,+Sabo+yaba+101245,+Lagos/@6.5077727,3.3818753,17z/data=!3m1!4b1!4m6!3m5!1s0x103b8cf3fae871f1:0x33fc1ca3c387cf64!8m2!3d6.5077674!4d3.3844502!16s%2Fg%2F11h2dm_gnm?entry=ttu"
              target="_blank" rel="noreferrer"
            >
              27,Alara Street
              <br /> Yaba 100012
              <br /> Lagos State
            </a>
          </p>
          <p className="ham:hidden ">
            <a href="tel:07067981819">Call Us : 07067981819</a>
          </p>
          <p className="ham:hidden">
            we are open from Monday-Friday
            <br /> 08:00am - 05:00pm
          </p>
          <p className="flex flex-col gap-2 ham:items-center">
            <span className="text-[#D434FE]">Share on</span>
            <span className="flex gap-2">
              <a href="" className="">
                <img src={instagram} alt="" className="" />
              </a>
              <a href="" className="flex items-center">
                <img src={x} alt="" className="" />
              </a>
              <a href="" className="">
                <img src={facebook} alt="" className="" />
              </a>
              <a href="" className="">
                <img src={linkedin} alt="" className="" />
              </a>
            </span>
          </p>
        </div>
        <div className="flex w-[30rem] flex-col gap-6 rounded-md bg-white/5 p-9 px-14 shadow-md xs:w-full xs:bg-transparent xs:px-4 xs:shadow-none  ">
          <h3 className="font-clashbold text-[24px] text-[#D434FE]  ">
            Questions or need assistance? Let us know about it!
          </h3>

          <p className="hidden text-sm ham:flex">
            Email us below to any question related to our event
          </p>

          <form
            className="relative flex flex-col gap-5 font-montserrat "
            onSubmit={handleContact}
          >
            <img
              src={purplestar}
              alt=""
              className="absolute -left-16 bottom-16 w-5 "
            />
            <img
              src={star}
              alt=""
              className="absolute -bottom-14 -right-32 w-4 "
            />
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="rounded-md border-2 border-white bg-transparent p-2 text-white outline-none placeholder:text-xs  placeholder:text-white focus:border-[#D434FE]"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md border-2 border-white bg-transparent p-2 text-white outline-none placeholder:text-xs  placeholder:text-white focus:border-[#D434FE]"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-md border-2 border-white bg-transparent p-2 text-white outline-none placeholder:text-xs  placeholder:text-white focus:border-[#D434FE]"
              required
            />

            <textarea
              name=""
              id=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="h-28 rounded-md border-2 border-white bg-transparent p-2 text-white outline-none placeholder:text-xs  placeholder:text-white focus:border-[#D434FE]"
              required
            ></textarea>
            <button
              type="submit"
              className="register self-center disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
