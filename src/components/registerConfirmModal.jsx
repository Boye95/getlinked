import { useNavigate } from "react-router-dom";

import mansuccess from "../assets/webps/mansuccess.webp";

import purplestar from "../assets/svgs/purplestar.svg";

export default function RegisterConfirmModal({ popMessage, popSubMessage }) {
  const navigate = useNavigate();

  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-[#150E28]/90 font-montserrat text-white ">
      <div className="relative flex w-[25rem] flex-col items-center gap-5 rounded-md border border-[#D434FE] px-7 py-10 text-center xs:w-[15rem] xs:p-4">
        <img
          src={purplestar}
          alt=""
          className="absolute -right-3 -top-5 w-4  "
        />
        <img
          src={purplestar}
          alt=""
          className="absolute bottom-2 right-8 w-3  "
        />
        <img src={mansuccess} alt="" className="w-[20rem] " />
        <h3 className="font-bold xs:text-sm">
          {popMessage}
        </h3>
        <p className="text-xs font-semibold">
          {popSubMessage}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="register w-full font-semibold"
        >
          Back
        </button>
      </div>
    </div>
  );
}
