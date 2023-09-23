import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import hamclose from "../assets/svgs/hamclose.svg";

export default function MobileNav({ isOpen, handleClick }) {
  const location = useLocation();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0, type: "spring" }}
          transition={{ duration: 0.2 }}
          exit={{ x: "200%" }}
          className={`fixed left-0 top-0 z-50 h-screen w-full bg-[#150E28] font-inter font-semibold
       text-white `}
        >
          <div className="h-full overflow-hidden px-16 pt-10 xs:px-8">
            <div className="flex items-end justify-end">
              <button onClick={handleClick} className="cursor-pointer ">
                <img src={hamclose} alt="" className="" />
              </button>
            </div>

            <div className="flex h-full flex-col items-start justify-center gap-9">
              <div className="flex w-fit flex-col items-start justify-start gap-4 text-[1.5rem] ">
                <NavLink to="/#timeline" onClick={handleClick} className="">
                  Timeline
                </NavLink>
                <NavLink to="/#overview" onClick={handleClick} className="">
                  Overview
                </NavLink>
                <NavLink to="/#faqs" onClick={handleClick} className="">
                  FAQs
                </NavLink>
                <NavLink
                  to="contact"
                  onClick={handleClick}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500"
                      : ""
                  }
                >
                  Contact
                </NavLink>
              </div>

              <NavLink
                to="register"
                onClick={handleClick}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
