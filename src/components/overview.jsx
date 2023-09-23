import { Link } from "react-router-dom";

import purplestar from "../assets/svgs/purplestar.svg";
import bigidea from "../assets/webps/bigidea.png";
import arrow from "../assets/webps/arrow.png";
import ladysitting from "../assets/webps/ladysitting.png";
import star from "../assets/svgs/star.svg";
import judges from "../assets/webps/judges.png";

import purpleflareoverview from "../assets/webps/purpleflareoverview.png";

export default function Overview() {
  return (
    <div
      id="overview"
      className="flex w-full flex-col divide-y divide-[#ffffff2d] border-b border-[#ffffff2d]"
    >
      <div className="flex items-center px-32 py-11 text-white bxl:px-20 xl:px-14 ham:flex-col ham:gap-16 xs:px-8 ">
        <div className="relative w-1/2 ham:flex ham:w-full ham:justify-center ">
          <img src={bigidea} alt="" className="w-[30rem] blend:w-[24rem] " />
          <img
            src={arrow}
            alt=""
            className=" absolute -bottom-4 right-40 w-14 blend:right-20 blend:w-12 ham:-bottom-10 ham:right-1/2 ham:w-9 ham:-translate-x-1/2"
          />
        </div>
        <div className="flex w-1/2 flex-col gap-4  ham:w-[70%] xs:w-full">
          <h3 className="relative flex flex-col font-clashbold text-[32px] leading-tight ham:text-center ham:text-[28px] sm:text-[20px] ">
            <span className="">Introduction to getlinked</span>{" "}
            <span className="text-[#D434FE]">tech Hackathon 1.0</span>
            <img
              src={purplestar}
              alt=""
              className="absolute right-0 top-6 w-5"
            />
          </h3>
          <p className="relative z-10 font-montserrat text-sm ham:text-center ham:leading-relaxed ">
            {`Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!`}
          </p>
        </div>
      </div>

      <div className="relative flex items-center justify-between px-32 py-4 text-white bxl:px-20 xl:px-14 ham:flex-col-reverse ham:gap-10 xs:px-8 ">
        <img
          src={purpleflareoverview}
          alt=""
          className="absolute -left-16 -top-[20rem] z-0 ham:-top-[3rem] "
        />
        <img
          src={purpleflareoverview}
          alt=""
          className="absolute -bottom-48 -right-[24rem] z-0 w-[50rem] rotate-180 ham:-bottom-20 ham:-right-[10rem] "
        />
        <div className="relative flex w-2/5 flex-col gap-4 ham:flex ham:w-[70%]  ham:justify-center xs:w-full">
          <img
            src={star}
            alt=""
            className="absolute -top-6 left-1/2 w-5 opacity-30"
          />
          <img src={star} alt="" className="absolute -bottom-6 -right-6 w-5" />
          <h3 className="flex flex-col font-clashbold text-[32px] leading-tight  ham:text-center ham:text-[28px] sm:text-[20px] ">
            <span className="">Rules and</span>{" "}
            <span className="text-[#D434FE]">Guidelines</span>
          </h3>
          <p className="font-montserrat text-sm  ham:text-center ham:leading-relaxed">
            {`Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!`}
          </p>
        </div>
        <div className="relative flex w-1/2 justify-end  ham:flex ham:w-full ham:justify-center">
          <img
            src={ladysitting}
            alt=""
            className="relative  w-[35rem] blend:w-[24rem]"
          />
        </div>
      </div>

      <div className="relative flex items-center px-32 py-16 text-white bxl:px-20 xl:px-14 ham:flex-col ham:gap-10 xs:px-8 ">
        <img
          src={purpleflareoverview}
          alt=""
          className="absolute -bottom-16 -left-16 z-0 w-[50rem] ham:hidden"
        />
        <img
          src={purpleflareoverview}
          alt=""
          className="absolute -bottom-[15rem] -right-[24rem] z-0 w-[50rem] rotate-180 ham:-bottom-[3rem] ham:-right-[10rem]"
        />
        <div className="w-1/2 ham:relative ham:flex ham:w-full ham:justify-center ">
        <img
          src={purpleflareoverview}
          alt=""
          className=" absolute -left-16 top-16 z-0 hidden w-[50rem] ham:flex"
        />
          <img
            src={judges}
            alt=""
            className="relative w-[35rem] blend:w-[24rem]"
          />
        </div>
        <div className="flex w-1/2 flex-col gap-4  ham:w-[70%] xs:w-full">
          <h3 className="relative flex flex-col font-clashbold text-[32px] leading-tight ham:text-center ham:text-[28px] sm:text-[20px] ">
            <span className="">Judging Criteria</span>{" "}
            <span className="text-[#D434FE]">Key attributes</span>
          </h3>
          <ul className="relative flex flex-col gap-7 font-montserrat">
            <li className=" ham:text-center ham:leading-relaxed">
              <span className="font-bold text-[#FF26B9]">
                Innovation and Creativity:
              </span>{" "}
              <span className="text-sm">
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </span>
            </li>

            <li className=" ham:text-center ham:leading-relaxed">
              <span className="font-bold text-[#FF26B9]">Functionality:</span>{" "}
              <span className="text-sm">
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </span>
            </li>

            <li className=" ham:text-center ham:leading-relaxed">
              <span className="font-bold text-[#FF26B9]">
                Impact and Relevance:
              </span>{" "}
              <span className="text-sm">
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </span>
            </li>

            <li className=" ham:text-center ham:leading-relaxed">
              <span className="font-bold text-[#FF26B9]">
                Technical Complexity:
              </span>{" "}
              <span className="text-sm">
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </span>
            </li>

            <li className=" ham:text-center ham:leading-relaxed">
              <span className="font-bold text-[#FF26B9]">
                Adherence to Hackathon Rules:
              </span>{" "}
              <span className="text-sm">
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </span>
            </li>
          </ul>

          <Link to="register" className="register mt-7 ham:self-center">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
