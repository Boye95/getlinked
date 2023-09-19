import { Link } from "react-router-dom";

import purplestar from "../assets/svgs/purplestar.svg";
import bigidea from "../assets/webps/bigidea.png";
import arrow from "../assets/webps/arrow.png";
import ladysitting from "../assets/webps/ladysitting.png";
import star from "../assets/svgs/star.svg";
import judges from "../assets/webps/judges.png";

export default function Overview() {
  return (
    <div className="flex flex-col divide-y divide-[#ffffff2d] w-full border-b border-[#ffffff2d]">
      <div className="px-32 py-11 flex items-center text-white">
        <div className="w-1/2 relative">
          <img src={bigidea} alt="" className="w-[30rem]" />
          <img
            src={arrow}
            alt=""
            className=" absolute right-40 -bottom-4 w-14"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <h3 className="flex flex-col relative font-clashbold text-[32px] leading-tight">
            <span className="">Introduction to getlinked</span>{" "}
            <span className="text-[#D434FE]">tech Hackathon 1.0</span>
            <img
              src={purplestar}
              alt=""
              className="w-5 absolute right-0 top-6"
            />
          </h3>
          <p className="text-[14px] font-montserrat">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>

      <div className="px-32 py-4 flex items-center justify-between text-white">
        <div className="w-2/5 flex flex-col gap-4 relative">
          <img
            src={star}
            alt=""
            className="w-5 absolute opacity-30 left-1/2 -top-6"
          />
          <img src={star} alt="" className="w-5 absolute -right-6 -bottom-6" />
          <h3 className="flex flex-col font-clashbold text-[32px] leading-tight">
            <span className="">Rules and</span>{" "}
            <span className="text-[#D434FE]">Guidelines</span>
          </h3>
          <p className="text-[14px] font-montserrat">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <div className="w-1/2 flex justify-end relative">
          <img src={ladysitting} alt="" className="w-[35rem]" />
        </div>
      </div>

      <div className="px-32 py-16 flex items-center text-white">
        <div className="w-1/2">
          <img src={judges} alt="" className="w-[35rem]" />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <h3 className="flex flex-col relative font-clashbold text-[32px] leading-tight">
            <span className="">Judging Criteria</span>{" "}
            <span className="text-[#D434FE]">Key attributes</span>
          </h3>
          <ul className="font-montserrat flex flex-col gap-7">
            <li className="">
              <span className="text-[#FF26B9] font-bold">
                Innovation and Creativity:
              </span>{" "}
              <span className="text-[14px]">
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </span>
            </li>

            <li className="">
              <span className="text-[#FF26B9] font-bold">Functionality:</span>{" "}
              <span className="text-[14px]">
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </span>
            </li>

            <li className="">
              <span className="text-[#FF26B9] font-bold">
                Impact and Relevance:
              </span>{" "}
              <span className="text-[14px]">
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </span>
            </li>

            <li className="">
              <span className="text-[#FF26B9] font-bold">
                Technical Complexity:
              </span>{" "}
              <span className="text-[14px]">
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </span>
            </li>

            <li className="">
              <span className="text-[#FF26B9] font-bold">
                Adherence to Hackathon Rules:
              </span>{" "}
              <span className="text-[14px]">
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </span>
            </li>
          </ul>

          <Link to="register" className="register mt-7">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
