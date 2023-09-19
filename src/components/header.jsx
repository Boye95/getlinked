import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full px-32 flex justify-between pt-5 pb-2 border-b border-[#ffffff2d]">
      <div className="w-[45%]">
        <div className="font-clashbold text-[36px]">
          <span className="text-white">get</span>
          <span className="text-[#D434FE]">linked</span>
        </div>
      </div>
      <div className="w-[55%] flex justify-between items-center font-montserrat font-normal text-white ">
        <nav className="flex gap-16">
          <a href="" className="">
            Timeline
          </a>
          <a href="" className="">
            Overview
          </a>
          <a href="" className="">
            FAQs
          </a>
          <a href="" className="">
            Contact
          </a>
        </nav>

        <Link
          to="register"
          className="register"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
