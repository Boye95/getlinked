import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import MobileNav from "./mobilenav";

import hamopen from '../assets/svgs/hamopen.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div
      className={`relative z-40 flex w-full justify-between border-b border-[#ffffff2d] px-32 pb-2 pt-5 bxl:px-20 xl:px-16 xs:px-8
    ${location.pathname !== "/" && "border-none"}
    ${location.pathname == "/contact" && windowWidth < 900 && "hidden"}

    `}
    >
      <MobileNav
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        handleClick={handleClick}
      />
      <div className="w-[45%]">
        <Link to={`/`} className="font-clashbold text-[36px]">
          <span className="text-white">get</span>
          <span className="text-[#D434FE]">linked</span>
        </Link>
      </div>
      <button className="hidden items-center ham:flex" onClick={handleClick} >
        <img src={hamopen} alt="" className="" />
      </button>
      <div className="flex w-[55%] items-center justify-between font-montserrat font-normal text-white xl:gap-5 blend:w-full blend:justify-end ham:hidden ">
        <nav className="flex gap-16 font-medium blend:gap-5  ">
          <NavLink to="/#timeline" className="">
            Timeline
          </NavLink>
          <NavLink to="/#overview" className="">
            Overview
          </NavLink>
          <NavLink to="/#faqs" className="">
            FAQs
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500"
                : ""
            }
          >
            Contact
          </NavLink>
        </nav>

        <NavLink
          to="register"
          className={`register ${
            location.pathname == "/register" &&
            "bg-gradient-to-b from-purple-600 via-fuchsia-500 to-pink-500 p-0.5 hover:p-0"
          }`}
        >
          {location.pathname == "/register" ? (
            <span className=" flex h-full w-full items-center justify-center rounded-md bg-[#150E28] from-purple-600 via-fuchsia-500 to-pink-500 transition-all duration-200 hover:bg-gradient-to-r ">
              Register
            </span>
          ) : (
            "Register"
          )}
        </NavLink>
      </div>
    </div>
  );
}
